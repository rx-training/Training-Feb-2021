USE Employees
GO

/*Day 12*/

/*Create a scaler Function to compute PF which will accept parameter basicsalary and compute PF. PF is 12% of the basic salary.*/

	CREATE FUNCTION dbo.Monthlysal(@Salary INT)
	RETURNS INT
	AS
	BEGIN
	RETURN (@Salary * 0.12)
	END

/*	DECLARE @Salary INT
	SET @Salary = dbo.Monthlysal(1000)
	PRINT @Salary*/


	SELECT Salary,dbo.Monthlysal(Salary) AS 'PF' FROM Employees
	SELECT * from Employees



/*Create a scaler Function which will compute PT which will accept MontlyEarning. Criteria as below.*/

	CREATE FUNCTION dbo.MonthlyEarning(@Mearning INT)
	RETURNS varchar(40)
	AS
	BEGIN
	
		DECLARE @PT varchar(40)
		IF @Mearning <= 5999
			SET @PT = 'NIL'
		ELSE IF @Mearning >5999 AND @Mearning <= 8999
			SET @PT = '80'
		ELSE IF @Mearning >8999 AND @Mearning <=11999
			SET @PT = '150'
		ELSE IF @Mearning >=12000
			SET @PT = '200'
		RETURN @PT
	END

	SELECT Salary,dbo.MonthlyEarning(Salary) AS 'TAX' FROM Employees1 WHERE EmployeeID < 110


/*Create a table valued function which will accept JobTitle which will return new table set based on jobtitle*/

	USE AdventureWorks2012
	GO

	SELECT * FROM HumanResources.Employee
	GO

	CREATE FUNCTION fx_Jobtitle(@JobName nvarchar(40))
	RETURNS TABLE
	AS
	RETURN
	(
		SELECT * FROM HumanResources.Employee WHERE JobTitle = @JobName
	)
GO

	SELECT * FROM fx_Jobtitle('Senior Tool Designer')	
	GO

	
