SELECT * FROM Employees
GO

SELECT FirstName,DENSE_RANK() OVER (ORDER BY Salary DESC) AS 'Rank' FROM Employees
GO

SELECT * FROM (SELECT FirstName,Salary,DENSE_RANK() OVER (ORDER BY Salary DESC) AS 'Rank1' FROM Employees) AS subtable WHERE Rank1=4
GO

SELECT DepartmentID,SUM(Salary) AS 'Total Salary' FROM Employees GROUP BY DepartmentID
GO

SELECT DepartmentID,SUM(Salary) AS 'Total Salary' FROM Employees GROUP BY DepartmentID ORDER BY SUM(Salary) DESC
GO

SELECT DepartmentID,MAX(Salary) AS 'Max Salary' FROM Employees GROUP BY DepartmentID ORDER BY MAX(Salary)
GO

SELECT DepartmentID,MIN(Salary) AS 'Max Salary' FROM Employees GROUP BY DepartmentID ORDER BY MIN(Salary)
GO

SELECT DepartmentID,SUM(Salary) AS 'TotalSalary' FROM Employees GROUP BY DepartmentID HAVING SUM(Salary)>50000 ORDER BY SUM(Salary) DESC
GO