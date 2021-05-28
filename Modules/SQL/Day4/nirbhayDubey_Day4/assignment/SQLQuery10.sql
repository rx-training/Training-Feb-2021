USE AssignmentDay28;
GO

SELECT * FROM Employees
GO

--Write a query to rank employees based on their salary for a month
SELECT FirstName,DENSE_RANK() OVER (ORDER BY Salary DESC) AS 'Rank' FROM Employees
GO

--Select 4th Highest salary from employee table using ranking function
SELECT * FROM (SELECT FirstName,Salary,DENSE_RANK() OVER (ORDER BY Salary DESC) AS 'Rank1' FROM Employees) AS subtable WHERE Rank1=4
GO

--Get department, total salary with respect to a department from employee table.
SELECT DepartmentID,SUM(Salary) AS 'Total Salary' FROM Employees GROUP BY DepartmentID
GO

--Get department, total salary with respect to a department from employee table order by total salary descending
SELECT DepartmentID,SUM(Salary) AS 'Total Salary' FROM Employees GROUP BY DepartmentID ORDER BY SUM(Salary) DESC
GO

--Get department wise maximum salary from employee table order by salary ascending
SELECT DepartmentID,MAX(Salary) AS 'Max Salary' FROM Employees GROUP BY DepartmentID ORDER BY MAX(Salary)
GO

--Get department wise minimum salary from employee table order by salary ascending
SELECT DepartmentID,MIN(Salary) AS 'Min Salary' FROM Employees GROUP BY DepartmentID ORDER BY MIN(Salary)
GO

--Select department, total salary with respect to a department from employee table where total salary greater than 50000 order by TotalSalary descending
SELECT DepartmentID,SUM(Salary) AS 'TotalSalary' FROM Employees GROUP BY DepartmentID HAVING SUM(Salary)>50000 ORDER BY SUM(Salary) DESC
GO