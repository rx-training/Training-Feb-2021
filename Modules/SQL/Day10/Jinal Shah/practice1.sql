	----------------sqldb_day6-----------------------

SET NOCOUNT ON
DECLARE @Id int, @name varchar(50), @salary int
DECLARE cur_emp CURSOR
STATIC FOR
SELECT EmployeeID,FirstName,Salary from Employees
OPEN cur_emp
IF @@CURSOR_ROWS > 0
BEGIN
FETCH NEXT FROM cur_emp INTO @Id,@name,@salary
WHILE @@FETCH_STATUS = 0
BEGIN 
PRINT 'ID : '+ CONVERT(VARCHAR(20),@Id)+ ', Name : '+ @name + ', Salary : '+ convert(varchar(20),@salary)
FETCH NEXT FROM cur_emp INTO @Id,@name,@salary
END
END
CLOSE cur_emp
DEALLOCATE cur_emp
SET NOCOUNT OFF


--------------AdventureWorks2012--------------------
-------- https://medium.com/analytics-vidhya/fetch-cursor-in-sql-server-2684d2c7d36 ----------
-------- https://www.mssqltips.com/sqlservertip/1599/cursor-in-sql-server/ ----------

use AdventureWorks2012
go
DECLARE Location_Cursor CURSOR FOR
select LocationID,Name,CostRate 
from Production.Location
OPEN Location_Cursor;
FETCH NEXT FROM Location_Cursor;
WHILE @@FETCH_STATUS = 0
 BEGIN
 FETCH NEXT FROM Location_Cursor;
 END;
CLOSE Location_Cursor;
DEALLOCATE Location_Cursor;
GO


-----------------MASTER-------------------


use master
declare @database_name nvarchar(100);
declare @lgname  nvarchar(100);
declare crs cursor for
select original_login_name, DB_NAME(database_id) as db_nm
from sys.dm_exec_sessions where is_user_process=1;
open crs
fetch next from crs into @lgname, @database_name
while @@FETCH_STATUS=0
begin
print 'Login:'+cast(@lgname as nvarchar(100))+' Database Name:'+@database_name
fetch next from crs into @lgname, @database_name
end
close crs
deallocate crs;