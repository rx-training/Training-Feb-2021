--1. Write a query to find the names (first_name, last_name) and salaries of the employees who have higher salary than 
--the employee whose last_name='Bull'. 

SELECT CONCAT(FirstName, ' ', LastName) 'Name'
	, Salary
FROM Employees
WHERE Salary > (SELECT Salary 
		FROM Employees
		WHERE LastName = 'Bull');

--2. Find the names (first_name, last_name) of all employees who works in the IT department. 

SELECT CONCAT(FirstName, ' ', LastName) 'Name'
FROM Employees
WHERE DepartmentID = (SELECT DepartmentID
		FROM Departments
		WHERE DepartmentName = 'IT');

--3. Find the names (first_name, last_name) of the employees who have a manager who works for a department based 
--in United States. 
--Hint : Write single-row and multiple-row subqueries

SELECT CONCAT(FirstName, ' ', LastName) 'Name'
FROM Employees
WHERE ManagerID IN (SELECT ManagerID 
		FROM Departments
		WHERE LocationID IN (SELECT LocationID
			FROM Locations
			WHERE CountryID IN (SELECT CountryID
				FROM Countries
				WHERE CountryName = 'United States of America')));

--4. Find the names (first_name, last_name) of the employees who are managers. 

SELECT CONCAT(FirstName, ' ', LastName) 'Name'
FROM Employees
WHERE EmployeeID IN (SELECT ManagerID
	FROM Employees)


--5. Find the names (first_name, last_name), salary of the employees whose salary is greater than the average salary. 

SELECT CONCAT(FirstName, ' ', LastName) 'Name'
	, Salary
FROM Employees
WHERE Salary > (SELECT AVG(Salary) FROM Employees)

--6. Find the names (first_name, last_name), salary of the employees whose salary is equal to the minimum salary for 
--their job grade. 

SELECT CONCAT(FirstName, ' ', LastName) 'Name'
	, Salary
FROM Employees E
WHERE Salary = (SELECT MIN(Salary) FROM Employees WHERE JobId = E.JobId)

--7. Find the names (first_name, last_name), salary of the employees who earn more than the average salary and who works 
--in any of the IT departments. 

SELECT CONCAT(FirstName, ' ', LastName) 'Name'
	, Salary
FROM Employees
WHERE Salary > (SELECT AVG(Salary) FROM Employees)
	AND DepartmentID IN (SELECT DepartmentID 
		FROM Departments
		WHERE DepartmentName LIKE '%IT%')

--8. Find the names (first_name, last_name), salary of the employees who earn more than Mr. Bell. 

SELECT CONCAT(FirstName, ' ', LastName) 'Name'
	, Salary
FROM Employees
WHERE Salary > (SELECT Salary FROM Employees WHERE LastName = 'Bell')

--9. Find the names (first_name, last_name), salary of the employees who earn the same salary as the minimum salary for 
--all departments. 

SELECT CONCAT(FirstName, ' ', LastName) 'Name'
	, Salary
FROM Employees E
WHERE Salary IN (SELECT MIN(Salary) 
	FROM Employees 
	WHERE DepartmentID = E.DepartmentID)



--10. Find the names (first_name, last_name), salary of the employees whose salary greater than average salary of 
--all department. 

SELECT CONCAT(FirstName, ' ', LastName) 'Name'
	, Salary
FROM Employees
WHERE Salary > (SELECT AVG(Salary) FROM Employees)

--11. Write a query to find the names (first_name, last_name) and salary of the employees who earn a salary that is
--higher than the salary of all the Shipping Clerk (JOB_ID = 'SH_CLERK'). Sort the results on salary from the lowest to 
--highest. 

SELECT CONCAT(FirstName, ' ', LastName) 'Name'
	, Salary
FROM Employees
WHERE Salary > (SELECT MAX(Salary) FROM Employees WHERE JobId = 'SH_CLERK')
ORDER BY Salary

--12. Write a query to find the names (first_name, last_name) of the employees who are not supervisors. 

SELECT CONCAT(FirstName, ' ', LastName) 'Name'
FROM Employees
WHERE EmployeeID NOT IN (SELECT ManagerID FROM Employees)

--13. Write a query to display the employee ID, first name, last names, and department names of all employees. 

--with join
SELECT EmployeeID
	, FirstName
	, LastName
	, DepartmentName
FROM Employees E JOIN Departments D
ON E.DepartmentID = D.DepartmentID

--with subquery
SELECT E.EmployeeID
	, E.FirstName
	, E.LastName
	, (SELECT D.DepartmentName 
		FROM Departments D
		WHERE D.DepartmentID = E.DepartmentID) 'DepartmentName'
FROM Employees E 


--14. Write a query to display the employee ID, first name, last names, salary of all employees whose salary is above
--average for their departments. 

SELECT EmployeeID
	, FirstName
	, LastName
	, Salary
FROM Employees E
WHERE SALARY > (SELECT AVG(Salary) FROM Employees WHERE DepartmentID = E.DepartmentID)

--15. Write a query to fetch even numbered records from employees table. 

SELECT *
FROM (SELECT ROW_NUMBER() OVER (ORDER BY EmployeeID) 'Rno'
	, * 
	FROM Employees) AS Emps
WHERE Rno % 2 = 0

--16. Write a query to find the 5th maximum salary in the employees table. 

SELECT *
FROM (SELECT ROW_NUMBER() OVER (ORDER BY Salary DESC) 'Rno'
	, Salary 
	FROM Employees) AS Emps
WHERE Rno = 5

--17. Write a query to find the 4th minimum salary in the employees table. 

SELECT *
FROM (SELECT ROW_NUMBER() OVER (ORDER BY Salary) 'Rno'
	, Salary 
	FROM Employees) AS Emps
WHERE Rno = 4

--18. Write a query to select last 10 records from a table. 

SELECT * FROM (
SELECT TOP 10 * FROM Employees ORDER BY EmployeeID DESC) sub 
ORDER BY EmployeeID ASC

--19. Write a query to list department number, name for all the departments in which there are no employees in the department. 

SELECT DepartmentID
	, DepartmentName
FROM Departments D
WHERE ManagerID NOT IN (SELECT ManagerID 
	FROM Employees E)

--20. Write a query to get 3 maximum salaries. 

SELECT *
FROM (SELECT ROW_NUMBER() OVER (ORDER BY Salary DESC) 'Rno'
	, Salary
	FROM Employees) AS Emps
WHERE Rno < 4

--21. Write a query to get 3 minimum salaries. 

SELECT *
FROM (SELECT ROW_NUMBER() OVER (ORDER BY Salary) 'Rno'
	, Salary
	FROM Employees) AS Emps
WHERE Rno < 4

--22. Write a query to get nth max salaries of employees. 
--TAKING N = 5

SELECT *
FROM (SELECT ROW_NUMBER() OVER (ORDER BY Salary DESC) 'Rno'
	, Salary 
	FROM Employees) AS Emps
WHERE Rno = 5


