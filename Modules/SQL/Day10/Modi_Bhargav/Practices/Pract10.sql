                             /*********   Practices *********/
SET NOCOUNT ON
DECLARE @Id int, @name varchar(50),@salary int
DECLARE Cursor_Emp CURSOR
STATIC FOR
SELECT EmployeeID,FirstName,Salary FROM Employees
OPEN Cursor_Emp
IF @@CURSOR_ROWS > 0
BEGIN
FETCH NEXT FROM Cursor_Emp INTO @Id,@name,@salary
WHILE @@FETCH_STATUS = 0
BEGIN
PRINT 'ID :'+ CONVERT(varchar(20),@Id) + ',Name :' + @name + ', Salary :' + CONVERT(varchar(20),@salary)
FETCH NEXT FROM Cursor_Emp INTO @Id,@name,@salary
END
END
CLOSE Cursor_Emp
DEALLOCATE Cursor_Emp
SET NOCOUNT OFF

/*****   Ex-2 *****/
USE AdventureWorks2012
SET NOCOUNT ON 
  
DECLARE @vendor_id INT, @vendor_name NVARCHAR(50),  
    @message VARCHAR(80), @product NVARCHAR(50)  
  
DECLARE vendor_cursor CURSOR FOR 
SELECT BusinessEntityID, Name FROM Purchasing.Vendor  
WHERE PreferredVendorStatus = 1  
ORDER BY BusinessEntityID
  
OPEN vendor_cursor  
IF @@CURSOR_ROWS > 0
BEGIN  
FETCH NEXT FROM vendor_cursor   
INTO @vendor_id, @vendor_name  
  
WHILE @@FETCH_STATUS = 0  
BEGIN  
    PRINT ' '  
    SELECT @message = '----- Products From Vendor: ' +   
        @vendor_name  
  
    PRINT @message  
  
    -- Declare an inner cursor based     
    -- on vendor_id from the outer cursor. 
	SELECT * FROM Purchasing.ProductVendor
    DECLARE product_cursor CURSOR FOR  
    SELECT v.Name  
    FROM Purchasing.ProductVendor pv, Production.Product v  
    WHERE pv.ProductID = v.ProductID AND  
    pv.ProductID = @vendor_id  -- Variable value from the outer cursor  
  
    OPEN product_cursor  
    FETCH NEXT FROM product_cursor INTO @product  
  
    IF @@FETCH_STATUS <> 0   
        PRINT '         <<None>>'       
  
    WHILE @@FETCH_STATUS = 0  
    BEGIN  
  
        SELECT @message = '         ' + @product  
        PRINT @message  
        FETCH NEXT FROM product_cursor INTO @product  
        END  
    END
    CLOSE product_cursor  
    DEALLOCATE product_cursor  
        -- Get the next vendor.  
FETCH NEXT FROM vendor_cursor   
INTO @vendor_id, @vendor_name  
END 
CLOSE vendor_cursor 
DEALLOCATE vendor_cursor
SET NOCOUNT OFF

/******* practices *********/
-- 1 - Declare Variables
-- * UPDATE WITH YOUR SPECIFIC CODE HERE *
DECLARE @name VARCHAR(50) -- database name 
DECLARE @path VARCHAR(256) -- path for backup files 
DECLARE @fileName VARCHAR(256) -- filename for backup 
DECLARE @fileDate VARCHAR(20) -- used for file name 

-- Initialize Variables
-- * UPDATE WITH YOUR SPECIFIC CODE HERE *
SET @path = 'C:\Backup\' 

SELECT @fileDate = CONVERT(VARCHAR(20),GETDATE(),112) 

-- 2 - Declare Cursor
DECLARE db_cursor CURSOR FOR 
-- Populate the cursor with your logic
-- * UPDATE WITH YOUR SPECIFIC CODE HERE *
SELECT name 
FROM MASTER.dbo.sysdatabases 
WHERE name NOT IN ('master','model','msdb','tempdb') 

-- Open the Cursor
OPEN db_cursor

-- 3 - Fetch the next record from the cursor
FETCH NEXT FROM db_cursor INTO @name  

-- Set the status for the cursor
WHILE @@FETCH_STATUS = 0  
 
BEGIN  
	-- 4 - Begin the custom business logic
	-- * UPDATE WITH YOUR SPECIFIC CODE HERE *
   	SET @fileName = @path + @name + '_' + @fileDate + '.BAK' 
  	BACKUP DATABASE @name TO DISK = @fileName 

	-- 5 - Fetch the next record from the cursor
 	FETCH NEXT FROM db_cursor INTO @name 
END 

-- 6 - Close the cursor
CLOSE db_cursor  

-- 7 - Deallocate the cursor
DEALLOCATE db_cursor 

/*****  Ex-3 ******/

DECLARE Location_Cursor CURSOR FOR
SELECT LocationID,Name,CostRate 
FROM Production.Location
OPEN Location_Cursor;
FETCH NEXT FROM Location_Cursor;
WHILE @@FETCH_STATUS = 0
 BEGIN
 FETCH NEXT FROM Location_Cursor;
 END;
CLOSE Location_Cursor;
DEALLOCATE Location_Cursor;
GO

/***** Ex-5 *****/
USE master
DECLARE @database_name nvarchar(100);
DECLARE @lgname  nvarchar(100);
DECLARE crs cursor for
SELECT original_login_name, DB_NAME(database_id) as db_nm
FROM sys.dm_exec_sessions WHERE is_user_process=1;
OPEN crs
FETCH NEXT FROM crs INTO @lgname, @database_name
WHILE @@FETCH_STATUS=0
BEGIN
PRINT 'Login:'+ cast(@lgname AS nvarchar(100)) +' Database Name:'+@database_name
FETCH NEXT FROM crs INTO @lgname, @database_name
END
CLOSE crs
DEALLOCATE crs;

/***** ex-6 *****/
drop table if exists tempdb.dbo.#tmpCursor
create table #tmpCursor(
id int identity(1,1),
obid int 
)
go
DECLARE @StartTime datetime,@EndTime datetime 
SELECT @StartTime=GETDATE()
DECLARE @i INT = 1;
 
DECLARE cur CURSOR
 --LOCAL
 --LOCAL STATIC
 --LOCAL FAST_FORWARD
 --LOCAL FORWARD_ONLY
FOR
 SELECT c.[object_id] 
 FROM sys.objects AS c
 CROSS JOIN (SELECT TOP 200 name FROM sys.objects) AS c2
 ORDER BY c.[object_id];
 
OPEN cur;
FETCH NEXT FROM cur INTO @i;
 
WHILE (@@FETCH_STATUS = 0)
BEGIN
 insert into #tmpCursor
 values(@i)
 FETCH NEXT FROM cur into @i
END
 
CLOSE cur;
DEALLOCATE cur;
SELECT @EndTime=GETDATE() 
SELECT DATEDIFF(ms,@StartTime,@EndTime) AS [Duration in microseconds]

/***** Ex-6 *****/
USE AdventureWorks2012;  
GO  
DECLARE contact_cursor CURSOR FOR  
SELECT LastName FROM Person.Person  
WHERE LastName LIKE 'B%'  
ORDER BY LastName;  
  
OPEN contact_cursor;  
  
-- Perform the first fetch.  
FETCH NEXT FROM contact_cursor;  
  
-- Check @@FETCH_STATUS to see if there are any more rows to fetch.  
WHILE @@FETCH_STATUS = 0  
BEGIN  
   -- This is executed as long as the previous fetch succeeds.  
   FETCH NEXT FROM contact_cursor;  
END  
  
CLOSE contact_cursor;  
DEALLOCATE contact_cursor;  
GO