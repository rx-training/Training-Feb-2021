USE Employees;

--first
UPDATE Employees SET Email= 'Not available', CommissionPct=0.10;

--Second
UPDATE Employees SET Email= 'Navailable', CommissionPct=0.50 WHERE DepartmentID=110;

--Third
UPDATE Employees SET Email= 'available' WHERE DepartmentID=80 AND CommissionPct<0.20;

--Forth

UPDATE Employees SET Email= 'available for email' WHERE DepartName=Accounting;

--Fifth
UPDATE Employees SET Salary= 8000 WHERE EmployeeID=105 AND Salary<5000;

--Sixth
UPDATE Employees SET JobId= 'SH_CLERk' WHERE EmployeeID=118 AND DepartmentID=30 AND NOT JobId LIKE 'SH%' ;


--Seaven
UPDATE Employees SET Salary =CASE DepartmentID
										WHEN 40 THEN Salary+(Salary*.25)
										WHEN 90 THEN Salary+(Salary*.15)
										WHEN 110 THEN Salary+(Salary*.10)
										ElSE Salary
										END
										WHERE DepartmentID IN(40,50,60,70,80,90,110)



