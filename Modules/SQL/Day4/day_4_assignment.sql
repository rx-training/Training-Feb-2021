------------------ 1--------------------
SELECT 
	firstname, 
	lastname, 
	DepartmentID,
	salary, 
	DENSE_RANK() OVER (
		PARTITION BY Salary
		ORDER BY salary DESC) salary_rank
FROM 
	employees e

-------------------2-----------------------------


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

SELECT departmentid, SUM(salary) As DepartentWiseSalary
FROM employees where Departmntid > 80000 
GROUP BY DepartmentID order by DepartentWiseSalary desc

