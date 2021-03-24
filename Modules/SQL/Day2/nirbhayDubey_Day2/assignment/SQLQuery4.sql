SELECT * FROM Employees
Go

ALTER TABLE Employees DROP CONSTRAINT ukEmail
GO

UPDATE Employees SET Email='not available'
GO

UPDATE Employees SET Email='not available',CommissionPct=0.10
GO

UPDATE Employees SET Email='not available',CommissionPct=0.10 WHERE DepartmentID=110
GO

UPDATE Employees SET Email='not available' WHERE DepartmentID=80 AND CommissionPct<0.20
GO

UPDATE Employees SET Email='not available' WHERE JobId LIKE '%ACCOUNT%'
GO

UPDATE Employees SET Salary=8000 WHERE EmployeeID=105 AND Salary<5000
GO

UPDATE Employees SET JobId='SH_CLERK' WHERE EmployeeID=118 AND DepartmentID=30 AND JobId NOT LIKE 'SH%'
GO

UPDATE Employees SET Salary=(CASE 
								WHEN DepartmentID=40 THEN Salary+Salary*0.25
								WHEN DepartmentID=90 THEN Salary+Salary*0.15
								WHEN DepartmentID=110 THEN Salary+Salary*0.10
								ELSE Salary
							 END)
GO