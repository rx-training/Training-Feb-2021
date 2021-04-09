USE AdventureWorks2012
/***** BATCHES *****/

DECLARE @Rate int

SELECT @Rate = MAX(Rate) FROM HumanResources.EmployeePayHistory

PRINT @Rate

/***** Conditional Statements *****/
DECLARE @Rate money

SELECT @Rate = Rate 

FROM HumanResources.EmployeePayHistory

WHERE BusinessEntityID = 23

IF @Rate < 15
PRINT 'Review of the Rate is Required'

ELSE 
BEGIN
PRINT 'Review of the Rate is Not Required'
PRINT 'Rate = ' 
PRINT @Rate
END

GO

/*****  CASE Satements *****/
SELECT BusinessEntityID, 'Maritial Status' = 
CASE MaritalStatus
        WHEN 'M' THEN 'Married'
		WHEN 'S' THEN 'Single'
		ELSE 'NOT Specified'
END
FROM HumanResources.Employee
GO

/***** while Statements Example *****/
WHILE (SELECT AVG(ListPrice) FROM Production.Product) < $300
BEGIN
       UPDATE Production.Product 
	            SET ListPrice = ListPrice * 2

       SELECT MAX(ListPrice) FROM Production.Product
	   IF (SELECT MAX(ListPrice) FROM Production.Product) < $500
	           BREAK
       ELSE 
	           CONTINUE
END
PRINT 'Too Much for the market bear'
GO

/*****  Json Practices *****/
DECLARE @json NVARCHAR(MAX);
SET @json = N'[
  {
    "id":1,
    "name": "John"
  },
  {
    "id":2,
    "name": "Jane"
  }
]';
SELECT *
FROM OPENJSON(@json)
      WITH(
			Id int '$.id',
		    Name nvarchar(50) '$.name'
		   )
/***** Json Methods ****/
DECLARE @json NVARCHAR(MAX);
SET @json = N'{
  "Orders":
  [
  {
    "Order": {  
      "Number":"SO43659",  
      "Date":"2011-05-31T00:00:00"  
    },  
    "Account":"Microsoft",  
    "Item": {  
      "Price":20.50,  
      "Quantity":1  
    }  
  },  
  {  
    "Order": {  
      "Number":"SO43661",  
      "Date":"2011-06-01T00:00:00"  
    },  
    "Account":"MI",  
    "Item": {  
      "Price":25.99,  
      "Quantity":3  
    }  
  }
  ]
}';

SELECT * INTO OrderData FROM OPENJSON(@json,N'$.Orders')
WITH (
      Number varchar(200) N'$.Order.Number',
	  Date   datetime     N'$.Order.Date',
	  Customer varchar(200) N'$.Account',
	  Quantity int          N'$.Item.Quantity'
)
SELECT * FROM OrderData

/***** Table To Convert Json *****/
SELECT Number AS [Order.Number], Date AS [Order.Date],
       Customer AS Account,
	   Quantity AS 'Item.Quantity'
FROM OrderData
FOR JSON PATH, ROOT('Orders')

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

DECLARE @json NVARCHAR(MAX);
SET @json = N'[
  {"id": 2, "info": {"name": "John", "surname": "Smith"}, "age": 25},
  
  {"id": 5, "info": {"name": "Jane", "surname": "Smith"}, "dob": "2005-11-04T12:00:00"}
]';

SELECT ISJSON(@json)


DECLARE @json NVARCHAR(MAX);
SET @json = '{
              "name":"Bhargav",
			  "Born":{"State":"Gujarat","Country":"India"},
			  "Teams":["Rahul","Meet","Ketan"],
              "info": {
                       "address": [{"town": "Belgrade"}, 
					                {"town": "Paris"},
									{"town":"Madrid"}
					              ]
					   }
			  }';
SELECT JSON_VALUE(@json,'$.name')   --Bhargav

SELECT JSON_VALUE(@json,'$.Born.State') --Gujarat

SELECT JSON_VALUE(@json,'$.info.address[1].town') --Paris

DECLARE @json NVARCHAR(MAX);
SET @json = '{
              "name":"Bhargav",
			  "Born":{"State":"Gujarat","Country":"India"},
			  "Teams":["Rahul","Meet","Ketan"],
              "info": {
                       "address": [{"town": "Belgrade"}, 
					                {"town": "Paris"},
									{"town":"Madrid"}
					              ]
					   }
			  }';
SELECT JSON_QUERY(@json,'$')

SELECT JSON_QUERY(@json,'$.Born')

SELECT JSON_QUERY(@json,'$.info')

SELECT JSON_QUERY(@json,'$.info.address')


DECLARE @json NVARCHAR(MAX);
SET @json = '{
               "Teams":["Bhargav","Prit","Meet"],
               "info": {"address": [{"town": "Belgrade"}, {"town": "Paris"}, {"town":"Madrid"}]}}';
SET @json = JSON_MODIFY(@json, '$.info.address[1].town', 'London');
PRINT @json

DECLARE @json NVARCHAR(MAX);
SET @json = '{
               "Teams":["Bhargav","Prit","Meet"],
               "info": {"address": [{"town": "Belgrade"}, {"town": "Paris"}, {"town":"Madrid"}]}}';
SET @json = JSON_MODIFY(@json, 'append $.Teams', 'Patan');
PRINT @json

DECLARE @json NVARCHAR(MAX);
SET @json = '{
               "Born": {"DOB":"1998/12/20","State":"Gujarat"},
               "Teams":["Bhargav","Prit","Meet"],
               "info": {"address": [{"town": "Belgrade"}, {"town": "Paris"}, {"town":"Madrid"}]}}';
SET @json = JSON_MODIFY(@json, '$.Born', JSON_QUERY('{"DOB":"1998/12/21","State":"India"}'))
PRINT @json


DECLARE @info NVARCHAR(100)='{"name":"John","skills":["C#","SQL"]}'

PRINT @info

-- Update name  

SET @info=JSON_MODIFY(@info,'$.name','Mike')

PRINT @info

-- Insert surname  

SET @info=JSON_MODIFY(@info,'$.surname','Smith')

PRINT @info

-- Delete name  

SET @info=JSON_MODIFY(@info,'$.name',NULL)

PRINT @info

-- Add skill  

SET @info=JSON_MODIFY(@info,'append $.skills','Azure')

PRINT @info

DECLARE @info NVARCHAR(100)='{"name":"John","skills":["C#","SQL"]}'

PRINT @info

-- Multiple updates  

SET @info=JSON_MODIFY(JSON_MODIFY(JSON_MODIFY(@info,'$.name','Mike'),'$.surname','Smith'),'append $.skills','Azure')

PRINT @info

DECLARE @json NVARCHAR(MAX);
SET @json = '{
               "Born": {"DOB":"1998/12/20","State":"Gujarat"},
               "Teams":["Bhargav","Prit","Meet"],
               "info": {"address": [{"town": "Belgrade"}, {"town": "Paris"}, {"town":"Madrid"}]}}';
SELECT * FROM OPENJSON(@json)
SELECT value FROM OPENJSON(@json) WHERE[key] = 'Teams'
SELECT * FROM OPENJSON(@json,'$.Born') 
                  WITH(DOB datetime, State nvarchar(50))

DECLARE @json NVARCHAR(MAX);
SET @json = '{
               "Born": {"DOB":"1998/12/20","State":"Gujarat"},
               "Teams":["Bhargav","Prit","Meet"],
               "info": {"address": [{"town": "Belgrade"}, {"town": "Paris"}, {"town":"Madrid"}]},
			   "Career":[
			             {"team":"parth","Period":{"Start":2012,"End":2013}},
				         {"team":"zeel","gp":121,"gs":231,"Period":{"Start":2015,"End":2018}},
			             {"team":"meet","gp":225,"gs":455,"Period":{"Start":2018,"End":2020}}
			            ]
			   }';

SELECT * FROM OPENJSON(@json,'$.Career')
                         WITH(team nvarchar(50),gp int,gs int,Period nvarchar(MAX) AS JSON)

SELECT 1 AS X , 2 AS Y, 3 AS Z, NULL Nothing
FOR JSON PATH

SELECT 1 AS 'Point.x' , 2 AS 'Point.y', 3 AS Z
FOR JSON PATH

SELECT 1 AS X , 2 AS Y, 3 AS Z
FOR JSON PATH, WITHOUT_ARRAY_WRAPPER

USE AdventureWorks2012
SELECT * FROM Person.Person
SELECT TOP 10 BusinessEntityID AS Id,FirstName FROM Person.Person FOR JSON PATH

SELECT 'https://services.odata.org/V4/Northwind/Northwind.svc/$metadata#Products(ProductID,ProductName)/$entity' AS '@odata.context',
  ProductID,
  Name as ProductName
FROM Production.Product
WHERE ProductID = 1
FOR JSON AUTO;