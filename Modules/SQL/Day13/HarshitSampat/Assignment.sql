/*Create a scaler Function to compute PF which will accept parameter basicsalary and compute PF. PF is 12% of the basic salary.*/
CREATE FUNCTION PFAmount(@Basicsalary FLOAT)
RETURNS FLOAT
AS
BEGIN
	DECLARE @totalPF FLOAT
	SET @totalPF = @Basicsalary*0.12
	RETURN @totalPF
END

PRINT dbo.PFAmount(25000.00)
	
/*Create a scaler Function which will compute PT which will accept MontlyEarning. Criteria as below.*/
CREATE FUNCTION PTamount(@salary FLOAT)
RETURNS FLOAT
AS
BEGIN
	DECLARE @PROFESSIONAL_TEX FLOAT
	SET @PROFESSIONAL_TEX=
	CASE
		WHEN (@salary<5999.00) THEN 0
		WHEN (@salary>6000) AND (@salary<8999) THEN 80
		WHEN (@salary>9000) AND (@salary<11999) THEN 150
		WHEN (@salary>12000) THEN 200
		END
	RETURN @PROFESSIONAL_TEX
END
PRINT 'Professional Payable tax is '+ cast(dbo.PTamount(45000)as nvarchar(15))

-----------------------------------------------

/*Create a table valued function which will accept JobTitle which will return new table set based on jobtitle*/
USE AdventureWorks2016

CREATE FUNCTION GetTableByJobTitle(@JobTitle NVARCHAR(50))
RETURNS TABLE

RETURN(SELECT * FROM HumanResources.Employee WHERE JOBTITLE =@JobTitle)

--FUNCTION CALL
SELECT * FROM dbo.GetTableByJobTitle('Research and Development Manager')

SELECT*FROM HumanResources.Employee	