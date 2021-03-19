--JSON

--ISJSON
--ISJSON ( expression )  --syntax
--Returns 1 if the string contains valid JSON; otherwise, returns 0. Returns null if expression is null.

DECLARE @param nvarchar
SET @param = N'[
  {
    "name": "John",
    "skills": ["SQL", "C#", "Azure"]
  },
  {
    "name": "Jane",
    "surname": "Doe"
  }
]'

IF (ISJSON(@param) > 0)  
BEGIN  
     PRINT 'Json Is valid'
END
ELSE
BEGIN
	PRINT 'Json is not valid'
END

GO

--JSONVALUE
--JSON_VALUE ( expression , path )  --syntax
--Returns a single text value of type nvarchar(4000). The collation of the returned value is the same as the collation of the input expression.

DECLARE @jsonInfo NVARCHAR(MAX)
DECLARE @town NVARCHAR(32)

SET @jsonInfo=N'{"info":{"address":[{"town":"Paris"},{"town":"London"}]}}';

SET @town=JSON_VALUE(@jsonInfo,'$.info.address[0].town'); -- Paris
PRINT @town

SET @town=JSON_VALUE(@jsonInfo,'$.info.address[1].town'); -- London
PRINT @town

GO

--JSON_QUERY 
--JSON_QUERY ( expression [ , path ] ) 
--returns an object or an array.

DECLARE @jsonEx NVARCHAR(MAX)
DECLARE @ex NVARCHAR(MAX)

SET @jsonEx = N'{
	"a": "[1,2]",
	"b": [1, 2],
	"c": "hi"
}  '

PRINT ISJSON(@jsonEx)

SET @ex=JSON_VALUE(@jsonEx,'$'); --NULL / ERROR
PRINT @ex

SET @ex=JSON_QUERY(@jsonEx,'$'); --{"a": "[1,2]", "b": [1, 2], "c": "hi"}

PRINT @ex

SET @ex=JSON_VALUE(@jsonEx,'$.a'); --[1,2]
PRINT @ex

SET @ex=JSON_QUERY(@jsonEx,'$.a'); --NULL or error
PRINT @ex

SET @ex=JSON_VALUE(@jsonEx,'$.b'); --NULL or error
PRINT @ex

SET @ex=JSON_QUERY(@jsonEx,'$.b'); --[1,2]
PRINT @ex

SET @ex=JSON_VALUE(@jsonEx,'$.b[0]'); --1
PRINT @ex

SET @ex=JSON_QUERY(@jsonEx,'$.b.1'); --NULL or error
PRINT @ex

SET @ex=JSON_VALUE(@jsonEx,'$.c'); --hi
PRINT @ex

SET @ex=JSON_QUERY(@jsonEx,'$.c'); --NULL or error
PRINT @ex

GO

--JSON_MODIFY  
--JSON_MODIFY ( expression , path , newValue )  
--Returns the updated value of expression as properly formatted JSON text.

DECLARE @info NVARCHAR(100)='{"name":"John","skills":["C#","SQL"]}'

PRINT @info

-- Multiple updates  

SET @info=JSON_MODIFY(JSON_MODIFY(JSON_MODIFY(@info,'$.name','Mike'),'$.surname','Smith'),'append $.skills','Azure')

PRINT @info

GO

--OPENJSON

/*OPENJSON( jsonExpression [ , path ] )  [ <with_clause> ]

<with_clause> ::= WITH ( { colName type [ column_path ] [ AS JSON ] } [ ,...n ] )*/

--parses JSON text and returns objects and properties from the JSON input as rows and columns.

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

SELECT * FROM OpenJson(@json);

GO

--PATH
DECLARE @json NVARCHAR(4000) = N'{  
      "path": {  
            "to":{  
                 "sub-object":["en-GB", "en-UK","de-AT","es-AR","sr-Cyrl"]  
                 }  
              }  
 }';

SELECT [key], value
FROM OPENJSON(@json,'$.path.to."sub-object"')

GO

--WITH_CLAUSE

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
 GO


 --FOR JSON
 --Format query results as JSON, or export data from SQL Server as JSON, by adding the FOR JSON clause to a SELECT statement. 
 --FOR JSON PATH, ROOT('orders')
 --FOR JSON AUTO

SELECT FirstName, LastName  
FROM Employees  
FOR JSON AUTO;
GO

SELECT FirstName AS [Emp.first], LastName AS [Emp.last]
FROM Employees  
FOR JSON PATH, ROOT('Emp');
GO

--WITHOUT_ARRAY_WRAPPER
/*To remove the square brackets that surround the JSON output of the FOR JSON clause by default, 
specify the WITHOUT_ARRAY_WRAPPER option. Use this option with a single-row result to generate a single 
JSON object as output instead of an array with a single element.*/

--SINGLE ROW
SELECT 2015 as year, 12 as month, 15 as day  
FOR JSON PATH
GO

SELECT 2015 as year, 12 as month, 15 as day   --[] REMOVED
FOR JSON PATH, WITHOUT_ARRAY_WRAPPER
GO

--MULTIPLE ROW

SELECT FirstName, LastName  
FROM Employees  
FOR JSON AUTO, WITHOUT_ARRAY_WRAPPER
GO

--using var in json

DECLARE @myVar nvarchar(20)
 set @myVar = GETDATE()


DECLARE @json NVARCHAR(MAX) = N'[  
  {  
    "Order": {  
      "Number":"'+ @myVar +'",  
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

SELECT * FROM OPENJSON(@json)

 DECLARE @var varchar(18)
        SET @var = 'INDIA'
        DECLARE @json NVARCHAR(MAX);
        SET @json = '{"info": {"address": [{"town": "Belgrade"}, {"town": "Paris"}, {"town":"Madrid"}]}}';
        SET @json = JSON_MODIFY(@json, '$.info.address[0].town',@var );
        SELECT modifiedJson = @json;
       