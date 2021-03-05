USE AdventureWorks2012

-- get fName,LName,Email from contact
SELECT FirstName,
		LastName,
		EMailAddress
From Person.vAdditionalContactInfo;

USE AdventureWorks2012;
SELECT FirstName + ' ' + LastName AS 'FullName',
		EMailAddress
From Person.vAdditionalContactInfo;

-- get ProductId and name form Product
SELECT ProductID,
		Name
FROM Production.Product;

--