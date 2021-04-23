
SELECT * FROM Production.ProductModel
SELECT * FROM dbo.Gloves
                                    /*********    Practices  **********/
/*********** UNION -----> NOT ALLOWED FOR DUPLICATES VALUES **********/
SELECT ProductModelID, Name FROM Production.ProductModel WHERE ProductModelID NOT IN (3, 4)  
UNION  
SELECT ProductModelID, Name FROM dbo.Gloves ORDER BY Name; 

/******* INTO ********/
SELECT ProductModelID , Name INTO dbo.ProResults FROM Production.ProductModel WHERE ProductModelID NOT IN (3, 4)  
UNION  
SELECT ProductModelID, Name FROM dbo.Gloves ORDER BY Name; 
SELECT * FROM dbo.ProResults

USE DayTwo
SELECT * FROM Employees
SELECT FirstName,LastName FROM Employees WHERE JobId = 'IT_PROG'
UNION
SELECT FirstName,LastName,'' FROM Employees WHERE HireDate BETWEEN '01-09-1990' AND '01-09-2000'

SELECT * FROM Employees
SELECT FirstName,LastName,EmployeeID FROM Employees WHERE EmployeeID BETWEEN 101 AND 130
UNION
SELECT FirstName,LastName,EmployeeID FROM Employees ORDER BY EmployeeID

SELECT FirstName,LastName,EmployeeID FROM Employees WHERE EmployeeID BETWEEN 101 AND 110
UNION
SELECT FirstName,LastName,'30' FROM Employees

SELECT FirstName AS FNAME,LastName AS LNAME,EmployeeID AS IDS FROM Employees WHERE EmployeeID BETWEEN 101 AND 110
UNION
SELECT FirstName,LastName,'30' FROM Employees

USE AdventureWorks2012
SELECT p.LastName, p.FirstName, e.JobTitle INTO dbo.EmpOne FROM Person.Person AS p
JOIN HumanResources.Employee AS e  
ON e.BusinessEntityID = p.BusinessEntityID  
WHERE LastName = 'Johnson';  

SELECT p.LastName, p.FirstName, e.JobTitle INTO dbo.EmpTwo FROM Person.Person AS p 
JOIN HumanResources.Employee AS e  
ON e.BusinessEntityID = p.BusinessEntityID  
WHERE LastName = 'Wood';  

SELECT p.LastName, p.FirstName, e.JobTitle INTO dbo.EmpThree FROM Person.Person AS p 
JOIN HumanResources.Employee AS e  
ON e.BusinessEntityID = p.BusinessEntityID  
WHERE LastName = 'Shoop';  

/********* Union ALL  ----> Duplicate Values Are Allowed  *********/
USE DayTwo
SELECT FirstName,LastName,EmployeeID FROM Employees WHERE EmployeeID BETWEEN 101 AND 130
UNION ALL
SELECT FirstName,LastName,EmployeeID FROM Employees ORDER BY EmployeeID

SELECT LastName, FirstName, JobTitle FROM dbo.EmpOne  
UNION ALL  
SELECT LastName, FirstName ,JobTitle FROM dbo.EmpTwo  
UNION ALL  
SELECT LastName, FirstName,JobTitle  FROM dbo.EmpThree;  
  
SELECT LastName, FirstName,JobTitle FROM dbo.EmpOne  
UNION   
SELECT LastName, FirstName, JobTitle FROM dbo.EmpTwo  
UNION   
SELECT LastName, FirstName, JobTitle FROM dbo.EmpThree;  

/************  INTERSECT -----> ONLY FOR COMMAN VALUES RESULT **********/
SELECT FirstName,LastName,EmployeeID FROM Employees WHERE EmployeeID BETWEEN 101 AND 130
INTERSECT
SELECT FirstName,LastName,EmployeeID FROM Employees ORDER BY EmployeeID
 
SELECT ProductID FROM Production.Product; 

SELECT ProductID FROM Production.Product
INTERSECT  
SELECT ProductID FROM Production.WorkOrder ORDER BY ProductID;

/********** EXCEPT A-B = C VALUES (NOT RUN COMMAN VALUES IS EXCEPT) *********/
SELECT FirstName,LastName,EmployeeID FROM Employees 
EXCEPT
SELECT FirstName,LastName,EmployeeID FROM Employees WHERE EmployeeID BETWEEN 101 AND 130 ORDER BY EmployeeID

SELECT ProductID FROM Production.Product  
EXCEPT  
SELECT ProductID FROM Production.WorkOrder ORDER BY ProductID ; 

/******** Derived Table *********/
USE DaySix
SELECT * FROM Departments
SELECT FirstName,d.DepartmentName FROM Employees e INNER JOIN (SELECT DepartmentID,DepartmentName FROM Department) as d ON d.DepartmentID = e.DepartmentID

/******** CTE ***********/
WITH Sales_CTE (SalesPersonID, SalesOrderID, SalesYear)  
AS  
(  
    SELECT SalesPersonID, SalesOrderID, YEAR(OrderDate) AS SalesYear FROM Sales.SalesOrderHeader  
    WHERE SalesPersonID IS NOT NULL 
)  
SELECT SalesPersonID, COUNT(SalesOrderID) AS TotalSales, SalesYear FROM Sales_CTE  
GROUP BY SalesYear, SalesPersonID  
ORDER BY SalesPersonID, SalesYear;

WITH Sales_CTE (SalesPersonID, NumberOfOrders)  
AS  
(  
    SELECT SalesPersonID, COUNT(*) FROM Sales.SalesOrderHeader  
    WHERE SalesPersonID IS NOT NULL GROUP BY SalesPersonID  
)  
SELECT AVG(NumberOfOrders) AS "Average Sales Per Person" FROM Sales_CTE;

WITH Sales_CTE (SalesPersonID, TotalSales, SalesYear)  AS  
(  
    SELECT SalesPersonID, SUM(TotalDue) AS TotalSales, YEAR(OrderDate) AS SalesYear  
    FROM Sales.SalesOrderHeader  
    WHERE SalesPersonID IS NOT NULL  
       GROUP BY SalesPersonID, YEAR(OrderDate)  
  
)  
,     
Sales_Quota_CTE (BusinessEntityID, SalesQuota, SalesQuotaYear)  
AS  
(  
       SELECT BusinessEntityID, SUM(SalesQuota)AS SalesQuota, YEAR(QuotaDate) AS SalesQuotaYear  
       FROM Sales.SalesPersonQuotaHistory  
       GROUP BY BusinessEntityID, YEAR(QuotaDate)  
)  
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
SELECT * FROM dbo.MyEmployees
WITH DirectReports(ManagerID, EmployeeID, Title, EmployeeLevel) AS   
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
