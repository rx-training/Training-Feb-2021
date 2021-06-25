/*Using cursor implement the following task employee
Update the salary of the employee using following condition

Salary between 30000 and 40000 — 5000 hike
Salary between 40000 and 55000 — 7000 hike
Salary between 55000 and 65000 — 9000 hike*/

DECLARE SalaryCursor CURSOR FOR 
SELECT EmployeeID,Salary FROM Employees
OPEN SalaryCursor;
FETCH NEXT FROM SalaryCursor;
WHILE @@FETCH_STATUS = 0
BEGIN 
UPDATE Employees SET Salary = CASE
	WHEN Salary BETWEEN 30000 AND 40000 THEN Salary + 5000
	WHEN Salary BETWEEN 40000 AND 55000 THEN Salary + 7000
	WHEN Salary BETWEEN 55000 AND 65000 THEN Salary + 9000
ELSE Salary
END
FETCH NEXT FROM SalaryCursor;
END
CLOSE SalaryCursor
DEALLOCATE SalaryCursor