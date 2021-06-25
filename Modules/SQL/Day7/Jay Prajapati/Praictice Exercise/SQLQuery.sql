USE AdventureWorks2012;
--total number of sales orders per year for each sales representative at Adventure Works Cycles.


WITH Sales_CTE (SalesPersonID,SalesOrderID,SalesYear)
AS(
 SELECT SalesPersonID,SalesOrderID, 
 YEAR(OrderDate) AS SalesYear
 FROM Sales.SalesOrderHeader
 WHERE SalesPersonID IS NOT NULL
)

SELECT SalesPersonID, COUNT(SalesOrderID) AS TotlaSales, SalesYear
FROM Sales_CTE
GROUP BY SalesYear, SalesPersonID
ORDER BY SalesPersonID, SalesYear;


-- the average number of sales orders for all years for the sales representatives.


WITH Sales_CTE (SalesPersonID, NumberOfOrders)
AS
(
  SELECT SalesPersonID, COUNT(*)
  FROM Sales.SalesOrderHeader
  WHERE SalesPersonID IS NOT NULL
  GROUP BY SalesPersonID
)
SELECT AVG(NumberOfOrders) AS 'Average Sales Per Person'
FROM Sales_CTE;


/*The following example shows how to define more than one CTE
in a single query. Notice that a comma is used to separate the
CTE query definitions. The FORMAT function, 
used to display the monetary amounts in a currency format, 
is available in SQL Server 2012 and higher.*/

WITH Sales_CTE (SalesPersonID, TotalSales, SalesYear)
AS
(
  SELECT SalesPersonID,
  SUM(TotalDue) AS TotalSales,
  YEAR(OrderDate) AS SalesYear
  FROM Sales.SalesOrderHeader
  WHERE SalesPersonID IS NOT NULL
  GROUP BY SalesPersonID, YEAR(OrderDate)
 ),
 Sales_Quota_CTE (BusinessEntityID, SalesQuota, SalesQuotaYear)
 AS 
 (
   SELECT BusinessEntityID, 
   SUM(SalesQuota) AS SalesQuota,
   Year(QuotaDate) AS SalesQuotaYear
   FROM Sales.SalesPersonQuotaHistory
   GROUP BY BusinessEntityID, YEAR(QuotaDate)
 )

 SELECT SalesPersonID,
    SalesYear,
	FORMAT(TotalSales,'C','en-us') AS TotalSales,
	SalesQuotaYear,
	FORMAT(SalesQuota,'C','en-us') AS SalesQuota,
	FORMAT(TotalSales -SalesQuota,'C', 'en-us') AS Amt_Above_or_Below_Quota
	FROM Sales_CTE
	JOIN Sales_Quota_CTE 
	ON Sales_Quota_CTE.BusinessEntityID = Sales_CTE.SalesPersonID
	AND Sales_CTE.SalesYear = Sales_Quota_CTE.SalesQuotaYear
	ORDER BY SalesPersonID,SalesYear;
