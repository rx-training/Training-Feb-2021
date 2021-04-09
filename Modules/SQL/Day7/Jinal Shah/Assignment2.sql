
----------------Convert Day4 and Day5 Exercises with CTE------------------------

			 -------------sqldb2 (DAY 4)----------------

/* (1) Write a query to rank employees based on their salary for a month */

		WITH cte1(Salary,HireDate,Ranks) AS
		(
		SELECT Salary,HireDate,RANK() OVER (PARTITION BY DATEPART(MM,HireDate) ORDER BY Salary) AS Rank FROM Employees
		)
		SELECT * FROM cte1

/* (2) Select 4th Highest salary from employee table using ranking function */

		WITH cte2(Name,Salary,Rank4) AS
		(
		SELECT * FROM (SELECT FirstName,Salary, DENSE_RANK() OVER (ORDER BY Salary DESC) as 'Rank4' FROM Employees) Rank4 WHERE  Rank4 = 4
		)
		SELECT * FROM cte2
	
/* (3) Get department, total salary with respect to a department from employee table. */

		WITH cte3(DepartmentID,TotalSalary,Count) AS
		(
		SELECT DepartmentID,SUM(Salary) as 'Total',COUNT(Salary) as 'Count' FROM Employees GROUP BY DepartmentID
		)
		SELECT * FROM cte3

/* (4) Get department, total salary with respect to a department from employee table order by total salary descending */

		WITH cte4(DepartmentID,TotalSalary,NoOfEmployee) AS
		(
		SELECT * FROM (SELECT DepartmentID,SUM(Salary) as 'Total',COUNT(Salary) as 'Count' FROM Employees GROUP BY DepartmentID) Total
		)
		SELECT * FROM cte4 ORDER BY TotalSalary DESC
	
/* (5) Get department wise maximum salary from employee table order by salary ascending */

		WITH cte5(DepartmentID,maxsal) AS
		(
		SELECT * FROM (SELECT DepartmentID,MAX(Salary) as 'Max' FROM Employees GROUP BY DepartmentID) Mux
		)
		SELECT * FROM cte5 ORDER BY maxsal

/* (6) Get department wise minimum  salary from employee table order by salary ascending */

		WITH cte6(DepartmentID,MinSal) AS
		(
		SELECT * FROM (SELECT DepartmentID,MIN(Salary) as 'Minimum' FROM Employees GROUP BY DepartmentID) Minimum
		)
		SELECT * FROM cte6 ORDER BY MinSal

/* (7) Select department, total salary with respect to a department from employee table where total salary 
	   greater than 50000 order by TotalSalary descending */

		WITH cte7(DepartmentID,TotalSal) AS
		(
		SELECT * FROM (SELECT DepartmentID,SUM(Salary) as 'Total' FROM Employees GROUP BY DepartmentID) Total WHERE Total > 50000
		)
		SELECT * FROM cte7 ORDER BY TotalSal DESC



		---------------------sqldb3_day5 (DAY 5)----------------

/* (1) Get difference between JOINING_DATE and INCENTIVE_DATE from employee and incentives table. */

		WITH cte8(JoiningDate,IncentiveDate,Diff) AS
		(
			SELECT e.JoiningDate,i.IncentiveDate,DATEDIFF(DAY,e.JoiningDate,i.IncentiveDate) 
			FROM EmployeeDetails e JOIN Incentives i ON e.EmployeeID = i.EmployeeRefID
		)
		SELECT * FROM cte8

/* (2) Select first_name, incentive amount from employee and incentives table for those employees 
	who have incentives and incentive amount greater than 3000. */

		WITH cte9(FirstName,IncentiveAmount) AS
		(
			SELECT e.FirstName,i.IncentiveAmount FROM EmployeeDetails e JOIN 
			(SELECT EmployeeRefID,IncentiveAmount FROM Incentives)AS i 
			ON e.EmployeeID = i.EmployeeRefID AND i.IncentiveAmount > 3000
		)
		SELECT * FROM cte9 

/* (3) Select first_name, incentive amount from employee and incentives table for all employees 
	even if they didn�t get incentives. */

		WITH cte10(FirstName,IncentiveAmount) AS
		(
		SELECT e.FirstName,i.IncentiveAmount FROM EmployeeDetails e LEFT OUTER JOIN (SELECT IncentiveAmount,EmployeeRefID FROM Incentives)AS i ON e.EmployeeID = i.EmployeeRefID
		)
		SELECT * FROM cte10

/* (4) Select EmployeeName, ManagerName from the employee table. */

		WITH cte11(EmployeeName,ManagerName) AS
		(
			SELECT ct.FirstName as 'EmployeeName',e.FirstName as 'ManagerName' FROM EmployeeDetails e ,
			(SELECT FirstName,ManagerID FROM EmployeeDetails)AS ct WHERE e.EmployeeID = ct.ManagerID
		)
		SELECT * FROM cte11

/* (5) Select first_name, incentive amount from employee and incentives table for all employees even if 
	they didn�t get incentives and set incentive amount as 0 for those employees who didn�t get incentives. */

		WITH cte12(FirstName,IncentiveAmount) AS
		(
			SELECT FirstName,ISNULL(IncentiveAmount,0) AS 'IncentiveAmount' FROM EmployeeDetails e LEFT OUTER JOIN 
			(SELECT IncentiveAmount,EmployeeRefID FROM Incentives)AS i ON e.EmployeeID = i.EmployeeRefID 
		)
		SELECT * FROM cte12
