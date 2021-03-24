------------------------- USING CTE --------------------------------

------- 1. Get difference between JOINING_DATE and INCENTIVE_DATE from employee and incentives table ----------

WITH DiffBtwn (JOINING_DATE,INCENTIVE_DATE,Difference) AS
(SELECT JOINING_DATE,INCENTIVE_DATE,DATEDIFF(DAY,JOINING_DATE,INCENTIVE_DATE) AS 'Difference'
FROM Emps AS EMP
INNER JOIN Incentive AS INC
ON EMP.EMPLOYEE_ID = INC.EMPLOYEE_REF_ID)
SELECT * FROM DiffBtwn;

---- 2. Select first_name, incentive amount from employee and incentives table for those employees who have incentives and incentive amount greater than 3000 -------

WITH Amount (FIRST_NAME, INCENTIVE_AMOUNT)
AS
(SELECT EMP.FIRST_NAME,INC.INCENTIVE_AMOUNT
FROM Emps AS EMP
INNER JOIN Incentive AS INC
ON EMP.EMPLOYEE_ID = INC.EMPLOYEE_REF_ID
WHERE INC.INCENTIVE_AMOUNT > 3000)
SELECT * FROM Amount;

------ 3. Select first_name, incentive amount from employee and incentives table for all employees even if they didn’t get incentives. --------

WITH emp (FIRST_NAME, INCENTIVE_AMOUNT)
AS
(SELECT EMP.FIRST_NAME,INC.INCENTIVE_AMOUNT
FROM Emps AS EMP
LEFT OUTER JOIN Incentive AS INC
ON EMP.EMPLOYEE_ID = INC.EMPLOYEE_REF_ID)
SELECT * FROM emp;

-------- 4. Select EmployeeName, ManagerName from the employee table. ---------

WITH emptable (EmployeeName,ManagerName)
AS
(SELECT (EMP.FIRST_NAME + ' ' + EMP.LAST_NAME) AS EmployeeName,
	   (MNG.FIRST_NAME + ' ' + MNG.LAST_NAME) AS ManagerName
FROM Emps AS EMP
JOIN Emps As MNG 
ON EMP.MANAGER_ID = MNG.EMPLOYEE_ID)
SELECT * FROM emptable;

 ---------- Select first_name, incentive amount from employee and incentives table for all employees even if they didn’t get incentives and set incentive amount as 0 for those employees who didn’t get incentives. ------------
 
 WITH Incentiv (FIRST_NAME, INCENTIVE_AMOUNT)
AS
(SELECT FIRST_NAME,
ISNULL(INCENTIVE_AMOUNT,0)
FROM Emps
LEFT JOIN Incentive 
ON EMPLOYEE_ID = EMPLOYEE_REF_ID)
 SELECT * FROM Incentiv;


-------------------------------- USING DERIVED TABLE ----------------------------------


------- 1. Get difference between JOINING_DATE and INCENTIVE_DATE from employee and incentives table ----------

SELECT * FROM
(SELECT DATEDIFF(DAY,JOINING_DATE,INCENTIVE_DATE) AS 'Difference'
FROM Emps AS EMP
INNER JOIN Incentive AS INC
ON EMP.EMPLOYEE_ID = INC.EMPLOYEE_REF_ID)
AS tbl

---- 2. Select first_name, incentive amount from employee and incentives table for those employees who have incentives and incentive amount greater than 3000 -------

SELECT * FROM
(SELECT EMP.FIRST_NAME,INC.INCENTIVE_AMOUNT
FROM Emps AS EMP
INNER JOIN Incentive AS INC
ON EMP.EMPLOYEE_ID = INC.EMPLOYEE_REF_ID
WHERE INC.INCENTIVE_AMOUNT > 3000)
AS tbl

------ 3. Select first_name, incentive amount from employee and incentives table for all employees even if they didn’t get incentives. --------

SELECT * FROM
(SELECT EMP.FIRST_NAME,INC.INCENTIVE_AMOUNT
FROM Emps AS EMP
LEFT OUTER JOIN Incentive AS INC
ON EMP.EMPLOYEE_ID = INC.EMPLOYEE_REF_ID)
AS tbl

-------- 4. Select EmployeeName, ManagerName from the employee table. ---------

SELECT * FROM
(SELECT (EMP.FirstName + ' ' + EMP.LastName) AS EmployeeName,
	   (MNG.FirstName + ' ' + MNG.LastName) AS ManagerName
FROM Employees AS EMP
JOIN Employees As MNG 
ON EMP.ManagerID = MNG.EmployeeID)
AS tbl

 ---------- Select first_name, incentive amount from employee and incentives table for all employees even if they didn’t get incentives and set incentive amount as 0 for those employees who didn’t get incentives. ------------

SELECT * FROM
(SELECT e.FIRST_NAME,
ISNULL(i.INCENTIVE_AMOUNT,0)'INCENTIVE_AMOUNT'
FROM Emps e
LEFT JOIN Incentive i 
ON e.EMPLOYEE_ID = i.EMPLOYEE_REF_ID) 
AS tbl