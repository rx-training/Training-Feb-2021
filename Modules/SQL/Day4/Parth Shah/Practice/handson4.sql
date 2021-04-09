---Practice Day 4  hands on :
USE EXAMS;
GO
CREATE TABLE ExamResult
(StudentName VARCHAR(70), 
 Subject     VARCHAR(20), 
 Marks       INT
);
INSERT INTO ExamResult
VALUES
('Lily', 
 'Maths', 
 65
);
INSERT INTO ExamResult
VALUES
('Lily', 
 'Science', 
 80
);
INSERT INTO ExamResult
VALUES
('Lily', 
 'english', 
 70
);
INSERT INTO ExamResult
VALUES
('Isabella', 
 'Maths', 
 50
);
INSERT INTO ExamResult
VALUES
('Isabella', 
 'Science', 
 70
);
INSERT INTO ExamResult
VALUES
('Isabella', 
 'english', 
 90
);
INSERT INTO ExamResult
VALUES
('Olivia', 
 'Maths', 
 55
);
INSERT INTO ExamResult
VALUES
('Olivia', 
 'Science', 
 60
);
INSERT INTO ExamResult
VALUES
('Olivia', 
 'english', 
 89
);

SELECT * FROM ExamResult;

---using concept of row number 
SELECT Studentname, Subject, Marks, ROW_NUMBER() OVER(ORDER BY Marks) RowNumber
FROM ExamResult;


--USING ROW NUMBER IN DESCENDING ORDER
SELECT Studentname, Subject, Marks, ROW_NUMBER() OVER(ORDER BY Marks DESC) RowNumber
FROM ExamResult;

---using partition and rank()

SELECT Studentname, 
       Subject, 
       Marks, 
       RANK() OVER(PARTITION BY Studentname ORDER BY Marks DESC) Rank
FROM ExamResult
ORDER BY Studentname, 
         Rank;

--not using partition
SELECT Studentname, 
       Subject, 
       Marks, 
       RANK() OVER(ORDER BY Marks DESC) Rank
FROM ExamResult
ORDER BY Rank;

----Using Dense_Rank() ---sql function

SELECT Studentname, 
       Subject, 
       Marks, 
       DENSE_RANK() OVER(ORDER BY Marks DESC) Rank
FROM ExamResult
ORDER BY Rank;


Update Examresult set Marks=70 where Studentname='Isabella' and Subject='Maths'
---using dense and partition both 
		 SELECT Studentname, 
       Subject, 
       Marks, 
       DENSE_RANK() OVER(PARTITION BY StudentName ORDER BY Marks ) Rank
FROM ExamResult
ORDER BY Studentname, 
         Rank;




		 -----ntile
SELECT *, 
       NTILE(3) OVER(
       ORDER BY Marks DESC) Rank
FROM ExamResult
ORDER BY rank;


--We can use SQL PARTITION BY clause to have more than one partition. In the following query, each partition on subjects is divided into two groups.

SELECT *, 
       NTILE(2) OVER(PARTITION  BY subject ORDER BY Marks DESC) Rank
FROM ExamResult
ORDER BY subject, rank;

---Practical usage of SQL RANK functions

WITH StudentRanks AS
(
  SELECT *, ROW_NUMBER() OVER( ORDER BY Marks) AS Ranks
  FROM ExamResult
)
 
SELECT StudentName , Marks 
FROM StudentRanks
WHERE Ranks >= 1 and Ranks <=3
ORDER BY Ranks








USE AdventureWorks2012;   
GO  


---it divides group into 4 
SELECT p.FirstName, p.LastName  
    ,NTILE(4) OVER(ORDER BY SalesYTD DESC) AS Quartile  
    ,CONVERT(NVARCHAR(20),s.SalesYTD,1) AS SalesYTD  
    , a.PostalCode  
FROM Sales.SalesPerson AS s   
INNER JOIN Person.Person AS p   
    ON s.BusinessEntityID = p.BusinessEntityID  
INNER JOIN Person.Address AS a   
    ON a.AddressID = p.BusinessEntityID  
WHERE TerritoryID IS NOT NULL   
    AND SalesYTD <> 0;  
GO  


--AGGREGATE FUNCTION
SELECT * FROM Production.ProductListPriceHistory

SELECT SUM(ListPrice),COUNT(*),AVG(ListPrice) FROM Production.ProductListPriceHistory;

--GROUP BY 

CREATE TABLE Sales ( Country VARCHAR(50), Region VARCHAR(50), Sales INT );

INSERT INTO sales VALUES (N'Canada', N'Alberta', 100);
INSERT INTO sales VALUES (N'Canada', N'British Columbia', 200);
INSERT INTO sales VALUES (N'Canada', N'British Columbia', 300);
INSERT INTO sales VALUES (N'United States', N'Montana', 100);

---BEFORE GROUP BY 

SELECT * FROM Sales;

--After Groupby
SELECT Country, Region, SUM(sales) AS TotalSales
FROM Sales
GROUP BY Country, Region;

--GroupBy Rollup:
SELECT Country, Region, SUM(Sales) AS TotalSales
FROM Sales
GROUP BY ROLLUP (Country, Region);


--group by cube 
SELECT Country, Region, SUM(Sales) AS TotalSales
FROM Sales
GROUP BY CUBE (Country, Region);

---GROUP BY GROUPING SETS ( )

SELECT Country, Region, SUM(Sales) AS TotalSales
FROM Sales
GROUP BY GROUPING SETS ( ROLLUP (Country, Region), CUBE (Country, Region) );

SELECT Country, SUM(Sales) AS TotalSales
FROM Sales
GROUP BY GROUPING SETS ( Country, () );


---Having by :

/*The following example that uses a simple HAVING clause retrieves the total for each SalesOrderID from 
the SalesOrderDetail table that exceeds $100000.00.*/

SELECT SalesOrderID, SUM(LineTotal) AS SubTotal  
FROM Sales.SalesOrderDetail  
GROUP BY SalesOrderID  
HAVING SUM(LineTotal) > 100000.00  
ORDER BY SalesOrderID ;  



  
