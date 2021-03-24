--Create a View to Find the names (first_name, last_name), job, department number, and department name of the employees who work in London

CREATE VIEW LondonEmployees
AS 
SELECT FirstName
	, LastName 
	, JobId 
	, B.DepartmentID 
	, B.DepartmentName 
FROM Employees E JOIN ( SELECT D.DepartmentID
		, D.DepartmentName
	FROM Departments D JOIN Locations L
	ON D.LocationID = L.LocationID) B
ON B.DepartmentID = E.DepartmentID
GO

select * from LondonEmployees
GO
--Create a View to get the department name and number of employees in the department.

CREATE VIEW EmployeeNumbers
AS 
SELECT D.DepartmentName 
	, COUNT(1) AS 'NumberOfEmployees'
FROM Departments D JOIN Employees E
ON D.DepartmentID = E.DepartmentID
GROUP BY E.DepartmentID, DepartmentName
GO

select * from EmployeeNumbers
GO
--Find the employee ID, job title, number of days between ending date and starting date for all jobs in department 90 
--from job history.

CREATE VIEW DepartmentNintyJobHistory
AS
SELECT EmployeeID
	, JobID
	, DATEDIFF(DAY, StartDate, EndDate) AS 'Days'
FROM JobHistory
WHERE DepartmentID = 90
GO

--Write a View to display the department name, manager name, and city.

CREATE VIEW Display
AS
SELECT D.DepartmentName
	, CONCAT(E.FirstName, ' ', E.LastName) AS 'Name'
	, L.City
FROM Departments D JOIN Employees E
ON D.ManagerID = E.EmployeeID 
JOIN Locations L
ON L.LocationID = D.LocationID
GO

--ALTER REFERENCE
ALTER VIEW Display
AS
SELECT D.DepartmentName
	, CONCAT(E.FirstName, ' ', E.LastName) AS 'Name'
	, L.City
FROM Departments D JOIN Employees E
ON D.ManagerID = E.EmployeeID 
JOIN Locations L
ON L.LocationID = D.LocationID
GO

SELECT * FROM Display
GO

--Create a View to display department name, name (first_name, last_name), hire date, salary of the manager for all managers 
--whose experience is more than 15 years.

CREATE VIEW Managers
AS
SELECT D.DepartmentName
	, CONCAT(E.FirstName, ' ', E.LastName) AS 'Name'
	, E.HireDate
	, E.Salary
FROM Departments D JOIN Employees E
ON D.ManagerID = E.EmployeeID
WHERE DATEDIFF(YEAR, E.HireDate, GETDATE()) > 15
GO

SELECT * FROM Managers
GO
