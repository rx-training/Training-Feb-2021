/*Create a batch Select Banking as ‘Bank Dept’, Insurance as ‘Insurance Dept’ and Services as ‘Services Dept’ from employee table*/

use SQLDay6

SELECT * FROM Employees




SELECT * FROM Departments d INNER JOIN Employees e ON (e.DepartmentID=d.DepartmentID) WHERE DepartmentName = 'Bank Dept'
GO

SELECT * FROM Departments d INNER JOIN Employees e ON (e.DepartmentID=d.DepartmentID) WHERE DepartmentName = 'Insurance Dept'
Go

SELECT * FROM Departments d INNER JOIN Employees e ON (e.DepartmentID=d.DepartmentID) WHERE DepartmentName = 'Services Dept'
