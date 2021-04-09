/*Write a query to rank employees based on their salary for a month*/

	SELECT Salary,DENSE_RANK() OVER(ORDER BY(Salary) DESC )
	AS RANK FROM Employees

/*Select 4th Highest salary from employee table using ranking function*/


SELECT * FROM (SELECT FirstName,Salary,DENSE_RANK() OVER(ORDER BY(Salary) DESC) AS 'Rank1' FROM Employees)
	AS subTable where RANK1 = 4;


/*Get department, total salary with respect to a department from employee table.*/

	select * from Employees
	SELECT DepartmentID,SUM(Salary) AS Total_Salary_By_Department
	FROM Employees GROUP BY(DepartmentID) 
	

/*Get department, total salary with respect to a department from employee table order by total salary descending*/

	SELECT DepartmentID,SUM(Salary) AS Total_Salary_By_Department
	FROM Employees GROUP BY(DepartmentID) 
	ORDER BY( Total_Salary_By_Department) DESC

/*Get department wise maximum salary from employee table order by salary ascending*/

	SELECT DepartmentID,MAX(Salary) AS MAX_Salary_By_Department 
	FROM Employees GROUP BY(DepartmentID) 
	ORDER BY( MAX_Salary_By_Department) 

/*Get department wise minimum salary from employee table order by salary ascending*/

	SELECT DepartmentID,MIN(Salary) AS MIN_Salary_By_Department 
	FROM Employees GROUP BY(DepartmentID) 
	ORDER BY( MIN_Salary_By_Department) 

/*Select department, total salary with respect to a department from employee table where total salary greater than 50000 order by TotalSalary descending*/


	SELECT DepartmentID,SUM(Salary) AS Total_Salary_By_Department
	FROM Employees GROUP BY(DepartmentID) 
	HAVING SUM(Salary) > 50000  
	ORDER BY Total_Salary_By_Department DESC

