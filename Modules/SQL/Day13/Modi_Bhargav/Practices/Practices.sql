
USE AdventureWorks2012
/***** Scalar function *****/
CREATE FUNCTION HumanResources.Monthly (@PayRate float)
RETURNS float
AS
BEGIN
    RETURN (@PayRate * 8 * 30)
END

DECLARE @PayRate float
SET @PayRate =  HumanResources.Monthly(12.25)
PRINT @PayRate

/***** Table Valued Function *****/
CREATE FUNCTION Fx_Department_Game(
  @GrName nvarchar(20)
)
RETURNS table
AS
RETURN (SELECT * FROM HumanResources.Department WHERE GroupName = @GrName)
GO
SELECT * FROM Fx_Department_Game('Manufacturing')

/***** ex-3 *****/
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
GO

SELECT * FROM Sales.ufn_SalesByStore (602);