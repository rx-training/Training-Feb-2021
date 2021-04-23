USE AssignmentDay31;
GO

--------DAY4 TASK with 'WITH' Clause and Derived Table--------------

--using 'WITH'
WITH Rank_Employee (FirstName,Salary,Rank1) AS
(
	SELECT
		FirstName,
		Salary,
		DENSE_RANK() OVER (ORDER BY Salary DESC)
	FROM Day4.Employees
)
--1. Write a query to rank employees based on their salary for a month
SELECT * FROM Rank_Employee;
GO
--2. Select 4th Highest salary from employee table using ranking function
SELECT * FROM Rank_Employee WHERE Rank1=4;
GO


--using 'WITH'
WITH DeptSal(DepartmentID,TotalSalary,MinSalary,MaxSalary) As
(
SELECT 
	DepartmentID,
	SUM(Salary),
	Min(Salary), 
	Max(Salary)
FROM Day4.Employees GROUP BY DepartmentID 
)
--3. Get department, total salary with respect to a department from employee table.
SELECT DepartmentID,Totalsalary FROM DeptSal;
GO
--4. Get department, total salary with respect to a department from employee table order by total salary descending
SELECT DepartmentID,Totalsalary FROM DeptSal ORDER BY TotalSalary DESC;
GO
--5. Get department wise maximum salary from employee table order by salary ascending
SELECT DepartmentID,MaxSalary FROM DeptSal ORDER BY MaxSalary;
GO
--6. Get department wise minimum salary from employee table order by salary ascending
SELECT DepartmentID,MinSalary FROM DeptSal ORDER BY MinSalary;
GO
--7. Select department, total salary with respect to a department from employee table where total salary greater than 50000 order by TotalSalary descending
SELECT DepartmentID,TotalSalary FROM DeptSal WHERE TotalSalary>50000 ORDER BY TotalSalary DESC
GO



--using 'Derrived'
--2. Select 4th Highest salary from employee table using ranking function
SELECT * 
FROM (SELECT FirstName,Salary,DENSE_RANK() OVER (ORDER BY Salary DESC) AS 'Rank1' FROM Day4.Employees) AS subtable 
WHERE Rank1=4;
GO
--4. Get department, total salary with respect to a department from employee table order by total salary descending
SELECT * 
FROM (SELECT DepartmentID,SUM(Salary) AS 'TotalSalary' FROM Day4.Employees GROUP BY DepartmentID) AS subTAb 
ORDER BY subTAb.TotalSalary DESC;
GO
