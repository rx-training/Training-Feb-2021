---------sqldb_day6---------

		---------------------------union-----------------

  (1) 	SELECT * INTO emphistory FROM Employees WHERE EmployeeID > 120

		SELECT * FROM Employees WHERE EmployeeID BETWEEN 101 AND 110
		union
		SELECT * FROM emphistory

		--------------------column no should be same-----------------

  (2) 	SELECT FirstName,LastName INTO emphistory1 FROM Employees WHERE EmployeeID > 120

		SELECT * FROM Employees WHERE EmployeeID BETWEEN 101 AND 110
		union
		SELECT FirstName,LastName FROM emphistory1    ----ERROR----

		SELECT FirstName,LastName, EmployeeID FROM Employees WHERE EmployeeID BETWEEN 101 AND 110
		union
		SELECT FirstName,LastName,'33' FROM emphistory1

		--------------------consider first column (table)-----------------

		SELECT FirstName AS 'FNAME',LastName,'33' FROM emphistory1
		union
		SELECT FirstName,LastName, EmployeeID FROM Employees WHERE EmployeeID BETWEEN 101 AND 110

		--------------------union all----------------

 (3) 	SELECT * INTO emphistory2 FROM Employees WHERE EmployeeID > 120

		SELECT * FROM Employees WHERE EmployeeID BETWEEN 101 AND 125
		union 
		SELECT * FROM emphistory2

		SELECT * FROM Employees WHERE EmployeeID BETWEEN 101 AND 125
		union all
		SELECT * FROM emphistory2

		--------------------Intersect----------------

 (4) 	SELECT * INTO emphistory2 FROM Employees WHERE EmployeeID > 120

		SELECT * FROM Employees WHERE EmployeeID BETWEEN 101 AND 125
		intersect
		SELECT * FROM emphistory2

		--------------------EXCEPT----------------

 (5) 	SELECT * INTO emphistory2 FROM Employees WHERE EmployeeID > 120

		SELECT * FROM Employees WHERE EmployeeID BETWEEN 101 AND 125
		EXCEPT
		SELECT * FROM emphistory2






