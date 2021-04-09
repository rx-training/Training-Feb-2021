--Day4

USE MyDB

/*Write a query to rank employees based on their 
salary for a month*/

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

--Day5
/*Get difference between JOINING_DATE and INCENTIVE_DATE from employee and incentives table. */
--USING DERIVED TABLE

USE MyDB


SELECT * FROM
(
	SELECT f.FirstName,f.HireDate,i.IncentiveDate,
	DATEDIFF(dd,f.HireDate,i.IncentiveDate) 
	AS 'Incintive After'
	FROM Employees f
	JOIN Incentive i
	ON f.EmployeeId = i.EmployeeRefId
)tb1;


/*Select first_name, incentive amount from employee and incentives table for those
employees who have incentives and incentive amount greater than 3000. */


-- USING CTE

WITH IncentiveAmount(FirstName,IncentiveAmount)
AS
(
	SELECT e.FirstName, i.IncentiveAmount
	FROM Employees e
	JOIN Incentive i
	ON e.EmployeeId = i.EmployeeRefId
)
SELECT * FROM IncentiveAmount WHERE IncentiveAmount>3000;

/* Select first_name, incentive amount from employee and incentives table for
all employees even if they didn't get incentives. */

-- USING DERIVED TABLE

SELECT	* FROM
(
	SELECT e.FirstName, i.IncentiveAmount
	FROM Employees e
	LEFT OUTER JOIN Incentive i
	ON e.EmployeeId = i.EmployeeRefId
)tb1;


/* Select EmployeeName, ManagerName from the employee table. */
-- USING CTE

WITH Managers
AS
(
	SELECT e.FirstName+' '+e.LastName 'Employee Name', b.FirstName +' '+b.LastName 'Manager Name'
	FROM Employees e 
	LEFT OUTER JOIN Employees b ON b.EmployeeId= e.ManagerId
)
SELECT * FROM Managers;

/*Select first_name, incentive amount from employee and incentives table for all
employees even if they didn't get incentives and set incentive amount as 0 for those 
employees who didn't get incentives.*/

-- USING DERIVED TABLE

SELECT * FROM
(
	SELECT e.FirstName, ISNULL(i.IncentiveAmount,0)'Incentive_Amount'
	FROM Employees e
	LEFT OUTER JOIN Incentive i
	ON e.EmployeeId = i.EmployeeRefId
)tb1;


