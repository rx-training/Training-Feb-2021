DECLARE @ID INT,@Name VARCHAR(50),@Salary INT
DECLARE EmpCursor CURSOR FOR SELECT EmployeeID,FirstName,Salary FROM Employees 
OPEN EmpCursor
FETCH NEXT FROM EmpCursor INTO @ID,@Name,@Salary

WHILE (@@FETCH_STATUS=0)
BEGIN

	IF @Salary BETWEEN 30000 AND 40000
		BEGIN
			SET @Salary=@Salary+5000;
		END

	ELSE IF @Salary BETWEEN 40000 AND 55000
		BEGIN
			SET @Salary=@Salary+7000;
		END

	ELSE IF  @Salary BETWEEN 55000 AND 65000
		BEGIN
			SET @Salary=@Salary+9000;
		END



PRINT CONCAT('Roll : ',@ID);PRINT CONCAT('Name : ',@Name)PRINT CONCAT('Salary : ',@Salary);
PRINT '--------------------------------------------------------------------------------------------------------------------------------------------'
FETCH NEXT FROM EmpCursor INTO @ID,@Name,@Salary
END
CLOSE EmpCursor;  
DEALLOCATE EmpCursor;  
