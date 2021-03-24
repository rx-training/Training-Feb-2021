USE AdventureWorks2012


/*String Function*/

SELECT ASCII('A')

SELECT CHAR(75)

SELECT CHARINDEX('W','Hello World!',4)

SELECT CONCAT('Hello',' World')

SELECT LEFT('Microsoft SQL SERVER',9)

SELECT LEN('Microsoft SQL SERVER')

SELECT LOWER('SERVER')

SELECT LTRIM('     SERVER')

SELECT PATINDEX('%SQL%','Microsoft SQL SERVER')

SELECT REPLACE('Microsoft SQL SERVER 2012','2012','2018')

SELECT SOUNDEX('JUICE'),SOUNDEX('JUCZ')

SELECT DIFFERENCE('JUICE','JUCZ')

SELECT RTRIM(LastName) + ',' + SPACE(2) +  LTRIM(FirstName) FROM Person.Person ORDER BY LastName, FirstName;

SELECT STUFF('aqryfg',2,3,'bcde')

SELECT RIGHT('SQL SERVER',3)

SELECT REVERSE('ABCD')

SELECT * FROM Production.Product

SELECT REPLICATE('PRO',2)


/*DATE function*/


SELECT * FROM HumanResources.Employee

SELECT HireDate,DATENAME(MM,HireDate) AS 'MONTH' FROM HumanResources.Employee

SELECT HireDate,DATENAME(MM,HireDate) AS 'MONTH',DATEPART(MM,HireDate) AS 'INTMONTH' FROM HumanResources.Employee

SELECT HireDATE,DAY(HireDate) AS 'DAY',MONTH(HireDate) AS 'MONTH',YEAR(HireDate) AS 'YEAR' FROM HumanResources.Employee

SELECT HireDate,DATEADD(MM,4,HireDate) AS 'NEW' FROM HumanResources.Employee

SELECT BusinessEntityID, DATENAME(mm,HireDate)+','+CONVERT(varchar,DATEPART(YYYY,HireDate)) as 'Joinning' FROM HumanResources.Employee

SELECT DATENAME(mm,GETDATE()) + SPACE(1) + CAST(DATEPART(dd,GETDATE()) AS varchar) + ',' + CAST(DATEPART(yyyy,GETDATE()) AS varchar)


/*Math Function*/

SELECT CEILING(25.456)

SELECT FLOOR(25.656)

SELECT EXP(4.5)

SELECT POWER(25,3)

SELECT ROUND(15.2345,2)

SELECT HOST_ID() as 'HOSTID'