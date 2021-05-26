SELECT * FROM Employees;
SELECT * FROM Departments;
SELECT * FROM Locations;
SELECT * FROM JobHistory;
--ASSIGNMENT DAY 6 USING tables from sql supported files



--Create a View to Find the names (first_name, last_name), job, department number, and department name of the employees who work in London

CREATE VIEW depLondonDetails AS SELECT e.FirstName ,e.LastName ,e.JobId ,e.DepartmentID,d.DepartmentName 
FROM Employees e JOIN Departments d 
ON (e.DepartmentID = d.DepartmentID ) JOIN Locations l ON  (d.LocationID = l.LocationID) WHERE l.City = 'London';
SELECT * FROM depLondonDetails;



---Create a View to get the department name and number of employees in the department.

ALTER VIEW DepEmployees AS SELECT d.DepartmentName, COUNT(*) AS 'No Of Employees'
FROM Departments d  INNER JOIN Employees e ON e.DepartmentID = d.DepartmentID
GROUP BY d.DepartmentID,d.DepartmentName;

SELECT * FROM DepEmployees;


---Find the employee ID, job title, number of days between ending date and starting date for all jobs in department 90 from job history.


CREATE TABLE Jobs (
JobID varchar(10) NOT NULL,
JobTitle varchar(25) NOT NULL,
)

INSERT INTO Jobs VALUES
('AD_ASST','PRESIDENT'),
('AC_ACCOUNT','MANAGER');

SELECT * FROM Jobs;


ALTER VIEW JobDays AS SELECT e.EmployeeID , j.JobID ,
(DATEDIFF(DAY,h.StartDate,h.EndDate)) AS 'EXPERIENCE'
FROM Employees e INNER JOIN Jobs j ON e.JobID = j.JobID  
INNER JOIN JobHistory h ON e.EmployeeID = h.EmployeeID 
WHERE h.DepartmentID =90;

SELECT * FROM JobDays;

---Write a View to display the department name, manager name, and city.

ALTER VIEW DepManager AS SELECT d.DepartmentID, E.FirstName AS 'Manager Name' ,l.City
FROM Departments d JOIN Employees e ON (d.ManagerID = e.EmployeeID ) 
JOIN Locations l ON d.LocationID = l.LocationID;

SELECT * FROM DepManager;

/*Create a View to display department name, name (first_name, last_name), hire date, salary of the manager for 
all managers whose experience is more than 15 years.*/


CREATE VIEW ManagerHistory AS SELECT d.DepartmentID , CONCAT(e.FirstName,' ',e.LastName) AS 'NAME',	e.HireDate,e.Salary,
DATEDIFF(DAY,GETDATE(),e.HireDate) / 365 AS 'Experience'
FROM Departments d INNER JOIN Employees e ON e.EmployeeID = d.ManagerID
WHERE
DATEDIFF(DAY,GETDATE(),e.HireDate) > (15*365);

SELECT * FROM ManagerHistory;