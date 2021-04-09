USE dayfive;

															---DAY 5 QUERIES USING CTC 


--1. Get difference between JOINING_DATE and INCENTIVE_DATE from employee and incentives table
WITH EX1 (FirstName,IncentiveAmount,JoiningDate,Difference) AS 
 (
SELECT FirstName,JoiningDate,IncentiveDate,DATEDIFF(DAY,JoiningDate,IncentiveDate) AS 'Difference' 
FROM Employees A inner join Incentives B on A.EMPLOYEE_ID=B.EMPLOYEE_ID
 )
 SELECT * FROM EX1;



/*2.Select first_name, incentive amoun
t from employee and incentives table for those employees who have incentives and incentive amount greater than 3000*/

WITH EX2 (FirstName,IncentiveAmount) AS 
 (
SELECT FirstName,IncentiveAmount 
FROM Employees A inner join Incentives B on A.EMPLOYEE_ID = B.EMPLOYEE_ID AND B.IncentiveAmount > 3000
)
SELECT * FROM EX2;


--3.select first_name, incentive amount from employee and incentives table for all employees even if they didn’t get incentives.
WITH EX3 (FirstName,IncentiveAmount) AS 
 (
SELECT FirstName, IncentiveAmount 
FROM Employees A left join Incentives B on A.EMPLOYEE_ID = B.EMPLOYEE_ID
)
SELECT * FROM EX3;

--4.Select EmployeeName, ManagerName from the employee table.

WITH EX4 (EmployeeName,ManagerName) AS 
 (
SELECT A.Firstname AS EmployeeName , B.FirstName As ManagerName
FROM Employees AS A JOIN Employees As B ON A.ManagerID = B.EMPLOYEE_ID
)
SELECT * FROM EX4;

/*5. Select first_name, incentive amount from employee and incentives table for all employees 
even if they didn’t get incentives and set incentive amount as 0 for those employees who didn’t get incentives.*/

WITH EX5 (EmployeeName,Incentives) AS 
 (

SELECT FirstName,ISNULL(IncentiveAmount,0) 
FROM Employees A LEFT JOIN Incentives B ON A.EMPLOYEE_ID=B.EMPLOYEE_ID
)
SELECT * FROM EX5;


																--- day 5 queries using derived tables 

--1. Get difference between JOINING_DATE and INCENTIVE_DATE from employee and incentives table:

SELECT A.FirstName,A.JoiningDate,B.IncentiveDate,DATEDIFF(DAY,JoiningDate,IncentiveDate) AS 'Difference' 
FROM ( SELECT [FirstName],[JoiningDate],[EMPLOYEE_ID] FROM [Employees])A
inner join 
(SELECT [IncentiveDate],[EMPLOYEE_ID] FROM [Incentives]) B on A.EMPLOYEE_ID=B.EMPLOYEE_ID;



/*2.Select first_name, incentive amoun
t from employee and incentives table for those employees who have incentives and incentive amount greater than 3000*/


SELECT A.FirstName[FirstName],B.IncentiveAmount[IncentiveAmount] 
FROM (SELECT [FirstName],[EMPLOYEE_ID] FROM [Employees] ) A 
inner join 
(SELECT [IncentiveAmount],[EMPLOYEE_ID] FROM [Incentives]) B  
ON A.EMPLOYEE_ID = B.EMPLOYEE_ID AND B.IncentiveAmount > 3000;


--3.select first_name, incentive amount from employee and incentives table for all employees even if they didn’t get incentives.

SELECT A.FirstName, B.IncentiveAmount 
FROM 
(SELECT [FirstName],[EMPLOYEE_ID] FROM [Employees] ) A left join
(SELECT [IncentiveAmount],[EMPLOYEE_ID] FROM [Incentives]) B on A.EMPLOYEE_ID = B.EMPLOYEE_ID;


--4. Select EmployeeName, ManagerName from the employee table.

SELECT A.Firstname[EmployeeName] , B.FirstName[ManagerName]
FROM (SELECT [FirstName],[ManagerID] FROM [Employees])A 
JOIN (SELECT [FirstName],[EMPLOYEE_ID] FROM [Employees])B ON A.ManagerID = B.EMPLOYEE_ID; 


/*5. Select first_name, incentive amount from employee and incentives table for all employees 
even if they didn’t get incentives and set incentive amount as 0 for those employees who didn’t get incentives.*/


SELECT A.FirstName[FirstName],ISNULL(IncentiveAmount,0) [Incentives]
FROM  (SELECT [FirstName],[EMPLOYEE_ID] FROM [Employees] ) A 
LEFT JOIN
(SELECT [IncentiveAmount],[EMPLOYEE_ID] FROM [Incentives])B ON A.EMPLOYEE_ID=B.EMPLOYEE_ID;



			