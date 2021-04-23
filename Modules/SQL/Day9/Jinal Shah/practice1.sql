------master----------

	/*	DECLARE @json NVARCHAR(MAX);
		SET @json = N'[
			{"id":1, "Name":"John"},
			{"id":2, "Name":"Rita"}
		]';

		SELECT * FROM OPENJSON(@json)
			WITH(
			Id int '$.id',
			Name NVARCHAR(50) '$.Name'
			)   */

----------------JSON_MODIFY-----------

	DECLARE @json NVARCHAR(MAX);
	SET @json = '{"info": {"address": [{"town": "Belgrade"}, {"town": "Paris"}, {"town":"Madrid"}]}}';
	SET @json = JSON_MODIFY(@json, '$.info.address[1].town', 'London');
	SELECT modifiedJson = @json;

	/* output - {"info": {"address": [{"town": "Belgrade"}, {"town": "London"}, {"town":"Madrid"}]}} */

-------------OPEN_JSON-------------

		DECLARE @json NVARCHAR(MAX);
		SET @json = N'[
		  {"id": 2, "info": {"name": "John", "surname": "Smith"}, "age": 25},
		  {"id": 5, "info": {"name": "Jane", "surname": "Smith"}, "dob": "2005-11-04T12:00:00"}
		]';

		SELECT *
		FROM OPENJSON(@json)
		  WITH (
			id INT 'strict $.id',
			firstName NVARCHAR(50) '$.info.name',
			lastName NVARCHAR(50) '$.info.surname',
			age INT,
			dateOfBirth DATETIME2 '$.dob'
		  );

--------------OPEN_JSON FUNCTION CALL-----------------

	DECLARE @json NVARCHAR(MAX);
	SET @json = N'[  
	  {"id": 2, "info": {"name": "John", "surname": "Smith"}, "age": 25},
	  {"id": 5, "info": {"name": "Jane", "surname": "Smith", "skills": ["SQL", "C#", "Azure"]}, "dob": "2005-11-04T12:00:00"}  
	]';

	SELECT *  
	FROM OPENJSON(@json)  
	  WITH (
		id INT 'strict $.id',
		firstName NVARCHAR(50) '$.info.name',
		lastName NVARCHAR(50) '$.info.surname',  
		age INT,
		dateOfBirth DATETIME2 '$.dob',
		skills NVARCHAR(MAX) '$.info.skills' AS JSON
	  )
	OUTER APPLY OPENJSON(skills)
	  WITH (skill NVARCHAR(8) '$');

-------Convert SQL Server data to JSON or export JSON--------

	SELECT * FROM HumanResources.EmployeeDepartmentHistory
	FOR JSON PATH;


--------Return data from a SQL Server table formatted as JSON----------

	SELECT 'https://services.odata.org/V4/Northwind/Northwind.svc/$metadata#Products(ProductID,ProductName)/$entity' AS '@odata.context',
	  ProductID,
	  Name as ProductName
	FROM Production.Product
	WHERE ProductID = 2
	FOR JSON AUTO;