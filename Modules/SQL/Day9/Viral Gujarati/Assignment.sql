--Create a batch Select Administration as ‘Administration Dept’, Marketing as ‘Marketing Dept’ and Sales as ‘Sales Dept’ from employee table

SELECT EmployeeID, FirstName,LastName 'Name',d.DepartmentName As DEPARTMENT
From Employees e
JOIN Departments d ON e.DepartmentID = d.DepartmentID
Where d.DepartmentName = 'Administration';

SELECT EmployeeID, FirstName,LastName 'Name',d.DepartmentName As DEPARTMENT
From Employees e
JOIN Departments d ON e.DepartmentID = d.DepartmentID
Where d.DepartmentName = 'Marketing';

SELECT EmployeeID, FirstName,LastName 'Name',d.DepartmentName As DEPARTMENT
From Employees e
JOIN Departments d ON e.DepartmentID = d.DepartmentID
Where d.DepartmentName = 'Sales';
go
Select * from Employees
Select * from Departments


--5 Students Name, Address, City, DOB, Standard need to be inserted in the student table, need to fetch these result from json variable. and select output in the json format
DECLARE @JSON NVARCHAR(MAX)
SET @JSON = '[

{"NAME":"VIRAL","ADDRESS":"BHAKTINAGAR","CITY":"RAJKOT","DOB":"04-11-1998"},
{"NAME":"RAHUL","ADDRESS":"BHAKTI","CITY":"AHMEDABAD","DOB":"09-01-1998"},
{"NAME":"KRISHNA","ADDRESS":"NAGAR","CITY":"SURAT","DOB":"05-10-1998"},
{"NAME":"VIRAT","ADDRESS":"BHAGAR","CITY":"GOA","DOB":"04-08-1999"},
{"NAME":"VIJAY","ADDRESS":"TINAGAR","CITY":"AHEMDABAD","DOB":"23-12-1998"}

]'

SELECT * INTO Students FROM(
SELECT * FROM OPENJSON(@JSON)
WITH(
NAME VARCHAR(20)'$.NAME',
ADDRESS VARCHAR(50) '$.ADDRESS',
CITY VARCHAR(20) '$.CITY',
DOB DATE'$.DOB'

))[TB1]
GO


