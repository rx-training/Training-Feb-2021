--------------- Views -------------------

---- 1. Write a query to find the addresses (location_id, street_address, city, state_province, country_name) of all the departments. ------

CREATE VIEW Adrs AS
 SELECT DepartmentID,l.LocationID,l.StreetAddress,l.City,l.PostalCode,l.StateProvince,l.CountryID 
       FROM Departments d JOIN Locations l ON l.LocationID = d.LocationID;

---- 2. Write a query to find the names (first_name, last name), department ID and name of all the employees. ------

CREATE VIEW Names AS
SELECT (FirstName+' '+LastName) AS EmpName, dept.DepartmentID, dept.DepartmentName FROM Employees emp
JOIN Departments dept ON dept.DepartmentID = emp.DepartmentID;

---- 3. Find the names (first_name, last_name), job, department number, and department name of the employees who work in London. ------

CREATE VIEW Nam AS
SELECT (FirstName +' '+ LastName) AS EmpName,emp.JobId, d.DepartmentID, d.DepartmentName FROM Employees emp
JOIN Departments d ON d.DepartmentID = emp.DepartmentID
JOIN Locations lc ON lc.LocationID = d.LocationID WHERE lc.City = 'London';


---- 4. Write a query to find the employee id, name (last_name) along with their manager_id, manager name (last_name). ------

CREATE VIEW Empy AS
SELECT emp.EmployeeID, emp.LastName AS EmployeeName,emp.ManagerID, d.LastName AS ManagerName FROM Employees emp
JOIN Employees d ON emp.EmployeeID = d.ManagerID;


---- 5. Find the names (first_name, last_name) and hire date of the employees who were hired after 'Jones'. ------

CREATE VIEW Hired AS 
SELECT FirstName, LastName, HireDate FROM Employees  
WHERE HireDate > (SELECT HireDate FROM Employees WHERE LastName = 'Jones');

---- 6. Write a query to get the department name and number of employees in the department. ------

CREATE VIEW Depat AS
SELECT dept.DepartmentName, COUNT(emp.EmployeeID) AS TotalEmp FROM Employees emp JOIN 
Departments dept ON dept.DepartmentID = emp.DepartmentID GROUP BY DepartmentName;

---- 7. Find the employee ID, job title, number of days between ending date and starting date for all jobs in department 90 from job history. ------

CREATE VIEW Job AS 
SELECT EmployeeID, JobID, DATEDIFF(DAY, StartDate, EndDate) AS Diff 
FROM JobHistory WHERE DepartmentID = 90;

---- 8. Write a query to display the department ID, department name and manager first name. ------

CREATE VIEW Display AS 
SELECT emp.FirstName, dept.DepartmentID, dept.DepartmentName FROM Employees emp 
JOIN Departments dept ON dept.ManagerID = emp.EmployeeID

---- 9. Write a query to display the department name, manager name, and city. ------

CREATE VIEW Disply AS
SELECT emp.FirstName AS ManagerName, dept.DepartmentName, lc.City FROM Employees emp 
JOIN Departments dept ON dept.ManagerID = emp.EmployeeID 
JOIN Locations lc ON lc.LocationID = dept.LocationID;

---- 10. Write a query to display the job title and average salary of employees. ------

CREATE VIEW Title AS 
SELECT JobId, AVG(Salary) AS AvgSalary 
FROM Employees GROUP BY JobId;

---- 11. Display job title, employee name, and the difference between salary of the employee and minimum salary for the job. ------

CREATE VIEW MinSalary AS 
SELECT e.FirstName,e.JobId, d.DepartmentName,(e.Salary - (SELECT MIN(Salary) FROM Employees m2 WHERE m2.JobId = e.JobId)) AS Diff, 
(SELECT MIN(Salary) FROM Employees E2 WHERE E2.JobId = E.JobId) AS MinSalary 
FROM Employees E JOIN Departments D ON D.DepartmentID = E.DepartmentID ;

	
---- 12. Write a query to display the job history that were done by any employee who is currently drawing more than 10000 of salary. ------

CREATE VIEW salry AS 
SELECT * FROM JobHistory WHERE EmployeeID IN (SELECT EmployeeID FROM Employees WHERE Salary > 10000)

---- 13. Write a query to display department name, name (first_name, last_name), hire date, salary of the manager for all managers whose experience is more than 15 years. ------

CREATE VIEW Manager AS 
SELECT d.DepartmentName,e.FirstName,e.LastName,e.HireDate,e.Salary 
FROM Departments d JOIN Employees e ON d.DepartmentID = e.DepartmentID 
WHERE DATEDIFF(YEAR,HireDate,GETDATE()) > 15