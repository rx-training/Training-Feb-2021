USE AssignmentDay30;
GO

--1. Select employee details from employee table if data exists in incentive table ?
SELECT 
	EMPLOYEE_ID,
	FIRST_NAME,
	LAST_NAME,
	SALARY,
	JOINING_DATE,
	DEPARTMENT,
	MANAGER_ID
FROM Assignment.Employees
WHERE EMPLOYEE_ID IN (SELECT DISTINCT EMPLOYEE_REF_ID FROM Assignment.Incentive);
GO

--2. Find Salary of the employee whose salary is more than Roy Salary
SELECT
	FIRST_NAME,
	SALARY
FROM Assignment.Employees 
WHERE SALARY > (SELECT SALARY FROm Assignment.Employees WHERE FIRST_NAME='Roy');
GO

--3. Create a view to select FirstName,LastName,Salary,JoiningDate,IncentiveDate and IncentiveAmount
CREATE VIEW EmpIncentiveDetails AS
SELECT 
	e.FIRST_NAME,
	e.LAST_NAME,
	e.SALARY,
	e.JOINING_DATE,
	i.INCENTIVE_DATE,
	i.INCENTIVE_AMOUNT
FROM Assignment.Employees e,Assignment.Incentive i
WHERE e.EMPLOYEE_ID=i.EMPLOYEE_REF_ID;
GO

SELECT * FROM EmpIncentiveDetails;
GO

--4. Create a view to select Select first_name, incentive amount from employee and incentives table for those employees who have incentives and incentive amount greater than 3000
CREATE VIEW EmpIncentive3k AS
SELECT
	e.FIRST_NAME,
	i.INCENTIVE_AMOUNT
FROM Assignment.Employees e,Assignment.Incentive i
WHERE e.EMPLOYEE_ID=i.EMPLOYEE_REF_ID AND i.INCENTIVE_AMOUNT>3000;
GO

SELECT * FROM EmpIncentive3k;
GO
