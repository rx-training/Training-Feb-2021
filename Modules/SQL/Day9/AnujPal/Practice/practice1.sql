select * from HumanResources.EmployeePayHistory

/*How to declare Variable in SQL*/

declare @Rate int

select @Rate=min(Rate) from HumanResources.EmployeePayHistory 

PRINT @Rate
go

/*IF ELSE IN SQL*/

DECLARE @Rate money
SELECT @Rate = Rate FROM  HumanResources.EmployeePayHistory WHERE BusinessEntityID = 23
IF @Rate<15
PRINT 'Review of rate is required'
ELSE 
BEGIN 
PRINT 'Review of rate is not required '
PRINT 'The Rate is'
PRINT @Rate
END
go

/*CASE IN SQL*/

SELECT * FROM HumanResources.Employee

SELECT BusinessEntityID,'Marital Status' =
CASE 'MaritalStatus'
	WHEN 'M' THEN 'Married'
	WHEN 'F' THEN 'Unmarried'
	ELSE 'NOT SPECIFIED'
END
FROM HumanResources.Employee
 go

 /*While loop in SQL*/

 SELECT * FROM Production.Product

 WHILE (SELECT AVG(SafetyStockLevel) FROM Production.Product)<850
 BEGIN
 UPDATE Production.Product
 SET SafetyStockLevel=SafetyStockLevel*2
 IF(SELECT MAX(SafetyStockLevel) FROM Production.Product)>900
 BREAK
 ELSE
 CONTINUE
 END
 PRINT 'Too Much Bear For The Market'
 go