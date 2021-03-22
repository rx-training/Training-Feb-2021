----------SCALAR FUNCTION-------------

	CREATE FUNCTION HumanResources.MonthlySal (@PayRate float)
	RETURNS FLOAT
	AS
	BEGIN
	RETURN (@PayRate * 8 * 30)
	END

	DECLARE @PayRate float 
	SET @PayRate = 
	HumanResources.MonthlySal (12.25)
	PRINT @PayRate

----------TABLE-VALUED FUNCTION-----------

CREATE FUNCTION fx_Department_Gname (@GrName nvarchar(20))
RETURNS TABLE
AS
RETURN(
		SELECT * FROM HumanResources.Department WHERE  GroupName = @GrName
)
go

SELECT * FROM fx_Department_Gname('MANUFACTURING')


-----------------------------

	CREATE FUNCTION HumanResources.fullname (@firstname varchar(20),@lastname varchar(20)) 
	RETURNS varchar(20)
	AS
	BEGIN
	RETURN (@firstname + ' ' + @lastname )
	END

	DECLARE @fullname varchar(20) 
	SET @fullname = 
	HumanResources.fullname ('shah','jinal')
	PRINT @fullname