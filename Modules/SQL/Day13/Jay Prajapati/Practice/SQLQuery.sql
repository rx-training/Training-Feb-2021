--builtin function 
USE TutorialDB
SELECT SQUARE(3);

--- SCALER Function 

CREATE FUNCTION CalculateAge(@DOB DATE)
RETURNS INT
AS
BEGIN
	DECLARE @Age INT
	SET @Age = DATEDIFF(YEAR, @DOB, GETDATE()) -
		CASE 
			WHEN (MONTH(@DOB) > MONTH(GETDATE())) OR
				(MONTH(@DOB) = MONTH(GETDATE()) AND DAY(@DOB) > DAY(GETDATE()))
			THEN 1
			ELSE 0
			END
	RETURN @Age
END

SELECT dbo.CalculateAge('12/1/1998')

DROP FUNCTION CalculateAge

SP_HELPTEXT CalculateAge

-- Inline table valued function 
USE AdventureWorks2012
SELECT * FROM HumanResources.Employee

ALTER FUNCTION Emp(@Gender NVARCHAR(20))
RETURNS TABLE
AS
RETURN (SELECT BusinessEntityID,
				JobTitle,
				MaritalStatus,
				dbo.CalculateAge(BirthDate) AS Age
				FROM HumanResources.Employee 
				WHERE dbo.CalculateAge(BirthDate) <=30)


SELECT * FROM Emp('F')


-- Multi-Statements table valued function

ALTER FUNCTION fn_Emp(@gender NVARCHAR(10))
RETURNS @table TABLE (BusinessEntityID INT,Gender NVARCHAR(5),JobTitle NVARCHAR(50),DOB DATE)
AS 
BEGIN
	INSERT INTO @table
	SELECT BusinessEntityID,Gender,JobTitle,BirthDate FROM HumanResources.Employee
	WHERE Gender = @gender

	RETURN
END

DROP FUNCTION fn_Emp

SELECT * FROM fn_Emp('M')



-- Scalar Function

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


----- Table valued Function
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



--- 
IF OBJECT_ID (N'dbo.ufn_FindReports', N'TF') IS NOT NULL  
    DROP FUNCTION dbo.ufn_FindReports;  
GO  
CREATE FUNCTION dbo.ufn_FindReports (@InEmpID INTEGER)  
RETURNS @retFindReports TABLE   
(  
    EmployeeID int primary key NOT NULL,  
    FirstName nvarchar(255) NOT NULL,  
    LastName nvarchar(255) NOT NULL,  
    JobTitle nvarchar(50) NOT NULL,  
    RecursionLevel int NOT NULL  
)  
--Returns a result set that lists all the employees who report to the   
--specific employee directly or indirectly.*/  
AS  
BEGIN  
WITH EMP_cte(EmployeeID, OrganizationNode, FirstName, LastName, JobTitle, RecursionLevel) -- CTE name and columns  
    AS (  
        SELECT e.BusinessEntityID, e.OrganizationNode, p.FirstName, p.LastName, e.JobTitle, 0 -- Get the initial list of Employees for Manager n  
        FROM HumanResources.Employee e   
INNER JOIN Person.Person p   
ON p.BusinessEntityID = e.BusinessEntityID  
        WHERE e.BusinessEntityID = @InEmpID  
        UNION ALL  
        SELECT e.BusinessEntityID, e.OrganizationNode, p.FirstName, p.LastName, e.JobTitle, RecursionLevel + 1 -- Join recursive member to anchor  
        FROM HumanResources.Employee e   
            INNER JOIN EMP_cte  
            ON e.OrganizationNode.GetAncestor(1) = EMP_cte.OrganizationNode  
INNER JOIN Person.Person p   
ON p.BusinessEntityID = e.BusinessEntityID  
        )  
-- copy the required columns to the result of the function   
   INSERT @retFindReports  
   SELECT EmployeeID, FirstName, LastName, JobTitle, RecursionLevel  
   FROM EMP_cte   
   RETURN  
END;  
GO  


SELECT EmployeeID, FirstName, LastName, JobTitle, RecursionLevel  
FROM dbo.ufn_FindReports(1);  