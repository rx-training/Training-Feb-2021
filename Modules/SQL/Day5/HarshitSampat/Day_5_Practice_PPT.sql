--------------------------------------1-------------------------------------------
select e.BusinessEntityID,e.JobTitle,eph.Rate,eph.PayFrequency
from HumanResources.Employee e join HumanResources.EmployeePayHistory as eph 
ON e.BusinessEntityID =eph.BusinessEntityID

---------------------------------------2-----------------------------------------------
SELECT p.ProductID,p1.SalesOrderID,p1.UnitPrice
FROM Sales.SpecialOfferProduct p
Left Outer Join Sales.SalesOrderDetail p1
ON p.ProductID = p1.ProductID
WHERE SalesOrderID IS NULL

--------------------------------------3--------------------------------------------
SELECT e.JobTitle,d.JobCandidateID FROM
HumanResources.Employee e
Right OUTER JOIN HumanResources.JobCandidate d ON e.BusinessEntityID=d.BusinessEntityID

----------------------------------------------4--------------------------------------------
SELECT emp.BusinessEntityID,emp.JobTitle As Employee_Designation
FROM HumanResources.Employee emp, HumanResources.Employee mgr
WHERE emp.ManagerID = mgr.BusinessEntityID