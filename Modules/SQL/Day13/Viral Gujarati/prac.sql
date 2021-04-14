-- creating scalar function 

CREATE FUNCTION HumanResources.MonthlySalary(
@PayRat float
)
RETURNS float
AS
BEGIN

DECLARE @PayRat float
SET @PayRat = HumanResources.Salary(12.25)
        DECLARE @json NVARCHAR(MAX);
		        SELECT modifiedJson = @json;
PRINT @PatRat
RETURN(@PayRat * 8*30	)
END



SELECT dbo.HumanResources.MonthlySalary() AS Salary, 
dbo.HumanResources.MonthlySalary(@PayRate) AS minus, 






DECLARE @PayRate float
SET @PayRate =	HumanResources.Salary(12.25)
        DECLARE @json NVARCHAR(MAX);
		        SELECT modifiedJson = @json;
PRINT @PatRate
use AdventureWorks2012
select * from HumanResources.EmployeePayHistory


CREATE FUNCTION [database_name.]function_name (parameters)
RETURNS data_type AS
BEGIN
    SQL statements
    RETURN value
END;
    
ALTER FUNCTION [database_name.]function_name (parameters)
RETURNS data_type AS
BEGIN
    SQL statements
    RETURN value
END;
    
DROP FUNCTION [database_name.]function_name;


---------------------------------
CREATE FUNCTION east_or_west (
	@long DECIMAL(9,6)
)
RETURNS CHAR(4) AS
BEGIN
	DECLARE @return_value CHAR(4);
	SET @return_value = 'same';
    IF (@long > 0.00) SET @return_value = 'east';
    IF (@long < 0.00) SET @return_value = 'west';
 
    RETURN @return_value
END;

SELECT dbo.east_or_west(0) AS argument, 
dbo.east_or_west(-3) AS argument_minus, 
dbo.east_or_west(20) AS argument_plus;



CREATE FUNCTION east_from_long (
	@long DECIMAL(9,6)
)
RETURNS TABLE AS
RETURN
	SELECT *
	FROM 
	WHERE city.long > @long;