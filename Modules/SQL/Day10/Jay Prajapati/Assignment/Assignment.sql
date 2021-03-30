/*Using cursor implement the following task employee

Update the salary of the employee using following condition

Salary between 30000 and 40000 — 5000 hike

Salary between 40000 and 55000 — 7000 hike

Salary between 55000 and 65000 — 9000 hike*/

SELECT * FROM Employees ORDER BY Salary DESC

DECLARE @EmpID INT,
		@Name NVARCHAR(50),
		@Salary MONEY
DECLARE UpdateSalary CURSOR FOR
SELECT EmployeeID,FirstName,Salary FROM Employees

OPEN UpdateSalary
	FETCH NEXT FROM UpdateSalary INTO @EmpID,@Name,@Salary
WHILE (@@FETCH_STATUS = 0)
BEGIN 
	FETCH NEXT FROM UpdateSalary INTO @EmpID,@Name,@Salary
	IF(@Salary BETWEEN 30000 AND 40000)
		UPDATE Employees
		SET Salary = 5000
		WHERE EmployeeID = @EmpID
	IF(@Salary BETWEEN 40000 AND 55000)
	UPDATE Employees
		SET Salary = 7000
		WHERE EmployeeID = @EmpID
			IF(@Salary BETWEEN 55000 AND 65000)
	UPDATE Employees
		SET Salary = 9000
		WHERE EmployeeID = @EmpID
END
CLOSE UpdateSalary
DEALLOCATE UpdateSalary


