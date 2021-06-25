SELECT * FROM Employees
USE SQLDay6
/*  1)  Create a scaler Function to compute PF which will accept parameter basicsalary and compute PF. PF is 12% of the basic salary.*/

ALTER FUNCTION CalculatePF(@BasicSalary FLOAT)
RETURNS FLOAT
AS
BEGIN
DECLARE @PF FLOAT
SET @PF=@BasicSalary*0.12
RETURN(@PF)
END

DECLARE @Return FLOAT
SET @Return = dbo.CalculatePF (24000)
PRINT 'PF AMOUNT IS : ' +CAST(@Return AS VARCHAR(10)) 

/*  2)  Create a scaler Function which will compute PT which will accept MontlyEarning. Criteria as below.*/

ALTER FUNCTION CalculateTAX(@MonthlySalary FLOAT)
RETURNS FLOAT
AS
BEGIN
DECLARE @TAX FLOAT
IF(@MonthlySalary<6000)
BEGIN
SET @TAX=0
END

ELSE IF(@MonthlySalary  BETWEEN 6000 AND 8999)
BEGIN
SET @TAX=80
END

ELSE IF(@MonthlySalary  BETWEEN 9000 AND 11999)
BEGIN
SET @TAX=150
END

ELSE IF (@MonthlySalary>12000)
BEGIN
SET @TAX=200
END



RETURN(@TAX)
END

DECLARE @ReturnTAX FLOAT
SET @ReturnTAX = dbo.CalculateTAX (15000)
PRINT  'YOUR TAX AMOUNT IS : ' +CAST(@ReturnTAX AS VARCHAR(10)) 