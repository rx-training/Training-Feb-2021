SELECT * FROM Employees

DECLARE @ID INT,@Name VARCHAR(50)
DECLARE EmpCursor CURSOR FOR SELECT EmployeeID,FirstName FROM Employees 
OPEN EmpCursor
FETCH NEXT FROM EmpCursor INTO @ID,@Name

WHILE (@@FETCH_STATUS=0)
BEGIN
PRINT CONCAT('Roll : ',@ID);PRINT CONCAT('Name : ',@Name);
PRINT '--------------------------------------------------------------------------------------------------------------------------------------------'
FETCH NEXT FROM EmpCursor INTO @ID,@Name
END
CLOSE EmpCursor;  
DEALLOCATE EmpCursor;  



