--------- GROUP BY -----------

SELECT Country, Region, SUM(Sales) AS TotalSales 
FROM Sales 
GROUP BY Country, Region;


----------- GROUP BY ROLLUP --------------

SELECT Country, Region, SUM(Sales) AS TotalSales 
FROM Sales 
GROUP BY ROLLUP(Country,Region);

------------- GROUP BY CUBE ---------------

SELECT Country, Region, SUM(Sales) AS TotalSales
FROM Sales
GROUP BY CUBE (Country, Region);

------------- HAVING ----------------

SELECT SalesOrderID, SUM(LineTotal)AS SubTotal 
FROM Sales.SalesOrderDetail 
GROUP BY SalesOrderID 
HAVING SUM(LineTotal) > 100000.00 
ORDER BY SalesOrderID;