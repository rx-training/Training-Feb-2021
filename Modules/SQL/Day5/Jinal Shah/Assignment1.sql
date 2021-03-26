
/* (1) Get difference between JOINING_DATE and INCENTIVE_DATE from employee and incentives table. */

	SELECT DATEDIFF(DAY,JoiningDate,IncentiveDate) AS Diff FROM EmployeeDetails AS emp
	INNER JOIN Incentives AS inc on emp.EmployeeID = inc.EmployeeRefID

/* (2) Select first_name, incentive amount from employee and incentives table for those employees 
	who have incentives and incentive amount greater than 3000. */

	SELECT emp1.FirstName, inc1.IncentiveAmount FROM EmployeeDetails AS emp1
	INNER JOIN Incentives AS inc1 on emp1.EmployeeID = inc1.EmployeeRefID WHERE inc1.IncentiveAmount > 3000

/* (3) Select first_name, incentive amount from employee and incentives table for all employees 
	even if they didn�t get incentives. */

	SELECT emp1.FirstName, inc1.IncentiveAmount FROM EmployeeDetails AS emp1
	LEFT OUTER JOIN Incentives AS inc1 on emp1.EmployeeID = inc1.EmployeeRefID 

/* (4) Select EmployeeName, ManagerName from the employee table. */

	 SELECT (emp.FirstName + ' ' + emp.LastName) AS EmployeeName,
		   (man.FirstName + ' ' + man.LastName) AS ManagerName
		FROM EmployeeDetails AS man JOIN EmployeeDetails AS emp
		ON emp.ManagerID = man.ManagerID; 