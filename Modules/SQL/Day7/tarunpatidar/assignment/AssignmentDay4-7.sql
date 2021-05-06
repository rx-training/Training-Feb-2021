----------------------------------- USING CTE ---------------------------------

SELECT * FROM Employees

------- 1. Write a query to rank employees based on their salary for a month. --------------

WITH REmployee (FirstName,Salary,Rank)
AS
(SELECT FirstName,Salary, DENSE_RANK() OVER(ORDER BY Salary DESC) "Rank" FROM Employees)
SELECT * FROM REmployee;

------- 2. Select 4th Highest salary from employee table using ranking function. ---------------

WITH HSalary (FirstName,Salary)
AS
(SELECT FirstName,Salary FROM ( SELECT FirstName,Salary, RANK() OVER (ORDER BY Salary DESC) AS Rank FROM Employees) AS Sal WHERE Rank = 4)
SELECT * FROM HSalary;

----------- 3. Get department, total salary with respect to a department from employee table. --------------

WITH TSalary (DepartmentID,TotalSalary)
AS
(SELECT DepartmentID, SUM(Salary) TotalSalary FROM Employees GROUP BY DepartmentID)
SELECT * FROM TSalary;

--------- 4. Get department, total salary with respect to a department from employee table order by total salary descending. ----------------

WITH Salary (DepartmentID,TotalSalary)
AS
(SELECT DepartmentID, SUM(Salary) TotalSalary FROM Employees GROUP BY DepartmentID)
SELECT * FROM Salary ORDER BY TotalSalary DESC;

---------- 5. Get department wise maximum salary from employee table order by salary ascending. --------------------

WITH MxSalary (DepartmentID,MaxSalary)
AS
(SELECT DepartmentID, MAX(Salary) MaxSalary FROM Employees GROUP BY DepartmentID )
SELECT * FROM MxSalary ORDER BY MaxSalary;

--------- 6. Get department wise minimum salary from employee table order by salary ascending. ----------------

WITH MiSalary (DepartmentID,MinSalary)
AS
(SELECT DepartmentID, MIN(Salary) MinSalary FROM Employees GROUP BY DepartmentID)
SELECT * FROM MiSalary ORDER BY MinSalary;

---------- 7. Select department, total salary with respect to a department from employee table where total salary greater than 50000 order by TotalSalary descending. ---------------

WITH ToSalary (DepartmentID,TotalSalary)
AS
(SELECT DepartmentID, SUM(Salary) TotalSalary FROM Employees GROUP BY DepartmentID HAVING SUM(Salary) > 50000)
SELECT * FROM ToSalary ORDER BY TotalSalary DESC;


----------------------------------- USING DERIVED TABLE -----------------------------------------------

SELECT * FROM Employees

------- 1. Write a query to rank employees based on their salary for a month. --------------

SELECT * FROM (SELECT FirstName,Salary, DENSE_RANK() OVER(ORDER BY Salary DESC) "Rank" FROM Employees) tbl

------- 2. Select 4th Highest salary from employee table using ranking function. ---------------

SELECT * FROM ( SELECT FirstName,Salary, RANK() OVER (ORDER BY Salary DESC) AS Rank FROM Employees) AS tbl WHERE Rank = 4;

----------- 3. Get department, total salary with respect to a department from employee table. --------------

SELECT * FROM (SELECT DepartmentID, SUM(Salary) TotalSalary FROM Employees GROUP BY DepartmentID) AS tbl

--------- 4. Get department, total salary with respect to a department from employee table order by total salary descending. ----------------

SELECT * FROM (SELECT DepartmentID, SUM(Salary) TotalSalary FROM Employees GROUP BY DepartmentID) AS tbl ORDER BY tbl.TotalSalary DESC;

---------- 5. Get department wise maximum salary from employee table order by salary ascending. --------------------

SELECT * FROM (SELECT DepartmentID, MAX(Salary) MaxSalary FROM Employees GROUP BY DepartmentID) AS tbl ORDER BY MaxSalary;

--------- 6. Get department wise minimum salary from employee table order by salary ascending. ----------------

SELECT * FROM (SELECT DepartmentID, MIN(Salary) MinSalary FROM Employees GROUP BY DepartmentID) AS tbl ORDER BY MinSalary;

---------- 7. Select department, total salary with respect to a department from employee table where total salary greater than 50000 order by TotalSalary descending. ---------------

SELECT * FROM (SELECT DepartmentID, SUM(Salary) TotalSalary FROM Employees GROUP BY DepartmentID HAVING SUM(Salary) > 50000) AS tbl ORDER BY TotalSalary DESC;