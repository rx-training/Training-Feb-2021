use AdventureWorks2012

Select BusinessEntityID,LoginID, JobTitle from HumanResources.Employee where BusinessEntityID <=30

CREATE TABLE Employees(Id int PRIMARY KEY, Name varchar(50))

INSERT INTO Employees VALUES(1,'John'),
							(2,'Rita'),
							(3,'Meena')

SELECT * FROM Employees

Select * from HumanResources.Employee

SELECT * FROM HumanResources.Department

SELECT DepartmentID, 'Department :', Name from HumanResources.Department

SELECT	Name + ' Department comes under '+ GroupName + ' Group' As Department From HumanResources.Department

SELECT 'Department Number' = DepartmentID, 'Department Name'= Name FROM HumanResources.Department

SELECT  * FROM HumanResources.Department WHERE GroupName = 'Research and Development'

SELECT  * FROM HumanResources.Department WHERE GroupName = 'Research and Development' OR GroupName = 'Quality Assurance'

SELECT BusinessEntityID, VacationHours FROM HumanResources.Employee WHERE VacationHours BETWEEN 20 AND 50

SELECT * FROM HumanResources.EmployeeDepartmentHistory

SELECT BusinessEntityID, EndDate FROM HumanResources.EmployeeDepartmentHistory WHERE EndDate IS NULL

SELECT GroupName,DepartmentID, Name FROM HumanResources.Department ORDER BY GroupName, DepartmentID

SELECT BusinessEntityID, JobTitle, LoginID from HumanResources.Employee WHERE JobTitle NOT IN ('Recruiter','Stocker','Design Engineer')

SELECT * FROM HumanResources.Department WHERE Name like 'Pro%'

SELECT BusinessEntityID,Rate, Per_Day_Rate = 8 * Rate FROM HumanResources.EmployeePayHistory

SELECT * FROM HumanResources.EmployeePayHistory