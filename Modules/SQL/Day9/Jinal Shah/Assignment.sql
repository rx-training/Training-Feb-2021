
--------------------sqldb_day6-----------------

/* (1) Create a batch Select Banking as ‘Bank Dept’, Insurance as ‘Insurance Dept’ and 
		Services as ‘Services Dept’ from employee table  */

		SELECT emp.EmployeeID, (emp.FirstName + ' ' + emp.LastName) AS 'Name',
				CASE dept.DepartmentName
					WHEN 'Banking'THEN 'Bank Dept'
					WHEN 'Insurance'THEN 'Insurance Dept'
					WHEN 'Services'THEN 'Services Dept'
					END AS 'Department'
		FROM Employees emp JOIN Departments dept ON emp.DepartmentID = dept.DepartmentID
		WHERE dept.DepartmentName IN ('Banking','Insurance','Services')
		GO

		SELECT * FROM Employees
		SELECT * FROM Departments

		SELECT emp.EmployeeID, (emp.FirstName + ' ' + emp.LastName) AS 'Name',
				CASE dept.DepartmentName
					WHEN 'IT'THEN 'IT Dept'
					WHEN 'Marketing'THEN 'Marketing Dept'
					WHEN 'Finance'THEN 'Finance Dept'
					END AS 'Department'
		FROM Employees emp JOIN Departments dept ON emp.DepartmentID = dept.DepartmentID
		WHERE dept.DepartmentName IN ('IT','Marketing','Finance')
		GO

/* (2) 5 Students Name, Address, City, DOB, Standard need to be inserted in the student table, 
       need to fetch these result from json variable. and select output in the json format. */

	   DECLARE @student NVARCHAR(MAX)
	   SET @student = N' [ 
	   { "Name" : "Jinal", "Address" : "Isanpur", "City" : "Ahmedabad", "DOB" : "2003-07-05","Standard" : "10" },
	   { "Name" : "Dhruti", "Address" : "Ghodasar", "City" : "Ahmedabad", "DOB" : "2001-07-05","Standard" : "12" },
	   { "Name" : "Zeel", "Address" : "Kudasan", "City" : "Gandhinagar", "DOB" : "2010-07-05","Standard" : "8" },
	   { "Name" : "Jiya", "Address" : "Adalaj", "City" : "Gandhinagar", "DOB" : "2012-07-05","Standard" : "9" },
	   { "Name" : "Jiyan", "Address" : "kalol", "City" : "Gandhinagar", "DOB" : "2014-07-05","Standard" : "5" }
	   ]'

	   SELECT * 
	   FROM OPENJSON(@student)
		   WITH(
				name nvarchar(50) '$.Name',
				address nvarchar(50) '$.Address',
				city nvarchar(50) '$.City',
				dob nvarchar(50) '$.DOB',
				standard nvarchar(50) '$.Standard'
		   );

		SELECT * INTO StuTB
	    FROM OPENJSON(@student)
		   WITH(
				name nvarchar(50) '$.Name',
				address nvarchar(50) '$.Address',
				city nvarchar(50) '$.City',
				dob nvarchar(50) '$.DOB',
				standard nvarchar(50) '$.Standard'
		   );

		SELECT * FROM StuTB FOR JSON AUTO
		GO


