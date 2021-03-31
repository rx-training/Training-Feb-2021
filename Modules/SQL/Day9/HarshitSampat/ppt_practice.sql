---------------Batch-----------------

DECLARE @RATE INT
SELECT @RATE =RATE
FROM HumanResources.EmployeePayHistory
WHERE BusinessEntityID =23
IF @RATE < 15
print 'REVIEW THE RATE IS REQUIRED'
ELSE
BEGIN
PRINT 'REVIEW OF THE RATE IS NOT REQUIRED'
PRINT 'RATE='
PRINT @RATE
END
GO		

SELECT BusinessEntityID,'MARITAL STATUS' =
Case MaritalStatus
	WHEN 'M' THEN 'MARRIED'
	WHEN 'S' THEN 'SINGLE'
	ELSE 'NOT SPECIFIED'
END
FROM HumanResources.Employee
GO

WHILE (SELECT AVG(ListPrice) FROM Production.Product)<$300
BEGIN
	UPDATE Production.Product
		SET ListPrice = ListPrice*2
	SELECT MAX(ListPrice)FROM Production.Product
	IF(SELECT MAX(ListPrice)FROM Production.Product)>$500
		BREAK
		ELSE
		CONTINUE
END
PRINT 'TOO MUCH FOR THE MARKET TO BEAR'


---------------------------fOR BROWSE----------------------
ALTER DATABASE AdventureWorks2012 SET COMPATIBILITY_LEVEL =130

----------------------------OPEN JSON--------------
DECLARE @json NVARCHAR(2048) = N'{
   "String_value": "John",
   "DoublePrecisionFloatingPoint_value": 45,
   "DoublePrecisionFloatingPoint_value": 2.3456,
   "BooleanTrue_value": true,
   "BooleanFalse_value": false,
   "Null_value": null,
   "Array_value": ["a","r","r","a","y"],
   "Object_value": {"obj":"ect"}
}';

DECLARE @DATA NVARCHAR(MAX)
SET @DATA = N'[{
	"STUDENTDATA":{"NAME": "HARSHIT", "ADDRESS":"VADAJ", "CITY":"AHMEDABAD", "DOB":"09/09/1999","STNDARD":"10TH"},
	"STUDENTDATA":{"NAME": "JIGAR", "ADDRESS":"RANIP", "CITY":"AHMEDABAD", "DOB":"07/08/1998","STANDARD":"11TH"},
	"STUDENTDATA":{"NAME": "PARTH", "ADDRESS":"MANINAGAR", "CITY":"AHMEDABAD", "DOB":"06/09/2000","STANDARD":"11TH"},
	"STUDENTDATA":{"NAME": "PARESH", "ADDRESS":"BOPAL", "CITY":"AHMEDABAD", "DOB":"06/07/1999","STANDARD":"9TH"},
	"STUDENTDATA":{"NAME": "JOHN", "ADDRESS":"NARODA", "CITY":"AHMEDABAD", "DOB":"05/5/2000","STANDARD":"10TH"}
	}
]'

SELECT *FROM OPENJSON( @DATA)
WITH(
		NAME VARCHAR(200)			'$.STUDENTDATA.NAME',
		ADDRESS VARCHAR(200)		'$.STUDENTDATA.ADDRESS',
		CITY VARCHAR(200)			'$.STUDENTDATA.CITY',
		DOB VARCHAR(50)				'$.STUDENTDATA.DOB',
		STANDARD VARCHAR(30)		'$.STUDENTDATA.STANDARD',	
		[STUDENTDATA] NVARCHAR(MAX) AS JSON
)




DECLARE @json NVARCHAR(MAX) = N'[  
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
]'  
   
SELECT *
FROM OPENJSON ( @json )  
WITH (   
              Number   VARCHAR(200)   '$.Order.Number',  
              Date     DATETIME       '$.Order.Date',  
              Customer VARCHAR(200)   '$.AccountNumber',  
              Quantity INT            '$.Item.Quantity',  
              [Order]  NVARCHAR(MAX)  AS JSON  
 )


 DECLARE @pSearchOptions NVARCHAR (4000) = N'[1,2,3,4]'
 SELECT * FROM Production.Product
 INNER JOIN OPENJSON(@pSearchOptions) AS productTypes
 ON Product.ProductID = Product.value


 DECLARE @JSON1 NVARCHAR(MAX),@JSON2 NVARCHAR(MAX)
 SET @JSON1 = N'{"name":"John","surname":"doe"}'
 SET @JSON2 = N'{"name":"john","age":"45"}'

 SELECT * FROM OPENJSON(@JSON1)
 UNION ALL
 SELECT * FROM OPENJSON(@JSON2)
 WHERE [KEY] NOT IN(SELECT [key] FROM OPENJSON(@json1))

 DECLARE @json NVARCHAR(max)  = N'{  
  "id" : 2,  
  "firstName": "John",  
  "lastName": "Smith",  
  "isAlive": true,  
  "age": 25,  
  "dateOfBirth": "2015-03-25T12:00:00",  
  "spouse": null  
  }';  
   
  INSERT INTO Person  
  SELECT *   
  FROM OPENJSON(@json)  
  WITH (id INT,  
        firstName NVARCHAR(50), lastName NVARCHAR(50),   
        isAlive BIT, age INT,  
        dateOfBirth DATETIME, spouse NVARCHAR(50))

-------------------------JSON VALUE-----------------------------

DECLARE @jsoninfo NVARCHAR(MAX)
SET @jsoninfo = N'{
		"info":{
		"type":1,
		"address":{
			"town":"Bristol",
			"county":"Avon",
			"country":"England"
		},
		"tags":["Sports","Water Polo"]
		},
		"type":"Basic"
}';

SELECT FirstName,LastName,
JSON_VALUE(@jsoninfo,$.info.address[0].town) As town
from person.person
where json_value(json)




CREATE TABLE dbo.Store
 (
  StoreID INT IDENTITY(1,1) NOT NULL,
  Address VARCHAR(500),
  jsonContent NVARCHAR(4000),
  Longitude AS JSON_VALUE(jsonContent, '$.address[0].longitude'),
  Latitude AS JSON_VALUE(jsonContent, '$.address[0].latitude')
 )

SELECT * FROM DBO.Store


--------------------------------JSON MODIFY-------------------------
DECLARE @INFO NVARCHAR(100) = '{"name":"john","skills":["C#","SQL"]}'
PRINT @INFO
--UPDATE NAME

SET @INFO = JSON_MODIFY(@INFO,'$.name','Mike')
PRINT @INFO

--INSERT SURNAME
SET @INFO = JSON_MODIFY(@INFO,'$.SURNAME','Smith')

PRINT @INFO

---DELETE NAME
SET @INFO = JSON_MODIFY(@INFO,'$.NAME',NULL)
PRINT @INFO

--ADD SKILL
SET @INFO = JSON_MODIFY(@INFO,'append $.skills','Azure')
PRINT @INFO

-------------MULTIPLE UPDATE----------
DECLARE @INFO NVARCHAR(100) = '{"name":"john","skills":["C#","SQL"]}'
SET @INFO =JSON_MODIFY(JSON_MODIFY(JSON_MODIFY(@INFO,'$.name','hARSHIT'),'$.SURNAME','SAMPAT'),'append $.skills','AZURE')

PRINT @INFO


DECLARE @product NVARCHAR(2000) = '{"PRICE":499.99}'
PRINT @product
SET @product =JSON_MODIFY(JSON_MODIFY(@product,'$.price', CAST(JSON_VALUE(@product,'$.PRICE') AS NUMERIC(4,2))),'$.PRICE',NULL)
PRINT @product

UPDATE Employees
SET jsonCol=JSON_MODIFY(jsonCol,'$.info.address.town','London')
WHERE EmployeeID=17	