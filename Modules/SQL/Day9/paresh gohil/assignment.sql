USE Employees

SELECT * FROM Employees

/*Day 9*/

/*Create a batch Select Banking as ‘Bank Dept’, Insurance as ‘Insurance Dept’ and Services as ‘Services Dept’ from employee table*/

	/*DECLARE @DEPARTMENT VARCHAR(10)*/
	SELECT CASE DEPARTMENT 
						WHEN 'Banking' THEN 'Bank Dept' 
						WHEN 'Insurance' THEN 'Insurance Dept' 
						WHEN 'Services' THEN 'Services Dept'
						END 
						FROM Employees
	GO

/*5 Students Name, Address, City, DOB, Standard need to be inserted in the student table, need to fetch these result from json variable. and select output in the json format*/

	DECLARE @json NVARCHAR(MAX);
	SET @json = N'[
		{"info": {"name": "John", "address": "Nikol" ,"city": "Ahemdabad" ,"dob": "1998-11-01" ,"standard": 10}},
		{"info": {"name": "Jane", "address": "Bapunagar" ,"city": "Ahemdabad" , "dob": "1998-11-02" ,"standard": 9}},
		{"info": {"name": "Joy", "address": "Kamrej" ,"city": "Surat" , "dob": "1998-12-03" ,"standard": 8}},
		{"info": {"name": "Bill", "address": "Alpha" ,"city": "Surat" , "dob": "1998-01-04" ,"standard": 7}},
		{"info": {"name": "Mike", "address": "Aajwa" ,"city": "Baroda" , "dob": "1998-02-05" ,"standard": 6}}

	]';
	
	SELECT * INTO JStudents
	FROM OPENJSON(@json)
	  WITH (
		Name NVARCHAR(50) '$.info.name',
		Address NVARCHAR(50) '$.info.address',
		City NVARCHAR(20) '$.info.city',
		DOB DATE '$.info.dob',
		Standard INT '$.info.standard'
	);

	/*OR*/

	/*
	INSERT INTO JStudents
	SELECT * FROM OPENJSON(@json)
	WITH (
		Name NVARCHAR(50) '$.info.name',
		Address NVARCHAR(50) '$.info.address',
		City NVARCHAR(20) '$.info.city',
		DOB DATE '$.info.dob',
		Standard INT '$.info.standard'
	);*/
GO

	SELECT * FROM JStudents
