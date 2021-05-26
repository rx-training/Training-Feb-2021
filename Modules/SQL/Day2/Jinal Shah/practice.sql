USE AdventureWorks2012

SELECT * FROM HumanResources.Employee

SELECT BusinessEntityID , JobTitle , loginID FROM HumanResources.Employee

SELECT * FROM HumanResources.Department

SELECT 'DepartID' = DepartmentID FROM HumanResources.Department

SELECT DepartmentID, 'Department :', Name from HumanResources.Department

SELECT  'JOB:', JobTitle ,loginID FROM HumanResources.Employee

SELECT JobTitle + LoginID FROM HumanResources.Employee

SELECT	Name + ' Department comes under '+ GroupName + ' Group' As Department From HumanResources.Department

SELECT 'Department Number' = DepartmentID, 'Department Name'= Name FROM HumanResources.Department

SELECT  * FROM HumanResources.Department WHERE GroupName = 'Research and Development'

SELECT  * FROM HumanResources.Department WHERE GroupName = 'Research and Development' OR GroupName = 'Quality Assurance'

SELECT BusinessEntityID, VacationHours FROM HumanResources.Employee WHERE VacationHours BETWEEN 20 AND 50

SELECT * FROM HumanResources.EmployeePayHistory

SELECT BusinessEntityID,Rate,Rate1 = Rate*5 FROM HumanResources.EmployeePayHistory

SELECT * FROM HumanResources.EmployeePayHistory WHERE PayFrequency = 1

SELECT BusinessEntityID, EndDate FROM HumanResources.EmployeeDepartmentHistory WHERE EndDate IS NULL

SELECT GroupName,DepartmentID, Name FROM HumanResources.Department ORDER BY GroupName, DepartmentID

SELECT BusinessEntityID, JobTitle, LoginID from HumanResources.Employee WHERE JobTitle NOT IN ('Recruiter','Stocker','Design Engineer')

SELECT * FROM HumanResources.Department WHERE GroupName LIKE 'R%'

SELECT * FROM HumanResources.Department WHERE Name like 'Pro%'

SELECT * FROM HumanResources.Department ORDER BY Name DESC

SELECT BusinessEntityID,Rate, Per_Day_Rate = 8 * Rate FROM HumanResources.EmployeePayHistory

SELECT * FROM HumanResources.EmployeePayHistory

SELECT TOP 5 * FROM HumanResources.Department