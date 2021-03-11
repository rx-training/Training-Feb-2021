/*  1)  Write a query to find the addresses (location_id, street_address, city, state_province, country_name) of all the departments. */

		CREATE VIEW  Assignment7 AS
		SELECT dbo.Locations.LocationID, dbo.Locations.StreetAddress, dbo.Locations.PostalCode, dbo.Locations.City, dbo.Locations.StateProvince, dbo.Locations.CountryID, dbo.Departments.DepartmentName
		FROM dbo.Departments INNER JOIN
        dbo.Locations ON dbo.Departments.LocationID = dbo.Locations.LocationID



/*  2) Write a query to find the names (first_name, last name), department ID and name of all the employees. */
		
		CREATE VIEW  Assignment8 AS
		SELECT dbo.Employees.FirstName, dbo.Employees.LastName,dbo.Departments.DepartmentID
		FROM dbo.Departments INNER JOIN
        dbo.Employees ON dbo.Departments.DepartmentID = dbo.Employees.DepartmentID

/*   3) Find the names (first_name, last_name), job, department number, and department name of the employees who work in London. */


select * from Employees WHERE LastName = 'John' OR FirstName ='John'
select * from Departments
select * from JobHistory
select * from Locations

	CREATE VIEW Assignment9 AS
	SELECT dbo.Employees.FirstName, dbo.Employees.LastName, dbo.JobHistory.JobID, dbo.Departments.DepartmentID, dbo.Departments.DepartmentName
	FROM dbo.Departments INNER JOIN
    dbo.Employees ON dbo.Departments.DepartmentID = dbo.Employees.DepartmentID INNER JOIN
    dbo.Locations ON dbo.Departments.LocationID = dbo.Locations.LocationID INNER JOIN
    dbo.JobHistory ON dbo.Departments.DepartmentID = dbo.JobHistory.DepartmentID
	WHERE (dbo.Locations.City = 'London')

/*  4)  Write a query to find the employee id, name (last_name) along with their manager_id, manager name (last_name).*/

	CREATE VIEW Assignment10 AS
	SELECT dbo.Employees.EmployeeID, dbo.Employees.LastName, dbo.Departments.ManagerID,dbo.Departments.ManagerName
	FROM dbo.Employees INNER JOIN
    dbo.Departments ON dbo.Employees.DepartmentID = dbo.Departments.DepartmentID

/*  5)  Find the names (first_name, last_name) and hire date of the employees who were hired after 'Jones'. */
 
	CREATE VIEW Assignment11 AS
	SELECT FirstName, LastName, HireDate
	FROM dbo.Employees
	WHERE (HireDate > '1987 - 08 - 01')

/*  6)  Write a query to get the department name and number of employees in the department. */

	CREATE VIEW Assignment12 AS
	SELECT dbo.Departments.DepartmentName,COUNT(dbo.Employees.EmployeeID) AS No_Of_Employees
	FROM dbo.Departments INNER JOIN
    dbo.Employees ON dbo.Departments.DepartmentID = dbo.Employees.DepartmentID 
	GROUP BY DepartmentName

/*  7)  Find the employee ID, job title, number of days between ending date and starting date for all jobs in department 90 from job history. */
	CREATE VIEW Assignment13 AS
	SELECT dbo.Employees.EmployeeID, dbo.JobHistory.JobID,DATEDIFF(dd,JobHistory.StartDate,JobHistory.EndDate) AS Day_Diff
    FROM dbo.Departments INNER JOIN
    dbo.Employees ON dbo.Departments.DepartmentID = dbo.Employees.DepartmentID INNER JOIN
    dbo.JobHistory ON dbo.Departments.DepartmentID = dbo.JobHistory.DepartmentID WHERE Departments.DepartmentID ='90'

/*  8)  Write a query to display the department ID, department name and manager first name. */
	CREATE VIEW Assignment14 AS
	SELECT d.DepartmentID, d.DepartmentName, d.ManagerID, e.FirstName 
	FROM Departments d 
	INNER JOIN Employees e 
	ON (d.ManagerID = e.EmployeeID);

/*  9)  Write a query to display the department name, manager name, and city. */
	CREATE VIEW Assignment15 AS
	SELECT dbo.Departments.DepartmentName, dbo.Employees.FirstName, dbo.Locations.City
    FROM dbo.Departments INNER JOIN
    dbo.Employees ON dbo.Departments.DepartmentID = dbo.Employees.DepartmentID INNER JOIN
    dbo.Locations ON dbo.Departments.LocationID = dbo.Locations.LocationID WHERE Departments.ManagerID = Employees.EmployeeID

/*  10)  Write a query to display the job title and average salary of employees.*/
	CREATE VIEW Assignment16 AS
	SELECT dbo.JobHistory.JobID, AVG(Employees.Salary) AS AVG_SAL
	FROM dbo.JobHistory INNER JOIN
    dbo.Employees ON dbo.JobHistory.EmployeeID = dbo.Employees.EmployeeID 
	GROUP BY JobHistory.JobID

/*  11)  Display job title, employee name, and the difference between salary of the employee and minimum salary for the job. */

	Select EmployeeID, (Salary - MI bN(Salary)) AS s FROM Employees GROUP BY EmployeeID,Salary

/*  12)  Write a query to display the job history that were done by any employee who is currently drawing more than 10000 of salary.*/
	CREATE VIEW Assignment17 AS 
	SELECT dbo.JobHistory.EmployeeID, dbo.JobHistory.StartDate, dbo.JobHistory.EndDate, dbo.JobHistory.JobID, dbo.JobHistory.DepartmentID
	FROM dbo.Employees INNER JOIN
    dbo.JobHistory ON dbo.Employees.EmployeeID = dbo.JobHistory.EmployeeID
    WHERE (dbo.Employees.Salary > 10000)

/*  13)  Write a query to display department name, name (first_name, last_name), hire date, salary of the manager for all managers whose experience is more than 15 years. */

	SELECT FirstName, LastName, HireDate, Salary, 
	(DATEDIFF(YY,HireDate, GETDATE())) Experience 
	FROM Departments d JOIN Employees e 
	ON (d.ManagerID = e.EmployeeID) 
	WHERE (DATEDIFF(YY,HireDate, GETDATE()))>15;