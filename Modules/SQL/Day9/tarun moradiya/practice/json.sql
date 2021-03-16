--JSON

--ISJSON

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

DECLARE @jsonInfo NVARCHAR(MAX)
DECLARE @town NVARCHAR(32)

SET @jsonInfo=N'{"info":{"address":[{"town":"Paris"},{"town":"London"}]}}';

SET @town=JSON_VALUE(@jsonInfo,'$.info.address[0].town'); -- Paris
PRINT @town

SET @town=JSON_VALUE(@jsonInfo,'$.info.address[1].town'); -- London
PRINT @town

GO
