USE AdventureWorks2012

SELECT st.Name,
		SUM(head.TotalDue) AS 'SalesAmount'
FROM Sales.SalesOrderHeader AS head
 INNER JOIN Sales.SalesTerritory AS st
 ON head.TerritoryID = st.TerritoryID
 WHERE st.Name IN ('Northwest','Southwest')
 GROUP BY st.Name
 HAVING SUM(head.TotalDue)>15000000;


USE AdventureWorks2012

SELECT head.TerritoryID,st.Name
FROM Sales.SalesOrderHeader AS head
 INNER JOIN Sales.SalesTerritory AS st
 ON head.TerritoryID = st.TerritoryID
 /* GROUP BY st.Name; */

 SELECT st.Name,head.TerritoryID
 FROM Sales.SalesTerritory AS st
 INNER JOIN Sales.SalesOrderHeader AS head
 ON st.TerritoryID = head.TerritoryID ORDER BY TerritoryID
 GROUP BY st.Name;

 ----------------ROLLUP----------------
 USE AdventureWorks2012;
 
 SELECT SO.ModifiedDate,SO.OrderQty,SUM(SO.UnitPrice) As 'sum'
 FROM Sales.SalesOrderDetail AS SO
 GROUP BY SO.ModifiedDate,SO.OrderQty WITH ROLLUP
 HAVING SUM(SO.UnitPrice)>75000 ORDER BY SO.ModifiedDate,SO.OrderQty;

 

