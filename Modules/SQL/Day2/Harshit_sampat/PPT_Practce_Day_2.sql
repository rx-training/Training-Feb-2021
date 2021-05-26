USE AdventureWorks2012;
UPDATE Person.Address
SET ModifiedDate = GETDATE();


--Updaing multiple columns
UPDATE Sales.SalesPerson
SET Bonus =6000, CommissionPct=0.10,SalesQuota =NULL;

--Limiting te rows that are updated
UPDATE Production.Product
SET Color = N'Metalic Red'
WHERE NAME LIKE N'Road-250%' And Color =N'Red';

UPDATE Production.Product
SET ListPrice = ListPrice+25;

--Specifying Compound Operator
DECLARE @NewPrice INT = 10;
UPDATE Production.Product
SET ListPrice += @NewPrice
Where Color = N'Red';

SELECT JobTitle, HireDate,LoginID,MaritalStatus
FROM HumanResources.Employee

SELECT 'Department Number' = DepartmentID,	'Department Name' = Name FROM HumanResources.Department

SELECT DepartmentID 'Department Number' ,NAME 'Department Name' FROM HumanResources.Department

SELECT DepartmentID As'Department Number' ,NAME AS 'Department Name' FROM HumanResources.Department

--Literals
SELECT NationalIDNumber, 'Designation:',JobTitle FROM HumanResources.Employee	

SELECT Name +'depatment Comes under'+GroupName+'group'As Department FROM HumanResources.Department

SELECT BusinessEntityID ,Rate,Per_day_Rqate=8*Rate FROM HumanResources.EmployeePayHistory

SELECT * FROM HumanResources.Department where GroupName='Research and Development'
	
SELECT NationalIDNumber,JobTitle,VacationHours
FROM HumanResources.Employee
WHERE VacationHours <5

--Logical Operator
SELECT * FROM HumanResources.Department
WHERE	GroupName = 'Manufacturing'
or GroupName = 'Quality Assurance'

--Range Operators
SELECT NationalIDNumber, VacationHours
FROM HumanResources.Employee
WHERE VacationHours BETWEEN	45 AND 50

--in/not keyword
SELECT NationalIDNumber,JobTitle,LoginID	 
FROM HumanResources.Employee
WHERE JobTitle IN ('Recruiter','Stocker')

--The Like keyword
SELECT * FROM HumanResources.Department
WHERE NAME LIKE 'Ma%'

SELECT BusinessEntityID, EndDate
FROM HumanResources.EmployeeDepartmentHistory
WHERE EndDate IS NULL

--Distinct Keyword	
SELECT DISTINCT JobTitle FROM
HumanResources.Employee
WHERE JobTitle LIKE'pr%'