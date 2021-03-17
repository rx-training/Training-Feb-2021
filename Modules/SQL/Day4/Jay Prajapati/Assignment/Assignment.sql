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

SELECT FirstName,
		Salary 
FROM (SELECT FirstName,
		Salary, 
		RANK() OVER (ORDER BY Salary DESC) AS Rank
		FROM Employees) AS SR
WHERE Rank = 4;

/*Get department, total salary with respect to
a department from employee table.*/

SELECT DepartmentID,Sum(Salary)
FROM Employees
GROUP BY DepartmentID;

/*Get department, total salary with respect to a 
department from employee table order by total salary descending*/

SELECT DepartmentID,SUM(Salary) AS TotalSalary
FROM Employees
GROUP BY DepartmentID
ORDER BY TotalSalary DESC;

/*Get department wise maximum salary from employee 
table order by salary ascending*/

SELECT DepartmentID, MAX(Salary) As MaxSalary
FROM Employees
GROUP BY DepartmentID
ORDER BY MaxSalary;

/*Get department wise minimum salary from employee 
table order by salary ascending*/

SELECT DepartmentID, MIN(Salary) AS MinSalary
FROM Employees
GROUP BY DepartmentID
ORDER BY MinSalary;

/*Select department, total salary with respect to a 
department from employee table where total salary greater
than 50000 order by TotalSalary descending*/

SELECT DepartmentID,SUM(Salary) AS 'TotalSalary'
FROM Employees
GROUP BY DepartmentID
HAVING SUM(Salary) > 50000
ORDER BY TotalSalary DESC;