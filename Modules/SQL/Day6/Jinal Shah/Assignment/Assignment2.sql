
	---------------------sqldb3_day5------------------------


/* (1) Create a View to Find the names (first_name, last_name), job, department number, and department name of the 
   employees who work in London */

	   select * from Locations

	   CREATE VIEW v1 AS SELECT (emp.FirstName + ' ' + emp.LastName) AS Name ,emp.JobId, dept.DepartmentID, 
	   dept.DepartmentName FROM Employees AS emp INNER JOIN Departments AS dept 
	   ON emp.DepartmentID = dept.DepartmentID
	   WHERE LocationID IN(SELECT LocationID FROM Locations AS lc WHERE lc.City = 'London') 

	   SELECT * FROM v1

/* (2) Create a View to get the department name and number of employees in the department. */

		select * from Employees	order by DepartmentID

		CREATE VIEW v2 AS SELECT dept.DepartmentName, COUNT(dept.DepartmentID) AS EMPLOYEES
		FROM Departments AS dept INNER JOIN Employees AS emp 
		ON dept.DepartmentID = emp.DepartmentID GROUP BY dept.DepartmentID, dept.DepartmentName

		SELECT * FROM v2

/* (3) Find the employee ID, job title, number of days between ending date and starting date for all jobs in 
	   department 90 from job history. */

	   SELECT emp.EmployeeID,jb.JobID , DATEDIFF(YEAR,jb.StartDate,jb.EndDate) AS DIFFERENCE
	   FROM Employees AS emp INNER JOIN JobHistory AS jb
	   ON emp.EmployeeID = jb.EmployeeID

/* (4) Write a View to display the department name, manager name, and city. */

	   CREATE VIEW v3 AS SELECT dept.DepartmentName, emp.FirstName AS manager_name,lc.City
	   FROM Departments AS dept JOIN Employees AS emp ON dept.ManagerID = emp.EmployeeID 
	   JOIN Locations AS lc ON dept.LocationID = lc.LocationID
  
   SELECT * FROM v3

/* (5) Create a View to display department name, name (first_name, last_name), hire date, salary of the manager 
       for all managers whose experience is more than 15 years. */

		CREATE VIEW v4 AS SELECT dept.DepartmentName, (emp.FirstName + ' ' + emp.LastName) AS Name, emp.HireDate,
		emp.Salary FROM Departments AS dept JOIN Employees AS emp ON dept.DepartmentID = emp.DepartmentID 
		WHERE (DATEDIFF(YEAR,emp.HireDate,GETDATE()) > 15)

		SELECT * FROM v4




	