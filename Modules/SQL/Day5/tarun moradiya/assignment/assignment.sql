--Get difference between JOINING_DATE and INCENTIVE_DATE from employee and incentives table

SELECT firstName
	, lastName
	, joiningDate
	, incentiveDate
	, DATEDIFF(day, joiningDate, incentiveDate) AS 'Difference'
FROM Employees E JOIN Incentives I
ON E.employeeId = I.employeeRefId

--Select first_name, incentive amount from employee and incentives table for those employees who have incentives and incentive amount greater than 3000

SELECT firstName
	, incentiveAmount
FROM Employees E JOIN Incentives I
ON E.employeeId = I.employeeRefId
WHERE incentiveAmount > 3000

--Select first_name, incentive amount from employee and incentives table for all employees even if they didn’t get incentives.

SELECT firstName
	, incentiveAmount
FROM Employees E LEFT OUTER JOIN Incentives I
ON E.employeeId = I.employeeRefId


--Select EmployeeName, ManagerName from the employee table.

SELECT CONCAT(E.firstName, ' ', E.lastName) AS 'EmpoyeeName'
	, CONCAT(I.firstName, ' ', I.lastName) AS 'ManagerName'
FROM Employees E JOIN Employees I
ON I.employeeId = E.managerId


--Select first_name, incentive amount from employee and incentives table for all employees even if they didn’t get incentives and set incentive 
--amount as 0 for those employees who didn’t get incentives.

SELECT firstName
	, ISNULL(incentiveAmount, 0)
FROM Employees E LEFT OUTER JOIN Incentives I
ON E.employeeId = I.employeeRefId