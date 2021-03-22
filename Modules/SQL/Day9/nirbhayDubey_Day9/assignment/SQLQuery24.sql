CREATE DATABASE AssignmentDay33;
GO

USE AssignmentDay33;
GO

--METHOD 1
CREATE TABLE Students(
	Name varchar(30) NOT NULL, 
	Address varchar(30) NOT NULL, 
	City varchar(20) NOT NULL, 
	DOB date NOT NULL, 
	Standard int NOT NULL 
);
GO

DECLARE @Stu NVARCHAR(MAX);
SET @Stu = N'[
	{"Name":"Nirbhay Dubey", "Address":"ABC DEF", "City":"Ahmedabad", "DOB":"1999-04-04", "Standard":12},
	{"Name":"Rahul Suthar", "Address":"GHI JLK", "City":"Ahmedabad", "DOB":"1998-09-13", "Standard":12},
	{"Name":"Pooja Jain", "Address":"LMN OPQ", "City":"Ahmedabad", "DOB":"1998-03-10", "Standard":12},
	{"Name":"Manish Shah", "Address":"RST UVW", "City":"Ahmedabad", "DOB":"1998-04-04", "Standard":12},
	{"Name":"Aman Rathore", "Address":"XYZ ABC", "City":"Ahmedabad", "DOB":"1997-05-06", "Standard":12}
]';
INSERT INTO Students (Name, Address, City, DOB, Standard)
SELECT * FROM OPENJSON(@Stu)
	WITH(
		Name varchar(30) '$.Name',
		Address varchar(30) '$.Address', 
		City varchar(20) '$.City', 
		DOB date '$.DOB', 
		Standard int '$.Standard' 
	);
GO

SELECT * FROM Students FOR JSON AUTO;
GO

--METHOD 2
DROP TABLE Students;
GO

CREATE TABLE Students(
	StudentID int CONSTRAINT PK_StuId PRIMARY KEY IDENTITY,
	StudentDetails NVARCHAR(MAX) CONSTRAINT CHK_StuDetails CHECK(ISJSON(StudentDetails)=1) 
);
GO

INSERT INTO Students(StudentDetails)
VALUES('{"Name":"Nirbhay Dubey", "Address":"ABC DEF", "City":"Ahmedabad", "DOB":"1999-04-04", "Standard":12}'),
	  ('{"Name":"Rahul Suthar", "Address":"GHI JLK", "City":"Ahmedabad", "DOB":"1998-09-13", "Standard":12}'),
	  ('{"Name":"Pooja Jain", "Address":"LMN OPQ", "City":"Ahmedabad", "DOB":"1998-03-10", "Standard":12}'),
	  ('{"Name":"Manish Shah", "Address":"RST UVW", "City":"Ahmedabad", "DOB":"1998-04-04", "Standard":12}'),
	  ('{"Name":"Aman Rathore", "Address":"XYZ ABC", "City":"Ahmedabad", "DOB":"1997-05-06", "Standard":12}');
GO

SELECT * FROM Students;
GO

DECLARE @Stu nvarchar(MAX)
SELECT @Stu=StudentDetails FROM Students
SELECT * FROM OPENJSON(@Stu)
	WITH(
		Name varchar(30) '$.Name',
		Address varchar(30) '$.Address', 
		City varchar(20) '$.City', 
		DOB date '$.DOB', 
		Standard int '$.Standard' 
	);
GO

SELECT * FROM Students;
GO

SELECT
	StudentID,
	JSON_VALUE(StudentDetails,'$.Name') AS 'Name',
	JSON_VALUE(StudentDetails,'$.Address') AS 'Address',
	JSON_VALUE(StudentDetails,'$.City') AS 'City',
	JSON_VALUE(StudentDetails,'$.DOB') AS 'DOB',
	JSON_VALUE(StudentDetails,'$.Standard') AS 'Standard'
FROM Students;
GO