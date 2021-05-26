USE master

DECLARE @JSON NVARCHAR(MAX)
SET @JSON = '{
    "EmpsData" :
        [
            {
                "Emp": {
                        "id": "1",
                        "Name": "Jhon Doe",
                        "Department": "Banking"
                }  
            },
            {
                "Emp" : {
                        "id": "2",
                        "Name": "Adam Smith",
                        "Department": "Service"
                }
            }
        ]
}'

SELECT *
FROM OPENJSON(@JSON, '$.EmpsData')
WITH (
	id int '$.Emp.id',
	Name NVARCHAR(30) '$.Emp.Name',
	Department NVARCHAR(30) '$.Emp.Department'
)
GO

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

-- store json in table

USE SQLDay2;
CREATE TABLE BLOG
(BlogID INT,
AuthorName NVARCHAR(20),
BlogDetails NVARCHAR(MAX)

CONSTRAINT PK_BlogID PRIMARY KEY(BlogID),
CONSTRAINT CK_BlogDetails CHECK(ISJSON(BlogDetails) = 1)
)

SELECT * FROM BLOG

SELECT *
FROM INFORMATION_SCHEMA.COLUMNS
WHERE TABLE_NAME = 'BLOG';

INSERT INTO BLOG
VALUES(2,'Jhone Doe','{
    "EmpsData" :{       "id": "1",
                        "Name": "Jhon Doe",
                        "Department": "Banking",
						"Hobbies":["Singing","Writing","Dancing"]}
}'),
(1,'Adam Smith','{
    "EmpsData" :{       "id": "1",
                        "Name": "Jhon Doe",
                        "Department": "Banking"}
}')

DELETE FROM BLOG;

SELECT * FROM BLOG;

-- Access json multiple data from table column

SELECT BlogID,AuthorName,
	JSON_VALUE(BlogDetails,'$.EmpsData.Name'),
	JSON_QUERY(BlogDetails,'$.EmpsData.Hobbies') AS Hobbies,
	JSON_VALUE(BlogDetails,'$.EmpsData.Hobbies[1]') AS Hobby
FROM BLOG;


UPDATE BLOG
SET BlogDetails = JSON_MODIFY(BlogDetails,'$.EmpsData.Name','Adam Smith')
WHERE BlogID = 1



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

  DECLARE @json NVARCHAR(MAX);
  SET @json = N'[{"id" : 2,"info":{"name": "John","surname": "Smith"},"age":25},
{"id":5,"info":{"name":"Jane","surname": "Smith","skills":["SQL","C#","Java"]}}]'

SELECT *
FROM OPENJSON(@json)
 WITH(
	id INT '$.id',
	firstName NVARCHAR(50) '$.info.name',
	lastName VARCHAR(50) '$.info.surname',
	age INT,
	datOfBirth DATETIME2 '$.dob',
	skills NVARCHAR(MAX) '$.info.skills' AS JSON
	)
OUTER APPLY OPENJSON(skills)
	WITH (skill NVARCHAR(8) '$');

-- Convert SQL Server data to JSON or export JSON

SELECT * FROM EmployeesDetail

SELECT EmployeeID AS 'info.ID',
	(FirstName + ' ' + LastName) AS 'info.Name',
	Salary AS 'info.Salary'
FROM EmployeesDetail
FOR JSON PATH

DECLARE @JSON NVARCHAR(MAX)
SET @JSON = '[{"info":{"ID":1,"Name":"John Abraham","Salary":1000000.0000}},{"info":{"ID":2,"Name":"Michael Clarke","Salary":80000.0000}},{"info":{"ID":3,"Name":"Roy Thomas","Salary":70000.0000}},{"info":{"ID":4,"Name":"Tom Jose","Salary":60000.0000}},{"info":{"ID":5,"Name":"Jerry Pinto","Salary":560000.0000}},{"info":{"ID":6,"Name":"Philip Mathew","Salary":750000.0000}},{"info":{"ID":7,"Name":"TestName1 123","Salary":650000.0000}},{"info":{"ID":8,"Name":"TestName2 Lname%","Salary":600000.0000}}]'

SELECT *
FROM OPENJSON(@JSON)
WITH(
	id int '$.info.ID',
	Name NVARCHAR(50) '$.info.Name',
	Salary MONEY '$.info.Salary'
)


--

DECLARE @jsonVariable NVARCHAR(MAX);

SET @jsonVariable = N'[
  {
    "Order": {  
      "Number":"SO43659",  
      "Date":"2011-05-31T00:00:00"  
    },  
    "AccountNumber":"AW29825",  
    "Item": {  
      "Price":2024.9940,  
      "Quantity":1  
    }  
  },  
  {  
    "Order": {  
      "Number":"SO43661",  
      "Date":"2011-06-01T00:00:00"  
    },  
    "AccountNumber":"AW73565",  
    "Item": {  
      "Price":2024.9940,  
      "Quantity":3  
    }  
  }
]';

-- INSERT INTO <sampleTable>  
SELECT SalesOrderJsonData.*
FROM OPENJSON (@jsonVariable, N'$')
  WITH (
    Number VARCHAR(200) N'$.Order.Number',
    Date DATETIME N'$.Order.Date',
    Customer VARCHAR(200) N'$.AccountNumber',
    Quantity INT N'$.Item.Quantity'
  ) AS SalesOrderJsonData;


 SELECT * FROM Employees FOR JSON AUTO