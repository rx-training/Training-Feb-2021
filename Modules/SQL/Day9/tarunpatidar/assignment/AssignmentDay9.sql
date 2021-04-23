---- 1. Create a batch Select Banking as ‘Bank Dept’, Insurance as ‘Insurance Dept’ and Services as ‘Services Dept’ from employee table. --------

SELECT Emp.FirstName , CASE Dept.DepartmentName
		WHEN 'Banking' THEN 'Bank Dept'
		WHEN 'Insurance' THEN 'Insurance Dept'
		WHEN 'Servicing' THEN 'Serivice Dept'
		END AS 'DepartmentName'
		FROM Employees AS Emp JOIN Departments AS Dept ON Emp.DepartmentID = Dept.DepartmentID 
		WHERE Dept.DepartmentName IN ('Banking','Insurance','Servicing')
		GO
	
SELECT * FROM Employees;
Select *  from Departments;

---- 2. 5 Students Name, Address, City, DOB, Standard need to be inserted in the student table, need to fetch these result from json variable. and select output in the json format. --------

DECLARE @Students NVARCHAR(MAX)
SET @Students = N'[
{"Name" : "Tarun" , "Address" : "Wayal" ,"City":"Manawar","DOB" : "1999-09-15 ","Standard":"11"},
{"Name" : "Shivam" , "Address" : "Near Ranjeet Hanuman Temple" ,"City":"Indore","DOB" : "1998-05-16 ","Standard":"12"},
{"Name" : "Bharat" , "Address" : "Usha Nagar" ,"City":"Indore","DOB" : "2000-02-29 ","Standard":"10"},
{"Name" : "Savan" , "Address" : "Usha Nagar" ,"City":"Indore","DOB" : "1998-07-14 ","Standard":"9"},
{"Name" : "Ankush" , "Address" : "Karoli" ,"City":"Manawar","DOB" : "1997-03-10 ","Standard":"8"}
]'


SELECT * INTO Students
FROM OPENJSON(@Students)
WITH (
			Name varchar(50) '$.Name',
			Address varchar(50) '$.Address',
			City varchar(50) '$.City',
			DOB DATE '$.DOB',
			Standard INT '$.Standard'
			);

SELECT * FROM Students;
SELECT * FROM Students FOR JSON AUTO; 