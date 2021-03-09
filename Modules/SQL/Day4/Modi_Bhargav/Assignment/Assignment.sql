                                                       /*********** Assignment **********/
SELECT * FROM Employees
/***** 1. Write a query to rank employees based on their salary for a month.*****/
SELECT FirstName, LastName,Salary,RANK() OVER (ORDER BY Salary) AS Rank FROM Employees

/***** 2.Select 4th Highest salary from employee table using ranking function. *****/
SELECT * FROM (SELECT EmployeeID,FirstName, LastName,Salary , DENSE_RANK() OVER (ORDER BY Salary DESC) '4Th Highest' FROM Employees) AS D WHERE '4Th Highest' = 4;

/***** 3.Get department, total salary with respect to a department from employee table.*****/
SELECT DepartmentID, SUM(Salary) AS 'ID To Salary' FROM Employees GROUP BY DepartmentID

/***** 4.Get department, total salary with respect to a department from employee table order by total salary descending.*****/
SELECT DepartmentID, SUM(Salary) AS 'ID To Salary' FROM Employees GROUP BY DepartmentID ORDER BY 'ID To Salary' DESC;

/***** 5.Get department wise maximum salary from employee table order by salary ascending.*****/
SELECT DepartmentID, Max(Salary) AS 'MaxSalary' FROM Employees GROUP BY DepartmentID

/***** 6.Get department wise minimum salary from employee table order by salary ascending.*****/
SELECT DepartmentID, Max(Salary) AS 'MinSalary' FROM Employees GROUP BY DepartmentID

/***** 7.Select department, total salary with respect to a department from employee table where total salary greater than 50000 order by TotalSalary descending.*****/
SELECT DepartmentID, SUM(Salary) AS 'ID To Salary' FROM Employees GROUP BY DepartmentID HAVING SUM(Salary) > 50000 ORDER BY 'ID To Salary' DESC;








