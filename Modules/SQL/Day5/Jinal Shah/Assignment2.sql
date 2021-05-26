
---------------------sqldb3_day5---------------


SELECT emp.FirstName, inc.IncentiveAmount FROM EmployeeDetails AS emp
LEFT OUTER JOIN Incentives AS inc on emp.EmployeeID = inc.EmployeeRefID

UPDATE Incentives SET IncentiveAmount = 0 WHERE
(SELECT inc.IncentiveAmount FROM EmployeeDetails AS emp LEFT OUTER JOIN Incentives AS inc 
on emp.EmployeeID = inc.EmployeeRefID) = NULL;


UPDATE Incentives SET IncentiveAmount = 0 FROM Incentives AS inc 
RIGHT OUTER JOIN EmployeeDetails AS emp1 ON inc.EmployeeRefID =emp1.EmployeeID
WHERE IncentiveAmount = NULL;

/* Select first_name, incentive amount from employee and incentives table for all employees even if 
	they didn�t get incentives and set incentive amount as 0 for those employees who didn�t get incentives. */

	SELECT FirstName, ISNULL(IncentiveAmount,0) FROM EmployeeDetails AS empp LEFT OUTER JOIN 
	Incentives AS incc on empp.EmployeeID = incc.EmployeeRefID