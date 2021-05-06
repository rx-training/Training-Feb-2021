                              /********** Assignment 2 --SubQueriys **********/
/***** 1. Write a query to find the names (first_name, last_name) and salaries of the 
       employees who have higher salary than the employee whose last_name='Bull'. *****/
	   USE DaySix
	   SELECT * FROM Employees
	   SELECT (FirstName +' '+LastName) As EmpName,Salary FROM Employees
          WHERE Salary > (SELECT Salary FROM Employees WHERE LastName = 'Bull');

/***** 2. Find the names (first_name, last_name) of all employees who works in the IT department. *****/
       SELECT * FROM Departments
       SELECT (FirstName +' '+LastName) As EmpName FROM Employees 
       WHERE DepartmentID = (SELECT DepartmentID FROM Departments WHERE DepartmentName = 'IT'); 

/***** 3. Find the names (first_name, last_name) of the employees who have a manager who 
          works for a department based in United States.*****/
       SELECT * FROM Locations
       SELECT (FirstName +' '+LastName) As EmpName FROM Employees 
       WHERE DepartmentID IN (SELECT DepartmentID FROM Departments WHERE
	LocationID IN (SELECT LocationID FROM Locations WHERE CountryID = 'US')); 

/***** 4. Find the names (first_name, last_name) of the employees who are managers. *****/
       SELECT (FirstName +' '+ LastName) As EmpName FROM Employees 
       WHERE EmployeeID IN (SELECT ManagerID FROM Employees);

/***** 5. Find the names (first_name, last_name), salary of the employees whose salary is greater than the average salary. *****/
	   SELECT (FirstName +' '+LastName) As EmpName,Salary FROM Employees 
          WHERE Salary > (SELECT AVG(Salary) FROM Employees);

/***** 6. Find the names (first_name, last_name), salary of the employees whose salary is equal to the minimum salary for their job grade. ****/
       SELECT (FirstName +' '+LastName) As EmpName,Salary FROM Employees 
       WHERE Salary IN (SELECT MIN(Salary) FROM Employees GROUP BY JobId);

/***** 7. Find the names (first_name, last_name), salary of the employees who earn more than the average salary and who works in any of the 
          IT departments. *****/
       SELECT (FirstName +' '+LastName) As EmpName, Salary FROM Employees WHERE Salary > (SELECT AVG(Salary) FROM Employees)
	AND DepartmentID = (SELECT DepartmentID FROM Departments WHERE DepartmentName = 'IT');

/***** 8. Find the names (first_name, last_name), salary of the employees who earn more than Mr. Bell. *****/
       SELECT (FirstName +' '+LastName) As EmpName, Salary FROM Employees 
       WHERE Salary > (SELECT Salary FROM Employees WHERE LastName ='Bell');

/***** 9. Find the names (first_name, last_name), salary of the employees whose salary greater than average salary of all department.*****/ 
       SELECT (FirstName +' '+LastName) As EmpName, Salary FROM Employees 
       WHERE Salary In (SELECT MIN(Salary) FROM Employees GROUP BY DepartmentID);

/***** 10. Write a query to find the names (first_name, last_name) and salary of the employees who earn a salary that is higher than the salary of
           all the Shipping Clerk (JOB_ID = 'SH_CLERK'). Sort the results on salary from the lowest to highest.*****/ 
       SELECT (FirstName +' '+LastName) As EmpName, Salary FROM Employees 
       WHERE Salary > (SELECT MAX(Salary) FROM Employees WHERE JobId = 'SH_CLERK') ORDER BY Salary;

/***** 11. Write a query to find the names (first_name, last_name) of the employees who are not supervisors.*****/  
       SELECT FirstName, LastName FROM Employees WHERE EmployeeID NOT IN (SELECT ManagerID FROM Employees);

/***** 12. Write a query to display the employee ID, first name, last names, and department names of all employees. *****/
       SELECT * FROM Departments
       SELECT EmployeeID, FirstName, LastName, (SELECT DepartmentName FROM Departments WHERE DepartmentID = Employees.DepartmentID)
	AS DepartmentName FROM Employees;

/***** 13. Write a query to display the employee ID, first name, last names, salary of all employees whose salary is above average
       for their departments. *****/
       SELECT EmployeeID, FirstName, LastName, Salary FROM Employees e WHERE Salary > (SELECT AVG(Salary) FROM Employees d
	WHERE d.DepartmentID = e.DepartmentID);

/***** 14. Write a query to fetch even numbered records from employees table.*****/ 
       SELECT * FROM (SELECT ROW_NUMBER()  OVER (ORDER BY EmployeeID) AS EVEN,* FROM Employees) AS R  WHERE R.EVEN % 2 = 0;

/***** 15. Write a query to find the 5th maximum salary in the employees table. *****/
       SELECT * FROM (SELECT DENSE_RANK() OVER (ORDER BY Salary DESC) 'Five Highest',* FROM Employees) AS D WHERE [Five Highest] = 5;

/***** 16. Write a query to find the 4th minimum salary in the employees table.*****/ 
       SELECT * FROM (SELECT DENSE_RANK() OVER (ORDER BY Salary DESC) 'Four Highest',* FROM Employees) AS D WHERE [Four Highest] = 4;

/***** 17. Write a query to select last 10 records from a table.*****/
       SELECT TOP 10 * FROM (SELECT ROW_NUMBER()  OVER(ORDER BY EmployeeID) AS Rank,* FROM Employees) AS L ORDER BY Rank DESC;

/***** 18.Write a query to list department number, name for all the departments in which there are no employees in the department. *****/
       SELECT DepartmentID, DepartmentName FROM Departments WHERE DepartmentID NOT IN (SELECT DepartmentID FROM Employees);

/***** 19. Write a query to get 3 maximum salaries. *****/
       SELECT TOP 3  EmployeeID,FirstName,Salary FROM Employees ORDER BY Salary DESC;

/***** 20. Write a query to get 3 minimum salaries. *****/
       SELECT TOP 3  EmployeeID,FirstName,Salary FROM Employees ORDER BY Salary;

/***** 21. Write a query to get nth max salaries of employees. *****/
       SELECT * FROM Employees e WHERE (1) = (SELECT COUNT(DISTINCT(d.salary)) FROM Employees d
	   WHERE d.salary > e.salary);
             


