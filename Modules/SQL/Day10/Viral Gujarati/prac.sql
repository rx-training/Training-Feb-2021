use AdventureWorks2012

DECLARE Employee_Cursor CURSOR FOR  
SELECT EmployeeID, JobId FROM Employees  
OPEN Employee_Cursor;  
FETCH NEXT FROM Employee_Cursor;  
WHILE @@FETCH_STATUS = 0  
   BEGIN  
      FETCH NEXT FROM Employee_Cursor;  
   END;  
CLOSE Employee_Cursor;  
DEALLOCATE Employee_Cursor;      
GO


--PRACTICE



DECLARE Hike_Cursor CURSOR FOR  
SELECT Salary FROM Employees  
OPEN Hike_Cursor;  
FETCH NEXT FROM Hike_Cursor;  
WHILE @@FETCH_STATUS = 0  
   BEGIN  
      FETCH NEXT FROM Hike_Cursor;  
	  
UPDATE Employees 
SET Salary = 3000+5000
   END;  
CLOSE Hike_Cursor;  
DEALLOCATE Hike_Cursor;  
