
	--------------------AdventureWorks2012----------------

	------batch------
	SELECT * FROM HumanResources.Department
	SELECT * FROM HumanResources.Employee
	GO

	----variable------
	DECLARE @Rate int
	SELECT @Rate = max(Rate) FROM HumanResources.EmployeePayHistory
	PRINT @Rate
	GO

	SELECT * FROM HumanResources.EmployeePayHistory 

	-------IF ELSE--------
 /**/ 	DECLARE @Rate money
		SELECT @Rate = Rate FROM HumanResources.EmployeePayHistory
		WHERE BusinessEntityID = 23
		IF @Rate < 15
		PRINT 'REVIEW OF THE RATE IS REQUIRED'
		ELSE
		BEGIN
		PRINT 'REVIEW OF THE RATE IS NOT REQUIRED'
		PRINT 'Rate = '
		PRINT @Rate
		END
		GO

 /**/ 	DECLARE @Rate money
		SELECT @Rate = Rate FROM HumanResources.EmployeePayHistory
		WHERE BusinessEntityID = 1
		IF @Rate < 15
		PRINT 'REVIEW OF THE RATE IS REQUIRED'
		ELSE
		BEGIN
		PRINT 'REVIEW OF THE RATE IS NOT REQUIRED'
		PRINT 'Rate = '
		PRINT @Rate
		END
		GO

		SELECT * FROM HumanResources.Employee

	---------CASE STATEMENT---------
		SELECT BusinessEntityID,
		'Marital Status' = CASE MaritalStatus 
							WHEN 'M' THEN 'MARRIED'
							WHEN 'S' THEN 'SINGLE'
							ELSE 'NOT SPECIFIED'
							END
		FROM HumanResources.Employee
		GO

	

	-------WHILE------
	WHILE (SELECT AVG(ListPrice) FROM Production.Product) < 
	$300
	BEGIN 
		UPDATE Production.Product
			SET ListPrice = ListPrice * 2
		SELECT MAX(ListPrice) FROM Production.Product
		IF (SELECT AVG(ListPrice) FROM Production.Product) > 
	$500
			BREAK
		ELSE
			CONTINUE
	END
	PRINT 'TOO MUCH FOR THE MARKET TO BEAR';
			
	
