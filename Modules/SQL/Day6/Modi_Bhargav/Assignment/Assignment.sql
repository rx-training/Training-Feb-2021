                               /*********** Assigment ***********/
/***** 1. Select employee details from employee table if data exists in incentive table ?*****/
SELECT * FROM Employees WHERE exists (SELECT * FROM Incentive)
				
/***** 2. Find Salary of the employee whose salary is more than Roy Salary.*****/
SELECT EMPLOYEE_ID,FIRST_NAME,SALARY FROM Employees WHERE SALARY > (SELECT SALARY FROM Employees WHERE FIRST_NAME = 'Roy')

/***** 3. Create a view to select FirstName,LastName,Salary,JoiningDate,IncentiveDate and IncentiveAmount.*****/
CREATE VIEW EmployeeData AS 
            ( SELECT FIRST_NAME,LAST_NAME,SALARY,JOINING_DATE,INCENTIVE_DATE,INCENTIVE_AMOUNT FROM Employees JOIN Incentive  
               ON EMPLOYEE_ID = EMPLOYEE_REF_ID); 
SELECT * FROM EmployeeData

/***** 4. Create a view to select Select first_name, incentive amount from employee and incentives table for those employees who have incentives and incentive amount greater than 3000.*****/

CREATE VIEW EmployeeIncentive AS ( SELECT EMPLOYEE_ID,FIRST_NAME,INCENTIVE_AMOUNT FROM Employees JOIN Incentive  ON EMPLOYEE_ID = EMPLOYEE_REF_ID WHERE INCENTIVE_AMOUNT > 3000 ); 
SELECT * FROM EmployeeIncentive

/***** 5. Create a View to Find the names (first_name, last_name), job, department number, and department name of the employees who work in London *****/
 
       SELECT * FROM Locations
       SELECT * FROM Employees
	   SELECT * FROM Departments
       CREATE VIEW EmployeeLocation AS SELECT (e.FirstName + ' ' + e.LastName) AS Name ,e.JobId, d.DepartmentID, 
       d.DepartmentName FROM Employees AS e INNER JOIN Departments AS d 
       ON e.DepartmentID = d.DepartmentID
       WHERE LocationID IN(SELECT LocationID FROM Locations AS l WHERE l.City = 'London') 
 
       SELECT * FROM EmployeeLocation
 
/***** 6. Create a View to get the department name and number of employees in the department. *****/
 
        SELECT * FROM Departments

		CREATE VIEW DepartTypes AS (SELECT DepartmentName, COUNT(DepartmentID) AS TotalEmployees
        FROM Departments GROUP BY DepartmentID, DepartmentName)

        SELECT * FROM DepartTypes
 
/***** 7. Find the employee ID, job title, number of days between ending date and starting date for all jobs in department 90 from job history. *****/
 
       SELECT * FROM Employees
	   SELECT * FROM Departments
	   SELECT * FROM JobHistory
	   SELECT * FROM Locations

       SELECT EmployeeID,JobID , DATEDIFF(DAY,StartDate,EndDate) AS TotalDay FROM JobHistory WHERE DepartmentID = 90
 
/***** 8. Write a View to display the department name, manager name, and city. *****/
 
       CREATE VIEW EmpoyeeDepart AS SELECT d.DepartmentName, e.FirstName AS ManagerName,l.City
       FROM Departments AS d JOIN Employees AS e ON d.ManagerID = e.EmployeeID 
       JOIN Locations AS l ON d.LocationID = l.LocationID
  
      SELECT * FROM EmpoyeeDepart
 
/***** 9. Create a View to display department name, name (first_name, last_name), hire date, salary of the manager for all managers 
           whose experience is more than 15 years. *****/
 
        CREATE VIEW Experiance AS SELECT d.DepartmentName,(e.FirstName + ' ' + e.LastName) AS EmployeeName, e.HireDate,
        e.Salary,DATEDIFF(YEAR,e.HireDate,GETDATE()) AS Experiance FROM Departments AS d JOIN Employees AS e ON d.ManagerID = e.ManagerID 
        WHERE DATEDIFF(YEAR,e.HireDate,GETDATE()) > 15;
 
        SELECT * FROM Experiance





