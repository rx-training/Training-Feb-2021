/* 1)  Write a query to rank employees based on their salary for a month*/

	SELECT * FROM(SELECT DENSE_RANK() OVER ( ORDER BY Salary DESC) AS RANK,* FROM Employees) Employees

/* 2)  Select 4th Highest salary from employee table using ranking function*/

	WITH Highest_Salary (EmployeeID,Salary, Rank1) AS
	(
	SELECT EmployeeID, Salary, DENSE_RANK() OVER (ORDER BY Salary DESC) Rank1 FROM Employees

	)

	SELECT * FROM Highest_Salary WHERE Rank1 = 4

/* 3)  Get department, total salary with respect to a department from employee table.*/
	
	WITH Total_Salary(DepartmentID,Total_Salary) AS
	(
	SELECT DepartmentID,SUM(Salary) AS SUM_SALARY FROM Employees GROUP BY DepartmentID
	)

	SELECT * FROM Total_Salary

/* 4) Get department, total salary with respect to a department from employee table order by total salary descending*/

	
	WITH Total_Salary(DepartmentID,Total_Salary) AS
	(
	SELECT DepartmentID, SUM(Salary) AS TOTAL_SALARY FROM Employees GROUP BY DepartmentID 
	)

	SELECT * FROM Total_Salary ORDER BY TOTAL_SALARY DESC
	
/* 5) Get department wise maximum salary from employee table order by salary ascending*/

	WITH Total_Salary(DepartmentID,MAX_SALARY) AS
	(
	SELECT DepartmentID, MAX(Salary) AS MAX_SALARY FROM Employees GROUP BY DepartmentID 
	)

	SELECT * FROM Total_Salary ORDER BY MAX_SALARY ASC

/*  6) Get department wise minimum salary from employee table order by salary ascending*/

	WITH Total_Salary(DepartmentID,Min_SALARY) AS
	(
	SELECT DepartmentID, MIN(Salary) AS Min_SALARY FROM Employees GROUP BY DepartmentID 
	)

	SELECT * FROM Total_Salary ORDER BY Min_SALARY ASC

/*  7) Select department, total salary with respect to a department from employee table where total salary greater than 50000 order by TotalSalary descending*/

	
	WITH Total_Salary(DepartmentID,Total_Salary) AS
	(
	SELECT DepartmentID, SUM(Salary) AS TOTAL_SALARY FROM Employees GROUP BY DepartmentID 
	)

	SELECT * FROM Total_Salary WHERE Total_Salary> 50000 ORDER BY TOTAL_SALARY DESC 
	