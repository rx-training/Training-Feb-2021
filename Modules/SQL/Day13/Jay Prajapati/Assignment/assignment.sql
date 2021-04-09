USE SQLDay2;

/*Create a scaler Function to compute PF which will
accept parameter basicsalary and compute PF. PF is 
12% of the basic salary.*/

CREATE FUNCTION PFCalculator(@baseSalary MONEY)
RETURNS MONEY
AS
BEGIN
	DECLARE @PF MONEY
	SET @PF = @baseSalary * 0.12
	RETURN @PF
END

PRINT  dbo.PFCalculator(12000.00)

/*Create a scaler Function which will compute PT which
will accept MontlyEarning. Criteria as below.*/

CREATE FUNCTION PTCalculator(@MonthlyEarning MONEY)
RETURNS MONEY
AS
BEGIN 
	DECLARE @PT MONEY
	SET @PT =
	CASE
		WHEN (@MonthlyEarning < 5999.00) THEN 0
		WHEN ((@MonthlyEarning >6000.00) AND (@MonthlyEarning < 8999.00)) THEN 80
		WHEN ((@MonthlyEarning > 9000.00) AND (@MonthlyEarning < 11999.00)) THEN 150
		WHEN (@MonthlyEarning > 12000.00) THEN 200
	END
	RETURN @PT
END

PRINT 'Profession Payable Tax is '+ CAST(dbo.PTCalculator(8000) AS NVARCHAR(10))

/*Create a table valued function which will accept JobTitle which will
return new table set based on jobtitle*/
USE AdventureWorks2012
-- Function Definition

CREATE FUNCTION GetTableByJobTitle(@JobTitle NVARCHAR(50))
RETURNS TABLE
AS
	RETURN (SELECT * 
			FROM HumanResources.Employee
			WHERE JobTitle = @JobTitle)



-- Function call
SELECT * FROM dbo.GetTableByJobTitle('Design Engineer')