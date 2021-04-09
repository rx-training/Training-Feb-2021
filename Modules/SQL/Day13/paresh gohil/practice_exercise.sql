USE AdventureWorks2012
GO

/*-----------------------------------------------------------------------
-------------------------------------------------------------------------*/

IF OBJECT_ID (N'dbo.ufnGetInventoryStock', N'FN') IS NOT NULL  
    DROP FUNCTION ufnGetInventoryStock;  
GO  
CREATE FUNCTION dbo.ufnGetInventoryStock(@ProductID int)  
RETURNS int   
AS   
-- Returns the stock level for the product.  
BEGIN  
    DECLARE @ret int;  
    SELECT @ret = SUM(p.Quantity)   
    FROM Production.ProductInventory p   
    WHERE p.ProductID = @ProductID   
        AND p.LocationID = '6';  
     IF (@ret IS NULL)   
        SET @ret = 0;  
    RETURN @ret;  
END;


SELECT ProductModelID, Name, dbo.ufnGetInventoryStock(ProductID)AS CurrentSupply  
FROM Production.Product  
WHERE ProductModelID BETWEEN 75 and 80;

/*---------------------------------------------------------------------------------
---------------------------------------------------------------------------------*/

IF OBJECT_ID (N'Sales.ufn_SalesByStore', N'IF') IS NOT NULL  
    DROP FUNCTION Sales.ufn_SalesByStore;  
GO  
CREATE FUNCTION Sales.ufn_SalesByStore (@storeid int)  
RETURNS TABLE  
AS  
RETURN   
(  
    SELECT P.ProductID, P.Name, SUM(SD.LineTotal) AS 'Total'  
    FROM Production.Product AS P   
    JOIN Sales.SalesOrderDetail AS SD ON SD.ProductID = P.ProductID  
    JOIN Sales.SalesOrderHeader AS SH ON SH.SalesOrderID = SD.SalesOrderID  
    JOIN Sales.Customer AS C ON SH.CustomerID = C.CustomerID  
    WHERE C.StoreID = @storeid  
    GROUP BY P.ProductID, P.Name  
);


SELECT * FROM Sales.ufn_SalesByStore (602); 

/*------------------------------------------------------------------------------------
----------------------------------------------------------------------------------------*/

ALTER FUNCTION [dbo].[ufnGetContactInformation](@PersonID int)  
RETURNS @retContactInformation TABLE   
(  
    -- Columns returned by the function  
    [PersonID] int NOT NULL,   
    [FirstName] [nvarchar](50) NULL,   
    [LastName] [nvarchar](50) NULL,   
    [JobTitle] [nvarchar](50) NULL,  
    [BusinessEntityType] [nvarchar](50) NULL  
)  
AS   
-- Returns the first name, last name, job title and business entity type for the specified contact.  
-- Since a contact can serve multiple roles, more than one row may be returned.  
BEGIN  
IF @PersonID IS NOT NULL   
BEGIN  
     IF EXISTS(SELECT * FROM [HumanResources].[Employee] e   
     WHERE e.[BusinessEntityID] = @PersonID)   
     INSERT INTO @retContactInformation  
          SELECT @PersonID, p.FirstName, p.LastName, e.[JobTitle], 'Employee'  
          FROM [HumanResources].[Employee] AS e  
          INNER JOIN [Person].[Person] p ON p.[BusinessEntityID] = e.[BusinessEntityID]  
          WHERE e.[BusinessEntityID] = @PersonID;  

     IF EXISTS(SELECT * FROM [Purchasing].[Vendor] AS v  
     INNER JOIN [Person].[BusinessEntityContact] bec ON bec.[BusinessEntityID] = v.[BusinessEntityID]  
     WHERE bec.[PersonID] = @PersonID)  
     INSERT INTO @retContactInformation  
          SELECT @PersonID, p.FirstName, p.LastName, ct.[Name], 'Vendor Contact'   
          FROM [Purchasing].[Vendor] AS v  
          INNER JOIN [Person].[BusinessEntityContact] bec ON bec.[BusinessEntityID] = v.[BusinessEntityID]  
          INNER JOIN [Person].ContactType ct ON ct.[ContactTypeID] = bec.[ContactTypeID]  
          INNER JOIN [Person].[Person] p ON p.[BusinessEntityID] = bec.[PersonID]  
          WHERE bec.[PersonID] = @PersonID;  

     IF EXISTS(SELECT * FROM [Sales].[Store] AS s  
     INNER JOIN [Person].[BusinessEntityContact] bec ON bec.[BusinessEntityID] = s.[BusinessEntityID]  
     WHERE bec.[PersonID] = @PersonID)  
     INSERT INTO @retContactInformation  
          SELECT @PersonID, p.FirstName, p.LastName, ct.[Name], 'Store Contact'   
          FROM [Sales].[Store] AS s  
          INNER JOIN [Person].[BusinessEntityContact] bec ON bec.[BusinessEntityID] = s.[BusinessEntityID]  
          INNER JOIN [Person].ContactType ct ON ct.[ContactTypeID] = bec.[ContactTypeID]  
          INNER JOIN [Person].[Person] p ON p.[BusinessEntityID] = bec.[PersonID]  
          WHERE bec.[PersonID] = @PersonID;  

     IF EXISTS(SELECT * FROM [Person].[Person] AS p  
     INNER JOIN [Sales].[Customer] AS c ON c.[PersonID] = p.[BusinessEntityID]  
     WHERE p.[BusinessEntityID] = @PersonID AND c.[StoreID] IS NULL)   
     INSERT INTO @retContactInformation  
          SELECT @PersonID, p.FirstName, p.LastName, NULL, 'Consumer'   
          FROM [Person].[Person] AS p  
          INNER JOIN [Sales].[Customer] AS c ON c.[PersonID] = p.[BusinessEntityID]  
          WHERE p.[BusinessEntityID] = @PersonID AND c.[StoreID] IS NULL;   
     END  
RETURN;  
END;


/*------------------------------------------------------------------------------------
-------------------------------------------------------------------------------------*/

CREATE FUNCTION HumanResources.Monthlysal(@PayRate float)
RETURNS float
AS
BEGIN 
RETURN (@PayRate * 8 * 30)
END

DECLARE @PayRate float
SET @PayRate = HumanResources.Monthlysal(12.25)
PRINT @PayRate

/*------------------------------------------------------------------------------------
------------------------------------------------------------------------------------*/

CREATE FUNCTION fx_Department_Gname(@GrName nvarchar(20))
RETURNS TABLE
AS
RETURN
(
	SELECT * FROM HumanResources.Department WHERE GroupName = @GrName
)
GO

SELECT * FROM fx_Department_Gname('Manufacturing')