USE Employees

/*Day 6*/

/*Views*/

/*Write a query to find the addresses (location_id, street_address, city, state_province, country_name) of all the departments*/

	CREATE VIEW EMP1 AS SELECT l.LocationID,l.StreetAddress,l.City,l.StateProvince,(SELECT c.CountryName FROM Countries c WHERE c.CountryID = l.CountryID)CountryName FROM Locations l

/*Write a query to find the names (first_name, last name), department ID and name of all the employees*/

	CREATE VIEW EMP2 AS SELECT e.FirstName,e.LastName,e.DepartmentID,(SELECT d.DepartmentName FROM Departments d WHERE d.DepartmentID = e.DepartmentID)DepartmentName FROM Employees1 e

/*Find the names (first_name, last_name), job, department number, and department name of the employees who work in London*/

	CREATE VIEW EMP3 AS SELECT e.FirstName,e.LastName,e.JobId,e.DepartmentID,d.DepartmentName FROM Employees1 e JOIN Departments d ON e.DepartmentID = d.DepartmentID
												JOIN Locations l ON d.LocationID = l.LocationID WHERE l.City = 'London'

	SELECT * FROM EMP3

/*Write a query to find the employee id, name (last_name) along with their manager_id, manager name (last_name)*/

	CREATE VIEW EMP4 AS SELECT e.EmployeeID,e.LastName,e.ManagerID,(SELECT m.LastName FROM Employees1 m WHERE m.EmployeeID = e.ManagerID)ManagerName FROM Employees1 e

/*Find the names (first_name, last_name) and hire date of the employees who were hired after 'Jones'. */

	CREATE VIEW EMP5 AS SELECT FirstName,LastName,HireDate FROM Employees1 WHERE HireDate > (SELECT HireDate FROM Employees1 WHERE LastName = 'Jones')
	
/*Write a query to get the department name and number of employees in the department*/

	CREATE VIEW EMP6 AS SELECT d.DepartmentName,(SELECT COUNT(EmployeeID) FROM Employees1 e WHERE e.DepartmentID = d.DepartmentID GROUP BY e.DepartmentID)No_of_employee FROM Departments d

/*Find the employee ID, job title, number of days between ending date and starting date for all jobs in department 90 from job history*/

		CREATE VIEW EMP7 AS SELECT EmployeeID,JobID,DATEDIFF(DAY,StartDate,EndDate) AS 'Days' FROM JobHistory WHERE DepartmentID = 90

/*Write a query to display the department ID, department name and manager first name*/

	CREATE VIEW EMP8 AS SELECT d.DepartmentID,d.DepartmentName,(SELECT e.FirstName FROM Employees1 e WHERE e.EmployeeID = d.ManagerID)ManagerName FROM Departments d

/*Write a query to display the department name, manager name, and city*/

	CREATE VIEW EMP9 AS SELECT d.DepartmentName,(SELECT e.FirstName FROM Employees1 e WHERE e.EmployeeID = d.ManagerID)ManagerName,(SELECT l.City FROM Locations l WHERE l.LocationID = d.LocationID)City FROM Departments d

/*Write a query to display the job title and average salary of employees*/

	CREATE VIEW EMP10 AS SELECT * FROM (SELECT JobId,AVG(Salary) AS 'AVGSalary' FROM Employees1 a GROUP BY a.JobId)AVGSalary 
	
/*Display job title, employee name, and the difference between salary of the employee and minimum salary for the job*/

	CREATE VIEW EMP11 AS SELECT * FROM(SELECT JobId,FirstName,Salary-Min(Salary) OVER (PARTITION BY JobID) AS 'Salarys' FROM Employees1)Salarys
	
/*Write a query to display the job history that were done by any employee who is currently drawing more than 10000 of salary*/

	CREATE VIEW EMP12 AS SELECT * FROM JobHistory WHERE EmployeeID IN (SELECT EmployeeID FROM Employees1 WHERE Salary > 10000)
	
/*Write a query to display department name, name (first_name, last_name), hire date, salary of the manager for all managers whose experience is more than 15 years*/

	CREATE VIEW EMP13 AS SELECT d.DepartmentName,e.FirstName,e.LastName,e.HireDate,e.Salary FROM Departments d JOIN Employees1 e ON d.DepartmentID = e.DepartmentID WHERE DATEDIFF(YEAR,HireDate,GETDATE()) > 15



