SELECT * FROM Employees1
SELECT * FROM Incentives


/*  1)  Get difference between JOINING_DATE and INCENTIVE_DATE from employee and incentives table*/
SELECT e.JoiningDate,i.IncentiveDate, DATEDIFF(DD,e.JoiningDate,i.IncentiveDate) FROM 
Employees1 e INNER JOIN Incentives i on(e.EmployeeID = i.EmployeeRefID)



/*  2)  Select first_name, incentive amount from employee and incentives table for those employees who have incentives and incentive amount greater than 3000*/

SELECT e.FirstName,i.IncentiveAmount FROM 
Employees1 e INNER JOIN Incentives i on(e.EmployeeID = i.EmployeeRefID)
WHERE IncentiveAmount > 3000


/*  3)  Select first_name, incentive amount from employee and incentives table for all employees even if they didn’t get incentives.*/
SELECT e.FirstName,i.IncentiveAmount FROM 
Employees1 e LEFT OUTER JOIN Incentives i on(e.EmployeeID = i.EmployeeRefID)
WHERE IncentiveAmount IS NULL

/*  4)  Select EmployeeName, ManagerName from the employee table.*/

SELECT e.EmployeeName , m.ManagaerName FROM
Employees e INNER JOIN Manager m on (e.ManagerID = m.ManagerID)

/*  5)  Select first_name, incentive amount from employee and incentives table for all employees even if they didn’t get incentives and set incentive amount as 0 for those employees who didn’t get incentives.*/
SELECT e.FirstName, ISNULL(IncentiveAmount, '0')  FROM 
Employees1 e LEFT OUTER JOIN Incentives i on(e.EmployeeID = i.EmployeeRefID) WHERE IncentiveAmount IS NULL