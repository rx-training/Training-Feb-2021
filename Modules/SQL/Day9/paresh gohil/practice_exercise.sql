USE AdventureWorks2012
SELECT * FROM HumanResources.Employee
GO

/*--------------------------------------------------------------------------------------------------------------
--------------------------------------------------------------------------------------------------------------*/

DECLARE @Designation nvarchar(90),@MaritalStatus varchar(30)
SET @Designation = 'Design Engineer'
SET @MaritalStatus = 'M'
SELECT JobTitle FROM HumanResources.Employee WHERE JobTitle = @Designation and MaritalStatus = @MaritalStatus
GO

/*--------------------------------------------------------------------------------------------------------------
--------------------------------------------------------------------------------------------------------------*/

DECLARE @Designation nvarchar(90),@MaritalStatus varchar(30),@vacationhours smallint
SET @Designation = 'Design Engineer'
SET @MaritalStatus = 'M'
SET @vacationhours = 50
if @vacationhours >50
SELECT JobTitle,leavegranted = 'yes' FROM HumanResources.Employee WHERE JobTitle = @Designation and MaritalStatus = @MaritalStatus
else
SELECT JobTitle,leavegranted = 'no' FROM HumanResources.Employee WHERE JobTitle = @Designation and MaritalStatus = @MaritalStatus
GO

/*--------------------------------------------------------------------------------------------------------------
--------------------------------------------------------------------------------------------------------------*/

DECLARE @Designation nvarchar(90),@MaritalStatus varchar(30),@vacationhours smallint
SET @Designation = 'Design Engineer'
SET @MaritalStatus = 'M'
SET @vacationhours = 50
SELECT JobTitle,leave = CASE WHEN VacationHours = @vacationhours THEN  'yes' else 'no' end FROM HumanResources.Employee WHERE JobTitle = @Designation and MaritalStatus = @MaritalStatus
GO

/*--------------------------------------------------------------------------------------------------------------
--------------------------------------------------------------------------------------------------------------*/

WHILE (SELECT AVG(ListPrice) FROM Production.Product) < $300
BEGIN 
	UPDATE Production.Product SET ListPrice = ListPrice * 2
	SELECT MAX(ListPrice) FROM Production.Product
	if (SELECT MAX(ListPrice) FROM Production.Product) > $500
		BREAK
	ELSE 
		CONTINUE
END 
PRINT 'Too much for the market to bear'
GO

SELECT * FROM Production.Product

/*---------------------------------------------------------------------------------------------------
--------------------------------------------------------------------------------------------------*/

USE Students

DECLARE @json NVARCHAR(MAX);
SET @json = N'[
  {"id": 2, "info": {"name": "John", "surname": "Smith"}, "age": 25},
  {"id": 5, "info": {"name": "Jane", "surname": "Smith"}, "dob": "2005-11-04T12:00:00"}
]';

SELECT * INTO Practice
FROM OPENJSON(@json)
  WITH (
    id INT 'strict $.id',
    firstName NVARCHAR(50) '$.info.name',
    lastName NVARCHAR(50) '$.info.surname',
    age INT,
    dateOfBirth DATETIME2 '$.dob'
  );
GO

/*-----------------------------------------------------------------------------------------
-----------------------------------------------------------------------------------------*/

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
GO

/*------------------------------------------------------------------------
------------------------------------------------------------------------*/

SELECT * FROM HumanResources.Employee FOR JSON PATH
GO

SELECT * FROM HumanResources.Employee FOR JSON AUTO
GO



