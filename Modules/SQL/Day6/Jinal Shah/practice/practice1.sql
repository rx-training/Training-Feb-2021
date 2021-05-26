
--------------------EXISTS-----------------
SELECT BusinessEntityID, JobTitle FROM HumanResources.Employee WHERE EXISTS
	(SELECT * FROM HumanResources.EmployeeDepartmentHistory WHERE BusinessEntityID = HumanResources.Employee.BusinessEntityID
	AND DepartmentID = 4)