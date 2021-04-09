SELECT * FROM Employees;

--1. Write a query to rank employees based on their salary for a month:
SELECT FirstName ,Salary, DENSE_RANK() OVER(ORDER BY Salary DESC) "Rank" FROM Employees;

--2. Select 4th Highest salary from employee table using ranking function:

SELECT FirstName,Salary FROM ( SELECT FirstName,Salary ,RANK() OVER (ORDER BY Salary DESC) AS Rank FROM Employees) AS sal
WHERE Rank = 4;

--3.Get department, total salary with respect to a department from employee table.
SELECT * FROM Departments;
SELECT DepartmentID ,SUM(Salary) TOTALSAL FROM Employees GROUP BY DepartmentID;

--4.Get department, total salary with respect to a department from employee table order by total salary descending:
SELECT DepartmentID ,SUM(Salary) TOTALSAL FROM Employees GROUP BY DepartmentID
ORDER BY TOTALSAL DESC;

--5. Get department wise maximum salary from employee table order by salary ascending

SELECT DepartmentID ,MAX(Salary) MAXSAL FROM Employees GROUP BY DepartmentID ORDER BY MAXSAL ASC;

--6.   Get department wise minimum salary from employee table order by salary ascending:
SELECT DepartmentID ,MIN(Salary) MINSAL FROM Employees GROUP BY DepartmentID ORDER BY MINSAL ASC;

---7. Select department, total salary with respect to a department from employee table where total salary greater than 50000 order by TotalSalary descending

SELECT DepartmentID , SUM(Salary) TOTALSAL FROM Employees GROUP BY DepartmentID 
HAVING SUM(Salary) > 50000 ORDER BY TOTALSAL DESC;


