--SUM, COUNT, AVG, MIN, MAX

SELECT SUM(Salary) AS 'SumSalary' 
	, COUNT(*) AS 'CountAll'
	, COUNT(Salary) AS 'CountSalary' --DOES NOT COUNT NULL
	, AVG(Salary) AS 'AVGSalary'
	, MAX(Salary) AS 'MaxSalary'
	, MIN(Salary) AS 'MinSalary'
FROM Employees

--GROUP BY

SELECT SUM(Salary) AS 'SumSalary' 
	, DepartmentID, ManagerID
FROM Employees
GROUP BY DepartmentID, ManagerID


SELECT SUM(Salary) AS 'SumSalary' 
	, DepartmentID, ManagerID
FROM Employees
GROUP BY ManagerID, DepartmentID

--ROLL UP

SELECT SUM(Salary) AS 'SumSalary' 
	, DepartmentID, ManagerID
FROM Employees
GROUP BY ROLLUP(ManagerID, DepartmentID)

--CUBE

SELECT SUM(Salary) AS 'SumSalary' 
	, DepartmentID, ManagerID
FROM Employees
GROUP BY CUBE(ManagerID, DepartmentID)

--GROUPING SETS

SELECT SUM(Salary) AS 'SumSalary' 
	, DepartmentID, ManagerID
FROM Employees
GROUP BY GROUPING SETS ( CUBE(ManagerID, DepartmentID), ROLLUP(ManagerID, DepartmentID) )

--HAVING (AGREGATE FUNCTIONS CAN NOT BE USED IN WHERE SO WE USE HAVING)

SELECT SUM(Salary) AS 'SumSalary' 
	, DepartmentID
FROM Employees
GROUP BY DepartmentID
HAVING SUM(Salary) > 2000

--SELECT INTO (TO CREATE NEW TABLE USING OLDER TABLE)

SELECT CONCAT(FirstName, ' ', LastName) AS 'FullName'
	, Email
	, Salary
INTO NewEmps
FROM Employees

SELECT * FROM NewEmps