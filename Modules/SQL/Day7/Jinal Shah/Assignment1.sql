
----------------Convert Day4 and Day5 Exercises with Derived Table.------------------------

			 -------------sqldb2 (DAY 4)----------------

/* (1) Write a query to rank employees based on their salary for a month */

	SELECT * FROM (SELECT RANK() OVER	(ORDER BY salary) [rank], * from Employees) AS DT1 
	WHERE Salary IS NOT NULL

/* (2) Select 4th Highest salary from employee table using ranking function */
	
	SELECT * FROM (SELECT FirstName,Salary,ROW_NUMBER() OVER (order by Salary) 'rnk' from Employees ) as DT2 
	where rnk=4

/* (3) Get department, total salary with respect to a department from employee table. */

	SELECT * FROM (SELECT DepartmentID,sum(Salary ) totalsal FROM Employees GROUP BY DepartmentID) as DT3

/* (4) Get department, total salary with respect to a department from employee table order by total salary descending */
	
	SELECT * FROM (SELECT DepartmentID,sum(Salary ) totalsal FROM Employees GROUP BY DepartmentID )
	as DT4 ORDER BY totalsal desc

/* (5) Get department wise maximum salary from employee table order by salary ascending */

	SELECT * FROM (SELECT DepartmentID,max(Salary ) maxsal FROM Employees GROUP BY DepartmentID )as DT5

/* (6) Get department wise minimum  salary from employee table order by salary ascending */

	SELECT * FROM (SELECT DepartmentID,min(Salary ) minsal FROM Employees GROUP BY DepartmentID ) AS DT6

/* (7) Select department, total salary with respect to a department from employee table where total salary 
	   greater than 50000 order by TotalSalary descending */

	SELECT * FROM
	(SELECT DepartmentID,sum(Salary) totalsal FROM Employees GROUP BY DepartmentID) as tb2  WHERE totalsal > 5000
	ORDER BY totalsal desc


		---------------------sqldb3_day5 (DAY 5)----------------

/* (1) Get difference between JOINING_DATE and INCENTIVE_DATE from employee and incentives table. */

	SELECT DATEDIFF(DAY,e.JoiningDate,i.IncentiveDate) FROM EmployeeDetails e JOIN 
	(SELECT EmployeeRefID,IncentiveDate FROM Incentives)AS i ON e.EmployeeID = i.EmployeeRefID

/* (2) Select first_name, incentive amount from employee and incentives table for those employees 
	who have incentives and incentive amount greater than 3000. */

	SELECT e.FirstName,i.IncentiveAmount FROM EmployeeDetails e JOIN 
	(SELECT EmployeeRefID,IncentiveAmount FROM Incentives)AS i ON e.EmployeeID = i.EmployeeRefID 
	WHERE i.IncentiveAmount > 3000

/* (3) Select first_name, incentive amount from employee and incentives table for all employees 
	even if they didn�t get incentives. */

	SELECT e.FirstName,i.IncentiveAmount FROM EmployeeDetails e LEFT OUTER JOIN 
	(SELECT IncentiveAmount,EmployeeRefID FROM Incentives)AS i ON e.EmployeeID = i.EmployeeRefID

/* (4) Select EmployeeName, ManagerName from the employee table. */

	SELECT m.FirstName as 'EmployeeName',e.FirstName as 'ManagerName' FROM EmployeeDetails e ,
	(SELECT FirstName,ManagerID FROM EmployeeDetails)AS m WHERE e.EmployeeID = m.ManagerID

/* (5) Select first_name, incentive amount from employee and incentives table for all employees even if 
	they didn�t get incentives and set incentive amount as 0 for those employees who didn�t get incentives. */

	SELECT FirstName,ISNULL(IncentiveAmount,0) AS 'IncentiveAmount' FROM EmployeeDetails e LEFT OUTER JOIN 
	(SELECT IncentiveAmount,EmployeeRefID FROM Incentives)AS i ON e.EmployeeID = i.EmployeeRefID 
