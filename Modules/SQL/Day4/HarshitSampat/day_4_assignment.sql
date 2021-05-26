------------------ 1--------------------

	SELECT Salary,HireDate, RANK() OVER (PARTITION BY DATEPART(MM,HireDate) ORDER BY Salary) as 'Rank' FROM Employees

-------------------2-----------------------------
SELECT * FROM (SELECT Salary, DENSE_RANK() OVER (ORDER BY Salary DESC) as 'Rank4' FROM Employees) Rank4 WHERE  Rank4 = 4

------------------------3---------------------------
SELECT departmentid, SUM(salary) As DepartentWiseSalary
FROM employees 
GROUP BY departmentid;

----------------------------4--------------------------
SELECT departmentid, SUM(salary) As DepartentWiseSalary
FROM employees  
GROUP BY DepartmentID order by DepartentWiseSalary desc

--------------------------5-----------------------------
SELECT DepartmentID, MAX(Salary) As maximumSalary_In_DepartMent
FROM Employees  
GROUP BY DepartmentID Order by maximumSalary_In_DepartMent

-----------------------------6----------------------------------
SELECT DepartmentID, MIN(Salary) As minimumSalary_In_DepartMent
FROM Employees  
GROUP BY DepartmentID Order by minimumSalary_In_DepartMent

-------------------------------7----------------------------------
SELECT * FROM (SELECT DepartmentID,SUM(Salary) as 'Total' FROM Employees GROUP BY DepartmentID) Total 
WHERE Total > 50000 ORDER BY Total DESC


