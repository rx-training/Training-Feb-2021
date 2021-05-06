---- 1. Create a scaler Function to compute PF which will accept parameter basicsalary and compute PF. PF is 12% of the basic salary. --------

CREATE FUNCTION PFCompute(@baseSalary MONEY)
RETURNS MONEY
AS
BEGIN
DECLARE @PF MONEY
SET @PF = @baseSalary * 0.12
RETURN @PF
END

PRINT  dbo.PFCompute(12000.00)


---- 2. Create a scaler Function which will compute PT which will accept MontlyEarning. Criteria as below. --------

CREATE FUNCTION PTCompute(@MonthlyEarning MONEY)
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

PRINT 'Profession Payable Tax is '+ CAST(dbo.PTCompute(25000) AS NVARCHAR(10))


---- 3. Create a table valued function which will accept JobTitle which will return new table set based on jobtitle. --------
---- SELECT BusinessEntityID,JobTitle FROM HumanResources.Employee WHERE JobTitle = 'SENIOR TOOL DESIGNER' --------

USE AdventureWorks2012

SELECT * FROM HumanResources.Employee

CREATE FUNCTION Jobtitle (@jt nvarchar(20))
RETURNS TABLE 
AS
RETURN (SELECT * FROM HumanResources.Employee WHERE JobTitle = @jt)

GO 

SELECT * FROM Jobtitle('Senior Tool Designer')