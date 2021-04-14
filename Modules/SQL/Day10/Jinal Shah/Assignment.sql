
/* Using cursor implement the following task employee Update the salary of the employee using following condition
   Salary between 30000 and 40000 — 5000 hike
   Salary between 40000 and 55000 — 7000 hike
   Salary between 55000 and 65000 — 9000 hike   */

   SELECT EmployeeID,Salary FROM Employees WHERE Salary>30000

	DECLARE Emp_cur CURSOR FOR 
	SELECT EmployeeID,Salary FROM Employees
	OPEN Emp_cur;
	FETCH NEXT FROM Emp_cur;
	WHILE @@FETCH_STATUS = 0
	BEGIN 
		UPDATE Employees SET Salary = CASE
			WHEN Salary BETWEEN 30000 AND 40000 THEN Salary + 5000
			WHEN Salary BETWEEN 40000 AND 55000 THEN Salary + 7000
			WHEN Salary BETWEEN 55000 AND 65000 THEN Salary + 9000
			ELSE Salary
			END
		FETCH NEXT FROM Emp_cur;
	END
	CLOSE Emp_cur
	DEALLOCATE Emp_cur



	/*-------

	DECLARE Emp_cur CURSOR FOR 
	SELECT EmployeeID,Salary FROM Employees
	OPEN Emp_cur;
	FETCH NEXT FROM Emp_cur;
	WHILE @@FETCH_STATUS = 0
	BEGIN 
		UPDATE Employees SET Salary = CASE
			WHEN Salary BETWEEN 3000 AND 4000 THEN Salary + 5000
			WHEN Salary BETWEEN 4000 AND 5500 THEN Salary + 7000
			WHEN Salary BETWEEN 5500 AND 6500 THEN Salary + 9000
			ELSE Salary
			END
		FETCH NEXT FROM Emp_cur;
	END
	CLOSE Emp_cur
	DEALLOCATE Emp_cur

	     -------*/



