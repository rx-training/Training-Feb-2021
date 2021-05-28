/*Using cursor implement the following task employee

Update the salary of the employee using following condition

Salary between 30000 and 40000 — 5000 hike

Salary between 40000 and 55000 — 7000 hike

Salary between 55000 and 65000 — 9000 hike*/

DECLARE @Sal int;
DECLARE @Eid int;

DECLARE SalaryCursor CURSOR FOR
SELECT Salary, EmployeeID 
FROM Employees

OPEN SalaryCursor;

FETCH NEXT FROM SalaryCursor INTO @Sal, @Eid;

WHILE @@FETCH_STATUS = 0
	BEGIN
		SELECT Salary AS 'SalaryBefore', EmployeeID FROM Employees WHERE EmployeeID = @Eid
		print @Sal
		
		UPDATE Employees
		SET Salary = CASE 
		WHEN @Sal BETWEEN 30000 AND 40000 THEN @Sal + 5000

		WHEN @Sal BETWEEN 40000 AND 55000 THEN  @Sal + 7000

		WHEN @Sal BETWEEN 55000 AND 65000 THEN @Sal + 9000

		ELSE @Sal

		END
		WHERE EmployeeID = @Eid
		
		SELECT Salary AS 'SalaryAfter', EmployeeID FROM Employees WHERE EmployeeID = @Eid
	FETCH NEXT FROM SalaryCursor INTO @Sal, @Eid;	
	END

CLOSE SalaryCursor;
DEALLOCATE SalaryCursor;


			