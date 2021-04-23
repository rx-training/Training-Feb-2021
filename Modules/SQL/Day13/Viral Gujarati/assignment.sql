--Create a scaler Function to compute PF which will accept parameter basicsalary and compute PF. PF is 12% of the basic salary.

CREATE FUNCTION PFCalculator(@baseSalary MONEY)
RETURNS MONEY
AS
BEGIN
	DECLARE @PF MONEY
	SET @PF = @baseSalary * 0.12
	RETURN @PF
END

PRINT  dbo.PFCalculator(12000.00)

/*Create a scaler Function which will compute PT which will accept MontlyEarning. Criteria as below.*/

CREATE FUNCTION CALCULATE(@MonthlyEarning MONEY)
RETURNS MONEY
AS
BEGIN 
	DECLARE @PT MONEY
	SET @PT =
	CASE
		WHEN (@MonthlyEarning < 5999) THEN 0
		WHEN ((@MonthlyEarning >6000) AND (@MonthlyEarning < 8999)) THEN 80
		WHEN ((@MonthlyEarning > 9000) AND (@MonthlyEarning < 11999)) THEN 150
		WHEN (@MonthlyEarning > 12000) THEN 200
	END
	RETURN @PT
END

PRINT  dbo.CALCULATE(7500)

--Create a table valued function which will accept JobTitle which will return new table set based on jobtitle 

use AdventureWorks2012

CREATE FUNCTION TABLEJOB(@JobTitle NVARCHAR(20))
RETURNS TABLE
AS
RETURN(SELECT * FROM HumanResources.Employee WHERE JobTitle = @JobTitle)

SELECT * FROM HumanResources.Employee
SELECT * FROM DBO.TABLEJOB('Tool Designer')
