
USE DemoDay10;


--Create a batch Select Banking as ‘Bank Dept’, Insurance as ‘Insurance Dept’ and Services as ‘Services Dept’ from employee table

SELECT * FROM Employees;
Select *  from Departments;


SELECT E.FirstName , CASE DepartmentName
		WHEN 'Banking' THEN 'Banking Deartment'
		WHEN 'Insurance' THEN 'Insurance Deartment'
		WHEN 'Servicing' THEN 'Serivice Deartment'
		END AS 'DepartmentName'
		FROM Employees AS E JOIN Departments AS D ON E.DepartmentID = D.DepartmentID 
		WHERE D.DepartmentName IN ('Banking','Insurance','Servicing')
		GO
	



--2. 5 Students Name, Address, City, DOB, Standard need to be inserted in the student table, need to fetch these result from json variable. and select output in the json format

DECLARE @Students NVARCHAR(MAX)
SET @Students = N'[
{"Name" : "Parth" , "Address" : "Near Navyug Cinema" ,
"City":"Dhrangadhra","DOB" : "1999-09-11 ","Standard":"9"},
{"Name" : "Kush" , "Address" : "Near lal thada" ,
"City":"Dhrangadhra","DOB" : "2004-03-30 ","Standard":"8"},
{"Name" : "Param" , "Address" : "Near Police station" ,
"City":"Dhrangadhra","DOB" : "1999-07-06 ","Standard":"9"},
{"Name" : "Pratik" , "Address" : "Gota" ,
"City":"Ahemdabad","DOB" : "1999-12-03 ","Standard":"12"},
{"Name" : "Nemish" , "Address" : "Bopal" ,
"City":"Ahemdabad","DOB" : "1999-08-15 ","Standard":"10"}
]'


SELECT * INTO Students
FROM OPENJSON(@Students)
WITH (
			Name varchar(25) '$.Name',
			Address varchar(25) '$.Address',
			City varchar(25) '$.City',
			DOB DATE '$.DOB',
			Standard INT '$.Standard'
			);

SELECT * FROM Students;
SELECT * FROM Students FOR JSON AUTO; 
