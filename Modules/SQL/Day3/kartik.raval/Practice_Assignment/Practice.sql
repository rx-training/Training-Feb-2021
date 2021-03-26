USE AdventureWorks2012

/*Function*/
SELECT * FROM Person.Person

SELECT * FROM Sales.SalesOrderHeader

SELECT * FROM Sales.SalesOrderDetail

SELECT * FROM Sales.SalesPerson;

SELECT FirstName,LastName, ISNULL(MiddleName,'Not Available') AS 'IsNullMiddleName',COALESCE(MiddleName,'Not Availabe') AS 'CoalesceMiddleName' FROM Person.Person;

/**/

USE Day3_practice

SELECT ASCII('B') AS B;

SELECT CHAR(96) AS Value;

SELECT CHARINDEX ('V','MICROSOFT SQL SERVER 2018');

SELECT CONCAT('JOHN',' ','SMITH');

DECLARE @d DATETIME = '01/01/2012'; SELECT FORMAT (@d,'d','en-US');
	
SELECT LEFT ('MICROSOFT SQL SERVER',6);

SELECT LEN('John Smith');

SELECT LOWER('HELP EVERYONE');

SELECT LTRIM(' John Smith');