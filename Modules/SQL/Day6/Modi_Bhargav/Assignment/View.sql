                                             /********** Assignment View **********/
/***** 1. Write a query to find the addresses (location_id, street_address, city, state_province, country_name) of all
       the departments.*****/
	   SELECT * FROM Locations

       CREATE VIEW EmpAddress AS 
	   SELECT DepartmentID,l.LocationID,l.StreetAddress,l.City,l.PostalCode,l.StateProvince,l.CountryID 
       FROM Departments d JOIN Locations l ON l.LocationID = d.LocationID;

       SELECT * FROM EmpAddress;

/***** 2. Write a query to find the names (first_name, last name), department ID and name of all the employees. *****/
       CREATE VIEW EmpNames AS
       SELECT (FirstName+' '+LastName) AS EmpName, d.DepartmentID, d.DepartmentName FROM Employees e
       JOIN Departments d ON d.DepartmentID = e.DepartmentID;

       SELECT * FROM EmpNames;

/***** 3. Find the names (first_name, last_name), job, department number, and department name of the employees who work in London. *****/

      CREATE VIEW EmpLocation AS
      SELECT (FirstName +' '+ LastName) AS EmpName,e.JobId, d.DepartmentID, d.DepartmentName FROM Employees e
      JOIN Departments d ON d.DepartmentID = e.DepartmentID
      JOIN Locations l ON l.LocationID = d.LocationID WHERE l.City = 'London';

      SELECT * FROM EmpLocation;

/***** 4. Write a query to find the employee id, name (last_name) along with their manager_id, manager name (last_name). *****/
      CREATE VIEW EmpManager AS
      SELECT e.EmployeeID, e.LastName AS EmployeeName,e.ManagerID, d.LastName AS ManagerName FROM Employees e
      JOIN Employees d ON e.EmployeeID = d.ManagerID;

      SELECT * FROM EmpManager;

/***** 5. Find the names (first_name, last_name) and hire date of the employees who were hired after 'Jones'. *****/
       CREATE VIEW EmpHired AS
       SELECT FirstName, LastName, HireDate FROM Employees e 
	   WHERE HireDate > (SELECT HireDate FROM Employees WHERE LastName = 'Jones');

	   SELECT * FROM EmpHired;

/***** 6. Write a query to get the department name and number of employees in the department. *****/

       CREATE VIEW EmpDepart AS
       SELECT d.DepartmentName, COUNT(e.EmployeeID) AS TotalEmp FROM Employees e JOIN 
       Departments d ON d.DepartmentID = e.DepartmentID GROUP BY DepartmentName;

       SELECT * FROM EmpDepart;

/***** 7.Find the employee ID, job title, number of days between ending date and starting date for all jobs in department 90 from
       job history. *****/

       CREATE VIEW EmpHistory AS
       SELECT EmployeeID, JobID, DATEDIFF(DAY, StartDate, EndDate) AS Days FROM JobHistory WHERE DepartmentID = 90;

       SELECT * FROM EmpHistory;

/***** 8. Write a query to display the department ID, department name and manager first name.*****/ 

        CREATE VIEW Department AS
        SELECT e.FirstName, d.DepartmentID, d.DepartmentName FROM Employees e 
		JOIN Departments d ON d.ManagerID = e.EmployeeID

        SELECT * FROM Department;

/***** 9. Write a query to display the department name, manager name, and city. *****/

       CREATE VIEW EmpCity AS
       SELECT e.FirstName AS ManagerName, d.DepartmentName, l.City FROM Employees e 
       JOIN Departments d ON d.ManagerID = e.EmployeeID 
	   JOIN Locations l ON L.LocationID = d.LocationID;

       SELECT * FROM EmpCity;

/***** 10. Write a query to display the job title and average salary of employees. *****/

        CREATE VIEW EmpSalary AS
        SELECT e.JobId, AVG(Salary) AS AvgSalary FROM Employees e GROUP BY JobId;

        SELECT * FROM EmpSalary;

/***** 11. Display job title, employee name, and the difference between salary of the employee and minimum salary for the job. *****/
               SELECT * FROM Employees

       CREATE VIEW EmpJob AS
       SELECT e.FirstName,e.JobId, d.DepartmentName,(e.Salary - (SELECT MIN(Salary) FROM Employees m2 WHERE m2.JobId = e.JobId)) AS Difference, 
       (SELECT MIN(Salary) FROM Employees e2 WHERE e2.JobId = e.JobId) AS MinSalary 
       FROM Employees e JOIN Departments d ON d.DepartmentId = e.DepartmentId ;

       SELECT * FROM EmpJob;


/***** 12. Write a query to display the job history that were done by any employee who is currently drawing more than 10000 of salary.*****/ 
       CREATE VIEW EmpDraw AS
       SELECT j.* FROM JobHistory j JOIN Employees e ON E.EmployeeID = j.EmployeeID WHERE Salary > 10000;

       SELECT * FROM EmpDraw;

/***** 13. Write a query to display department name, name (first_name, last_name), hire date, salary of the manager for all
       managers whose experience is more than 15 years. *****/

      CREATE VIEW EmpMan AS
      SELECT (e.FirstName + ' ' + e.LastName) AS EmpName, d.DepartmentName,e.HireDate,e.Salary FROM Employees e 
	  JOIN Departments d ON d.DepartmentID = e.DepartmentID WHERE DATEDIFF(YEAR, HireDate, GETDATE()) > 15;

      SELECT * FROM EmpMan;
