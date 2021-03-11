
/* 1. Write a query to find the names (first_name, last_name) and salaries of the employees who have higher salary 
	   than the employee whose last_name='Bull'. */

	   SELECT (FirstName + ' ' + LastName) AS Name, Salary FROM Employees
	   WHERE Salary > (SELECT * FROM Employees WHERE LastName = 'Bull')


/* 2. Find the names (first_name, last_name) of all employees who works in the IT department. */

	   SELECT (FirstName + ' ' + LastName) AS Name FROM Employees
	   WHERE DepartmentID = (SELECT DepartmentID FROM Departments WHERE DepartmentName = 'IT')

/* 3. Find the names (first_name, last_name) of the employees who have a manager who works for a department based 
	  in United States. Hint : Write single-row and multiple-row subqueries */

	  SELECT FirstName, LastName FROM Employees WHERE ManagerID in 
		  (select EmployeeID FROM Employees WHERE DepartmentID IN 
			(SELECT DepartmentID FROM Departments WHERE LocationID IN 
				(select LocationID from Locations where CountryID='US')));


/* 4. Find the names (first_name, last_name) of the employees who are managers.  */

		SELECT (FirstName + ' ' + LastName) AS Name FROM Employees WHERE EmployeeID IN
		(SELECT ManagerID FROM Employees)

/* 5. Find the names (first_name, last_name), salary of the employees whose salary is greater than the average salary. */

		SELECT FirstName, LastName, Salary FROM Employees WHERE Salary > (SELECT AVG(Salary) FROM Employees);

/* 6. Find the names (first_name, last_name), salary of the employees whose salary is equal to the minimum salary for 
	  their job grade. */

		SELECT (FirstName + ' ' + LastName) AS Name, Salary FROM Employees 
		WHERE Salary IN (SELECT MIN(Salary) FROM Employees GROUP BY JobId)


/* 7. Find the names (first_name, last_name), salary of the employees who earn more than the average salary and 
	  who works in any of the IT departments. */

	    SELECT FirstName, LastName, Salary FROM Employees WHERE DepartmentID IN 
		(SELECT DepartmentID FROM Departments WHERE DepartmentName LIKE 'IT%') 
		AND Salary > (SELECT avg(Salary) FROM Employees);

/* 8. Find the names (first_name, last_name), salary of the employees who earn more than Mr. Bell.  */

		SELECT (FirstName + ' ' + LastName) AS Name, Salary FROM Employees 
		WHERE Salary > (SELECT Salary FROM Employees WHERE LastName = 'Bell')

/* 9. Find the names (first_name, last_name), salary of the employees who earn the same salary as the minimum salary 
      for all departments.  */

		SELECT (FirstName + ' ' + LastName) AS Name, Salary, DepartmentID FROM Employees 
		WHERE Salary IN (SELECT MIN(Salary) FROM Employees GROUP BY DepartmentID)

/* 10. Find the names (first_name, last_name), salary of the employees whose salary greater than average salary of 
	   all department.  */

	   SELECT (FirstName + ' ' + LastName) AS Name, Salary, DepartmentID FROM Employees 
		WHERE Salary > ALL(SELECT AVG(Salary) FROM Employees GROUP BY DepartmentID)

/* 11. Write a query to find the names (first_name, last_name) and salary of the employees who earn a salary that is 
	   higher than the salary of all the Shipping Clerk (JOB_ID = 'SH_CLERK'). Sort the results on salary from the 
	   lowest to highest.  */

	   SELECT (FirstName + ' ' + LastName) AS Name, Salary, DepartmentID FROM Employees 
		WHERE Salary > ALL(SELECT Salary FROM Employees WHERE JobId = 'SH_CLERK' )ORDER BY Salary

/* 12. Write a query to find the names (first_name, last_name) of the employees who are not supervisors.  */

		SELECT emp.FirstName,emp.LastName FROM Employees AS emp 
		WHERE NOT EXISTS (SELECT 'X' FROM Employees emp1 WHERE emp1.ManagerID = emp1.EmployeeID);

/* 13. Write a query to display the employee ID, first name, last names, and department names of all employees. */

		SELECT EmployeeID, FirstName, LastName, (SELECT DepartmentName FROM Departments d
			 WHERE e.DepartmentID = d.DepartmentID) Departments 
			 FROM Employees e ORDER BY Departments;

/* 14. Write a query to display the employee ID, first name, last names, salary of all employees whose salary is 
       above average for their departments. */

/* 15. Write a query to fetch even numbered records from employees table.  */

/* 16. Write a query to find the 5th maximum salary in the employees table.  */

/* 17. Write a query to find the 4th minimum salary in the employees table.  */

/* 18. Write a query to select last 10 records from a table. */

/* 19. Write a query to list department number, name for all the departments in which there are no employees in the 
       department.  */

/* 20. Write a query to get 3 maximum salaries.  */

/* 21. Write a query to get 3 minimum salaries.  */

/* 22. Write a query to get nth max salaries of employees.  */