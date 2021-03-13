SELECT * FROM Employees;
SELECT * FROM Departments;
SELECT * FROM JobHistory;
SELECT * FROM Locations;
SELECT * FROM Countries;

--day6 
--Query tasks 
---1. Write a query to find the names (first_name, last_name) and salaries of the employees who have higher salary than the employee whose last_name='Bull'. 

SELECT CONCAT(FirstName,' ',LastName) AS Names ,Salary FROM Employees WHERE Salary > (SELECT Salary FROM Employees WHERE LastName = 'Bull');

--2. Find the names (first_name, last_name) of all employees who works in the IT department.

SELECT CONCAT(FirstName,' ',LastName) AS Names, A.JobID FROM (SELECT * FROM Employees AS e WHERE e.JobId ='IT_PROG') AS A;


--3. Find the names (first_name, last_name) of the employees who have a manager who works for a department based in United States. 

SELECT CONCAT(FirstName,' ',LastName) AS Names FROM Employees AS e WHERE e.ManagerID IN 
(SELECT e.EmployeeID FROM Employees AS e WHERE e.DepartmentID IN (SELECT d.DepartmentID FROM Departments AS d WHERE d.LocationID IN (SELECT l.LocationID 
FROM Locations AS l 
WHERE l.CountryID = 'US')));

--4. Find the names (first_name, last_name) of the employees who are managers.
--using subqueries 
SELECT CONCAT(FirstName,' ',LastName) AS Names FROM Employees AS e WHERE e.EmployeeID IN 
(SELECT e.ManagerID FROM Employees AS e);

--5. Find the names (first_name, last_name), salary of the employees whose salary is greater than the average salary.

SELECT CONCAT(FirstName,' ',LastName) AS Names , Salary FROM Employees WHERE Salary > (SELECT AVG(Salary) FROM Employees);

--6.Find the names (first_name, last_name), salary of the employees whose salary is equal to the minimum salary for their job grade. 

SELECT CONCAT(FirstName,' ',LastName) AS Names , Salary FROM Employees AS e WHERE e.Salary =
(SELECT j.MinSalary FROM Jobs AS j WHERE j.JobID = e.JobId);

--7.Find the names (first_name, last_name), salary of the employees who earn more than the average salary and who works in any of the IT departments.
SELECT CONCAT(e.FirstName,' ',e.LastName) AS Names , e.Salary FROM Employees AS e WHERE (e.Salary > (SELECT AVG(e.Salary)FROM Employees AS e))
AND (e.DepartmentID IN (SELECT DepartmentID FROM Departments WHERE DepartmentName LIKE '%IT%'));


--8.Find the names (first_name, last_name), salary of the employees who earn more than Mr. Bell. 
SELECT CONCAT(FirstName,' ',LastName) AS Names ,Salary FROM Employees WHERE Salary > (SELECT Salary FROM Employees WHERE LastName = 'Bell');

SELECT * FROM Employees WHERE LastName = 'Bell';

--9.Find the names (first_name, last_name), salary of the employees who earn the same salary as the minimum salary for all departments. 

 SELECT CONCAT(FirstName,' ',LastName) AS Names ,Salary FROM Employees WHERE Salary = (SELECT MIN(Salary) FROM Employees);


--10.Find the names (first_name, last_name), salary of the employees whose salary greater than average salary of all department. 

SELECT CONCAT(FirstName,' ',LastName) AS Names , Salary FROM Employees WHERE Salary > ALL(SELECT AVG(Salary) FROM Employees GROUP BY DepartmentID);
  
/*--11.  Write a query to find the names (first_name, last_name) and salary of the employees who earn a salary that is higher than the salary of all the Shipping Clerk (JOB_ID = 'SH_CLERK')
. Sort the results on salary from the lowest to highest.*/ 


SELECT CONCAT(FirstName,' ',LastName) AS Names , Salary FROM Employees WHERE Salary > ALL (SELECT Salary FROM Employees WHERE JobId = 'SH_CLERK')
ORDER BY Salary;

SELECT * FROM Employees WHERE JobId = 'SH_CLERK';


--12..Write a query to find the names (first_name, last_name) of the employees who are not supervisors. 
SELECT CONCAT(e.FirstName,' ',e.LastName) AS Names FROM Employees AS e 
WHERE NOT EXISTS (SELECT 'X' FROM Employees E WHERE E.ManagerID = e.EmployeeID);

SELECT *FROM Employees;

--13.Write a query to display the employee ID, first name, last names, and department names of all employees. 

SELECT e.EmployeeId ,e.FirstName ,e.LastName, d.DepartmentID,d.DepartmentName FROM Employees AS e JOIN
Departments AS d ON d.DepartmentID = e.DepartmentID;


--14.  Write a query to display the employee ID, first name, last names, salary of all employees whose salary is above average for their departments. 


SELECT e.EmployeeId ,e.FirstName ,e.LastName,Salary FROM Employees AS e WHERE e.Salary > ALL (SELECT AVG(E.Salary) FROM Employees AS E 
WHERE E.DepartmentID = e.DepartmentID);


--15. Write a query to fetch even numbered records from employees table.

SELECT * FROM Employees 
WHERE EmployeeID IN(SELECT EmployeeID FROM Employees WHERE EmployeeID %2 = 0)
ORDER BY EmployeeID;


--16. Write a query to find the 5th maximum salary in the employees table. 
SELECT DISTINCT e.Salary FROM Employees AS e 
WHERE 5 = (SELECT COUNT(DISTINCT Salary)
FROM Employees E
WHERE E.Salary > = e.Salary);




--17. Write a query to find the 4th minimum salary in the employees table.

SELECT DISTINCT e.Salary FROM Employees AS e 
WHERE 4 = (SELECT COUNT(DISTINCT Salary)
FROM Employees E
WHERE E.Salary < = e.Salary);



--18. Write a query to select last 10 records from a table. 

 SELECT * FROM (SELECT TOP 10 * FROM Employees ORDER BY EmployeeID DESC ) AS EMP ORDER BY EmployeeID ASC;

--19.  Write a query to list department number, name for all the departments in which there are no employees in the department. 

SELECT d.DepartmentID , d.DepartmentName  FROM Departments AS d WHERE d.DepartmentID NOT IN (SELECT e.DepartmentID FROM Employees AS e );


--20. Write a query to get 3 maximum salaries.


SELECT * FROM (SELECT Salary ,ROW_NUMBER() OVER (ORDER BY Salary DESC)  [MYSALARY] FROM Employees) AS EMP WHERE MYSALARY < 4; 


--21.Write a query to get 3 minimum salaries.

SELECT * FROM (SELECT Salary ,ROW_NUMBER() OVER (ORDER BY Salary ASC)  [MYSALARY] FROM Employees) AS EMP WHERE MYSALARY < 4; 


--22.  Write a query to get nth max salaries of employees. 

SELECT * FROM( SELECT EmployeeID, Salary, dense_rank() OVER(ORDER BY Salary DESC)rank  from Employees) AS EMP WHERE rank = 5;

