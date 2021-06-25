-----view tasks 

---day 6 
SELECT * FROM Locations;
SELECT * FROM Countries;
SELECT * FROM Employees;
SELECT * FROM Jobs;
SELECT * FROM JobHistory;
--1.Write a query to find the addresses (location_id, street_address, city, state_province, country_name) of all the departments. 

CREATE VIEW DepartmentAddress AS SELECT l.LocationID ,L.StreetAddress,l.City,l.StateProvince,c.CountryName
FROM Locations AS l JOIN Countries AS c ON (l.CountryID = c.CountryID);

SELECT * FROM DepartmentAddress;


--2.  Write a query to find the names (first_name, last name), department ID and name of all the employees. 

CREATE VIEW EmployeeNames AS SELECT  CONCAT(e.FirstName,' ',e.LastName) AS Names , e.DepartmentID ,d.DepartmentName
FROM Employees AS e JOIN Departments AS d ON (e.DepartmentID = d.DepartmentID);

SELECT * FROM EmployeeNames;


--3. Find the names (first_name, last_name), job, department number, and department name of the employees who work in London.

CREATE VIEW depLondonDetails AS SELECT e.FirstName ,e.LastName ,e.JobId ,e.DepartmentID,d.DepartmentName 
FROM Employees e JOIN Departments d 
ON (e.DepartmentID = d.DepartmentID ) JOIN Locations l ON  (d.LocationID = l.LocationID) WHERE l.City = 'London';

SELECT * FROM depLondonDetails;


--4. Write a query to find the employee id, name (last_name) along with their manager_id, manager name (last_name). 
ALTER VIEW ManagerEmployee AS SELECT e.EmployeeID ,e.LastName , m.EmployeeID AS 'ManagerID' , m.LastName AS 'ManagerName' 
FROM Employees AS e JOIN Employees AS m ON (e.ManagerID = m.EmployeeID);
select * from ManagerEmployee;

--5. Find the names (first_name, last_name) and hire date of the employees who were hired after 'Jones'. 

ALTER VIEW HireDate AS SELECT CONCAT(e.FirstName,' ',e.LastName) AS Names, e.HireDate FROM 
Employees AS e JOIN Employees AS H ON( H.LastName ='Jones') 
WHERE H.HireDate < e.HireDate;

SELECT *FROM HireDate;


--6. Write a query to get the department name and number of employees in the department. 

ALTER VIEW DepEmployees AS SELECT d.DepartmentName, COUNT(*) AS 'No Of Employees'
FROM Departments d  INNER JOIN Employees e ON e.DepartmentID = d.DepartmentID
GROUP BY d.DepartmentID,d.DepartmentName;

SELECT * FROM DepEmployees;
ALTER VIEW JobDays AS SELECT e.EmployeeID , j.JobID ,
(DATEDIFF(DAY,h.StartDate,h.EndDate)) AS 'EXPERIENCE'
FROM Employees e INNER JOIN Jobs j ON e.JobID = j.JobID  
INNER JOIN JobHistory h ON e.EmployeeID = h.EmployeeID 
WHERE h.DepartmentID =90;

SELECT * FROM JobDays;


--7. Find the employee ID, job title, number of days between ending date and starting date for all jobs in department 90 from job history.

CREATE TABLE Jobs (
JobID varchar(10) NOT NULL,
JobTitle varchar(25) NOT NULL,
)

INSERT INTO Jobs VALUES
('AD_ASST','PRESIDENT'),
('AC_ACCOUNT','MANAGER');

SELECT * FROM Jobs;


--8. Write a query to display the department ID, department name and manager first name.  
CREATE VIEW DepartmentManager As SELECT D.DepartmentID , D.DepartmentName , E.FirstName 
FROM Departments AS D INNER JOIN Employees AS e 
ON (D.ManagerID = E.EmployeeID );

SELECT * FROM DepartmentManager;


--9. Write a query to display the department name, manager name, and city. 

ALTER VIEW DepManager AS SELECT d.DepartmentID, E.FirstName AS 'Manager Name' ,l.City
FROM Departments d JOIN Employees e ON (d.ManagerID = e.EmployeeID ) 
JOIN Locations l ON d.LocationID = l.LocationID;

SELECT * FROM DepManager;

--10. Write a query to display the job title and average salary of employees
CREATE VIEW JobTitle AS SELECT j.JobTitle , AVG(e.Salary) 
FROM Employees AS e JOIN Jobs  AS j ON (e.JobTitle = j.JobTitle);

--11. Display job title, employee name, and the difference between salary of the employee and minimum salary for the job. 
ALTER TABLE Jobs
ADD MinSalary int;

ALTER TABLE Jobs
ADD MaxSalary int;

select * from jobs;
CREATE VIEW SalaryDifference AS 
SELECT j.JobTitle ,e.FirstName ,e.Salary-j.MinSalary AS 'SALARY-MINSALARY' FROM Employees AS e INNER JOIN Jobs AS j ON e.JobId = j.JobID;

SELECT * FROM SalaryDifference;

--12. Write a query to display the job history that were done by any employee who is currently drawing more than 10000 of salary. 

CREATE VIEW JOBHISTORIES  AS 
SELECT J.* FROM JobHistory AS J 
JOIN Employees AS E ON (J.EmployeeID = E.EmployeeID)
WHERE Salary > 10000;

SELECT * FROM JOBHISTORIES;