----------------------------- SCALER FUNCTION --------------------------------------

------------ CREATING --------------

CREATE FUNCTION HumanResources.MonthlySal (@PayRate1 float)
RETURNS FLOAT
AS
BEGIN
RETURN (@PayRate1 * 8 * 30)
END

---------------- CALLING -----------------

DECLARE @PayRate1 float 
SET @PayRate1 = HumanResources.MonthlySal (12.25)
PRINT @PayRate1

--------------------------------- TABLE VALUED FUNCTION --------------------------------

------------ CREATING --------------

CREATE FUNCTION fx_Department_Gname (@GrName nvarchar(20))
RETURNS TABLE
AS
RETURN(
		SELECT * FROM HumanResources.Department WHERE  GroupName = @GrName
)
GO

---------------- CALLING -----------------

SELECT * FROM fx_Department_Gname('MANUFACTURING')