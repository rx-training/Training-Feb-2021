SELECT FirstName AS "info.name", LastName AS "info.surname", Salary AS Salary
FROM Employees
FOR JSON PATH;


Select * from Employees


DECLARE @info NVARCHAR(100)='{"name":"John","skills":["C#","SQL"]}'

PRINT @info

SET @info=JSON_MODIFY(@info,'$.name','Mike')

PRINT @info

SET @info=JSON_MODIFY(@info,'$.surname','Smith')

PRINT @info

SET @info=JSON_MODIFY(@info,'$.name',NULL)

PRINT @info

SET @info=JSON_MODIFY(@info,'append $.skills','Azure')

PRINT @info
Go

