Alter Procedure [dbo].[Employee]
@name Varchar(15)
as Begin
Select FirstName,LastName from Employees where FirstName = @name 
End
go	

[dbo].[Employee] 'Steven'
Select * from Employees		

Alter Proc	 GetEmpoyeeByDepartment
@Depid Int
WITH ENCRYPTION
As
Begin
Select EmployeeID,FirstName,LastName,HireDate From Employees where DepartmentID = @Depid
 End

GetEmpoyeeByDepartment 80

sp_helptext GetEmpoyeeByDepartment 

Select * from Employees where DepartmentID =80


---------------------Create Procedure with output parametrs-----------------
SELECT * FROM EMPLOYEE
CREATE PROCEDURE GetEmployeeByDepartment 
@Depid INT,
@employeeCount INT OUTPUT
AS
BEGIN
	SELECT @employeeCount =  COUNT(DepartmentID) FROM Employees WHERE DepartmentID = @Depid
END

DECLARE @EmployeeTotal INT
EXECUTE GetEmployeeByDepartment	90,@EmployeeTotal output
Print @EmployeeTotal


DROP TABLE IF EXISTS dbo.PerfCounter

CREATE TABLE dbo.PrefCountr(
	RecordedDateTIme      datetime2(0) NOT NULL,
	RecordedDateTimeLocal datetime2(0) NOT NULL,
	CpuPctProcessor        smallint NOT NULL,
	MemAvailGbytes         smallint NOT NULL	
	)
	--Insert Sample row
	INSERT INTO [dbo].[PrefCountr]

					([recordedDateTime]
					,[recordedDateTimeLocal]
					,[CpuPctProcessor]
					,[MemAvailGbytes])
					Values	
					('2018-03-19 15:15:40'
					,'2018-03-19 11:15:40'
					,12
					,28)
Select * from dbo.PrefCountr
				
		Select Top(1) [recordedDateTime] As 'datetime'
					,[recordedDateTimeLocal] 'datetimelocal'
					,[CpuPctProcessor]
					,[MemAvailGbytes]
					FROM[DBO].PrefCountr
					ORDER BY RecordedDateTimeLocal Desc
					for json path
------------------------------------------------------------------------------------------

DROP PROCEDURE IF EXISTS dbo.RetrievePerfCounterData
GO
 
Alter PROCEDURE dbo.RetrievePerfCounterData @jsonOutput NVARCHAR(MAX) OUTPUT
 
AS
 
BEGIN
 
SET @jsonOutput = (SELECT TOP (1)
        [RecordedDateTime] AS 'dateTime'
       ,[RecordedDateTimeLocal] AS 'dateTimeLocal'
       ,[CpuPctProcessor]
       ,[MemAvailGbytes]
    FROM [dbo].[PrefCountr]
    ORDER BY RecordedDateTimeLocal DESC
    FOR JSON PATH, WITHOUT_ARRAY_WRAPPER)
 
END

Declare @json as nvarchar(max)
Exec dbo.RetrievePerfCounterData @jsonOutput = @json Output
Select @json	
	----------------------------------------------