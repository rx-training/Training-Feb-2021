USE AdventureWorks2012

SELECT FirstName,
	LastName,
	ISNULL(MiddleName,'Not Available') AS 'ISNULL',
	COALESCE(MiddleName, 'Not Available') AS 'COALESCE'
FROM Person.Person;

SELECT YEAR(MAX(soh.OrderDate)) AS 'MostRsentYearYearFunction',
	DATEPART(YEAR,MAX(soh.OrderDate)) AS 'MostRsentYearDatePart'
FROM Sales.SalesOrderHeader AS soh;

SELECT DATEDIFF(DAY,MAX(soh.OrderDate),GETDATE()) AS 'DateSinceLastOrder'
FROM Sales.SalesOrderHeader AS soh;

SELECT CHARINDEX('Query','Fullform of SQL is a Structured Query Language');

SELECT PATINDEX('%Query%','Fullform of SQL is a Structured Query Language');

SELECT CONCAT(Name, ' Cost ',ListPrice)
FROM Production.Product;

SELECT Name + ' Costs ' + CAST(ListPrice AS nvarchar) AS Display
FROM Production.Product
WHERE ListPrice>0;

SELECT Name + ' Costs ' + CONVERT(nvarchar,ListPrice) AS Display
FROM Production.Product
WHERE ListPrice>0;

SELECT CHOOSE(2,FirstName,LastName, FirstName + ' ' + LastName) AS Name 
FROM Person.Person;

SELECT IIF(ListPrice>0, 'Normal Product','Internal Product') AS ProductDetails,
		Name
FROM Production.Product;


SELECT ListPrice From Production.Product;