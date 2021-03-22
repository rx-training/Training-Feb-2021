USE AssignmentDay34;
GO

SELECT * FROM Employees;
GO

DECLARE @EmpId decimal(6,0)
DECLARE @Salary decimal(8,2)

DECLARE EmpCursor CURSOR FOR
SELECT EmployeeID,Salary FROM Employees

OPEN EmpCursor

FETCH NEXT FROM EmpCursor INTO @EmpId,@Salary
WHILE (@@FETCH_STATUS = 0) BEGIN
	IF (@Salary>=3000 AND @Salary<4000)	BEGIN
		UPDATE Employees SET Salary+=500 WHERE EmployeeID=@EmpId
	END
	ELSE IF (@Salary>=4000 AND @Salary<5500) BEGIN
		UPDATE Employees SET Salary+=700 WHERE EmployeeID=@EmpId
	END
	ELSE IF (@Salary>=5500 AND @Salary<6500) BEGIN
		UPDATE Employees SET Salary+=900 WHERE EmployeeID=@EmpId
	END
	FETCH NEXT FROM EmpCursor INTO @EmpId,@Salary
END

CLOSE EmpCursor
DEALLOCATE EmpCursor
GO