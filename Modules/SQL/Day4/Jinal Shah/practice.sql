SELECT * FROM HumanResources.Employee ORDER BY SickLeaveHours

SELECT DENSE_RANK() OVER (ORDER BY RATE) 'DRate',RANK() OVER (ORDER BY Rate)'RRate', 
	ROW_NUMBER() OVER (ORDER BY RATE)'RowRate',
	Rate from HumanResources.EmployeePayHistory ORDER BY Rate

SELECT HOST_ID() as 'HostID'

SELECT TOP(4) SickLeaveHours,JobTitle from HumanResources.Employee ORDER BY SickLeaveHours

SELECT JobTitle,SickLeaveHours,ROW_NUMBER() OVER (ORDER BY SickLeaveHours) 'RANK' FROM HumanResources.Employee
 ORDER BY SickLeaveHours

SELECT JobTitle,SickLeaveHours,ROW_NUMBER() OVER (ORDER BY SickLeaveHours) 'RANK' FROM HumanResources.Employee
 WHERE 'RANK' BETWEEN 1 AND 10 ORDER BY SickLeaveHours 

SELECT * FROM
(SELECT JobTitle,SickLeaveHours,ROW_NUMBER() OVER (ORDER BY SickLeaveHours) 'RANKINFO'
FROM HumanResources.Employee) AS tb1
WHERE RANKINFO BETWEEN 1 AND 10

SELECT SalesOrderID, SUM(LineTotal) AS SubTotal FROM Sales.SalesOrderDetail GROUP BY SalesOrderID
HAVING SUM(LineTotal)> 100000.00 ORDER BY SalesOrderID

SELECT * INTO ABC FROM HumanResources.Employee
SELECT * FROM ABC