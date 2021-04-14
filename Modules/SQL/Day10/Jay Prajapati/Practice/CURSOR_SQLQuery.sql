
DECLARE Employee_Cursor CURSOR FOR  
SELECT BusinessEntityID, JobTitle FROM AdventureWorks2012.HumanResources.Employee;  
OPEN Employee_Cursor;  
FETCH NEXT FROM Employee_Cursor;  
WHILE @@FETCH_STATUS = 0  
   BEGIN  
      FETCH NEXT FROM Employee_Cursor;  
   END;  
CLOSE Employee_Cursor;  
DEALLOCATE Employee_Cursor;  
GO  


-- Get the first row from table
USE SQLDay2;
DECLARE @EmpID INT,
		@Name NVARCHAR(50),
		@Salary MONEY

DECLARE EmpCursor CURSOR FOR
SELECT EmployeeID,(FirstName+' '+ LastName) AS Name, Salary FROM Employees
OPEN EmpCursor
FETCH NEXT FROM EmpCursor INTO @EmpID,@Name,@Salary
PRINT @EmpID
PRINT @Name
PRINT @Salary

CLOSE EmpCursor 
DEALLOCATE EmpCursor


-- Get Multiple Rows form table
DECLARE @EmpID INT,
		@Name NVARCHAR(50),
		@Salary MONEY

DECLARE EmpCursor CURSOR FOR
SELECT EmployeeID,(FirstName+' '+ LastName) AS Name, Salary FROM Employees
OPEN EmpCursor
	FETCH NEXT FROM EmpCursor INTO @EmpID,@Name,@Salary

WHILE (@@FETCH_STATUS = 0)
BEGIN
	PRINT 'ID : ' + CAST(@EmpID AS NVARCHAR(10)) +', '+ 'Name : ' + @Name +', '+'Salary :' +CAST(@Salary AS NVARCHAR(50)) 
	FETCH NEXT FROM EmpCursor INTO @EmpID,@Name,@Salary
END
CLOSE EmpCursor 
DEALLOCATE EmpCursor