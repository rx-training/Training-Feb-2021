USE AdventureWorks2012

SELECT ProductID,
		Name,ListPrice
FROM Production.Product
WHERE Name like 'Mou%';