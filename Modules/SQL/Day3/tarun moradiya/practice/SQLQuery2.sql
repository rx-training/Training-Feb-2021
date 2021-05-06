--ISNULL , COALESCE

SELECT FirstName
	, LastName
	, ISNULL(MiddleName, 'Not Available') AS 'IsNullMiddleName'
	, COALESCE(MiddleName, 'Not Available') AS 'CoalesceMiddleName'
FROM Person.Person

--date functions

SELECT DATEDIFF(day, ModifiedDate, GETDATE()) AS DaySinceModifiedDate
FROM Person.Person

SELECT EOMONTH(GETDATE())

--CHARINDEX

SELECT CHARINDEX('speaker', 'setting up surround sound and speakers in a hall')

--PATINDEX

SELECT PATINDEX('%speaker%', 'setting up surround sound and speakers in a hall')

--CONCATE

--PROBLEM
SELECT FirstName + '' + EmailPromotion AS Display
FROM Person.Person

--SOLUTION

SELECT CONCAT(FirstName, '', EmailPromotion) AS Display
FROM Person.Person

--CAST

SELECT FirstName + '' + CAST(EmailPromotion AS nvarchar) AS Display
FROM Person.Person

--CONVERT

SELECT FirstName + '' + CONVERT(nvarchar, EmailPromotion) AS Display
FROM Person.Person

--TRY_PARSE

SELECT TRY_PARSE('1/10/2012' AS date)

SELECT TRY_PARSE('1/100/2012' AS date) -- RETURNS NULL ON INVALID INPUT

--PARSE

SELECT PARSE('1/10/2012' AS date)

SELECT PARSE('1/100/2012' AS date) --THROWS ERROR ON INVALID INPUT

--CHOOSE

SELECT CHOOSE(3, 'item1', 'item2', 'item3')

SELECT CHOOSE(2, FirstName, LastName, MiddleName) AS Display
FROM Person.Person

--IIF

SELECT IIF(EmailPromotion > 0, 'if true', 'if false') AS PersonInfo
	, FirstName
FROM Person.Person






