                                                        /********** Ranking Function **********/
SELECT * FROM HumanResources.EmployeePayHistory

SELECT DENSE_RANK() OVER (ORDER BY Rate) 'Drank', RANK() OVER (ORDER BY Rate) 'rank',
ROW_NUMBER() OVER (ORDER BY Rate) 'Rrank' ,Rate FROM HumanResources.EmployeePayHistory

SELECT * FROM Sales.SalesPerson

/* DENSE_RANK */  
SELECT TOP(10) BusinessEntityID, Rate, DENSE_RANK() OVER (ORDER BY Rate DESC) AS RankBySalary FROM HumanResources.EmployeePayHistory;

/* RANK */
SELECT JobTitle ,SickLeaveHours, RANK() OVER (PARTITION BY JobTitle ORDER BY SickLeaveHours) 'sickleave' FROM HumanResources.Employee ORDER BY SickLeaveHours

/* ROW_NUMBER */
SELECT JobTitle ,SickLeaveHours, ROW_NUMBER() OVER (ORDER BY SickLeaveHours) 'sickleave' FROM HumanResources.Employee ORDER BY SickLeaveHours

SELECT ROW_NUMBER() OVER (ORDER BY name ASC) AS RowNumber,name, recovery_model_desc FROM sys.databases WHERE database_id < 5;

SELECT JobTitle ,SickLeaveHours, NTILE(5) OVER (ORDER BY SickLeaveHours) 'rank' FROM HumanResources.Employee ORDER BY SickLeaveHours

                                                      /********** Aggregate Function **********/
SELECT SalesPersonID, APPROX_COUNT_DISTINCT(SalesPersonID) AS Approx_Distinct_OrderKey FROM Sales.Store GROUP BY SalesPersonID

SELECT JobTitle, AVG(VacationHours) AS 'Average vacation hours',SUM(SickLeaveHours) AS 'Total sick leave hours' FROM HumanResources.Employee WHERE JobTitle LIKE 'Vice President%' GROUP BY JobTitle;

SELECT TerritoryID, AVG(Bonus)as 'Average bonus', SUM(SalesYTD) as 'YTD sales' FROM Sales.SalesPerson  GROUP BY TerritoryID;  

SELECT ProductID,AVG(DISTINCT ListPrice) FROM Production.Product GROUP BY ProductID;

SELECT COUNT(DISTINCT JobTitle) FROM HumanResources.Employee; 

SELECT COUNT(*) FROM HumanResources.Employee;  


                                                                                 /*********** GROUP BY **************/
SELECT Country, Region, SUM(sales) AS TotalSales FROM Sales GROUP BY Country, Region;

SELECT Country, Region, SUM(Sales) AS TotalSales FROM Sales GROUP BY ROLLUP (Country, Region);

SELECT Country, Region, SUM(Sales) AS TotalSales FROM Sales GROUP BY CUBE (Country, Region);

SELECT Country, Region, SUM(Sales) AS TotalSales FROM Sales GROUP BY GROUPING SETS( ROLLUP(Country, Region), CUBE (Country, Region) );
  
SELECT Country, SUM(Sales) AS TotalSales FROM Sales  GROUP BY Country HAVING SUM(Sales) < 700 ORDER BY Country ;