USE AdventureWorks2019

--BATCH

--VARIABLES

DECLARE @Rate int

SELECT @Rate = MAX(Rate)
FROM HumanResources.EmployeePayHistory

--PRINT

PRINT @Rate
GO

--IF ELSE

DECLARE @Rate money

SELECT @Rate = Rate 
FROM HumanResources.EmployeePayHistory
WHERE BusinessEntityID = 23

IF @Rate < 15
PRINT 'Review of The Rate is required'

ELSE
BEGIN
PRINT 'Review of The Rate is not required'
PRINT 'Rate = '
PRINT @Rate
END

GO

--CASE

SELECT BusinessEntityID, 'Maritial Status' = 
CASE MaritalStatus
	WHEN 'M' THEN 'Married'
	WHEN 'S' THEN 'Single'
	ELSE 'Not Specified'
END
FROM HumanResources.Employee

GO

--WHILE

WHILE (SELECT AVG(ListPrice) FROM Production.Product) < $300
BEGIN
	UPDATE Production.Product
		SET ListPrice = ListPrice * 2

	SELECT MAX(ListPrice) FROM Production.Product

	IF (SELECT MAX(ListPrice) FROM Production.Product) > $500
		BREAK
	ELSE 
		CONTINUE
END

PRINT 'Too much for the market bear'

GO