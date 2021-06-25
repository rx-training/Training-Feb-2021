USE AdventureWorks2012;


---PRACTICE WORK OF DAY 5 
---TOPIC NAME DIFFERENT TYPE OF JOINS

---LEFT OUTER JOIN 

SELECT P.ProductID, p1.SalesOrderID, p1.UnitPrice FROM Sales.SpecialOfferProduct AS P 
LEFT OUTER JOIN [Sales] .[SalesOrderDetail] p1
ON P.ProductID = p1.ProductID WHERE SalesOrderID IS NULL 

-- RIGHT OUTER JOIN 

SELECT E.JobTitle ,D.JobCandidateID FROM 
HumanResources.Employee AS E 
RIGHT OUTER JOIN HumanResources.JobCandidate D ON 
E.BusinessEntityID = D.BusinessEntityID;

SELECT * FROM HumanResources.Employee;
SELECT * FROM HumanResources.vEmployeeDepartment;

-- CROSS JOIN 

SELECT A.CompDescription, B.AddOnDescription, A.Price + B.Price AS 'TOTAL COST' FROM ComputerDeatils A CROSS JOIN AddOndetails B ; 

---self join 

SELECT E.BusinessEntityID, E.JobTitle AS Employee_Designation , E.ManagerID, M.JobTitle AS Manager_Deignation FROM HumanResources.Employee AS E , HumanResources.Employee AS M 
WHERE E.ManagerId = M.EmployeeID;