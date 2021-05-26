
      -------------sqldb2----------------


/* Write a query to rank employees based on their salary for a month */
	SELECT RANK() OVER	(ORDER BY salary) [rank], * from Employees

/* Select 4th Highest salary from employee table using ranking function */
	select * from (select FirstName, Salary, dense_rank() over(order by Salary desc)  from Employees) where r=&4;

	select top(4) Salary,FirstName,Salary from Employees

	SELECT Salary,FirstName,ROW_NUMBER() OVER (order by Salary) 'rnk' from Employees ORDER BY Salary

	SELECT * FROM 
	(SELECT FirstName,Salary,ROW_NUMBER() OVER (order by Salary) 'rnk' from Employees ) as tb1 where rnk=4

/* Get department, total salary with respect to a department from employee table. */
	
	SELECT * FROM Employees

	SELECT DepartmentID,sum(Salary ) totalsal FROM Employees GROUP BY DepartmentID

/* Get department, total salary with respect to a department from employee table order by total salary descending */
	
	SELECT * FROM Employees

	SELECT DepartmentID,sum(Salary ) totalsal FROM Employees GROUP BY DepartmentID ORDER BY totalsal desc

/* Get department wise maximum salary from employee table order by salary ascending */

	SELECT DepartmentID,max(Salary ) maxsal FROM Employees GROUP BY DepartmentID 

/* Get department wise minimum  salary from employee table order by salary ascending */

	SELECT DepartmentID,min(Salary ) minsal FROM Employees GROUP BY DepartmentID 

/* Select department, total salary with respect to a department from employee table where total salary 
	greater than 50000 order by TotalSalary descending */

	SELECT * FROM
	(SELECT DepartmentID,sum(Salary) totalsal FROM Employees GROUP BY DepartmentID) as tb2  WHERE totalsal > 5000
	ORDER BY totalsal desc

	