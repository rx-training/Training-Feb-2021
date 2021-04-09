
-- Define the CTE expression name and column list.
-- it shows the total number of sales orders per year for each sales representative
WITH Sales_CTE (SalesPersonID, SalesOrderID, SalesYear)  
AS  

(  
    SELECT SalesPersonID, SalesOrderID, YEAR(OrderDate) AS SalesYear  
    FROM Sales.SalesOrderHeader  
    WHERE SalesPersonID IS NOT NULL  
)  

SELECT SalesPersonID, COUNT(SalesOrderID) AS TotalSales, SalesYear  
FROM Sales_CTE  
GROUP BY SalesYear, SalesPersonID  
ORDER BY SalesPersonID, SalesYear;


--shows the average number of sales orders for all years for the sales representatives.

WITH Sales_CTE (SalesPersonID, NumberOfOrders)  
AS  
(  
    SELECT SalesPersonID, COUNT(*)  
    FROM Sales.SalesOrderHeader  
    WHERE SalesPersonID IS NOT NULL  
    GROUP BY SalesPersonID  
)  
SELECT AVG(NumberOfOrders) AS "Average Sales Per Person"  
FROM Sales_CTE;


----unioun 

SELECT BusinessEntityId, Gender FROM HumanResources.Employee WHERE BusinessEntityID < 12 
UNION ALL
SELECT BusinessEntityID, Gender FROM HumanResources.Employee;



---INTERSECT 
SELECT BusinessEntityId, HireDate FROM HumanResources.Employee WHERE BusinessEntityID < 12 
INTERSECT
SELECT BusinessEntityID, HireDate FROM HumanResources.Employee;

--BETWEEN
SELECT * FROM HumanResources.Employee;
SELECT BusinessEntityId,LoginID  FROM HumanResources.Employee WHERE BusinessEntityID BETWEEN 1 AND 5;


---except
SELECT * FROM Sales.SalesOrderDetail;

SELECT SalesOrderID ,UnitPrice FROM Sales.SalesOrderDetail 
EXCEPT 
SELECT SalesOrderID ,UnitPrice FROM Sales.SalesOrderDetail 
WHERE UnitPrice > 2039.99
ORDER BY UnitPrice;