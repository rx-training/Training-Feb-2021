--Select employee details from employee table if data exists in incentive table ?

SELECT * 
FROM Employees
WHERE EXISTS (SELECT * FROM Incentives)

--Find Salary of the employee whose salary is more than Roy Salary

SELECT CONCAT(firstName, ' ', lastName) AS 'Name'
	, salary
FROM Employees
WHERE salary > (SELECT salary 
	FROM Employees
	WHERE firstName = 'Roy')
go
--Create a view to select FirstName,LastName,Salary,JoiningDate,IncentiveDate and IncentiveAmount

CREATE VIEW EmployeesIncentives
AS
SELECT firstName
	, lastName
	, salary
	, joiningDate
	, incentiveDate
	, incentiveAmount
FROM Employees E JOIN Incentives I
ON E.employeeId = I.employeeRefId
go

--Create a view to select Select first_name, incentive amount from employee and incentives table for those employees who have incentives 
--and incentive amount greater than 3000

CREATE VIEW EmployeesIncentivesSelected
AS
SELECT firstName
	, incentiveAmount
FROM Employees E JOIN Incentives I
ON E.employeeId = I.employeeRefId
WHERE incentiveAmount > 3000
go