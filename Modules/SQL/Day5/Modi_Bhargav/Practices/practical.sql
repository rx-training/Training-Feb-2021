                                 /********** INNER JOINS **********/
SELECT * FROM HumanResources.Employee
SELECT * FROM HumanResources.EmployeePayHistory

SELECT e.BusinessEntityID,e.JobTitle,eph.Rate, eph.PayFrequency 
FROM HumanResources.Employee e INNER JOIN HumanResources.EmployeePayHistory eph
ON e.BusinessEntityID = eph.BusinessEntityID

SELECT ProductID, Purchasing.Vendor.BusinessEntityID, Name
FROM Purchasing.ProductVendor INNER JOIN Purchasing.Vendor
ON (Purchasing.ProductVendor.BusinessEntityID = Purchasing.Vendor.BusinessEntityID)
WHERE StandardPrice > $10 AND Name LIKE N'F%'

                                  /********* LEFT OUTER JOIN *********/

SELECT e.BusinessEntityID,e.JobTitle,eph.Rate, eph.PayFrequency FROM HumanResources.Employee e 
LEFT OUTER JOIN HumanResources.EmployeePayHistory eph
ON e.BusinessEntityID = eph.BusinessEntityID

SELECT * FROM Sales.SpecialOfferProduct
SELECT * FROM Sales.SalesOrderDetail

SELECT p.ProductID , p1.SalesOrderID,p1.UnitPrice
FROM Sales.SpecialOfferProduct p LEFT OUTER JOIN Sales.SalesOrderDetail p1 
ON p.ProductID = p1.ProductID WHERE SalesOrderID IS NULL

                                  /********** RIGHT OUTER JOIN **********/
SELECT * FROM HumanResources.Employee
SELECT * FROM HumanResources.JobCandidate

SELECT e.JobTitle,jc.BusinessEntityID,jc.JobCandidateID FROM HumanResources.Employee e 
RIGHT OUTER JOIN HumanResources.JobCandidate jc ON jc.BusinessEntityID = e.BusinessEntityID

                                  /********** FULL OUTER JOIN **********/
SELECT e.JobTitle,e.BusinessEntityID,jc.JobCandidateID FROM HumanResources.Employee e 
FULL OUTER JOIN HumanResources.JobCandidate jc ON e.BusinessEntityID = jc.BusinessEntityID

                                 /********** CROSS JOIN **********/
USE DayFive
SELECT * FROM dbo.maneger
SELECT * FROM dbo.emp
SELECT m.EmpId,m.Name,e.DepartId,m.Rate + e.Rate AS 'Total Rate' FROM dbo.maneger m 
CROSS JOIN dbo.emp e

                                /********** SELF JOIN *********/
SELECT * FROM Employees

