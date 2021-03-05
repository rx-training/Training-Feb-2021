Use AdventureWorks2012;
Update Person.Address
Set ModifiedDate = GETDATE();


--Updaing multiple columns
Update Sales.SalesPerson
Set Bonus =6000, CommissionPct=0.10,SalesQuota =NULL;

--Limiting te rows that are updated
Update Production.Product
Set Color = N'Metalic Red'
WHERE NAME LIKE N'Road-250%' And Color =N'Red';

Update Production.Product
Set ListPrice = ListPrice+25;

--Specifying Compound Operator
DECLARE @NewPrice INT = 10;
UPDATE Production.Product
SET ListPrice += @NewPrice
Where Color = N'Red';

Select JobTitle, HireDate,LoginID,MaritalStatus
from HumanResources.Employee

Select 'Department Number' = DepartmentID,	'Department Name' = Name from HumanResources.Department

Select DepartmentID 'Department Number' ,Name 'Department Name' from HumanResources.Department

Select DepartmentID As'Department Number' ,Name As 'Department Name' from HumanResources.Department

--Literals
Select NationalIDNumber, 'Designation:',JobTitle from HumanResources.Employee	

Select Name +'depatment Comes under'+GroupName+'group'As Department from HumanResources.Department

Select BusinessEntityID ,Rate,Per_day_Rqate=8*Rate From HumanResources.EmployeePayHistory

Select * from HumanResources.Department where GroupName='Research and Development'
	
Select NationalIDNumber,JobTitle,VacationHours
from HumanResources.Employee
Where VacationHours <5

--Logical Operator
Select * FROM HumanResources.Department
Where	GroupName = 'Manufacturing'
or GroupName = 'Quality Assurance'

--Range Operators
Select NationalIDNumber, VacationHours
from HumanResources.Employee
Where VacationHours BETWEEN	45 AND 50

--in/not keyword
Select NationalIDNumber,JobTitle,LoginID	 
from HumanResources.Employee
where JobTitle IN ('Recruiter','Stocker')

--The Like keyword
Select * from HumanResources.Department
Where Name LIKE 'Ma%'

Select BusinessEntityID, EndDate
from HumanResources.EmployeeDepartmentHistory
Where EndDate is null

--Distinct Keyword	
Select DISTINCT JobTitle from
HumanResources.Employee
Where JobTitle Like'pr%'