USE [SQLDay2]

SELECT * FROM Employees;

/* 1. SQL statement to change the Email column of 
Employees table with ‘not available’ 
for all employees.*/

ALTER TABLE Employees 
DROP CONSTRAINT ukEmail;

UPDATE Employees
SET Email='not available';

/* 2. SQL statement to change the Email and 
CommissionPct column of employees table with 
‘not available’ and 0.10 for all employees.*/

UPDATE Employees
SET Email='not available',CommissionPct=0.10;

/* 3. SQL statement to change the Email and 
CommissionPct column of employees table with 
‘not available’ and 0.10 for those employees 
whose DepartmentID is 110.*/

UPDATE Employees
SET Email='not available',CommissionPct=0.10
WHERE EmployeeID=10;

/* 4. SQL statement to change the Email 
column of employees table with ‘not available’
for those employees whose DepartmentID is 80 and gets a 
commission is less than 20%*/

SElECT * FROM Employees

UPDATE Employees
SET Email='not available'
WHERE DepartmentID = 80 and (CommissionPct*100 < 20);

/* 5.SQL statement to change the Email column 
of employees table with ‘not available’ for 
those employees who belongs to the ‘Accouning’ department.*/

/* 6. SQL statement to change salary of employee to 8000 
whose ID is 105, if the existing salary is less than 5000.*/
SElECT * from Employees

UPDATE Employees
SET Salary=8000
WHERE (SELECT Salary FROM Employees WHERE EmployeeID=104)<5000;

/* 7. SQL statement to change job ID of employee
which ID is 118, to SH_CLERK if the employee belongs to department, 
which ID is 30 and the existing job ID does not start with SH.*/


/* 8. SQL statement to increase the salary of employees 
under the department 40, 90 and 110 according to the
company rules that, salary will be increased by 25% 
for the department 40, 15% for department 90 and 
10% for the department 110 and the rest of the 
departments will remain same.*/


UPDATE Employees
SET Salary= CASE DepartmentID
	WHEN 40 THEN Salary + Salary*0.25
	WHEN 90 THEN Salary + Salary*0.15
	WHEN 110 THEN Salary + Salary*0.10
	ELSE Salary
	END;

SElECT * FROM Employees;

/* 9. SQL statement to increase the minimum and 
maximum salary of PU_CLERK by 2000 as well as the 
salary for those employees by 20% and commission by 10%*/




/*  -----BASIC SELECT QUERY-----  */


/* all employee details from the Employee table */

SELECT * FROM Employees;

/*FirstName, LastName from Employees table*/

SELECT FirstName,LastName FROM Employees;

/*FirstName from Employees table using alias name “Employee Name”*/

SELECT FirstName AS EmployeeName FROM Employees;

/*employee details from Employees table whose Employee Name is “Steven”*/

SELECT * FROM Employees
WHERE FirstName='Steven';

/*employee details from Employees table whose Employee
Name are “Neena” and “Lex”*/

SELECT * FROM Employees
WHERE FirstName IN('Neena','Lex');
--OR
SELECT * FROM Employees
WHERE FirstName='Neena' OR FirstName='Lex';

/*employee details from Employees table whose Employee name are not “Neena” and “Neena”*/

SELECT * FROM Employees
WHERE FirstName <>'Neena';
--OR
SELECT * FROM Employees
WHERE FirstName NOT IN('Neena');

/*employee details from Employees table whose Salary between 5000 and 8000*/

SELECT * FROM Employees
WHERE Salary BETWEEN 5000 AND 8000;

/*names (FirstName, LastName), Salary, PF of all 
the Employees (PF is calculated as 12% of salary).*/

SELECT CONCAT(FirstName,LastName) AS Name,Salary, (Salary*0.12) AS PF FROM Employees;

/*employee details from Employees table whose FirstName starts with ‘N’*/

SELECT * FROM Employees
WHERE FirstName LIKE 'N%';

/*unique department ID from Employees table*/

SELECT DISTINCT DepartmentID FROM Employees

/*all employee details from the employee table order by FirstName, descending.*/

SELECT * FROM Employees
ORDER BY FirstName DESC;

/*EmployeeID, names (FirstName, LastName), salary in ascending 
order of salary.*/

SELECT EmployeeID,CONCAT(FirstName,LastName),Salary FROM Employees
ORDER BY Salary DESC;

/*Select TOP 2 salary from employee table*/

SELECT TOP 2 * FROM Employees;