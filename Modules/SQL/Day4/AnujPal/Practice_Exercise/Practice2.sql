-- APPROX_COUNT_DISTINCT()

select APPROX_COUNT_DISTINCT(LastName) AS B from  Employees

-- AVERAGE
SELECT * FROM Employees 


SELECT AVG(Salary) AS AVERAGE FROM Employees

--CHECKSUM

SELECT  CHECKSUM_AGG(CAST(Salary AS INT)) AS CHECKSUM FROM Employees WHERE Salary>10000

-- count

SELECT count(Salary) AS AVERAGE FROM Employees

-- count big

SELECT COUNT_BIG(Salary) AS AVERAGE FROM Employees

-- max

SELECT MAX(Salary) AS AVERAGE FROM Employees

-- min

SELECT MIN(Salary) AS AVERAGE FROM Employees

-- stddev


SELECT STDEV(Salary) AS AVERAGE FROM Employees
SELECT STDEV(DISTINCT Salary)AS Distinct_Values, STDEV(Salary) AS All_Values  
FROM Employees; 

-- stddevp

SELECT STDEVp(Salary) AS AVERAGE FROM Employees
SELECT STDEVp(DISTINCT Salary)AS Distinct_Values, STDEV(Salary) AS All_Values  
FROM Employees; 

--var
SELECT VAR(Salary) AS AVERAGE FROM Employees





