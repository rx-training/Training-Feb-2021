
SELECT * FROM Person.Address
UPDATE Person.Address SET ModifiedDate = GETDATE();

SELECT * FROM Sales.SalesPerson
UPDATE Sales.SalesPerson SET Bonus = 6000, CommissionPct = .10 ,SalesQuota = NULL

SELECT * FROM Production.Product
UPDATE Production.Product SET Color = N'Metalic Red' WHERE Name LIKE N'Road-250%' AND Color LIKE N'Blue';

SELECT ProductID,ListPrice INTO Production.Prod FROM Production.Product WHERE ListPrice = ListPrice * 2 AND ProductID>11
SELECT * FROM Production.Prod

UPDATE Production.Product SET ListPrice = ListPrice * 2

SELECT * FROM Production.Product where Color = 'Metalic red'

SELECT * FROM HumanResources.Employee

SELECT * FROM HumanResources.Emp
SELECT JobTitle , BirthDate , Gender INTO HumanResources.Emp FROM HumanResources.Employee

SELECT  BusinessEntityID ,'Designation', JobTitle  FROM HumanResources.Employee

SELECT BusinessEntityID ,NationalIDNumber ,JobTitle ,VacationHours FROM HumanResources.Employee WHERE VacationHours < 5
SELECT BusinessEntityID ,NationalIDNumber ,JobTitle ,VacationHours FROM HumanResources.Employee WHERE BusinessEntityID BETWEEN 1 AND 10;

SELECT BusinessEntityID ,VacationHours FROM  HumanResources.Employee WHERE VacationHours BETWEEN 20 AND 50

SELECT BusinessEntityID ,JobTitle ,LoginID FROM HumanResources.Employee WHERE JobTitle  IN ('Recruiter','Stocker')

SELECT BusinessEntityID ,JobTitle ,LoginID FROM HumanResources.Employee WHERE JobTitle NOT IN ('Recruiter','Stocker')

SELECT TOP 10 * FROM HumanResources.Employee

SELECT DISTINCT JobTitle FROM HumanResources.Employee WHERE JobTitle LIKE 'PR%'

SELECT BusinessEntityID , JobTitle FROM HumanResources.Employee Where JobTitle = 'Design Engineer'

SELECT BusinessEntityID , JobTitle,MaritalStatus  FROM HumanResources.Employee WHERE MaritalStatus = 'S'

SELECT * FROM HumanResources.Department

SELECT DepartmentID AS 'Department Number' , Name AS 'Department Name' FROM HumanResources.Department 

SELECT  Name +'department comes under' + GroupName + 'group' AS 'Department' FROM HumanResources.Department 

SELECT * FROM HumanResources.Department WHERE GroupName = 'Research and Development'

SELECT * FROM HumanResources.Department WHERE GroupName = 'Manufacturing' OR GroupName ='Quality Assurance'

SELECT * FROM HumanResources.Department WHERE Name LIKE 'Pro%'

SELECT  GroupName , DepartmentID , Name FROM  HumanResources.Department ORDER BY GroupName , DepartmentID

SELECT  GroupName , DepartmentID , Name FROM  HumanResources.Department ORDER BY GroupName , DepartmentID DESC

SELECT * FROM HumanResources.EmployeePayHistory

SELECT BusinessEntityID AS BusinessId,Rate , Per_Day_Rate = 8*Rate FROM HumanResources.EmployeePayHistory WHERE BusinessEntityID  BETWEEN 1 AND 10;

SELECT * FROM HumanResources.EmployeeDepartmentHistory

SELECT * FROM HumanResources.EmployeeDepartmentHistory WHERE EndDate IS  NULL

SELECT * FROM HumanResources.EmployeeDepartmentHistory WHERE EndDate IS NOT NULL

SELECT * FROM Sales.SalesPerson