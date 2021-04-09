USE AdventureWorks2012;

DECLARE @Rate INT
SELECT @Rate = MAX(Rate)
FROM HumanResources.EmployeePayHistory
PRINT @Rate
GO

--- IF-ELSE STATEMENTS

DECLARE @Rate MONEY
SELECT @Rate = Rate
FROM HumanResources.EmployeePayHistory
WHERE BusinessEntityID = 23
IF @Rate> 15
PRINT 'Review of rate is Required'
ELSE
BEGIN
PRINT 'Review of rate is not Required'
PRINT 'Rate ='
PRINT @Rate
END
GO

IF 
	(SELECT COUNT(*) FROM Production.Product 
	WHERE Name LIKE 'Touring-3000%') > 5
	PRINT 'There are more than 5 touring bikes'
ELSE
	PRINT 'There are 5 or lesser touring bikes'
GO

--- CASE StateMents

SELECT BusinessEntityID, 'MaritalStatus '=
CASE MaritalStatus
	WHEN 'M' THEN 'Married'
	WHEN 'S' THEN 'Single'
	ELSE 'Not Specified'
END
FROM HumanResources.Employee
GO


-- WHILE Statements

WHILE (SELECT AVG(ListPrice) FROM Production.Product) <$300
BEGIN 
	UPDATE Production.Product
		SET ListPrice = ListPrice * 2
	SELECT MAX(ListPrice) FROM Production.Product
	IF (SELECT MAX(ListPrice) FROM Production.Product) > $500
		BREAK
	ELSE
		CONTINUE
END
PRINT 'Too much for the market to bear'



CREATE PROCEDURE GetCustInfo (@CustomerID INT) AS
   SELECT * FROM Customers WHERE CustID = @CustomerID  
   SELECT OrderID FROM Orders  
      WHERE CustID = @CustomerID AND Status = 'OPEN'





DECLARE @EmployeeID as NVARCHAR(256)
DECLARE @Title as NVARCHAR(50)

