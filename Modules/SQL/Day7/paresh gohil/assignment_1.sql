USE Students

/*Day 7*/

/*Derived Table*/

/*Write a query to rank employees based on their salary for a month*/

	SELECT * FROM (SELECT Salary,HireDate,RANK() OVER (PARTITION BY DATEPART(MM,HireDate) ORDER BY Salary) AS Ranks FROM Employees)tbl

	SELECT * FROM Employees

/*Select 4th Highest salary from employee table using ranking function*/

	SELECT * FROM (SELECT Salary, DENSE_RANK() OVER (ORDER BY Salary DESC) as 'Rank4' FROM Employees) Rank4 WHERE  Rank4 = 4

/*Get department, total salary with respect to a department from employee table.*/

	SELECT * FROM (SELECT DepartmentID,SUM(Salary) as 'Total',COUNT(Salary) as 'Count' FROM Employees GROUP BY DepartmentID)tbl

/*Get department, total salary with respect to a department from employee table order by total salary descending*/

	SELECT * FROM (SELECT DepartmentID,SUM(Salary) as 'Total',COUNT(Salary) as 'Count' FROM Employees GROUP BY DepartmentID) Total ORDER BY Total DESC

/*Get department wise maximum salary from employee table order by salary ascending*/

	SELECT * FROM (SELECT DepartmentID,MAX(Salary) as 'Maximum' FROM Employees GROUP BY DepartmentID) Muximum ORDER BY Maximum

/*Get department wise minimum salary from employee table order by salary ascending*/

	SELECT * FROM (SELECT DepartmentID,MIN(Salary) as 'Minimum' FROM Employees GROUP BY DepartmentID) Minimum ORDER BY Minimum
	 
/*Select department, total salary with respect to a department from employee table where total salary greater than 50000 order by TotalSalary descending*/

	SELECT * FROM (SELECT DepartmentID,SUM(Salary) as 'Total' FROM Employees GROUP BY DepartmentID) Total WHERE Total > 50000 ORDER BY Total DESC


USE Employees

/*Get difference between JOINING_DATE and INCENTIVE_DATE from employee and incentives table*/

	SELECT e.JoiningDate,i.IncentiveDate FROM Employees e JOIN (SELECT EmployeeRefID,IncentiveDate FROM Incentives)AS i ON e.EmployeeID = i.EmployeeRefID

/*Select first_name, incentive amount from employee and incentives table for those employees who have incentives and incentive amount greater than 3000*/

	SELECT e.FirstName,i.IncentiveAmount FROM Employees e JOIN (SELECT EmployeeRefID,IncentiveAmount FROM Incentives)AS i ON e.EmployeeID = i.EmployeeRefID AND i.IncentiveAmount > 3000

/*Select first_name, incentive amount from employee and incentives table for all employees even if they didn’t get incentives*/

	SELECT e.FirstName,i.IncentiveAmount FROM Employees e LEFT OUTER JOIN (SELECT IncentiveAmount,EmployeeRefID FROM Incentives)AS i ON e.EmployeeID = i.EmployeeRefID
	
/*Select EmployeeName, ManagerName from the employee table.*/

	SELECT m.FirstName as 'EmployeeName',e.FirstName as 'MangerName' FROM Employees e ,(SELECT FirstName,MangerID FROM Employees)AS m WHERE e.EmployeeID = m.MangerID

/*Select first_name, incentive amount from employee and incentives table for all employees even if they didn’t get incentives and set incentive amount as 0 for those employees who didn’t get incentives.*/

	SELECT FirstName,ISNULL(IncentiveAmount,0) AS 'IncentiveAmount' FROM Employees e LEFT OUTER JOIN (SELECT IncentiveAmount,EmployeeRefID FROM Incentives)AS i ON e.EmployeeID = i.EmployeeRefID 
