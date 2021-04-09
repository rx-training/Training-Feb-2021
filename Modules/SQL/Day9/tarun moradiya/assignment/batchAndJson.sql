--Create a batch Select Banking as ‘Bank Dept’, Insurance as ‘Insurance Dept’ and Services as ‘Services Dept’ from 
--employee table

SELECT E.FirstName, E.LastName,  CASE D.DepartmentName
	WHEN 'Banking' THEN 'Bank Dept'
	WHEN 'Insurance' THEN 'Insurance Dept'
	WHEN 'Services' THEN 'Services Dept'
	END AS 'Department Name'
FROM Employees E JOIN Departments D
ON E.DepartmentID = D.DepartmentID
WHERE D.DepartmentName IN ('Banking', 'Insurance', 'Services')
GO

SELECT E.FirstName, E.LastName, CASE D.DepartmentName
	WHEN 'Accounting' THEN 'Bank Dept'
	WHEN 'Finance' THEN 'Insurance Dept'
	WHEN 'IT' THEN 'Services Dept'
	END AS 'Department Name'
FROM Employees E JOIN Departments D
ON E.DepartmentID = D.DepartmentID
WHERE D.DepartmentName IN ('Accounting', 'Finance', 'IT')
GO

/*5 Students Name, Address, City, DOB, Standard need to be inserted in the student table, need to fetch these 
result from json variable. and select output in the json format*/

DECLARE @students nvarchar(MAX)

SET @students = N'
	[
		{"name": "Tarun Moradiya",
		"address": "Raiya Road",
		"city": "Rajkot",
		"dob": "2011-06-01",
		"standard": "11"
		},
		{"name": "Himanshu Patel",
		"address": "Ring Road",
		"city": "Rajkot",
		"dob": "2011-06-01",
		"standard": "12"
		},
		{"name": "Meet Oza",
		"address": "Navrang Nagar",
		"city": "Rajkot",
		"dob": "2011-06-01",
		"standard": "10"
		},
		{"name": "Deep Fuletra",
		"address": "SG Road",
		"city": "Ahmedabad",
		"dob": "2011-06-01",
		"standard": "11"
		},
		{"name": "Rutvik Parakhiya",
		"address": "Sashuvasvani Road",
		"city": "Rajkot",
		"dob": "2011-06-01",
		"standard": "11"
		}
	]
'


SELECT * INTO Students 
FROM OPENJSON(@students)
WITH(
	name varchar(50) '$.name',
	address varchar(50) '$.address',
	city varchar(50) '$.city',
	dob date '$.dob',
	standard int '$.standard'
)


SELECT * FROM Students
FOR JSON AUTO

SELECT * FROM Students


GO