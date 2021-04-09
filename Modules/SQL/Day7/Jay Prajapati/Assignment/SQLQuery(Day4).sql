

--------------Day 4 Assignment --------
USE SQLDay2;

/*Write a query to rank employees based on their 
salary for a month*/

USE SQLDay2;
SELECT * FROM Employees;


SELECT FirstName,
		Salary,
		MONTH(HireDate) AS 'Month',
		RANK() OVER (PARTITION BY MONTH(HireDate) ORDER BY Salary)
FROM Employees;

/*Select 4th Highest salary from employee table 
using ranking function*/

WITH SAL (Name,Salary,SalaryRank)
AS
(
  SELECT FirstName,
      Salary,
	  ROW_NUMBER() OVER (ORDER BY Salary DESC) 
  FROM Employees
)
SELECT Name,Salary
FROM SAL
WHERE SalaryRank = 4;



/*Get department, total salary with respect to
a department from employee table.*/
USE SQLDay6;


WITH SAL(DepartmentID,TotalSalary)
AS (
	SELECT DepartmentID,
		SUM(Salary)
	FROM Employees
	GROUP BY DepartmentID
),
	DEPT(DepartmentID,DepartmentName)
 AS
(
   SELECT DepartmentID,
   DepartmentName
   FROM Departments
)
SELECT D.DepartmentName,
S.TotalSalary
FROM SAL AS S
INNER JOIN DEPT D
ON S.DepartmentID=D.DepartmentID;





/*Get department, total salary with respect to a 
department from employee table order by total salary descending*/

WITH SAL(DepartmentID,TotalSalary)
AS (
	SELECT DepartmentID,
		SUM(Salary)
	FROM Employees
	GROUP BY DepartmentID
),
	DEPT(DepartmentID,DepartmentName)
 AS
(
   SELECT DepartmentID,
   DepartmentName
   FROM Departments
) 
SELECT D.DepartmentName,
S.TotalSalary
FROM SAL AS S
INNER JOIN DEPT D
ON S.DepartmentID=D.DepartmentID
ORDER BY TotalSalary DESC;


/*Get department wise maximum salary from employee 
table order by salary ascending*/


WITH SAL(DepartmentID,MaxSalary)
AS (
	SELECT DepartmentID,
		MAX(Salary)
	FROM Employees
	GROUP BY DepartmentID
),
	DEPT(DepartmentID,DepartmentName)
 AS
(
   SELECT DepartmentID,
   DepartmentName
   FROM Departments
) 
SELECT D.DepartmentName,
S.MaxSalary
FROM SAL AS S
INNER JOIN DEPT D
ON S.DepartmentID=D.DepartmentID
ORDER BY MaxSalary ASC;


/*Get department wise minimum salary from employee 
table order by salary ascending*/


WITH SAL(DepartmentID,MinSalary)
AS (
	SELECT DepartmentID,
		MIN(Salary)
	FROM Employees
	GROUP BY DepartmentID
),
	DEPT(DepartmentID,DepartmentName)
 AS
(
   SELECT DepartmentID,
   DepartmentName
   FROM Departments
) 
SELECT D.DepartmentName,
S.MinSalary
FROM SAL AS S
INNER JOIN DEPT D
ON S.DepartmentID=D.DepartmentID
ORDER BY MinSalary ASC;


/*Select department, total salary with respect to a 
department from employee table where total salary greater
than 50000 order by TotalSalary descending*/

WITH SAL(DepartmentID,TotalSalary)
AS (
	SELECT DepartmentID,
		SUM(Salary)
	FROM Employees
	GROUP BY DepartmentID
),
	DEPT(DepartmentID,DepartmentName)
 AS
(
   SELECT DepartmentID,
   DepartmentName
   FROM Departments
) 
SELECT D.DepartmentName,
S.TotalSalary
FROM SAL AS S
INNER JOIN DEPT D
ON S.DepartmentID=D.DepartmentID
WHERE TotalSalary>50000
ORDER BY TotalSalary DESC;





