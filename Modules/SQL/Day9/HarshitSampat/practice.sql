---------------Batch-----------------

DECLARE @RATE INT
SELECT @RATE =RATE
FROM HumanResources.EmployeePayHistory
WHERE BusinessEntityID =23
IF @RATE < 15
print 'REVIEW THE RATE IS REQUIRED'
ELSE
BEGIN
PRINT 'REVIEW OF THE RATE IS NOT REQUIRED'
PRINT 'RATE='
PRINT @RATE
END
GO		

SELECT BusinessEntityID,'MARITAL STATUS' =
Case MaritalStatus
	WHEN 'M' THEN 'MARRIED'
	WHEN 'S' THEN 'SINGLE'
	ELSE 'NOT SPECIFIED'
END
FROM HumanResources.Employee
GO

WHILE (SELECT AVG(ListPrice) FROM Production.Product)<$300
BEGIN
	UPDATE Production.Product
		SET ListPrice = ListPrice*2
	SELECT MAX(ListPrice)FROM Production.Product
	IF(SELECT MAX(ListPrice)FROM Production.Product)>$500
		BREAK
		ELSE
		CONTINUE
END
PRINT 'TOO MUCH FOR THE MARKET TO BEAR'