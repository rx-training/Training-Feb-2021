--subqueries

SELECT *
FROM Employees
WHERE Salary > (SELECT avg(Salary) 
	FROM Employees)
GO

--IN

SELECT *
FROM Employees
WHERE FirstName IN (SELECT FirstName 
	FROM Employees
	WHERE Salary > 20000)
GO

--EXIST

SELECT *
FROM Employees
WHERE EXISTS (SELECT FirstName 
	FROM Employees
	WHERE Salary > 20000)
GO

--NESTED SUBQUERIES

SELECT *
FROM Employees
WHERE EmployeeID IN (SELECT EmployeeID 
	FROM Employees
	WHERE  EXISTS (SELECT FirstName 
	FROM Employees
	WHERE Salary > 20000))
GO

--CORELATED SUBQUERIES

SELECT * , (SELECT  DepartmentName
	FROM Departments 
	WHERE E.DepartmentID = DepartmentID) AS DeparmentName
FROM Employees E 
GO

--VIEW

CREATE VIEW EmpDepartment
AS
SELECT FirstName, LastName , (SELECT  DepartmentName
	FROM Departments 
	WHERE E.DepartmentID = DepartmentID) AS DeparmentName
FROM Employees E 
GO

--ALTER VIEW

ALTER VIEW EmpDepartment
AS
SELECT CONCAT(FirstName, ' ', LastName) 'Name'
	, (SELECT  DepartmentName
	FROM Departments 
	WHERE E.DepartmentID = DepartmentID) AS DeparmentName
FROM Employees E 
GO