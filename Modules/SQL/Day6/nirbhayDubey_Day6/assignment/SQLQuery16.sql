USE AssignmentDay30;
GO

--1. Write a query to find the names (first_name, last_name) and salaries of the employees who have higher salary than the employee whose last_name='Bull'. 
SELECT 
	FirstName+' '+LastName AS 'EmployeeName',
	Salary
FROM Employees
WHERE Salary > (SELECT Salary FROM Employees WHERE LastName='Bull');
GO

--2. Find the names (first_name, last_name) of all employees who works in the IT department. 
SELECT 
	e.FirstName+' '+e.LastName AS 'EmployeeName',
	e.DepartmentID
FROM Employees e 
WHERE e.DepartmentID=(SELECT DepartmentId FROM Departments WHERE DepartmentName='IT');
GO

--3. Find the names (first_name, last_name) of the employees who have a manager who works for a department based in United States. 
SELECT 
	FirstName+' '+LastName AS 'EmployeeName',
	EmployeeID
FROM Employees 
WHERE ManagerID IN (SELECT EmployeeID FROM Employees WHERE DepartmentID
				IN(SELECT DepartmentID FROM Departments WHERE LocationID 
				IN (SELECT LocationID FROM Locations WHERE CountryID='US')));
GO

--Hint : Write single-row and multiple-row subqueries

--4. Find the names (first_name, last_name) of the employees who are managers. 
SELECT FirstName+' '+LastName AS 'EmployeeName'
FROM Employees 
WHERE EmployeeID IN (SELECT ManagerID FROM Employees);
GO

--5. Find the names (first_name, last_name), salary of the employees whose salary is greater than the average salary. 
SELECT FirstName+' '+LastName AS 'EmployeeName'
FROM Employees
WHERE Salary > (SELECT AVG(Salary) FROM Employees);
GO

--6. Find the names (first_name, last_name), salary of the employees whose salary is equal to the minimum salary for their job grade. 
SELECT 
	FirstName+' '+LastName AS 'EmployeeName',
	Salary
FROM Employees
WHERE JobId+' '+CONVERT(varchar,Salary)
IN (SELECT JobId+' '+CONVERT(varchar,MIN(Salary)) FROM Employees GROUP BY JobId);
GO

--7. Find the names (first_name, last_name), salary of the employees who earn more than the average salary and who works in any of the IT departments. 
SELECT 
	FirstName+' '+LastName AS 'EmployeeName',
	Salary
FROM Employees
WHERE 
	Salary > (SELECT AVG(Salary) FROM Employees) AND 
	DepartmentID IN (SELECT DepartmentID FROM Departments WHERE DepartmentName LIKE 'IT%');
GO

--8. Find the names (first_name, last_name), salary of the employees who earn more than Mr. Bell. 
SELECT 
	FirstName+' '+LastName AS 'EmployeeName',
	Salary
FROM Employees
WHERE 
	Salary > (SELECT Salary FROM Employees WHERE LastName='Bell');
GO

--9. Find the names (first_name, last_name), salary of the employees who earn the same salary as the minimum salary for all departments. 
SELECT 
	FirstName+' '+LastName AS 'EmployeeName',
	Salary
FROM Employees
WHERE CONVERT(varchar,DepartmentID)+' '+CONVERT(varchar,Salary)
IN (SELECT CONVERT(varchar,DepartmentID)+' '+CONVERT(varchar,MIN(Salary)) FROM Employees GROUP BY DepartmentID);
GO

--10. Find the names (first_name, last_name), salary of the employees whose salary greater than average salary of all department. 
--Data Insufficient to answer
SELECT 
	FirstName+' '+LastName AS 'EmployeeName',
	Salary
FROM Employees
WHERE Salary > (SELECT AVG(subTab.dAvgSal) FROM (SELECT AVG(Salary) AS 'dAvgSal'  FROM Employees GROUP BY DepartmentID) AS subTab);
GO

--11. Write a query to find the names (first_name, last_name) and salary of the employees who earn a salary that is higher than the salary of all the Shipping Clerk (JOB_ID = 'SH_CLERK'). Sort the results on salary from the lowest to highest. 
SELECT 
	FirstName+' '+LastName AS 'EmployeeName',
	Salary
FROM Employees
WHERE Salary > ALL(SELECT Salary FROM Employees WHERE JobId='SH_CLERK') ORDER BY Salary;
GO

--12. Write a query to find the names (first_name, last_name) of the employees who are not supervisors. 
--Data Insufficient to answer
SELECT FirstName+' '+LastName AS 'EmployeeName'
FROM Employees 
WHERE EmployeeID NOT IN (SELECT ManagerID FROM Employees);
GO

--13. Write a query to display the employee ID, first name, last names, and department names of all employees. 
SELECT 
	e.EmployeeID,
	e.FirstName,
	e.LastName,
	d.DepartmentName
FROM Employees e,Departments d
WHERE e.DepartmentID=d.DepartmentID;
GO

--14. Write a query to display the employee ID, first name, last names, salary of all employees whose salary is above average for their departments. 
SELECT 
	e.EmployeeID,
	e.FirstName,
	e.LastName,
	e.Salary
FROM Employees e
WHERE e.Salary > (SELECT AVG(e2.Salary) FROM Employees e2 WHERE e.DepartmentID=e2.DepartmentID)
GO

--15. Write a query to fetch even numbered records from employees table. 
SELECT *
FROM (SELECT ROW_NUMBER() OVER(ORDER BY EmployeeId) AS 'RowNo',* FROM Employees) AS subTab
WHERE subTab.RowNo%2=0;
GO

--16. Write a query to find the 5th maximum salary in the employees table. 
SELECT TOP 1 subTab.Sal 
FROM (SELECT DISTINCT TOP 5 Salary AS 'Sal' FROM Employees ORDER BY Salary DESC) As subTab ORDER BY subTab.Sal; 
GO
									--OR--
SELECT * 
FROM (SELECT DISTINCT DENSE_RANK() OVER(ORDER BY Salary DESC) AS 'RowNo',Salary FROM Employees) subTab
WHERE subTab.RowNo=5; 
GO

--17. Write a query to find the 4th minimum salary in the employees table. 
SELECT TOP 1 subTab.Sal 
FROM (SELECT DISTINCT TOP 4 Salary AS 'Sal' FROM Employees ORDER BY Salary) As subTab ORDER BY subTab.Sal; 
GO
									--OR--
SELECT * 
FROM (SELECT DISTINCT DENSE_RANK() OVER(ORDER BY Salary) AS 'RowNo',Salary FROM Employees) subTab
WHERE subTab.RowNo=4; 
GO

--18. Write a query to select last 10 records from a table. 
SELECT *
FROM (SELECT ROW_NUMBER() OVER(ORDER BY EmployeeId DESC) AS 'RowNo',* FROM Employees) subTab
WHERE subTab.RowNo<=10 ORDER BY EmployeeID; 
GO

--19. Write a query to list department number, name for all the departments in which there are no employees in the department. 
SELECT 
	DepartmentID,
	DepartmentName
FROM Departments 
WHERE DepartmentID NOT IN(SELECT DISTINCT DepartmentID FROM Employees);
GO

--20. Write a query to get 3 maximum salaries. 
SELECT DISTINCT TOP 3 Salary 
FROM Employees 
ORDER BY Salary DESC;

--21. Write a query to get 3 minimum salaries. 
SELECT DISTINCT TOP 3 Salary 
FROM Employees 
ORDER BY Salary;

--22. Write a query to get nth max salaries of employees. 
SELECT * 
FROM (SELECT DISTINCT DENSE_RANK() OVER(ORDER BY Salary DESC) AS 'Nth',Salary FROM Employees) subTab
WHERE subTab.Nth=2; 
GO
