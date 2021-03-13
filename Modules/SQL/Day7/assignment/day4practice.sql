--SUM, COUNT, AVG, MIN, MAX
WITH MySalary (SumSalary, CountAll, CountSalary, AVGSalary, MaxSalary, MinSalary)
AS(
SELECT SUM(Salary) AS 'SumSalary' 
	, COUNT(*) AS 'CountAll'
	, COUNT(Salary) AS 'CountSalary' --DOES NOT COUNT NULL
	, AVG(Salary) AS 'AVGSalary'
	, MAX(Salary) AS 'MaxSalary'
	, MIN(Salary) AS 'MinSalary'
FROM Employees
)
SELECT * FROM MySalary
GO
--GROUP BY

WITH MyDep (SumSalary, DepartmentID, ManagerID)
AS(
SELECT SUM(Salary) AS 'SumSalary' 
	, DepartmentID, ManagerID
FROM Employees
GROUP BY DepartmentID, ManagerID)
SELECT * FROM MyDep
GO

WITH MyDep (SumSalary, DepartmentID, ManagerID)
AS(
SELECT SUM(Salary) AS 'SumSalary' 
	, DepartmentID, ManagerID
FROM Employees
GROUP BY ManagerID, DepartmentID)
SELECT * FROM MyDep
GO

--ROLL UP

WITH MyDep (SumSalary, DepartmentID, ManagerID)
AS(
SELECT SUM(Salary) AS 'SumSalary' 
	, DepartmentID, ManagerID
FROM Employees
GROUP BY ROLLUP(ManagerID, DepartmentID))
SELECT * FROM MyDep
GO

--CUBE

WITH MyDep (SumSalary, DepartmentID, ManagerID)
AS(
SELECT SUM(Salary) AS 'SumSalary' 
	, DepartmentID, ManagerID
FROM Employees
GROUP BY CUBE(ManagerID, DepartmentID))
SELECT * FROM MyDep
GO

--GROUPING SETS

WITH MyDep (SumSalary, DepartmentID, ManagerID)
AS(
SELECT SUM(Salary) AS 'SumSalary' 
	, DepartmentID, ManagerID
FROM Employees
GROUP BY GROUPING SETS ( CUBE(ManagerID, DepartmentID), ROLLUP(ManagerID, DepartmentID) ))
SELECT * FROM MyDep
GO

--HAVING (AGREGATE FUNCTIONS CAN NOT BE USED IN WHERE SO WE USE HAVING)

WITH MyDep (SumSalary, DepartmentID)
AS(
SELECT SUM(Salary) AS 'SumSalary' 
	, DepartmentID
FROM Employees
GROUP BY DepartmentID
HAVING SUM(Salary) > 2000)
SELECT * FROM MyDep
GO

--SELECT INTO (TO CREATE NEW TABLE USING OLDER TABLE)

SELECT CONCAT(FirstName, ' ', LastName) AS 'FullName'
	, Email
	, Salary
INTO NewEmps
FROM Employees
GO

WITH NewEmps (FullName, Email, Salary)
AS(
SELECT CONCAT(FirstName, ' ', LastName) AS 'FullName'
	, Email
	, Salary
FROM Employees)



SELECT * FROM NewEmps

GO