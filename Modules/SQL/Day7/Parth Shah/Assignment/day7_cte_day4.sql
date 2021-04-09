---day 7 tasks 
 

																	---day 4  tasks using cte--


 USE Practice;

--1. Write a query to rank employees based on their salary for a month:


 WITH EX1 (FirstName,Salary,RANK) AS 
 (
 SELECT FirstName ,Salary, DENSE_RANK() OVER(ORDER BY Salary DESC) "Rank" FROM Employees AS EMP
 )
 SELECT * FROM EX1;

--2. Select 4th Highest salary from employee table using ranking function:

WITH EX2 (FirstName,Salary) AS
(
SELECT FirstName,Salary FROM ( SELECT FirstName,Salary ,RANK() OVER (ORDER BY Salary DESC) AS Rank FROM Employees) AS sal
WHERE Rank = 4
)
SELECT * FROM EX2;

--3.Get department, total salary with respect to a department from employee table.

WITH EX3 (DepartmentID,TOTALSAL) AS 
(
SELECT DepartmentID ,SUM(Salary) TOTALSAL FROM Employees GROUP BY DepartmentID
)
SELECT * FROM EX3;


--4 Get department, total salary with respect to a department from employee table order by total salary descending:

WITH EX4 ( DepartmentID ,TOTALSAL) AS 
(
SELECT DepartmentID ,SUM(Salary) TOTALSAL FROM Employees GROUP BY DepartmentID

)
SELECT * FROM EX4 ORDER BY TOTALSAL DESC ;


--5. Get department wise maximum salary from employee table order by salary ascending:

WITH EX5 (DepartmentID,MAXSAL) AS
(
SELECT DepartmentID ,MAX(Salary) MAXSAL FROM Employees GROUP BY DepartmentID 
)
SELECT * FROM EX5 ORDER BY MAXSAL ASC;

--6.  Get department wise minimum salary from employee table order by salary ascending:

WITH EX6 (DepartmentID, MINSAL) AS 
(
SELECT DepartmentID ,MIN(Salary) MINSAL FROM Employees GROUP BY DepartmentID
)
SELECT * FROM EX6  ORDER BY MINSAL ASC;


--7. Select department, total salary with respect to a department from employee table where total salary greater than 50000 order by TotalSalary descending

WITH EX7 (DepartmentID,TOTALSAL) AS
(
SELECT DepartmentID , SUM(Salary) TOTALSAL FROM Employees GROUP BY DepartmentID HAVING SUM(Salary) > 50000

)
SELECT * FROM EX7 ORDER BY TOTALSAL DESC;



 
													---Day 4 task using derived table -----


--1. Write a query to rank employees based on their salary for a month:

SELECT * FROM (SELECT FirstName ,Salary, DENSE_RANK() OVER(ORDER BY Salary DESC) [Rank] FROM Employees) [EmpSalary] WHERE Salary IS NOT NULL;

--2. Select 4th Highest salary from employee table using ranking function:

SELECT * FROM ( SELECT FirstName,Salary ,RANK() OVER (ORDER BY Salary DESC) AS Rank FROM Employees) 
 [EmpSalary] WHERE Rank = 4 ;


--3.Get department, total salary with respect to a department from employee table.


SELECT * FROM (SELECT DepartmentID ,SUM(Salary) TOTALSAL FROM Employees GROUP BY DepartmentID) [EmpDpt];


--4.  Get department, total salary with respect to a department from employee table order by total salary descending:

SELECT * FROM (SELECT DepartmentID ,SUM(Salary) TOTALSAL FROM Employees GROUP BY DepartmentID)[EmpDpt] 
ORDER BY TOTALSAL DESC;


--5. Get department wise maximum salary from employee table order by salary ascending:

SELECT * FROM (SELECT DepartmentID ,MAX(Salary) MAXSAL FROM Employees GROUP BY DepartmentID)[EmpDpt]  ORDER BY MAXSAL ASC;

--6. Get department wise minimum salary from employee table order by salary ascending:

SELECT * FROM (SELECT DepartmentID ,MIN(Salary) MINSAL FROM Employees GROUP BY DepartmentID)[EmptDpt] ORDER BY MINSAL ASC;


--7.  Select department, total salary with respect to a department from employee table where total salary greater than 50000 order by TotalSalary descending:

SELECT * FROM (SELECT DepartmentID , SUM(Salary) TOTALSAL FROM Employees GROUP BY DepartmentID 
HAVING SUM(Salary) > 50000 ) [EmpDpt] ORDER BY TOTALSAL DESC;
