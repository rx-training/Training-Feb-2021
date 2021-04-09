SELECT * FROM Employees
GO

SELECT FirstName,LastName FROM Employees
GO

SELECT FirstName AS 'Employee Name' FROM Employees
GO

SELECT * FROM Employees WHERE FirstName='Steven'
GO

SELECT * FROM Employees WHERE FirstName IN ('Neena','Lex')
GO

SELECT * FROM Employees WHERE FirstName NOT IN ('Neena','Lex')
GO

SELECT * FROM Employees WHERE Salary BETWEEN 5000 AND 8000;
GO

SELECT FirstName+' '+LastName AS 'Employee Name',Salary,'PF'=Salary*0.12 FROM Employees
GO

SELECT * FROM Employees WHERE FirstName LIKE 'N%'
GO

SELECT DISTINCT DepartmentID FROM Employees
GO

SELECT * FROM Employees ORDER BY FirstName DESC
GO

SELECT EmployeeID,FirstName+' '+LastName AS 'Employee Name',Salary FROM Employees ORDER BY Salary DESC
GO

SELECT TOP 2 Salary AS 'MaxSalaries' FROM Employees ORDER BY Salary DESC
GO

