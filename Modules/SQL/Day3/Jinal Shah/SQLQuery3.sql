
		-----------adventureworks2012-----------					
							
							/* String function */
SELECT Name = Title + ' ' +left(FirstName,1) + '.' + LastName, EmailAddress from Person.CountryRegion

SELECT * FROM Person.CountryRegion
SELECT * FROM Person.ContactType


							/* Date Example */
SELECT BusinessEntityID, DATENAME(mm, HireDate) + ', ' + CONVERT(varchar, DATEPART(yyyy, HireDate)) as 'joining'
FROM HumanResources.Employee

SELECT * FROM HumanResources.Employee

SELECT DATENAME(MM, GETDATE()) + SPACE(1) + CAST(DATEPART(dd, GETDATE()) AS varchar) + ', ' + 
CAST(DATEPART(yyyy, GETDATE()) AS varchar)

SELECT BusinessEntityID, 'Hourly pay rate' = ROUND(Rate,2) from HumanResources.EmployeePayHistory

SELECT * FROM HumanResources.EmployeePayHistory