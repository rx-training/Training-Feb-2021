/* 5 Students Name, Address, City, DOB, Standard need to be inserted in the student table, 
	need to fetch these result from json variable. and select output in the json format*/




	/* Declaring and initializing json object*/

DECLARE @json nvarchar(MAX);
SET @json = N'{
				"STUDENTS":
				[
				{
					"STUDENT":
					{
						"StuName": "Anuj",
						"Address": "Vatva",
						"City": "Ahmedabad",
						"DOB": "06-03-1998",
						"Standard": 10
					}
				},

				{
					"STUDENT":
					{
						"StuName": "Nirbhay",
						"Address": "Vatva",
						"City": "Ahmedabad",
						"DOB": "04-04-1999",
						"Standard": 9
					}
				},

				{
					"STUDENT":
					{
						"StuName": "Shivam",
						"Address": "Vatva",
						"City": "Ahmedabad",
						"DOB": "04-05-1997",
						"Standard": 8
					}
				},

				{
					"STUDENT":
					{
						"StuName": "Atul",
						"Address": "Vatva",
						"City": "Ahmedabad",
						"DOB": "04-06-1995",
						"Standard": 6
					}
				},

				{
					"STUDENT":
					{
						"StuName": "Jyoti",
						"Address": "Vatva",
						"City": "Ahmedabad",
						"DOB": "08-07-1997",
						"Standard": 7
					}
				}

			]
}';


		/* Displaying Json object in table format*/


SELECT * FROM OPENJSON(@json,'$.STUDENTS')
WITH(
Name nvarchar(50) '$.STUDENT.StuName',
Address nvarchar(50) '$.STUDENT.Address',
City nvarchar(50) '$.STUDENT.City',
DOB DATE '$.STUDENT.DOB',
Standard INT '$.STUDENT.Standard'
)

			/* Displaying json object in  json format */

SELECT * FROM Students for json path, root('Students')
