SELECT * FROM Employees
GO

SELECT FirstName , LastName FROM Employees
GO

SELECT FirstName AS Employee_Name FROM Employees
GO

SELECT * FROM Employees WHERE FirstName LIKE 'Steven'
GO

SELECT * FROM Employees WHERE FirstName LIKE 'Neena' OR FirstName LIKE 'Lex'
GO

SELECT * FROM Employees WHERE FirstName NOT LIKE 'Neena'
GO

SELECT * FROM Employees WHERE Salary BETWEEN  5000 AND 8000
GO

SELECT CONCAT(FirstName,' ' ,LastName) AS NAME, Salary, PF=(Salary * .12) FROM Employees
GO

SELECT * FROM Employees WHERE FirstName LIKE 'N%'
GO

SELECT DISTINCT(DepartmentID) FROM Employees
GO

SELECT * FROM Employees ORDER BY FirstName DESC
GO

SELECT EmployeeID, CONCAT(FirstName,' ' ,LastName) AS NAME, Salary FROM Employees ORDER BY Salary
GO


SELECT * FROM(SELECT  EmployeeID, FirstName, Salary ,
	DENSE_RANK() OVER (ORDER BY SALARY DESC)RANK FROM Employees) Employees WHERE RANK<=2
GO
