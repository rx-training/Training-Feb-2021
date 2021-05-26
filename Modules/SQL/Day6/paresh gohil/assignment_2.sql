USE Employees

/*Day 6*/

/*Sub Queries*/

/*Write a query to find the names (first_name, last_name) and salaries of the employees who have higher salary than the employee whose last_name='Bull'*/

	SELECT * FROM Employees1
	SELECT * FROM Departments
	SELECT * FROM JobHistory
	SELECT * FROM Locations
	SELECT * FROM Countries

	SELECT FirstName,LastName,Salary FROM Employees1 WHERE Salary > (SELECT Salary FROM Employees1 WHERE LastName = 'Bull')

/*Find the names (first_name, last_name) of all employees who works in the IT department */

	SELECT FirstName,LastName FROM Employees1 WHERE DepartmentID IN (SELECT DepartmentID FROM Departments WHERE DepartmentName = 'IT')

/*Find the names (first_name, last_name) of the employees who have a manager who works for a department based in United States*/

	SELECT FirstName,LastName FROM Employees1 WHERE ManagerID IN (SELECT DepartmentID FROM Employees1 WHERE DepartmentID IN (SELECT DepartmentID FROM Departments WHERE LocationID IN (SELECT LocationID FROM Locations WHERE CountryID = 'US')))

/*Find the names (first_name, last_name) of the employees who are managers. */

	SELECT FirstName,LastName FROM Employees1 WHERE ManagerID IN (SELECT DepartmentID FROM Employees1)

/*Find the names (first_name, last_name), salary of the employees whose salary is greater than the average salary. */

	SELECT FirstName,LastName,Salary FROM Employees1 WHERE Salary > (SELECT AVG(Salary) FROM Employees1)

/*Find the names (first_name, last_name), salary of the employees whose salary is equal to the minimum salary for their job grade*/

	SELECT FirstName,LastName,Salary FROM Employees1 WHERE Salary = (SELECT MIN(Salary) FROM Employees1)

/*Find the names (first_name, last_name), salary of the employees who earn more than the average salary and who works in any of the IT departments*/

	SELECT FirstName,LastName,Salary FROM Employees1 WHERE Salary > (SELECT AVG(Salary) FROM Employees1) AND DepartmentID = (SELECT DepartmentID FROM Departments WHERE DepartmentName = 'IT')

/*Find the names (first_name, last_name), salary of the employees who earn more than Mr. Bell*/

	SELECT FirstName,LastName,Salary FROM Employees1 WHERE Salary > (SELECT Salary FROM Employees1 WHERE LastName = 'Bell')

/*Find the names (first_name, last_name), salary of the employees who earn the same salary as the minimum salary for all departments*/

	SELECT FirstName,LastName,Salary FROM Employees1 WHERE Salary IN (SELECT MIN(Salary) FROM Employees1 GROUP BY DepartmentID)

/*Find the names (first_name, last_name), salary of the employees whose salary greater than average salary of all department */

	SELECT FirstName,LastName,Salary FROM Employees1 WHERE Salary > ALL(SELECT AVG(Salary) FROM Employees1 GROUP BY DepartmentID)

/*Write a query to find the names (first_name, last_name) and salary of the employees who earn a salary that is higher than the salary of all the Shipping Clerk (JOB_ID = 'SH_CLERK'). 
Sort the results on salary from the lowest to highest*/

	SELECT FirstName,LastName,Salary FROM Employees1 WHERE Salary > ALL(SELECT Salary FROM Employees1 WHERE JobId = 'SH_CLERK') ORDER BY Salary

/*Write a query to find the names (first_name, last_name) of the employees who are not supervisors*/

	SELECT e.FirstName,e.LastName FROM Employees1 e WHERE NOT EXISTS (SELECT 'X' FROM Employees1 m WHERE m.ManagerID = e.EmployeeID)

/*Write a query to display the employee ID, first name, last names, and department names of all employees*/

	SELECT  e.EmployeeID,e.FirstName,e.LastName,(SELECT d.DepartmentName FROM Departments d WHERE d.DepartmentID = e.DepartmentID)DepartName FROM Employees1 e 
	
/*Write a query to display the employee ID, first name, last names, salary of all employees whose salary is above average for their departments*/

	SELECT EmployeeID,FirstName,LastName,Salary FROM Employees1 WHERE Salary > ALL(SELECT AVG(Salary) FROM Employees1 GROUP BY DepartmentID)

/*Write a query to fetch even numbered records from employees table*/

	SELECT * FROM (SELECT * FROM Employees1)EmployeeID WHERE EmployeeID % 2 = 0 ORDER BY EmployeeID

/*Write a query to find the 5th maximum salary in the employees table*/

	SELECT * FROM (SELECT Salary,DENSE_RANK() OVER(ORDER BY Salary DESC) AS 'Salarys' FROM Employees1)tbl WHERE Salarys = 5 

/*Write a query to find the 4th minimum salary in the employees table*/

	SELECT * FROM (SELECT Salary,DENSE_RANK() OVER(ORDER BY Salary ASC) AS 'Salarys' FROM Employees1)tbl WHERE Salarys = 4 

/*Write a query to select last 10 records from a table*/

	SELECT * FROM (SELECT *,ROW_NUMBER()OVER(ORDER BY EmployeeID DESC)Ranks FROM Employees1)tbl WHERE Ranks <= 10 ORDER BY EmployeeID ASC 

/*Write a query to list department number, name for all the departments in which there are no employees in the department*/

	SELECT DepartmentID,DepartmentName FROM Departments WHERE DepartmentID NOT IN (SELECT DepartmentID FROM Employees1)

	SELECT * FROM Employees1

/*Write a query to get 3 maximum salaries.*/

	SELECT * FROM (SELECT Salary,DENSE_RANK() OVER(ORDER BY Salary DESC) AS 'Salarys' FROM Employees1)tbl WHERE Salarys < 4 

/*Write a query to get 3 minimum salaries*/

	SELECT * FROM (SELECT Salary,DENSE_RANK() OVER(ORDER BY Salary ASC) AS 'Salarys' FROM Employees1)tbl WHERE Salarys < 4 

/*Write a query to get nth max salaries of employees*/

	SELECT * FROM (SELECT Salary,DENSE_RANK() OVER(ORDER BY Salary DESC) AS 'Salarys' FROM Employees1)tbl  

	/*OR*/

	SELECT * FROM Employees1 emp1 WHERE (1) = (SELECT COUNT(DISTINCT(emp2.salary))FROM Employees1 emp2 WHERE emp2.salary > emp1.salary)

