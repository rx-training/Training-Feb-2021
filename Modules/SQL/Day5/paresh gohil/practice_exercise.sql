USE AdventureWorks2012


SELECT * FROM HumanResources.Employee

SELECt * FROM HumanResources.EmployeePayHistory

SELECT * FROM Sales.SalesOrderDetail

SELECT * FROM Sales.SpecialOfferProduct

SELECT  e.JobTitle,e.Gender,e.SickLeaveHours,eph.Rate FROM HumanResources.Employee e Join HumanResources.EmployeePayHistory eph on e.BusinessEntityID = eph.BusinessEntityID WHERE e.JobTitle = 'Senior Tool Designer'

SELECT s.ProductID,so.SalesOrderID,so.UnitPrice  FROM Sales.specialOfferProduct s LEFT OUTER JOIN Sales.SalesOrderDetail so ON s.ProductID = so.ProductID WHERE SalesOrderID IS NULL

SELECT e.JobTitle,j.JobCandidateID FROM HumanResources.Employee e JOIN HumanResources.JobCandidate j ON e.BusinessEntityID = j.BusinessEntityID

SELECT e.JobTitle,j.JobCandidateID FROM HumanResources.Employee e RIGHT OUTER JOIN HumanResources.JobCandidate j ON e.BusinessEntityID = j.BusinessEntityID

SELECT e.JobTitle,j.JobCandidateID FROM HumanResources.Employee e LEFT OUTER JOIN HumanResources.JobCandidate j ON e.BusinessEntityID = j.BusinessEntityID

SELECT e.JobTitle,j.JobCandidateID FROM HumanResources.Employee e FULL OUTER JOIN HumanResources.JobCandidate j ON e.BusinessEntityID = j.BusinessEntityID

SELECT emp.BusinessEntityID,emp.JobTitle as 'Employee Designation',mgr.BusinessEntityID,mgr.JobTitle as 'Manger Designation' FROM HumanResources.Employee emp ,HumanResources.Employee mgr WHERE emp.BusinessEntityID = mgr.OrganizationLevel
