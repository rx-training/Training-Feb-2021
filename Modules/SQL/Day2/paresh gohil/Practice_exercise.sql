USE AdventureWorks2012

SELECT * FROM HumanResources.Employee

SELECT BusinessEntityID , JobTitle , loginID FROM HumanResources.Employee

SELECT * FROM HumanResources.Department


/* alias of coloumn name in new table */
SELECT 'DepartID' = DepartmentID FROM HumanResources.Department

/*Literals*/
SELECT  'JOB:', JobTitle ,loginID FROM HumanResources.Employee

SELECT JobTitle + LoginID FROM HumanResources.Employee

SELECT * FROM HumanResources.EmployeePayHistory

SELECT BusinessEntityID,Rate,Rate1 = Rate*5 FROM HumanResources.EmployeePayHistory

SELECT * FROM HumanResources.EmployeePayHistory WHERE PayFrequency = 1

SELECT * FROM HumanResources.Department WHERE GroupName LIKE 'R%'

SELECT * FROM HumanResources.Department ORDER BY Name DESC

SELECT TOP 5 * FROM HumanResources.Department