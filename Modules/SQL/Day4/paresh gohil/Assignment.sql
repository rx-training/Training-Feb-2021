USE Students

SELECT * FROM Employees

/*Day 4*/

/*Write a query to rank employees based on their salary for a month*/

	SELECT Salary,HireDate, RANK() OVER (PARTITION BY DATEPART(MM,HireDate) ORDER BY Salary) as 'Rank' FROM Employees

/*Select 4th Highest salary from employee table using ranking function*/

	SELECT * FROM (SELECT Salary, DENSE_RANK() OVER (ORDER BY Salary DESC) as 'Rank4' FROM Employees) Rank4 WHERE  Rank4 = 4

/*Get department, total salary with respect to a department from employee table.*/

	SELECT DepartmentID,SUM(Salary) as 'Total',COUNT(Salary) as 'Count' FROM Employees GROUP BY DepartmentID

/*Get department, total salary with respect to a department from employee table order by total salary descending*/

	SELECT * FROM (SELECT DepartmentID,SUM(Salary) as 'Total',COUNT(Salary) as 'Count' FROM Employees GROUP BY DepartmentID) Total ORDER BY Total DESC

/*Get department wise maximum salary from employee table order by salary ascending*/

	SELECT * FROM (SELECT DepartmentID,MAX(Salary) as 'Maximum' FROM Employees GROUP BY DepartmentID) Muximum ORDER BY Maximum

/*Get department wise minimum salary from employee table order by salary ascending*/

	SELECT * FROM (SELECT DepartmentID,MIN(Salary) as 'Minimum' FROM Employees GROUP BY DepartmentID) Minimum ORDER BY Minimum
	 
/*Select department, total salary with respect to a department from employee table where total salary greater than 50000 order by TotalSalary descending*/

	SELECT * FROM (SELECT DepartmentID,SUM(Salary) as 'Total' FROM Employees GROUP BY DepartmentID) Total WHERE Total > 50000 ORDER BY Total DESC
