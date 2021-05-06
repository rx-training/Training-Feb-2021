USE DayTwo
SELECT * FROM Employees

DECLARE @Emp_Id int;
DECLARE @Emp_Name  nvarchar(100);
DECLARE @Emp_Salary  int;
DECLARE Sal_Cursor cursor for
SELECT EmployeeID, (FirstName + ' ' + LastName) AS Name, Salary FROM Employees
OPEN Sal_Cursor
FETCH NEXT FROM Sal_Cursor INTO @Emp_Id,@Emp_Name,@Emp_Salary
WHILE @@FETCH_STATUS=0
BEGIN
	 UPDATE Employees SET Salary = 
	                  CASE
						  WHEN (Salary BETWEEN 15000 AND 25000) THEN Salary + 5000
                          WHEN (Salary BETWEEN 10000 AND 15000) THEN Salary + 3000
                          WHEN (Salary BETWEEN 5000 AND 10000) THEN Salary + 2000
                          ELSE Salary
                          END 
					      WHERE EmployeeID = @Emp_Id
       SELECT EmployeeID,(FirstName + ' ' + LastName) AS Name, Salary AS 'IncrementSalary'  FROM Employees WHERE EmployeeID = @Emp_Id
	   FETCH NEXT FROM Sal_Cursor INTO @Emp_Id,@Emp_Name,@Emp_Salary
	   
END
CLOSE Salary_Cursor
DEALLOCATE Salary_Cursor;