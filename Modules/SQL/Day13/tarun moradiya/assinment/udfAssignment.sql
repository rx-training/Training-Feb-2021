--Create a scaler Function to compute PF which will accept parameter basicsalary and compute PF. PF is 12% of the basic salary.

CREATE FUNCTION ComputePF (@basicSalary int)
RETURNS float
AS
BEGIN
	RETURN (@basicSalary * 12 / 100)
END
GO

DECLARE @pf float
SET @pf = dbo.ComputePF(20000)
PRINT @pf
GO

SELECT *, dbo.ComputePF(Salary) AS 'PF' FROM Employees 
GO


--Create a scaler Function which will compute PT which will accept MontlyEarning. Criteria as below.
/*Monthly Earnings	Profession Tax Payable
Below Rs. 5999	Nil
Rs. 6000 to Rs. 8999	Rs. 80/month
Rs. 9000 to Rs. 11999	Rs. 150/month
Rs 12000 and above	Rs. 200/month*/

CREATE FUNCTION ComputPT (@monthlyEarning int) 
RETURNS varchar(20)
AS
BEGIN
	DECLARE @pt varchar(20)
	IF @monthlyEarning <= 5999
		SET @pt = 'Nil'
	ELSE IF @monthlyEarning >= 6000 AND @monthlyEarning <= 8999
		SET @pt = 'Rs. 80/month'
	ELSE IF @monthlyEarning >= 9000 AND @monthlyEarning <= 11999
		SET @pt = 'Rs. 150/month'
	ELSE IF @monthlyEarning >= 12000
		SET @pt ='Rs. 200/month'

	RETURN (@pt)
END
GO

PRINT(dbo.ComputPT(7980))
GO

SELECT *, dbo.ComputPT(Salary) AS 'Professional_Text' FROM Employees 
GO

--Create a table valued function which will accept JobTitle which will return new table set based on jobtitle

USE AdventureWorks2012
GO

CREATE FUNCTION JobTitleTable (@jobTitle varchar(20))
RETURNS table
AS
	RETURN(
		SELECT * FROM HumanResources.Employee WHERE JobTitle = @jobTitle
	)
GO

SELECT * FROM JobTitleTable('Senior Tool Designer')
GO

  