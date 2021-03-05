-- Select filtering with where
USE AdventureWorks2012

SELECT FirstName,
		LastName
From Person.vAdditionalContactInfo
WHERE LastName = 'Smith';

SELECT FirstName,
		LastName
From Person.Person
WHERE LastName = 'Smith';


SELECT ProductID,
		Name,ListPrice
FROM Production.Product
WHERE ListPrice BETWEEN 100 and 200;

SELECT ProductID,
		Name,ListPrice
FROM Production.Product
WHERE ListPrice>=100 AND 
		ListPrice<=200;