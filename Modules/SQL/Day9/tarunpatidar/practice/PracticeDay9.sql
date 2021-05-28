------------------------------- BATCHS -------------------------------

USE AdventureWorks2012

----------- DECLARE VARIABLE -----------------

DECLARE @Rate int
SELECT @Rate = max(@Rate)
FROM HumanResources.EmployeePayHistory
GO

------------------- IF-ELSE ----------------------

DECLARE @Rate money
SELECT @Rate = Rate 
From HumanResources.EmployeePayHistory
WHERE BusinessEntityID = 23
If @Rate < 15
PRINT 'Review of the rate is required'
ELSE
BEGIN
PRINT 'Review of the rate is not required'
PRINT 'Rate ='
PRINT @Rate
END
GO

----------------------------- CASE STATEMENT --------------------------

SELECT BusinessEntityID, 'Marital Status' =
CASE MaritalStatus
WHEN 'M' THEN 'Married'
WHEN 'S' THEN 'Single'
ELSE 'Not specified'

END
FROM HumanResources.Employee
GO

----------------------------- WHILE STATEMENT --------------------------

WHILE (SELECT AVG(ListPrice) FROM Production.product) < $300
BEGIN
UPDATE Production.Product
SET ListPrice = ListPrice * 2
SELECT MAX(ListPrice) FROM Production.Product
IF (SELECT MAX(ListPrice) FROM Production.Product) > $500
BREAK
ELSE
CONTINUE
END
PRINT 'Too much for the market to bear';