                                                             /**********  Practices **********/
USE DayFive
SELECT EMPLOYEE_ID,FIRST_NAME,SALARY FROM Employees WHERE SALARY > (SELECT SALARY FROM Employees WHERE FIRST_NAME = 'Roy')

USE AdventureWorks2012
SELECT Name,ListPrice FROM Production.Product WHERE ListPrice = (SELECT ListPrice FROM Production.Product WHERE Name = 'Chainring Bolts' );

SELECT Name,BusinessEntityID FROM Sales.Store WHERE BusinessEntityID NOT IN (SELECT CustomerID FROM Sales.Customer WHERE TerritoryID > 7);

SELECT BusinessEntityID,FirstName,LastName FROM Person.Person WHERE BusinessEntityID IN (SELECT BusinessEntityID FROM HumanResources.Employee
      WHERE BusinessEntityID IN (SELECT BusinessEntityID FROM Sales.SalesPerson));

UPDATE Production.Product SET ListPrice = ListPrice * 2 WHERE ProductID IN (SELECT ProductID FROM Purchasing.ProductVendor WHERE BusinessEntityID = 1540);
SELECT * FROM Production.Product 

SELECT Name FROM Production.Product WHERE EXISTS (SELECT * FROM Production.ProductSubcategory
     WHERE ProductSubcategoryID = ProductCategoryID);

CREATE VIEW HumanResources.EmployeeHireDate AS ( SELECT p.FirstName, p.LastName, e.HireDate FROM HumanResources.Employee AS e JOIN Person.Person AS  p  
ON e.BusinessEntityID = p.BusinessEntityID); 
SELECT * FROM  HumanResources.EmployeeHireDate

ALTER VIEW HumanResources.EmployeeHireDate AS SELECT p.FirstName, p.LastName, e.HireDate  FROM HumanResources.Employee AS e JOIN Person.Person AS  p 
ON e.BusinessEntityID = p.BusinessEntityID  
WHERE HireDate > CONVERT(DATETIME,'20020101',101)
