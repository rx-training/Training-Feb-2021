USE Students
GO

SELECT * INTO Employees1 FROM Employees
UPDATE Employees1 SET Salary = Salary + 20000
SELECT * FROM Employees1
SELECT * FROM Employees
GO
/*Salary between 30000 and 40000 — 5000 hike

Salary between 40000 and 55000 — 7000 hike

Salary between 55000 and 65000 — 9000 hike*/
	
	DECLARE Employee_Cursor CURSOR FOR  
	SELECT EmployeeID,Salary FROM Employees1;
	OPEN Employee_Cursor;  
	FETCH NEXT FROM Employee_Cursor;  
	UPDATE Employees1 SET Salary = CASE WHEN Salary BETWEEN 30000 AND 40000 THEN Salary + 5000  
										WHEN Salary BETWEEN 40000 AND 55000 THEN Salary + 7000 
										WHEN Salary BETWEEN 55000 AND 65000 THEN Salary + 9000
										ELSE Salary 
										END
	WHILE @@FETCH_STATUS = 0  
		BEGIN  
			FETCH NEXT FROM Employee_Cursor;  
		END;  
	CLOSE Employee_Cursor;  
	DEALLOCATE Employee_Cursor;  
GO
