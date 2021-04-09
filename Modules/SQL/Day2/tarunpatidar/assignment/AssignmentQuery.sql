UPDATE Employees
SET Email='not available'

-----------

UPDATE Employees
SET Email='not available', CommissionPct = 0.10

-----------

UPDATE Employees
SET Email='not available', CommissionPct = 0.10
WHERE DepartmentID = 110

---------------

UPDATE Employees
SET Email='not available'
WHERE DepartmentID = 80 AND CommissionPct < 0.20

---------------

UPDATE Employees
SET Email='not available'
WHERE Department = 'Accouning'

----------------

UPDATE Employees
SET Salary=8000
WHERE EmployeeID = 105 AND Salary < 5000

----------------

UPDATE Employees
SET JobId = 'SH_CLERK'
WHERE EmployeeID = 118 AND DepartmentID = 30 AND NOT JobId LIKE('^SH')

--------------

UPDATE Employees
SET Salary = Salary + Salary * 0.25
WHERE DepartmentID = 40 

UPDATE Employees
SET Salary = Salary + Salary * 0.15 
WHERE DepartmentID = 90

UPDATE Employees
SET Salary = Salary + Salary * 0.10 
WHERE DepartmentID = 110

--------------

UPDATE Employees
SET Salary = Salary + Salary * 0.10, 
CommissionPct = CommissionPct + CommissionPct * 0.10
WHERE JobId = 'PU_CLERK'

select * from Employees