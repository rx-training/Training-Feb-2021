------Practice Day 9


USE AdventureWorks2012 ;
GO

SELECT * FROM HumanResources.Employee; 

DECLARE @Job varchar(25) , @Gender varchar(30);

SET @Job = 'Design Engineer';
SET @Gender = 'M';

SELECT JobTitle,BusinessEntityID FROM HumanResources.Employee WHERE  JobTitle = @Job AND Gender = @Gender;
GO

SELECT * FROM Sales.SalesPerson;

DECLARE @Bonus money 
SELECT @Bonus = MAX(Bonus)
FROM Sales.SalesPerson;
GO

PRINT @Bonus;



--if - else

DECLARE @Bonus money 
SELECT @Bonus = Bonus FROM Sales.SalesPerson WHERE BusinessEntityID = 281;
IF @Bonus < 2000
PRINT 'You Have to work hard'
ELSE 
BEGIN 
PRINT 'CARRY ON!'
PRINT 'BONUS = '
PRINT @Bonus
END 
GO




--case statement 
DECLARE @Designation nvarchar(90), @MaritalStatus varchar(30),@sickleavehours smallint
SET @Designation = 'Design Engineer'
SET @MaritalStatus ='M'
SET @sickleavehours = 50 
SELECT JobTitle ,leave=  CASE WHEN SickLeaveHours > @sickleavehours THEN 'YES' ELSE 'NO' END FROM HumanResources.Employee 
WHERE JobTitle = @Designation AND MaritalStatus= @MaritalStatus 
GO



SELECT BusinessEntityId , 'Marital Status' = 
CASE MaritalStatus
WHEN 'M' THEN 'MARRIED'
WHEN 'S' THEN 'SINGLE'
ELSE 'NOT SPECIFIED'
END 
FROM HumanResources.Employee;
GO


SELECT BusinessEntityId , 'GENDER' = 
CASE Gender
WHEN 'M' THEN 'MALE'
WHEN 'F' THEN 'FEMALE'
ELSE 'NOT SPECIFIED'
END 
FROM HumanResources.Employee;
GO


--WHILE STATEMENT 
 SELECT * FROM Production.Product;

 WHILE (SELECT AVG(ListPrice) FROM Production.Product) < 300
 BEGIN
 UPDATE Production.Product
 SET ListPrice = ListPrice * 2
 SELECT MAX(ListPrice) FROM Production.Product
 IF ( SELECT MAX(ListPrice) FROM Production.Product) >
 500
 BREAK
 ELSE 
 CONTINUE
 END
 PRINT 'TOO MUCH FOR THE MARKET TO BEAR';



