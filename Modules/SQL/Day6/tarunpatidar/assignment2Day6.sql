---- 1. Create a View to Find the names (first_name, last_name), job, department number, and department name of the employees who work in London. ------

CREATE VIEW Work AS 
SELECT e.FirstName,e.LastName,e.JobId,e.DepartmentID,d.DepartmentName FROM Employees e 
JOIN Departments d ON e.DepartmentID = d.DepartmentID
JOIN Locations l ON d.LocationID = l.LocationID WHERE l.City = 'London'

---- 2. Create a View to get the department name and number of employees in the department. ------

CREATE VIEW DepEmp AS 
SELECT d.DepartmentName,tbl.Counts AS 'No. of EMP' 
FROM(SELECT DepartmentID,COUNT(DepartmentID) AS Counts FROM Employees GROUP BY DepartmentID) tbl 
JOIN Departments d ON tbl.DepartmentID = d.DepartmentID

---- 4. Find the employee ID, job title, number of days between ending date and starting date for all jobs in department 90 from job history. ------

SELECT EmployeeID,JobID,DATEDIFF(DAY,StartDate,EndDate) AS 'Days' 
FROM JobHistory 
WHERE DepartmentID = 90

---- 5. Write a View to display the department name, manager name, and city. ------

CREATE VIEW Dep AS 
SELECT d.DepartmentName,e.FirstName AS 'Manger Name',l.City FROM Departments d 
JOIN Employees e ON d.DepartmentID = e.DepartmentID
JOIN Locations l ON d.LocationID = l.LocationID

---- 6. Create a View to display department name, name (first_name, last_name), hire date, salary of the manager for all managers whose experience is more than 15 years. ------

CREATE VIEW Mnagr AS 
SELECT d.DepartmentName,e.FirstName,e.LastName,e.HireDate,e.Salary FROM Departments d 
JOIN Employees e ON d.DepartmentID = e.DepartmentID WHERE DATEDIFF(YEAR,HireDate,GETDATE()) > 15