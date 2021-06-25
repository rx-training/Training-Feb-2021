--1. Write a query to find the addresses (location_id, street_address, city, state_province, country_name) of all the
--departments. 

CREATE VIEW Addresses
AS 
SELECT D.DepartmentName
	, L.LocationID
	, L.StreetAddress
	, L.City
	, L.StateProvince
	, L.CountryID
	, C.CountryName
FROM Departments D JOIN Locations L
ON D.LocationID = L.LocationID
JOIN Countries C
ON C.CountryID = L.CountryID
GO

SELECT * FROM Addresses
GO

--2. Write a query to find the names (first_name, last name), department ID and name of all the employees. 

CREATE VIEW EmployeeDetails
AS
SELECT CONCAT(M.FirstName, ' ', M.LastName) [ManagerName]
	, D.DepartmentID
	, CONCAT(E.FirstName, ' ', E.LastName) [EmployeeName]
FROM Departments D JOIN Employees M
ON D.ManagerID = M.EmployeeID
JOIN Employees E
ON E.ManagerID = D.ManagerID
GO

SELECT * FROM EmployeeDetails
GO

--3. Find the names (first_name, last_name), job, department number, and department name of the employees who work in London. 

CREATE VIEW LondonSEmployees
AS
SELECT CONCAT(E.FirstName, ' ', E.LastName) AS 'ManagerName'
	, JobId
	, D.DepartmentID
	, D.DepartmentName
FROM Departments D JOIN Employees E
ON D.ManagerID = E.EmployeeID
JOIN Locations L
ON L.LocationID = D.LocationID
WHERE L.City = 'London'
GO

--4. Write a query to find the employee id, name (last_name) along with their manager_id, manager name (last_name). 

CREATE VIEW Emps
AS
SELECT E.EmployeeID [EmployeeID]
	, E.LastName AS 'EmployeeName'
	, M.EmployeeID AS 'ManagerID'
	, M.LastName AS 'ManagerName'
FROM Employees E JOIN Employees M 
ON E.ManagerID = M.EmployeeID
GO

--5. Find the names (first_name, last_name) and hire date of the employees who were hired after 'Jones'. ----

CREATE VIEW HiredAfterjones
AS
SELECT CONCAT(FirstName, ' ', LastName) 'Name'
	, HireDate
FROM Employees
WHERE HireDate > (SELECT HireDate 
		FROM Employees
		WHERE LastName = 'Jones');
GO

--6. Write a query to get the department name and number of employees in the department. 

CREATE VIEW DeptS
AS
SELECT D.DepartmentName
	, COUNT(*) 'NumberOfEmployees'
FROM Employees E JOIN Departments D
ON D.DepartmentID = E.EmployeeID
GROUP BY D.DepartmentID, D.DepartmentName
GO

--7. Find the employee ID, job title, number of days between ending date and starting date for all jobs in department 90 
--from job history. 

CREATE VIEW DeptNintyJobHistories
AS
SELECT  EmployeeID
	, JobID
	, DATEDIFF(DAY, StartDate, EndDate) 'DAYS'
FROM JobHistory 
WHERE DepartmentID = 90
GO

--8. Write a query to display the department ID, department name and manager first name. 

CREATE VIEW DisplayName
AS
SELECT D.DepartmentID
	, D.DepartmentName
	, E.FirstName
FROM Departments D JOIN Employees E
ON D.ManagerID = E.EmployeeID
GO

--9. Write a query to display the department name, manager name, and city. 

CREATE VIEW Disps
AS
SELECT D.DepartmentName
	, CONCAT(E.FirstName, ' ', E.LastName) 'Name'
	, L.City
FROM Departments D JOIN Employees E
ON D.ManagerID = E.EmployeeID
JOIN Locations L 
ON L.LocationID = D.LocationID
GO
--10. Write a query to display the job title and average salary of employees. 

CREATE VIEW AvgSal
AS
SELECT JobId
	, AVG(Salary) 'AvgSalary'
FROM Employees
GROUP BY JobId
GO

--11. Display job title, employee name, and the difference between salary of the employee and minimum salary for the job. 

CREATE VIEW SalDiff
AS
SELECT JobId
	, FirstName + ' ' + LastName [Name]
	, (Salary - (SELECT MIN(Salary) FROM Employees)) [SalaryDifference]
FROM Employees
GO

--12. Write a query to display the job history that were done by any employee who is currently drawing more than 10000 
--of salary. 

CREATE VIEW EmpJobHistories
AS
SELECT J.*
FROM Employees E JOIN JobHistory J
ON E.JobId = J.JobID
WHERE E.Salary > 10000
GO
--13. Write a query to display department name, name (first_name, last_name), hire date, salary of the manager for all 
--managers whose experience is more than 15 years. 

CREATE VIEW Experiences
AS
SELECT D.DepartmentName
	, CONCAT(E.FirstName, ' ', E.LastName) 'Name'
	, E.HireDate
	, E.Salary
FROM Departments D JOIN Employees E
ON D.ManagerID = E.EmployeeID
WHERE YEAR(E.HireDate) > 15
GO