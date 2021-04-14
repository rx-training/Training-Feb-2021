---Day 6
--using existing employee Table
----Select employee details from employee table if data exists in incentive table ?

SELECT * FROM Employees WHERE EXISTS (SELECT * FROM Incentives);


--Find Salary of the employee whose salary is more than Roy Salary:

--using Subquries
SELECT FirstName AS EmployeeName,Salary FROM Employees WHERE Salary > (SELECT Salary FROM Employees WHERE FirstName = 'ROY');

Select * from Employees

--using joins 
SELECT A.FirstName AS EmployeeName ,A.Salary From Employees A JOIN Employees B ON A.Salary > B.Salary WHERE B.FirstName = 'Roy'; 



----Create a view to select FirstName,LastName,Salary,JoiningDate,IncentiveDate and IncentiveAmount
---using help of ssms direct view gui 
SELECT * FROM EmpIncentives;


---using Queries 

CREATE VIEW EmployeeIncentives AS SELECT e.FirstName,e.LastName , e.Salary ,e.joiningDate ,i.IncentiveDate,i.IncentiveAmount 
FROM Employees AS e JOIN Incentives AS i ON e.EMPLOYEE_ID = i.IncentiveID;

--query for view view :
SELECT * FROM EmployeeIncentives;


/*Create a view to select Select first_name, incentive amount from employee and incentives table for those employees
who have incentives and incentive amount greater than 3000*/

CREATE VIEW EmpGreaterIncentives AS SELECT e.FirstName,i.IncentiveAmount 
FROM Employees AS e JOIN Incentives AS i ON e.EMPLOYEE_ID = i.IncentiveID AND i.IncentiveAmount > 3000;

SELECT * FROM EmpGreaterIncentives;

