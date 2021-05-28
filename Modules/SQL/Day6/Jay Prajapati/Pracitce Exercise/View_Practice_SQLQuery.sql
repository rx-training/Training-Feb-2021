/*1. Write a query to find the 
addresses (location_id, street_address, city, 
			state_province, country_name) 
of all the departments. */

CREATE VIEW 'Address' AS 
SELECT L.LocationID,
	   L.StreetAddress,
	   L.City,
	   L.StateProvince,
	   C.CountryName
FROM Locations AS L
INNER JOIN Countries AS C
ON L.CountryID = C.CountryID;

/*2. Write a query to find the 
names (first_name, last name), department ID and name 
of all the employees. */

CREATE VIEW EmpDept AS
SELECT (E.FirstName + ' ' + E.LastName) AS 'Name',
		D.DepartmentID,
		D.DepartmentName
FROM Employees AS E
INNER JOIN Departments AS D
ON E.DepartmentID = D.DepartmentID;

/*3. Find the names (first_name, last_name), job, 
department number, and department name of the employees 
who work in London. */

CREATE VIEW 'LondonJob' AS
SELECT (E.FirstName + ' ' + E.LastName) AS 'Name',
		E.JobID,
		D.DepartmentID,
		D.DepartmentName
FROM Employees AS E
INNER JOIN Departments AS D
ON E.DepartmentID = D.DepartmentID
INNER JOIN Locations AS L
ON D.LocationID = L.LocationID
WHERE L.City = 'London';



/*4. Write a query to find the employee id, 
name (last_name) along with their manager_id, 
manager name (last_name). */

SELECT E1.EmployeeID,
  E1.LastName AS EmployeeName,
  E1.ManagerID,
  E2.LastName AS ManagerName
FROM Employees AS E1
INNER JOIN Employees AS E2
ON E1.ManagerID = E2.EmployeeID


SELECT * FroM Employees

/*5. Find the names (first_name, last_name) and 
hire date of the employees who were hired after 'Jones'. */

SELECT (FirstName + ' ' + LastName) AS 'Name',
		HireDate
FROM Employees
WHERE HireDate > (SELECT HireDate
FROM Employees
WHERE LastName = 'Jones')


/*6. Write a query to get the department name and 
number of employees in the department. */

SELECT D.DepartmentName, Count(EmployeeID)
FROM Departments AS D
INNER JOIN Employees AS E
ON D.DepartmentID = E.DepartmentID
GROUP BY D.DepartmentID,D.DepartmentName;

/*7. Find the employee ID, job title, number of
days between ending date and starting date for 
all jobs in department 90 from job history. */

SELECT EmployeeID,JobID,DATEDIFF(DAY,StartDate,EndDate)
FROM JobHistory
WHERE DepartmentID =90;

/*8. Write a query to display the department ID, 
department name and manager first name. */

SELECT D.DepartmentID,D.DepartmentName,E.ManagerID,E.FirstName
FROM Departments AS D
INNER JOIN Employees AS E
ON D.DepartmentID = E.DepartmentID
GROUP BY D.DepartmentID,D.DepartmentName,E.ManagerID,E.FirstName;

/*9. Write a query to display the department name, 
manager name, and city. */

SELECT D.DepartmentName,E.FirstName,L.City
FROM Departments AS D
INNER JOIN Employees AS E
ON D.DepartmentID = E.DepartmentID
INNER JOIN Locations AS L
ON L.LocationID = D.LocationID
GROUP BY D.DepartmentID,D.DepartmentName,E.FirstName,L.City;

/*10. Write a query to display the job title and average 
salary of employees. */

SELECT JobID, AVG(Salary)
FROM Employees 
GROUP BY JobId;

/*11. Display job title, employee name, and the 
difference between salary of the employee and minimum
salary for the job. */

SELECT JobID,(FirstName + ' ' + LastName) AS Name,
		(Salary -(SELECT MIN(Salary) FROM Employees)) AS Diff
FROM Employees;

/*12. Write a query to display the job history that 
were done by any employee who is currently drawing more
than 10000 of salary. */

SELECT *
FROM JobHistory
WHERE EmployeeID IN (SELECT EmployeeID
FROM Employees
WHERE Salary > 10000);

/*13. Write a query to display department name, 
name (first_name, last_name), hire date, salary of the manager 
for all managers whose experience is more than 15 years. */

SELECT D.DepartmentName,(FirstName + ' ' + LastName) AS Name,
   E.HireDate,
   E.Salary
FROM Departments AS D
INNER JOIN Employees AS E
ON D.ManagerID = E.EmployeeID
WHERE DATEDIFF(YEAR,HireDate,GETDATE())>15;
