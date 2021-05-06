USE AdventureWorks2012

SELECT soh.TerritoryID,
		st.Name
FROM Sales.SalesOrderHeader AS soh
 INNER JOIN Sales.SalesTerritory AS st
 ON soh.TerritoryID = st.TerritoryID
 GROUP BY st.Name;


USE AdventureWorks2012

SELECT st.Name,
		SUM(soh.TotalDue) AS 'SalesAmount'
FROM Sales.SalesOrderHeader AS soh
 INNER JOIN Sales.SalesTerritory AS st
 ON soh.TerritoryID = st.TerritoryID
 WHERE st.Name IN ('Northwest','Southwest')
 GROUP BY st.Name
 HAVING SUM(soh.TotalDue)>15000000;

 --ROLLUP
 USE AdventureWorks2012;
 
 SELECT SO.ModifiedDate,
		SO.OrderQty,
		SUM(SO.UnitPrice) As 'sum'
 FROM Sales.SalesOrderDetail AS SO
 
 GROUP BY SO.ModifiedDate,
			SO.OrderQty
 WITH ROLLUP
 HAVING SUM(SO.UnitPrice)>75000
 ORDER BY SO.ModifiedDate,
			SO.OrderQty;


