USE AdventureWorks2012

SELECT * FROM HumanResources.Employee

SELECT JobTitle FROM HumanResources.Employee WHERE SickLeaveHours > (SELECT SickLeaveHours FROM HumanResources.Employee WHERE JobTitle = 'Vice President of Engineering')

SELECT Rate FROM HumanResources.EmployeePayHistory WHERE BusinessEntityID in (SELECT BusinessEntityID FROM Person.Person WHERE FirstName = 'Aaron')

SELECT Rate FROM HumanResources.EmployeePayHistory WHERE BusinessEntityID NOT IN (SELECT BusinessEntityID FROM Person.Person WHERE FirstName = 'Aaron')

SELECT * FROM HumanResources.Employee WHERE EXISTS (SELECT BusinessEntityID FROM HumanResources.EmployeePayHistory WHERE Rate > 100)

CREATE VIEW EMPDesigners AS SELECT * FROM HumanResources.Employee WHERE JobTitle LIKE '%Design%'

SELECT * FROM EMPDesigners

UPDATE EMPDesigners SET MaritalStatus = 'S' WHERE BusinessEntityID = 4
