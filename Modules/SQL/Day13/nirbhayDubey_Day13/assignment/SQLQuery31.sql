USE AssignmentDay36;
GO

SELECT * FROM Employees;
GO

--Create a scaler Function to compute PF which will accept parameter basicsalary and compute PF. PF is 12% of the basic salary.

CREATE FUNCTION ComputePF(@basicsal decimal(8,2))			--DECLARING SCALER FUNCTION
RETURNS decimal(6,2)
AS
BEGIN
DECLARE @pf decimal(6,2)
SET @pf = (@basicsal * 12)/100
RETURN @pf
END

SELECT 
	EmployeeID,
	FirstName,
	LastName,
	Email,
	JobId,
	Salary,
	dbo.ComputePF(Salary) AS 'PF'							--CALLING SCALER FUNCTION
FROM Employees;
GO

--Create a scaler Function which will compute PT which will accept MontlyEarning. Criteria as below.

CREATE FUNCTION ComputePT(@Salary decimal(8,2))				--DECLARING SCALER FUNCTION
RETURNS int
AS
BEGIN
DECLARE @pt int
	IF(@Salary<=5999)
		SET @pt=0
	ELSE IF(@Salary>=6000 AND @Salary<=8999)
		SET @pt=80
	ELSE IF(@Salary>=9000 AND @Salary<=11999)
		SET @pt=150
	ELSE
		SET @pt=200
RETURN @pt
END

SELECT 
	EmployeeID,
	FirstName,
	LastName,
	Email,
	JobId,
	Salary,
	dbo.ComputePT(Salary) AS 'Profession Tax Payable'		--CALLING SCALER FUNCTION
FROM Employees;
GO

--Create a table valued function which will accept JobTitle which will return new table set based on jobtitle

USE AdventureWorks2014;
GO

CREATE FUNCTION fnEmpBasedOnJobTitle(@Jobtitle nvarchar(50))
RETURNS TABLE
AS
RETURN (SELECT * FROM HumanResources.Employee WHERE JobTitle=@Jobtitle)


SELECT * FROM fnEmpBasedOnJobTitle('Senior Tool Designer');
GO