USE SQLDay2;
-- A 'Batch' is a set of SQL commnads that get sent to SQL Server in one network packet
SELECT * FROM EmployeesDetail



/*Create a batch Select Banking as ‘Bank Dept’, Insurance as
‘Insurance Dept’ and Services as ‘Services Dept’ from employee table*/

SELECT Department AS 'Bank Dept'
FROM EmployeesDetail
WHERE Department = 'Banking'
SELECT Department AS 'Insurance Dept'
FROM EmployeesDetail
WHERE Department = 'Insurance'
SELECT Department AS 'Services Dept'
FROM EmployeesDetail
WHERE Department = 'Services'
GO

/*2. 5 Students Name, Address, City, DOB, Standard need to be inserted in 
the student table, need to fetch these result from json variable. and
select output in the json format*/


DECLARE @JSON  NVARCHAR(MAX)
SET @JSON = '{
	"StudentsInfo": [{
			"Student": {
				"Id": 1,
				"Name": "John smith",
				"Address": "chicago",
				"DOB": "12/04/2000",
				"Standard": 12
			}
		},
		{
			"Student": {
				"Id": 2,
				"Name": "Adam smith",
				"Address": "Nodida",
				"DOB": "05/04/2001",
				"Standard": 11
			}
		},
		{
			"Student": {
				"Id": 3,
				"Name": "Helly smith",
				"Address": "Washington",
				"DOB": "04/07/2005",
				"Standard": 5
			}
		},
		{
			"Student": {
				"Id": 4,
				"Name": "Simran smith",
				"Address": "london",
				"DOB": "02/11/2000",
				"Standard": 8
			}
		},
		{
			"Student": {
				"Id": 5,
				"Name": "Willson smith",
				"Address": "chicago",
				"DOB": "09/10/2000",
				"Standard": 9
			}
		}
	]
}'

SELECT *
FROM OPENJSON(@JSON, '$.StudentsInfo')
WITH(
	Id INT '$.Student.Id',
	Name NVARCHAR(20) '$.Student.Name',
	Address NVARCHAR(20) '$.Student.Address',
	DoB DATE '$.Student.DOB',
	Standard NVARCHAR(20) '$.Student.Standard'
)


-- select output in the json format

DECLARE @JSON  NVARCHAR(MAX)
SET @JSON = '{
	"StudentsInfo": [{
			"Student": {
				"Id": 1,
				"Name": "John smith",
				"Address": "chicago",
				"DOB": "12/04/2000",
				"Standard": 12
			}
		},
		{
			"Student": {
				"Id": 2,
				"Name": "Adam smith",
				"Address": "Nodida",
				"DOB": "05/04/2001",
				"Standard": 11
			}
		},
		{
			"Student": {
				"Id": 3,
				"Name": "Helly smith",
				"Address": "Washington",
				"DOB": "04/07/2005",
				"Standard": 5
			}
		},
		{
			"Student": {
				"Id": 4,
				"Name": "Simran smith",
				"Address": "london",
				"DOB": "02/11/2000",
				"Standard": 8
			}
		},
		{
			"Student": {
				"Id": 5,
				"Name": "Willson smith",
				"Address": "chicago",
				"DOB": "09/10/2000",
				"Standard": 9
			}
		}
	]
}'

SELECT *
FROM OPENJSON(@JSON, '$.StudentsInfo')
WITH(
	Id INT '$.Student.Id',
	Name NVARCHAR(20) '$.Student.Name',
	Address NVARCHAR(20) '$.Student.Address',
	DoB DATE '$.Student.DOB',
	Standard NVARCHAR(20) '$.Student.Standard'
)FOR JSON PATH




