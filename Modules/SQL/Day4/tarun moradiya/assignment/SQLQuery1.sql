--Write a query to rank employees based on their salary for a month

SELECT RANK() OVER (ORDER BY Salary) 'RSalary', Salary
FROM Employees

--Select 4th Highest salary from employee table using ranking function

SELECT *  
FROM(SELECT ROW_NUMBER() OVER (ORDER BY Salary DESC) 'Rno', Salary 
	FROM Employees
	) AS Emps
WHERE Rno = 4

--Get department, total salary with respect to a department from employee table.

SELECT DepartmentID, SUM(Salary) AS 'TotalSalary'
FROM Employees
GROUP BY DepartmentID

--Get department, total salary with respect to a department from employee table order by total salary descending

SELECT * 
FROM (SELECT DepartmentID, SUM(Salary) AS 'TotalSalary'
	FROM Employees
	GROUP BY DepartmentID) AS Emps
ORDER BY TotalSalary DESC

--Get department wise maximum salary from employee table order by salary ascending

SELECT * 
FROM (SELECT DepartmentID, MAX(Salary) AS 'MaxSalary'
	FROM Employees
	GROUP BY DepartmentID) AS Emps
ORDER BY MaxSalary

--Get department wise minimum salary from employee table order by salary ascending

SELECT * 
FROM (SELECT DepartmentID, MIN(Salary) AS 'MinSalary'
	FROM Employees
	GROUP BY DepartmentID) AS Emps
ORDER BY MinSalary

--Select department, total salary with respect to a department from employee table where 
--total salary greater than 50000 order by TotalSalary descending

SELECT * 
FROM (SELECT DepartmentID, SUM(Salary) AS 'TotalSalary'
	FROM Employees
	GROUP BY DepartmentID) AS Emps
WHERE TotalSalary > 5000
ORDER BY TotalSalary DESC