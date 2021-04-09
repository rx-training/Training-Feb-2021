---- 1. Select employee details from employee table if data exists in incentive table. --------

SELECT * FROM Employees WHERE EXISTS (SELECT * FROM Incentive)

---- 2.Find Salary of the employee whose salary is more than Roy Salary. ------

SELECT Salary FROM Employees WHERE Salary > (SELECT Salary FROM Employees WHERE FirstName = 'Roy')

---- 3. Create a view to select FirstName,LastName,Salary,JoiningDate,IncentiveDate and IncentiveAmount. -------

CREATE VIEW Empl AS 
SELECT e.FirstName,e.LastName,e.Salary,e.HireDate,I.INCENTIVE_DATE,I.INCENTIVE_AMOUNT FROM Employees e 
JOIN Incentive i ON e.EmployeeID = I.EMPLOYEE_REF_ID

---- 4. Create a view to select Select first_name, incentive amount from employee and incentives table for those employees who have incentives and incentive amount greater than 3000. ------

CREATE VIEW Incntive AS 
SELECT e.FirstName,I.INCENTIVE_AMOUNT FROM Employees e 
JOIN Incentive i ON e.EmployeeID = I.EMPLOYEE_REF_ID WHERE I.INCENTIVE_AMOUNT > 3000	