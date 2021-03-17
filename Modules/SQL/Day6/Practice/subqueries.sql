
SELECT * FROM Employees
SELECT * FROM Departments
SELECT* FROM Locations

SELECT  CONCAT(FirstName,' ',LastName) AS NAMES,Salary FROM Employees
WHERE Salary >
(SELECT Salary FROM Employees WHERE LastName LIKE 'BULL')
GO

SELECT CONCAT(FirstName,' ',LastName) AS NAMES FROM Employees
WHERE DepartmentID = 
(SELECT DepartmentID FROM Departments WHERE DepartmentName LIKE 'IT')
GO

SELECT CONCAT(FirstName,' ',LastName) AS NAMES FROM Employees
WHERE EXISTS
(SELECT DepartmentID FROM Departments WHERE EXISTS
(SELECT LocationID FROM Locations WHERE CountryID LIKE 'US'))
GO

SELECT CONCAT(FirstName,' ',LastName) AS NAMES 
FROM Employees
WHERE (EmployeeID IN (SELECT ManagerID FROM Employees));

SELECT CONCAT(FirstName,' ',LastName) AS NAMES , Salary
FROM Employees HAVING Salary>AVG(SALARY)
GO



