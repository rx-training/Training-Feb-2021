SELECT * FROM Employees

--Write a SQL statement to change the Email column of Employees table with ‘not available’ for all employees.
ALTER TABLE Employees DROP CONSTRAINT ukEmail

UPDATE Employees SET Email = 'Not Availaible'
SELECT * FROM Employees

--Write a SQL statement to change the Email and CommissionPct column of employees table with ‘not available’ and 0.10 for all employees.

UPDATE Employees SET Email = 'Not Availaible', CommissionPct = 0.10;
SELECT * FROM Employees

--Write a SQL statement to change the Email and CommissionPct column of employees table with ‘not available’ and 0.10 for those employees whose DepartmentID is 110.

UPDATE Employees SET Email = 'Not Availaible', CommissionPct = 0.10 WHERE DepartmentID = 110;
SELECT * FROM Employees

--Write a SQL statement to change the Email column of employees table with ‘not available’ for those employees whose DepartmentID is 80 and gets a commission is less than 20%

UPDATE Employees SET Email = 'Not Available' WHERE DepartmentID = 80 AND CommissionPct < 0.20

--Write a SQL statement to change the Email column of employees table with ‘not available’ for those employees who belongs to the ‘Accouning’ department.

UPDATE Employees SET Email='Not Available' WHERE DepartmentId=(SELECT DepartmentId FROM Departments WHERE DepartmentName='Accounting')

--Write a SQL statement to change salary of employee to 8000 whose ID is 105, if the existing salary is less than 5000.
SELECT * FROM Employees
UPDATE Employees SET Salary = 8000 WHERE EmployeeID = 105 AND Salary < 5000;

--Write a SQL statement to change job ID of employee which ID is 118, to SH_CLERK if the employee belongs to department, which ID is 30 and the existing job ID does not start with SH.

UPDATE Employees Set JobId = 'SH_CLERK' WHERE EmployeeID = 118 AND DepartmentID=30 AND NOT JobId LIKE 'SH%'; 

--Write a SQL statement to increase the salary of employees under the department 40, 90 and 110 according to the company rules that, salary will be increased by 25% for the department 40, 15% for department 90 and 10% for the department 110 and the rest of the departments will remain same.

UPDATE Employees SET Salary = CASE DepartmentID 
WHEN 40 THEN Salary+(Salary*.25)
WHEN 90 THEN Salary+(Salary*.15)
WHEN 110 THEN Salary+(Salary*.10)
ELSE Salary
END 
WHERE DepartmentID IN (40 ,50,50,60,70,80,90,100)

SELECT * FROM Employees

--Write a SQL statement to increase the minimum and maximum salary of PU_CLERK by 2000 as well as the salary for those employees by 20% and commission by 10% 


UPDATE Jobs,Employees SET Jobs.MinSalary = Jobs.MinSalary+2000,
Jobs.MaxSalary = Jobs.MaxSalary+2000,
Employees.Salary = Employees.Salary+(Employees.Salary*.20),
Employees.CommissionPct = Employees.CommissionPct+.10
WHERE Jobs.JobId='PU-CLERK'
AND Employees.JobId='PU-CLERK';







