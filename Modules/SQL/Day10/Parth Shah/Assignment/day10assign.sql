
--Day 10 Cursor :
/*--Using cursor implement the following task employee

Update the salary of the employee using following condition*/

USE DemoDay10;

SELECT * FROM Employees;



DECLARE @SalaryId decimal(8,2)
DECLARE @EId decimal(6, 0)
DECLARE SalaryCursor CURSOR FOR
SELECT EmployeeID, Salary FROM Employees

OPEN SalaryCursor;
FETCH NEXT FROM SalaryCursor INTO @SalaryId,@EId;

WHILE (@@FETCH_STATUS = 0) 
BEGIN 
 UPDATE Employees 
 SET Salary = 
 CASE 
 WHEN (Salary BETWEEN 30000 AND 40000) THEN Salary + 5000

 WHEN (Salary BETWEEN 40000 AND 55000) THEN Salary + 5000

 WHEN (Salary BETWEEN 55000 AND 65000) THEN Salary + 5000

 ELSE Salary	
	END
WHERE EmployeeID = @EId
	FETCH NEXT FROM SalaryCursor INTO @SalaryId,@EId
	
	END

CLOSE SalaryCursor 
DEALLOCATE SalaryCursor 

Select * from Employees;


