
/* (1) Select employee details from employee table if data exists in incentive table ? */

	SELECT * FROM EmployeeDetails WHERE EXISTS (SELECT * FROM Incentives)

/* (2) Find Salary of the employee whose salary is more than Roy Salary */

	SELECT FirstName,Salary FROM EmployeeDetails WHERE
	Salary > (SELECT Salary FROM EmployeeDetails WHERE FirstName = 'ROY')

/* (3) Create a view to select FirstName,LastName,Salary,JoiningDate,IncentiveDate and IncentiveAmount */

	CREATE VIEW EDView AS SELECT emp.FirstName, emp.LastName, emp.Salary, emp.JoiningDate,
								 inc.IncentiveDate, inc.IncentiveAmount
	FROM EmployeeDetails AS emp INNER JOIN Incentives AS inc ON emp.EmployeeID = inc.EmployeeRefID

	SELECT * FROM  EDView

/* (4) Create a view to select Select first_name, incentive amount from employee and incentives table 
	   for those employees who have incentives and incentive amount greater than 3000 */

	   CREATE VIEW EDView1 AS SELECT emp.FirstName,inc.IncentiveAmount
	   FROM EmployeeDetails AS emp INNER JOIN Incentives AS inc ON emp.EmployeeID = inc.EmployeeRefID
	   WHERE inc.IncentiveAmount > 3000

	   SELECT * FROM  EDView1