--Write a query to rank employees based on their salary for a month

WITH Ranks (RSalary, Salary)
AS
(
SELECT RANK() OVER (ORDER BY Salary) 'RSalary', Salary
FROM Employees
)
SELECT * FROM Ranks
GO
--Select 4th Highest salary from employee table using ranking function



WITH RowNo (Rno, Salary)
AS
(
SELECT *  
FROM(SELECT ROW_NUMBER() OVER (ORDER BY Salary DESC) 'Rno', Salary 
	FROM Employees
	) AS Emps
WHERE Rno = 4
)
SELECT * FROM RowNo
GO

--Get department, total salary with respect to a department from employee table.



WITH Total (DepartmentID, TotalSalary)
AS
(
SELECT DepartmentID, SUM(Salary) AS 'TotalSalary'
FROM Employees
GROUP BY DepartmentID
)
SELECT * FROM Total
GO

--Get department, total salary with respect to a department from employee table order by total salary descending



WITH Total (DepartmentID, TotalSalary)
AS
(
SELECT * 
FROM (SELECT DepartmentID, SUM(Salary) AS 'TotalSalary'
	FROM Employees
	GROUP BY DepartmentID) AS Emps
)
SELECT * FROM Total
ORDER BY TotalSalary DESC
GO

--Get department wise maximum salary from employee table order by salary ascending




WITH Total (DepartmentID, MaxSalary)
AS
(
SELECT * 
FROM (SELECT DepartmentID, MAX(Salary) AS 'MaxSalary'
	FROM Employees
	GROUP BY DepartmentID) AS Emps
)
SELECT * FROM Total
ORDER BY MaxSalary
GO

--Get department wise minimum salary from employee table order by salary ascending



WITH Total (DepartmentID, MinSalary)
AS
(
SELECT * 
FROM (SELECT DepartmentID, MIN(Salary) AS 'MinSalary'
	FROM Employees
	GROUP BY DepartmentID) AS Emps
)
SELECT * FROM Total
ORDER BY MinSalary
GO

--Select department, total salary with respect to a department from employee table where 
--total salary greater than 50000 order by TotalSalary descending



WITH Total (DepartmentID, TotalSalary)
AS
(
SELECT * 
FROM (SELECT DepartmentID, SUM(Salary) AS 'TotalSalary'
	FROM Employees
	GROUP BY DepartmentID) AS Emps
WHERE TotalSalary > 5000
)
SELECT * FROM Total
ORDER BY TotalSalary DESC
GO