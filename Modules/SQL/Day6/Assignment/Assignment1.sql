

/*  1)  Select employee details from employee table if data exists in incentive table */
 
		SELECT * FROM Employees
		WHERE EXISTs (SELECT * FROM Incentives)

 /* 2)  Find Salary of the employee whose salary is more than Roy Salary*/

		SELECT Salary,FirstName FROM Employees 
		WHERE Salary > (SELECT Salary FROM Employees WHERE LastName = 'Banda')

 /* 3)  Create a view to select FirstName,LastName,Salary,JoiningDate,IncentiveDate and IncentiveAmount*/
		CREATE VIEW Assignment1 AS
		SELECT  dbo.Employees.FirstName, dbo.Employees.LastName, dbo.Employees.HireDate, dbo.Employees.Salary, dbo.Incentives.IncentiveDate, dbo.Incentives.IncentiveAmount
		FROM  dbo.Employees CROSS JOIN dbo.Incentives
		select * from Assignment1

/*  4) Create a view to select Select first_name, incentive amount from employee and incentives table 
	for those employees who have incentives and incentive amount greater than 3000*/
		CREATE VIEW Assignment3 AS
		SELECT  dbo.Employees.FirstName, dbo.Employees.LastName, dbo.Employees.HireDate, dbo.Employees.Salary, dbo.Incentives.IncentiveDate, dbo.Incentives.IncentiveAmount
		FROM  dbo.Employees CROSS JOIN dbo.Incentives WHERE dbo.Incentives.IncentiveAmount > 3000



/*  5) Create a View to Find the names (first_name, last_name), job, department number, and department name of the employees who work in London*/

		CREATE VIEW Assignment2 AS
		SELECT dbo.Employees.FirstName, dbo.Employees.LastName, dbo.Departments.DepartmentID, dbo.Departments.DepartmentName, dbo.JobHistory.JobID
		FROM dbo.Departments INNER JOIN
		dbo.Locations ON dbo.Departments.LocationID = dbo.Locations.LocationID INNER JOIN
		dbo.Employees ON dbo.Departments.DepartmentID = dbo.Employees.DepartmentID INNER JOIN
		dbo.JobHistory ON dbo.Departments.DepartmentID = dbo.JobHistory.DepartmentID
		WHERE dbo.Locations.City = 'London' 

/*  6) Create a View to get the department name and number of employees in the department.*/
		CREATE VIEW  Assignment4 AS 
		SELECT dbo.Departments.DepartmentName, COUNT(EmployeeID) AS Number_Of_Employee
		FROM dbo.Departments INNER JOIN
		dbo.Employees ON dbo.Departments.DepartmentID = dbo.Employees.DepartmentID
		GROUP BY DepartmentName




/*  7) Find the employee ID, job title, number of days between ending date and starting date for all jobs in department 90 from job history.*/

		SELECT e.EmployeeID,j.JobID,DATEDIFF(YY,j.EndDate,j.StartDate) 
		AS DIFF FROM (JobHistory j INNER JOIN Employees e ON (e.EmployeeID = j.EmployeeID)
		WHERE e.DepartmentID = '90')

/*  8)  Write a View to display the department name, manager ID, and city.*/




		CREATE VIEW Assignment5 AS
		SELECT dbo.Departments.DepartmentName, dbo.Departments.ManagerID, dbo.Locations.City
		FROM dbo.Departments INNER JOIN
		dbo.Locations ON dbo.Departments.LocationID = dbo.Locations.LocationID



/*   9)  Create a View to display department name, name (first_name, last_name), hire date, salary of the manager for all managers whose experience is more than 15 years.*/
	
		CREATE VIEW Assignment6 AS
		SELECT dbo.Departments.ManagerID, dbo.Employees.FirstName, dbo.Employees.LastName, dbo.Employees.HireDate
		FROM dbo.Employees INNER JOIN
		dbo.Departments ON dbo.Employees.DepartmentID = dbo.Departments.DepartmentID 
		WHERE (DATEDIFF(yy,2021-06-15,HireDate) > 15)


                         
 