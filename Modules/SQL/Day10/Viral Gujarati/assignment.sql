DECLARE Hike_Cursor CURSOR FOR  
SELECT EmployeeID, Salary FROM Employees;  
OPEN Hike_Cursor;  
FETCH NEXT FROM Hike_Cursor;  
WHILE @@FETCH_STATUS = 0  
BEGIN  	  
UPDATE Employees 
SET Salary = CASE
WHEN Salary between 3000 and 4000 THEN Salary + 5000

WHEN Salary between 4000 and 5500 THEN Salary + 7000

WHEN Salary between 5500 and 6500 THEN Salary + 9000

ELSE Salary 
END
FETCH NEXT FROM Hike_Cursor;  
END;
CLOSE Hike_Cursor;  
DEALLOCATE Hike_Cursor;  
GO

SELECT * FROM Employees