USE Employees

/*Day 6*/

/*Select employee details from employee table if data exists in incentive table ?*/

	SELECT * FROM Employees WHERE EXISTS (SELECT * FROM Incentives)

/*Find Salary of the employee whose salary is more than Roy Salary*/

	SELECT Salary FROM Employees WHERE Salary > (SELECT Salary FROM Employees WHERE FirstName = 'Roy')

/*Create a view to select FirstName,LastName,Salary,JoiningDate,IncentiveDate and IncentiveAmount*/

	SELECT * FROM Incentives

	CREATE VIEW EMP AS SELECT e.FirstName,e.LastName,e.Salary,e.JoiningDate,i.IncentiveDate,i.IncentiveAmount FROM Employees e JOIN Incentives i ON e.EmployeeID = i.EmployeeRefID

	SELECT * FROM EMP

/*Create a view to select Select first_name, incentive amount from employee and incentives table for those employees who have incentives and incentive amount greater than 3000*/

	CREATE VIEW EMPL AS SELECT e.FirstName,i.IncentiveAmount FROM Employees e JOIN Incentives i ON e.EmployeeID = i.EmployeeRefID WHERE i.IncentiveAmount > 3000	

	SELECT * FROM EMPL

/*Create a View to Find the names (first_name, last_name), job, department number, and department name of the employees who work in London*/

	SELECT * FROM Employees1
	SELECT * FROM Departments
	SELECT * FROM Locations

	CREATE VIEW Dep AS SELECT e.FirstName,e.LastName,e.JobId,e.DepartmentID,d.DepartmentName FROM Employees1 e JOIN Departments d ON e.DepartmentID = d.DepartmentID
												JOIN Locations l ON d.LocationID = l.LocationID WHERE l.City = 'London'

	SELECT * FROM Dep

/*Create a View to get the department name and number of employees in the department.*/

	CREATE VIEW Dept AS SELECT d.DepartmentName,tbl.Counts AS 'No. of EMP' FROM(SELECT DepartmentID,COUNT(DepartmentID) AS Counts FROM Employees1 GROUP BY DepartmentID) tbl JOIN Departments d ON tbl.DepartmentID = d.DepartmentID

	SELECT * FROM Dept

/*Find the employee ID, job title, number of days between ending date and starting date for all jobs in department 90 from job history.*/

	SELECT * FROM JobHistory

	SELECT EmployeeID,JobID,DATEDIFF(DAY,StartDate,EndDate) AS 'Days' FROM JobHistory WHERE DepartmentID = 90

/*Write a View to display the department name, manager name, and city.*/

	CREATE VIEW Deptm AS SELECT d.DepartmentName,e.FirstName AS 'Manger Name',l.City FROM Departments d JOIN Employees1 e ON d.DepartmentID = e.DepartmentID
							  JOIN Locations l ON d.LocationID = l.LocationID

	SELECT * FROM Deptm

/*Create a View to display department name, name (first_name, last_name), hire date, salary of the manager for all managers whose experience is more than 15 years.*/

	CREATE VIEW Deptme AS SELECT d.DepartmentName,e.FirstName,e.LastName,e.HireDate,e.Salary FROM Departments d JOIN Employees1 e ON d.DepartmentID = e.DepartmentID WHERE DATEDIFF(YEAR,HireDate,GETDATE()) > 15
	
	SELECT * FROM Deptme