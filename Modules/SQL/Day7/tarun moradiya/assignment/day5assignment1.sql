--Get difference between JOINING_DATE and INCENTIVE_DATE from employee and incentives table
WITH DateDifference (firstName, lastName, joiningDate, incentiveDate, Difference)
AS
(
SELECT firstName
	, lastName
	, joiningDate
	, incentiveDate
	, DATEDIFF(day, joiningDate, incentiveDate) AS 'Difference'
FROM Employees E JOIN Incentives I
ON E.employeeId = I.employeeRefId
)
SELECT * FROM DateDifference
GO

--Select first_name, incentive amount from employee and incentives table for those employees who have incentives and incentive amount greater than 3000



WITH Amount (firstName, incentiveAmount)
AS
(
SELECT firstName
	, incentiveAmount
FROM Employees E JOIN Incentives I
ON E.employeeId = I.employeeRefId
WHERE incentiveAmount > 3000
)
SELECT * FROM Amount
GO
--Select first_name, incentive amount from employee and incentives table for all employees even if they didn�t get incentives.



WITH Amount (firstName, incentiveAmount)
AS
(
SELECT firstName
	, incentiveAmount
FROM Employees E LEFT OUTER JOIN Incentives I
ON E.employeeId = I.employeeRefId
)
SELECT * FROM Amount
GO

--Select EmployeeName, ManagerName from the employee table.

WITH Names (EmpoyeeName, ManagerName)
AS
(
SELECT CONCAT(E.firstName, ' ', E.lastName) AS 'EmpoyeeName'
	, CONCAT(I.firstName, ' ', I.lastName) AS 'ManagerName'
FROM Employees E JOIN Employees I
ON I.employeeId = E.managerId
)
SELECT * FROM Names
GO

--Select first_name, incentive amount from employee and incentives table for all employees even if they didn�t get incentives and set incentive 
--amount as 0 for those employees who didn�t get incentives.

WITH NamesAmt (firstName, incentiveAmount)
AS
(
SELECT firstName
	, ISNULL(incentiveAmount, 0) 'incentiveAmount'
FROM Employees E LEFT OUTER JOIN Incentives I
ON E.employeeId = I.employeeRefId
)
SELECT * FROM NamesAmt
GO