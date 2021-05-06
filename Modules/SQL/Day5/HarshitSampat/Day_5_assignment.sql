
---------------------1----------------------------
USE DayFivePractices;
SELECT FIRST_NAME,INCENTIVE_DATE
FROM Employees a INNER JOIN IncentiveDetails  b ON a.EMPLOYEE_ID = B.EMPLOYEE_REF_ID

--------------------2---------------------------------
SELECT a.FIRST_NAME,b.INCENTIVE_AMOUNT
FROM Employees a INNER JOIN IncentiveDetails b ON a.EMPLOYEE_ID =B.Employee_REF_ID
WHERE INCENTIVE_AMOUNT>4500
--------------------------------3-------------------------
USE DayFivePractices;
SELECT a.FIRST_NAME,b.INCENTIVE_AMOUNT
FROM Employees a LEFT OUTER JOIN IncentiveDetails b ON A.EMPLOYEE_ID = b.Employee_REF_ID 
-----------------------------------4---------------------
SELECT e.FIRST_NAME AS "Employee", m.FIRST_NAME AS "ManagerName"
FROM Employees  e ,Employees m
WHERE e.EMPLOYEE_ID=m.MANAGER_ID
------------------------------5-------------------------------------------
USE DayFivePractices;
SELECT a.FIRST_NAME,ISNULL(INCENTIVE_AMOUNT,0)
FROM Employees a LEFT OUTER JOIN IncentiveDetails b ON A.EMPLOYEE_ID = b.Employee_REF_ID 


