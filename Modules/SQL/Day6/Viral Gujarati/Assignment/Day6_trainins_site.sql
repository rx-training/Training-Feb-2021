Use MyDB

/*Select employee details from employee table if data exists 
in incentive table ?*/

Select *  From Employees

SELECT *
FROM EmployeesDetail
WHERE EXISTS (SELECT *
			FROM Incentive)

/Find Salary of the employee whose salary is more than Roy Salary

SELECT FirstName,Salary
FROM EmployeesDetail
WHERE Salary >(SELECT Salary
				FROM EmployeesDetail
				WHERE FirstName = 'Roy')

/*Create a view to select FirstName,LastName,Salary,JoiningDate,
IncentiveDate and IncentiveAmount*/

CREATE VIEW EmpJoin AS
SELECT E.FirstName,
		E.LastName,
		E.Salary,
		E.JoiningDate,
		I.IncentiveDate,
		I.IncentiveAmount
FROM EmployeesDetail AS E
INNER JOIN Incentive AS I
ON E.EmployeeID = I.EmployeeRefId;

SELECT * FROM EmpJoin

/*Create a view to select Select first_name, incentive amount
from employee and incentives table for those employees who
have incentives and incentive amount greater than 3000*/

CREATE VIEW EmpIncentive AS
SELECT E.FirstName,
	   I.IncentiveAmount
FROM EmployeesDetail AS E
INNER JOIN Incentive AS I
ON E.EmployeeID = I.EmployeeRefId
WHERE I.IncentiveAmount>3000;

SELECT * FROM EmpIncentive






/*Create a View to Find the names (first_name, last_name),
job, department number, and department name of the employees
who work in London*/


CREATE VIEW Work AS
SELECT (E.FirstName + ' ' +E.LastName) AS Name,
		E.JobID,
		D.DepartmentID,
		D.DepartmentName
FROM Employees AS E
INNER JOIN Departments AS D
ON E.DepartmentID = D.DepartmentID
WHERE LocationID IN (SELECT LocationID
						FROM Locations AS L
						INNER JOIN Countries AS C
						ON L.CountryID = C.CountryID
						WHERE C.CountryName = 'London');

SELECT * FROM Work;

/*Create a View to get the department name and number of 
employees in the department.*/

CREATE VIEW EmpDepart AS
SELECT D.DepartmentName,
		COUNT(D.DepartmentID) AS NumberOfEmployees
FROM Departments AS D
INNER JOIN Employees AS E
ON D.DepartmentID = E.DepartmentID
GROUP BY D.DepartmentID,D.DepartmentName;

USE SQLDay6;
SELECT * FROM EmpDepart;
/*Find the employee ID, job title, number of days between
ending date and starting date for all jobs in department 
90 from job history.*/

SELECT E.EmployeeID,
		J.JobTitle,
		DATEDIFF(YEAR,J.StartDate,J.EndDate) AS DurationInYear
FROM Employees AS E
INNER JOIN JobHistory AS J
ON E.EmployeeID = J.EmployeeID
WHERE J.DepartmentID = 90;

/Write a View to display the department name, manager name, and city./

CREATE VIEW MangerDept AS
SELECT D.DepartmentName,
		E.FirstName AS ManagerName
FROM Employees AS E
INNER JOIN Departments AS D
ON E.DepartmentID = D.DepartmentID
WHERE E.EmployeeID IN (SELECT ManagerID
					FROM Departments)

SELECT * FROM MangerDept;
/*Create a View to display department name, name (first_name, last_name),
hire date, salary of the manager for all managers whose experience is 
more than 15 years.*/

SELECT D.DepartmentName,
	(E.FirstName + ' '+ E.LastName) AS Name,
	E.HireDate,
	E.Salary
FROM Employees AS E
INNER JOIN Departments AS D
ON E.DepartmentID = D.DepartmentID
WHERE E.EmployeeID IN (SELECT ManagerID
					FROM Departments)
					AND DATEDIFF(YEAR,E.HireDate,GETDATE()) >15;

