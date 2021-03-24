											---Practice Exercise(UDF)----

--Creating and Calling Scalar Function :

---Creating

CREATE FUNCTION HumanResources.MonthlySal (@PayRate float)
RETURNS FLOAT
AS
BEGIN
RETURN (@PayRate * 8 * 30)
END
--CALLING

DECLARE @PayRate float 
SET @PayRate = 
HumanResources.MonthlySal(12.25)
PRINT @PayRate


------using  table valued function 

CREATE FUNCTION fx_Department_GName
(@GrName nvarchar(20) )
RETURNS table
AS 
RETURN 
(
SELECT * FROM HumanResources.Department WHERE GroupName = @GrName
)
go
--calling
SELECT * FROM fx_Department_GName('Manufacturing');

select * from HumanResources.JobCandidate
select * from [HumanResources].[EmployeePayHistory]
select * from [HumanResources].[EmployeeDepartmentHistory]
select * from [HumanResources].[Employee]
select * from Production.TransactionHistory
select * from HumanResources.Department

---msdn example

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


---calling above udf

SELECT ProductModelID, Name, dbo.ufnGetInventoryStock(ProductID)AS CurrentSupply  
FROM Production.Product  
WHERE ProductModelID BETWEEN 75 and 80;


------using table 
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



---delete udf

-- determines if function exists in database  
IF OBJECT_ID (N'Sales.fn_SalesByStore', N'IF') IS NOT NULL  
-- deletes function  
    DROP FUNCTION Sales.fn_SalesByStore;  
GO


---execute



-- Declare a variable to return the results of the function. 
DECLARE @ret nvarchar(15);   

-- Execute the function while passing a value to the @status parameter
EXEC @ret = dbo.ufnGetSalesOrderStatusText 
	@Status = 5; 

-- View the returned value.  The Execute and Select statements must be executed at the same time.  
SELECT N'Order Status: ' + @ret; 

