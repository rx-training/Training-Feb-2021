                                /*********** Assignment **********/
/***** Day-4 Assignment Convert CTE *****/ 

SELECT * FROM Employees
/***** 1. Write a query to rank employees based on their salary for a month.*****/
WITH EmpSalary(FirstName,LastName,Salary,Rank)
AS
      (SELECT FirstName, LastName,Salary,RANK() OVER (ORDER BY Salary) AS Rank FROM Employees)
SELECT * FROM EmpSalary

/***** 2.Select 4th Highest salary from employee table using ranking function. *****/
WITH HighestSalary(EmployeeID,FirstName,LastName,Salary,Highest)
AS
     (SELECT * FROM (SELECT EmployeeID,FirstName, LastName,Salary ,
	  DENSE_RANK() OVER (ORDER BY Salary DESC) 'Highest' FROM Employees) AS D WHERE Highest = 4)
SELECT * FROM HighestSalary


/***** 3.Get department, total salary with respect to a department from employee table.*****/
WITH EmpDepartment(DepartmentID,TotalSalary) 
AS 
     (SELECT DepartmentID, SUM(Salary) AS 'ID To Salary' FROM Employees GROUP BY DepartmentID)
SELECT * FROM EmpDepartment


/***** 4.Get department, total salary with respect to a department from employee table order by total salary descending.*****/
WITH EmpSalary(DepartmentID,Salary)
AS 
      (SELECT DepartmentID, SUM(Salary) AS 'ID To Salary' FROM Employees GROUP BY DepartmentID)
SELECT * FROM EmpSalary ORDER BY Salary DESC


/***** 5.Get department wise maximum salary from employee table order by salary ascending.*****/
WITH SalaryMax(DepartmentID,MaxSalary)
AS
    (SELECT DepartmentID, Max(Salary) AS 'MaxSalary' FROM Employees GROUP BY DepartmentID)
SELECT * FROM SalaryMax


/***** 6.Get department wise minimum salary from employee table order by salary ascending.*****/
WITH SalaryMin(DepartmentID,MinSalary)
AS
    (SELECT DepartmentID, Min(Salary) AS 'MinSalary' FROM Employees GROUP BY DepartmentID)
SELECT * FROM SalaryMin

/***** 7.Select department, total salary with respect to a department from employee table where total salary greater
         than 50000 order by TotalSalary descending.*****/
WITH EmpSalary(DepartmentID,TotalSalary)
AS
    (SELECT DepartmentID, SUM(Salary) AS 'ID To Salary' FROM Employees GROUP BY DepartmentID HAVING SUM(Salary) > 50000)
SELECT * FROM EmpSalary ORDER BY TotalSalary DESC;

/***** Day-5 Assignment Convert To CTE *****/

USE DayFive
SELECT * FROM Incentive

/***** 1. Get difference between JOINING_DATE and INCENTIVE_DATE from employee and incentives table. *****/
WITH EmpIncentive(EMPLOYEE_ID,FIRST_NAME,INCENTIVE_DATE,JOINING_DATE)
AS
     (SELECT EMPLOYEE_ID,FIRST_NAME,INCENTIVE_DATE,JOINING_DATE FROM Employees
	 INNER JOIN  Incentive ON EMPLOYEE_ID = EMPLOYEE_REF_ID)
SELECT * FROM EmpIncentive

 
/***** 2. Select first_name, incentive amount from employee and incentives table for those 
          employees who have incentives and incentive amount greater than 3000.*****/

WITH EmpIncentive(EMPLOYEE_ID,FIRST_NAME,INCENTIVE_DATE)
AS 
     (SELECT EMPLOYEE_ID,FIRST_NAME,INCENTIVE_AMOUNT FROM Employees 
	  LEFT JOIN Incentive 
	  ON EMPLOYEE_ID = EMPLOYEE_REF_ID WHERE INCENTIVE_AMOUNT > 3000)
SELECT * FROM EmpIncentive

/***** 3. Select first_name, incentive amount from employee and incentives table for all employees even 
          if they didn�t get incentives.*****/
WITH EmpIncentive(FIRST_NAME,INCENTIVE_AMOUNT) 
AS 
    (Select FIRST_NAME,INCENTIVE_AMOUNT from Employees LEFT JOIN Incentive ON EMPLOYEE_ID = EMPLOYEE_REF_ID )
SELECT * FROM EmpIncentive

/***** 4. Select EmployeeName, ManagerName from the employee table.*****/

WITH EmpManager(EmployeeName,ManagerName) 
AS
     (SELECT e.FIRST_NAME AS EmployeeName, m.FIRST_NAME AS ManagerName FROM  Employees e 
	   JOIN Employees m on e.EMPLOYEE_ID = m.EMPLOYEE_ID)
SELECT * FROM EmpManager


/***** 5. Select first_name, incentive amount from employee and incentives table for all employees even if they 
          didn’t get incentives and set incentive amount as 0 for those employees who didn’t get incentives.*****/

WITH EmpIncentive(FIRST_NAME,INCENTIVE_AMOUNT)
AS
      (SELECT FIRST_NAME,ISNULL(INCENTIVE_AMOUNT,0) FROM Employees 
	   LEFT JOIN Incentive ON EMPLOYEE_ID = EMPLOYEE_REF_ID )
SELECT * FROM EmpIncentive













