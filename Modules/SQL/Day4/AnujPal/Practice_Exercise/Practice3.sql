CREATE TABLE Group1 ( Country VARCHAR(50), Region VARCHAR(50), Sales INT );

INSERT INTO Group1 VALUES (N'Canada', N'Alberta', 100);
INSERT INTO Group1 VALUES (N'Canada', N'British Columbia', 200);
INSERT INTO Group1 VALUES (N'Canada', N'British Columbia', 300);
INSERT INTO Group1 VALUES (N'United States', N'Montana', 100);

select * from Group1

-- group by
SELECT Country, Region, SUM(sales) AS TotalSales
FROM Group1
GROUP BY Country, Region;

--group by rollup

SELECT Country, Region, SUM(Sales) AS TotalSales
FROM Group1
GROUP BY ROLLUP (Country, Region);


--group by cube

SELECT Country, Region, SUM(Sales) AS TotalSales
FROM Group1
GROUP BY CUBE (Country, Region);

-- group by grouping sets

SELECT Country, Region, SUM(Sales) AS TotalSales
FROM Group1
GROUP BY GROUPING SETS ( ROLLUP (Country, Region), CUBE (Country, Region) );