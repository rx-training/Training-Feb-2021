
/* https://docs.microsoft.com/en-us/sql/t-sql/queries/with-common-table-expression-transact-sql?view=sql-server-ver15 */
--------- Adventureworks2012(humonresources)----------

---------------------------simple common table expression-------------------------------

-- Define the CTE expression name and column list.  
WITH Sales_CTE (SalesPersonID, SalesOrderID, SalesYear)  
AS  
-- Define the CTE query.  
(  
    SELECT SalesPersonID, SalesOrderID, YEAR(OrderDate) AS SalesYear  
    FROM Sales.SalesOrderHeader  
    WHERE SalesPersonID IS NOT NULL  
)  
-- Define the outer query referencing the CTE name.  
SELECT SalesPersonID, COUNT(SalesOrderID) AS TotalSales, SalesYear  
FROM Sales_CTE  
GROUP BY SalesYear, SalesPersonID  
ORDER BY SalesPersonID, SalesYear;



------------------------------limit counts and report averages-------------------------


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


--------------------------multiple CTE definitions in a single query-----------------------


WITH Sales_CTE (SalesPersonID, TotalSales, SalesYear)  
AS  
-- Define the first CTE query.  
(  
    SELECT SalesPersonID, SUM(TotalDue) AS TotalSales, YEAR(OrderDate) AS SalesYear  
    FROM Sales.SalesOrderHeader  
    WHERE SalesPersonID IS NOT NULL  
       GROUP BY SalesPersonID, YEAR(OrderDate)  
  
)  
,   -- Use a comma to separate multiple CTE definitions.  
  
-- Define the second CTE query, which returns sales quota data by year for each sales person.  
Sales_Quota_CTE (BusinessEntityID, SalesQuota, SalesQuotaYear)  
AS  
(  
       SELECT BusinessEntityID, SUM(SalesQuota)AS SalesQuota, YEAR(QuotaDate) AS SalesQuotaYear  
       FROM Sales.SalesPersonQuotaHistory  
       GROUP BY BusinessEntityID, YEAR(QuotaDate)  
)  
  
-- Define the outer query by referencing columns from both CTEs.  
SELECT SalesPersonID  
  , SalesYear  
  , FORMAT(TotalSales,'C','en-us') AS TotalSales  
  , SalesQuotaYear  
  , FORMAT (SalesQuota,'C','en-us') AS SalesQuota  
  , FORMAT (TotalSales -SalesQuota, 'C','en-us') AS Amt_Above_or_Below_Quota  
FROM Sales_CTE  
JOIN Sales_Quota_CTE ON Sales_Quota_CTE.BusinessEntityID = Sales_CTE.SalesPersonID  
                    AND Sales_CTE.SalesYear = Sales_Quota_CTE.SalesQuotaYear  
ORDER BY SalesPersonID, SalesYear;


----------------------------------recursive cte to display multiple levels of recursion--------------------


-- Create an Employee table.  
CREATE TABLE dbo.MyEmployees  
(  
EmployeeID SMALLINT NOT NULL,  
FirstName NVARCHAR(30)  NOT NULL,  
LastName  NVARCHAR(40) NOT NULL,  
Title NVARCHAR(50) NOT NULL,  
DeptID SMALLINT NOT NULL,  
ManagerID INT NULL,  
 CONSTRAINT PK_EmployeeID PRIMARY KEY CLUSTERED (EmployeeID ASC)   
);  
-- Populate the table with values.  
INSERT INTO dbo.MyEmployees VALUES   
 (1, N'Ken', N'S�nchez', N'Chief Executive Officer',16,NULL)  
,(273, N'Brian', N'Welcker', N'Vice President of Sales',3,1)  
,(274, N'Stephen', N'Jiang', N'North American Sales Manager',3,273)  
,(275, N'Michael', N'Blythe', N'Sales Representative',3,274)  
,(276, N'Linda', N'Mitchell', N'Sales Representative',3,274)  
,(285, N'Syed', N'Abbas', N'Pacific Sales Manager',3,273)  
,(286, N'Lynn', N'Tsoflias', N'Sales Representative',3,285)  
,(16,  N'David',N'Bradley', N'Marketing Manager', 4, 273)  
,(23,  N'Mary', N'Gibson', N'Marketing Specialist', 4, 16);


 (1)	WITH DirectReports(ManagerID, EmployeeID, Title, EmployeeLevel) AS   
		(  
			SELECT ManagerID, EmployeeID, Title, 0 AS EmployeeLevel  
			FROM dbo.MyEmployees   
			WHERE ManagerID IS NULL  
			UNION ALL  
			SELECT e.ManagerID, e.EmployeeID, e.Title, EmployeeLevel + 1  
			FROM dbo.MyEmployees AS e  
				INNER JOIN DirectReports AS d  
				ON e.ManagerID = d.EmployeeID   
		)  
		SELECT ManagerID, EmployeeID, Title, EmployeeLevel   
		FROM DirectReports  
		ORDER BY ManagerID;

   -----------------------display two levels of recursion-------------


 (2)	WITH DirectReports(ManagerID, EmployeeID, Title, EmployeeLevel) AS   
		(  
			SELECT ManagerID, EmployeeID, Title, 0 AS EmployeeLevel  
			FROM dbo.MyEmployees   
			WHERE ManagerID IS NULL  
			UNION ALL  
			SELECT e.ManagerID, e.EmployeeID, e.Title, EmployeeLevel + 1  
			FROM dbo.MyEmployees AS e  
				INNER JOIN DirectReports AS d  
				ON e.ManagerID = d.EmployeeID   
		)  
		SELECT ManagerID, EmployeeID, Title, EmployeeLevel   
		FROM DirectReports  
		WHERE EmployeeLevel <= 2 ;


	-------------------------a hierarchical list-------------------


 (3)	WITH DirectReports(Name, Title, EmployeeID, EmployeeLevel, Sort)  
		AS (SELECT CONVERT(VARCHAR(255), e.FirstName + ' ' + e.LastName),  
				e.Title,  
				e.EmployeeID,  
				1,  
				CONVERT(VARCHAR(255), e.FirstName + ' ' + e.LastName)  
			FROM dbo.MyEmployees AS e  
			WHERE e.ManagerID IS NULL  
			UNION ALL  
			SELECT CONVERT(VARCHAR(255), REPLICATE ('|    ' , EmployeeLevel) +  
				e.FirstName + ' ' + e.LastName),  
				e.Title,  
				e.EmployeeID,  
				EmployeeLevel + 1,  
				CONVERT (VARCHAR(255), RTRIM(Sort) + '|    ' + FirstName + ' ' +   
						 LastName)  
			FROM dbo.MyEmployees AS e  
			JOIN DirectReports AS d ON e.ManagerID = d.EmployeeID  
			)  
		SELECT EmployeeID, Name, Title, EmployeeLevel  
		FROM DirectReports   
		ORDER BY Sort;


-----------------------Using MAXRECURSION to cancel a statement--------------------


		/*			--Creates an infinite loop  
					WITH cte (EmployeeID, ManagerID, Title) AS  
					(  
						SELECT EmployeeID, ManagerID, Title  
						FROM dbo.MyEmployees  
						WHERE ManagerID IS NOT NULL  
					  UNION ALL  
						SELECT cte.EmployeeID, cte.ManagerID, cte.Title  
						FROM cte   
						JOIN  dbo.MyEmployees AS e   
							ON cte.ManagerID = e.EmployeeID  
					)  
					--Uses MAXRECURSION to limit the recursive levels to 2  
					SELECT EmployeeID, ManagerID, Title  
					FROM cte  
					OPTION (MAXRECURSION 2);                */


--Creates an infinite loop  
WITH cte (EmployeeID, ManagerID, Title)  
AS  
(  
    SELECT EmployeeID, ManagerID, Title  
    FROM dbo.MyEmployees  
    WHERE ManagerID IS NOT NULL  
  UNION ALL  
    SELECT  e.EmployeeID, e.ManagerID, e.Title  
    FROM dbo.MyEmployees AS e  
    JOIN cte ON e.ManagerID = cte.EmployeeID  
)  
SELECT EmployeeID, ManagerID, Title  
FROM cte;