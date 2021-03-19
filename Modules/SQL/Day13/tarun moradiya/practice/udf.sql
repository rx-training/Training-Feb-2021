--UDF

---SCALER UDF

--CREATE

CREATE FUNCTION HumanResources.MonthlySal (@PayRate float)
RETURNS float
AS
BEGIN
	RETURN(@PayRate * 8 * 3)
END
GO

--CALL

DECLARE @PayRate float
SET @PayRate = HumanResources.MonthlySal (12.25)
PRINT(@PayRate)
GO

---TABLE-VALUED FUNCTION

--CREATE

CREATE FUNCTION fx_Department_Game
( @GrName nvarchar(20) )
RETURNS table
AS
RETURN(
	SELECT * 
	FROM HumanResources.Department 
	WHERE GroupName = @GrName
)
GO

--CALL

SELECT * FROM fx_Department_Game ('Manufacturing')
GO

--DROP

DROP FUNCTION fx_Department_Game
GO

-- ALTER


-- Scalar-Valued Function  

USE [AdventureWorks2012]  
GO  
ALTER FUNCTION [dbo].[ufnGetAccountingEndDate]()  
RETURNS [datetime]   
AS   
BEGIN  
    RETURN DATEADD(millisecond, -2, CONVERT(datetime, '20040701', 112));  
END;
GO

