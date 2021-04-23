------- 1. Get difference between JOINING_DATE and INCENTIVE_DATE from employee and incentives table ----------

SELECT DATEDIFF(DAY,JOINING_DATE,INCENTIVE_DATE) AS 'Difference'
FROM Emps AS EMP
INNER JOIN Incentive AS INC
ON EMP.EMPLOYEE_ID = INC.EMPLOYEE_REF_ID;

---- 2. Select first_name, incentive amount from employee and incentives table for those employees who have incentives and incentive amount greater than 3000 -------

SELECT EMP.FIRST_NAME,INC.INCENTIVE_AMOUNT
FROM Emps AS EMP
INNER JOIN Incentive AS INC
ON EMP.EMPLOYEE_ID = INC.EMPLOYEE_REF_ID
WHERE INC.INCENTIVE_AMOUNT > 3000;

------ 3. Select first_name, incentive amount from employee and incentives table for all employees even if they didn’t get incentives. --------

SELECT EMP.FIRST_NAME,INC.INCENTIVE_AMOUNT
FROM Emps AS EMP
LEFT OUTER JOIN Incentive AS INC
ON EMP.EMPLOYEE_ID = INC.EMPLOYEE_REF_ID;

-------- 4. Select EmployeeName, ManagerName from the employee table. ---------

SELECT (EMP.FirstName + ' ' + EMP.LastName) AS EmployeeName,
	   (MNG.FirstName + ' ' + MNG.LastName) AS ManagerName
FROM Employees AS EMP
JOIN Employees As MNG 
ON EMP.ManagerID = MNG.EmployeeID;

 ---------- Select first_name, incentive amount from employee and incentives table for all employees even if they didn’t get incentives and set incentive amount as 0 for those employees who didn’t get incentives. ------------

SELECT FIRST_NAME,
ISNULL(INCENTIVE_AMOUNT,0)
FROM Emps
LEFT JOIN Incentive 
ON EMPLOYEE_ID = EMPLOYEE_REF_ID
 
UPDATE Incentive
SET INCENTIVE_AMOUNT = 0
WHERE (SELECT INC.INCENTIVE_AMOUNT
		FROM Emps AS EMP
		LEFT OUTER JOIN Incentive AS INC
		ON EMP.EMPLOYEE_ID = INC.EMPLOYEE_REF_ID)= NULL;

SELECT * FROM Emps As ED
LEFT OUTER JOIN Incentive AS INC 
ON INC.EMPLOYEE_REF_ID = ED.EMPLOYEE_ID;