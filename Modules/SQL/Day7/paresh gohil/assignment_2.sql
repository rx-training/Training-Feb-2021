USE Students

/*Day 7*/

/*CTE - Common Table Expression*/

/*Write a query to rank employees based on their salary for a month*/

	WITH Example1(Salary,HireDate,Ranks) AS
	(
	SELECT Salary,HireDate,RANK() OVER (PARTITION BY DATEPART(MM,HireDate) ORDER BY Salary) AS Ranks FROM Employees
	)
	SELECT * FROM Example1

/*Select 4th Highest salary from employee table using ranking function*/

	WITH Example2(Salary,Rank4) AS
	(
	SELECT * FROM (SELECT Salary, DENSE_RANK() OVER (ORDER BY Salary DESC) as 'Rank4' FROM Employees) Rank4 WHERE  Rank4 = 4
	)
	SELECT * FROM Example2

/*Get department, total salary with respect to a department from employee table.*/

	WITH Example3(DepartmentID,Total,Count) AS
	(
	SELECT DepartmentID,SUM(Salary) as 'Total',COUNT(Salary) as 'Count' FROM Employees GROUP BY DepartmentID
	)
	SELECT * FROM Example3

/*Get department, total salary with respect to a department from employee table order by total salary descending*/

	WITH Example4(DepartmentID,Total,Count) AS
	(
	SELECT * FROM (SELECT DepartmentID,SUM(Salary) as 'Total',COUNT(Salary) as 'Count' FROM Employees GROUP BY DepartmentID) Total
	)
	SELECT * FROM Example4 ORDER BY Total DESC

/*Get department wise maximum salary from employee table order by salary ascending*/

	WITH Example5(DepartmentID,Maximum) AS
	(
	SELECT * FROM (SELECT DepartmentID,MAX(Salary) as 'Maximum' FROM Employees GROUP BY DepartmentID) Muximum
	)
	SELECT * FROM Example5 ORDER BY Maximum

/*Get department wise minimum salary from employee table order by salary ascending*/

	WITH Example6(DepartmentID,Minimum) AS
	(
	SELECT * FROM (SELECT DepartmentID,MIN(Salary) as 'Minimum' FROM Employees GROUP BY DepartmentID) Minimum
	)
	SELECT * FROM Example6 ORDER BY Minimum

/*Select department, total salary with respect to a department from employee table where total salary greater than 50000 order by TotalSalary descending*/

	WITH Example7(DepartmentID,Total) AS
	(
	SELECT * FROM (SELECT DepartmentID,SUM(Salary) as 'Total' FROM Employees GROUP BY DepartmentID) Total WHERE Total > 50000
	)
	SELECT * FROM Example7 ORDER BY Total DESC

USE Employees

/*Get difference between JOINING_DATE and INCENTIVE_DATE from employee and incentives table*/

	WITH Example8(JoiningDate,IncentiveDate) AS
	(
	SELECT e.JoiningDate,i.IncentiveDate FROM Employees e JOIN Incentives i ON e.EmployeeID = i.EmployeeRefID
	)
	SELECT * FROM Example8

/*Select first_name, incentive amount from employee and incentives table for those employees who have incentives and incentive amount greater than 3000*/

	WITH Example9(FirstName,IncentiveAmount) AS
	(
	SELECT e.FirstName,i.IncentiveAmount FROM Employees e JOIN (SELECT EmployeeRefID,IncentiveAmount FROM Incentives)AS i ON e.EmployeeID = i.EmployeeRefID AND i.IncentiveAmount > 3000
	)
	SELECT * FROM Example9 

/*Select first_name, incentive amount from employee and incentives table for all employees even if they didn’t get incentives*/

	WITH Example10(FirstName,IncentiveAmount) AS
	(
	SELECT e.FirstName,i.IncentiveAmount FROM Employees e LEFT OUTER JOIN (SELECT IncentiveAmount,EmployeeRefID FROM Incentives)AS i ON e.EmployeeID = i.EmployeeRefID
	)
	SELECT * FROM Example10

/*Select EmployeeName, ManagerName from the employee table.*/

	WITH Example11(EmployeeName,MangerName) AS
	(
	SELECT m.FirstName as 'EmployeeName',e.FirstName as 'MangerName' FROM Employees e ,(SELECT FirstName,MangerID FROM Employees)AS m WHERE e.EmployeeID = m.MangerID
	)
	SELECT * FROM Example11

/*Select first_name, incentive amount from employee and incentives table for all employees even if they didn’t get incentives and set incentive amount as 0 for those employees who didn’t get incentives.*/

	WITH Example12(FirstName,IncentiveAmount) AS
	(
	SELECT FirstName,ISNULL(IncentiveAmount,0) AS 'IncentiveAmount' FROM Employees e LEFT OUTER JOIN (SELECT IncentiveAmount,EmployeeRefID FROM Incentives)AS i ON e.EmployeeID = i.EmployeeRefID 
	)
	SELECT * FROM Example12

