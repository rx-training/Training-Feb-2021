--1. Write a query to find the addresses (location_id, street_address, city, state_province, country_name) of all the departments. 
CREATE VIEW DeptAddresses AS
SELECT 
	d.LocationID,
	l.StreetAddress,
	l.StateProvince,
	c.CountryName
FROM Departments d,Locations l,Countries c
WHERE d.LocationID=l.LocationID AND l.CountryID=c.CountryID;
GO

SELECT * FROM DeptAddresses;
GO

--2. Write a query to find the names (first_name, last name), department ID and name of all the employees. 
CREATE VIEW EmpDeptDetails AS
SELECT 
	e.FirstName+' '+e.LastName As 'EmployeeName',
	e.DepartmentID,
	d.DepartmentName
FROM Employees e,Departments d
WHERE e.DepartmentID=d.DepartmentID;
GO

SELECT * FROM EmpDeptDetails;
GO

--3. Find the names (first_name, last_name), job, department number, and department name of the employees who work in London. 
CREATE VIEW LondonEmpDetails AS
SELECT 
	e.FirstName+' '+e.LastName As 'EmployeeName',
	e.JobId,
	e.DepartmentID,
	d.DepartmentName
FROM Employees e,Departments d,Locations l
WHERE e.DepartmentID=d.DepartmentID AND d.LocationID=l.LocationID AND l.City='London';
GO

SELECT * FROM LondonEmpDetails;
GO

--4. Write a query to find the employee id, name (last_name) along with their manager_id, manager name (last_name). 
CREATE VIEW EmpManagerDetails AS
SELECT 
	e.EmployeeID,
	e.LastName AS 'Employee LastName',
	e.ManagerID,
	m.LastName AS 'Manager LastName'
FROM Employees e,Employees m
WHERE e.ManagerID=m.EmployeeID;
GO

SELECT * FROM EmpManagerDetails;
GO

--5. Find the names (first_name, last_name) and hire date of the employees who were hired after 'Jones'. 
CREATE VIEW HireAfterJones AS
SELECT 
	FirstName+' '+LastName As 'EmployeeName',
	HireDate
FROM Employees
WHERE HireDate > (SELECT HireDate FROM Employees WHERE LastName='Jones');
GO

SELECT * FROM HireAfterJones;
GO

--6. Write a query to get the department name and number of employees in the department. 
CREATE VIEW DeptEmpCount AS
SELECT 
	d.DepartmentName,
	COUNT(e.EmployeeID) as 'No. Of Employees'
FROM Departments d LEFT OUTER JOIN Employees e
ON d.DepartmentID=e.DepartmentID GROUP BY d.DepartmentName;
GO

SELECT * FROM DeptEmpCount;
GO

--7. Find the employee ID, job title, number of days between ending date and starting date for all jobs in department 90 from job history. 
CREATE VIEW Dept90JobHistory AS
SELECT
	EmployeeID,
	JobID AS 'Job Title',
	DATEDIFF(DD,StartDate,EndDate) As 'No. Of Days'
FROM JobHistory
WHERE DepartmentID=90;
GO

SELECT * FROM Dept90JobHistory;
GO

--8. Write a query to display the department ID, department name and manager first name. 
CREATE VIEW DeptManagerDetails AS
SELECT 
	d.DepartmentID,
	d.DepartmentName,
	e.FirstName AS 'Manager FirstName'
FROM Departments d JOIN Employees e
ON d.ManagerID=e.EmployeeID;
GO

SELECT * FROM DeptManagerDetails;
GO

--9. Write a query to display the department name, manager name, and city. 
CREATE VIEW DeptManagerCityDetails As
SELECT 
	d.DepartmentName,
	e.FirstName+' '+e.LastName AS 'Manager Name',
	l.City
FROM Departments d,Employees e,Locations l
WHERE d.ManagerID=e.EmployeeID AND d.LocationID=l.LocationID;
GO

SELECT * FROM DeptManagerCityDetails;
GO

--10. Write a query to display the job title and average salary of employees. 
CREATE VIEW JobSalDetails AS
SELECT 
	JobId AS 'Job Title',
	AVG(Salary) AS 'Employee Avg Salary'
FROM Employees GROUP BY JobId;
GO

SELECT * FROM JobSalDetails;
GO

--11. Display job title, employee name, and the difference between salary of the employee and minimum salary for the job. 
CREATE VIEW DiffEmpJobSal AS
SELECT 
	e.JobId As 'JobTitle',
	e.FirstName+' '+e.LastName As 'EmployeeName',
	e.Salary-st.MinSal AS 'Diffrence'
FROM Employees e,(SELECT JobId,MIN(Salary) AS MinSal FROM Employees GROUP BY JobId) AS st
WHERE e.JobId=st.JobId;
GO

SELECT * FROm DiffEmpJobSal;
GO

--12. Write a query to display the job history that were done by any employee who is currently drawing more than 10000 of salary. 
CREATE VIEW EmpJobDone AS
SELECT 
	j.EmployeeID,
	j.StartDate,
	j.EndDate,
	j.JobID,
	j.DepartmentID
FROM JobHistory j,Employees e
WHERE j.EmployeeID=e.EmployeeID AND e.Salary >10000;
GO

SELECT * FROM EmpJobDone;
GO

--13. Write a query to display department name, name (first_name, last_name), hire date, salary of the manager for all managers whose experience is more than 15 years. 
CREATE VIEW ManagerExperience AS
SELECT
	d.DepartmentName,
	e.FirstName+' '+e.LastName As 'EmployeeName',
	e.HireDate,
	e.Salary
FROM 
	(SELECT DISTINCT ManagerID FROM Employees) AS m,
	Employees e,
	Departments d
WHERE m.ManagerID=e.EmployeeID AND e.DepartmentID=d.DepartmentID AND DATEDIFF(YY,e.HireDate,GETDATE())>15;
GO

SELECT * FROM ManagerExperience;
GO