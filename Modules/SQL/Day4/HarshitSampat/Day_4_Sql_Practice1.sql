------RANKING FUNCR]TION---------
--------1--------
USE AdventureWorks2012;  
GO  
SELECT p.FirstName, p.LastName  
    ,ROW_NUMBER() OVER (ORDER BY a.PostalCode) AS "Row Number"  
    ,RANK() OVER (ORDER BY a.PostalCode) AS Rank  
    ,DENSE_RANK() OVER (ORDER BY a.PostalCode) AS "Dense Rank"  
    ,NTILE(4) OVER (ORDER BY a.PostalCode) AS Quartile  
    ,s.SalesYTD  
    ,a.PostalCode  
FROM Sales.SalesPerson AS s   
    INNER JOIN Person.Person AS p   
        ON s.BusinessEntityID = p.BusinessEntityID  
    INNER JOIN Person.Address AS a   
        ON a.AddressID = p.BusinessEntityID  
WHERE TerritoryID IS NOT NULL AND SalesYTD <> 0;

----------2-----------------
USE AdventureWorks2012;  
GO  
SELECT i.ProductID, p.Name, i.LocationID, i.Quantity  
    ,DENSE_RANK() OVER   
    (PARTITION BY i.LocationID ORDER BY i.Quantity DESC) AS Rank  
FROM Production.ProductInventory AS i   
INNER JOIN Production.Product AS p   
    ON i.ProductID = p.ProductID  
WHERE i.LocationID BETWEEN 3 AND 4  
ORDER BY i.LocationID;  
GO  

-----------3----------------
use AdventureWorks2012
SELECT TOP(10) BusinessEntityID,Rate,
	DENSE_RANK() OVER(ORDER BY RATE DESC)AS RankSalary
FROM HumanResources.EmployeePayHistory;

----------4------------------USE AdventureWorks2012;  
GO  
SELECT p.FirstName, p.LastName  
    ,ROW_NUMBER() OVER (ORDER BY a.PostalCode) AS "Row Number"  
    ,RANK() OVER (ORDER BY a.PostalCode) AS Rank  
    ,DENSE_RANK() OVER (ORDER BY a.PostalCode) AS "Dense Rank"  
    ,NTILE(4) OVER (ORDER BY a.PostalCode) AS Quartile  
    ,s.SalesYTD  
    ,a.PostalCode  
FROM Sales.SalesPerson AS s   
    INNER JOIN Person.Person AS p   
        ON s.BusinessEntityID = p.BusinessEntityID  
    INNER JOIN Person.Address AS a   
        ON a.AddressID = p.BusinessEntityID  
WHERE TerritoryID IS NOT NULL AND SalesYTD <> 0; 

--------------- 5 --------------------------------------
USE AdventureWorks2012;   
GO  
SELECT p.FirstName, p.LastName  
	,NTILE(4) OVER (ORDER BY SALESYTD DESC)AS QUARITLE	
	,CONVERT(nvarchar(20),S.SALESYTD,1) AS SALESYTD
	,a.PostalCode
	FROM Sales.SalePerson As s
	INNER JOIN PERSON.PERSON AS P
		ON S.BUSINESSENTITYID =p.BusinessEntityID
	INNER JOIN PERSON.ADDRESS AS a
		ON A.AddressID = p.BusinessEntityID
	WHERE 