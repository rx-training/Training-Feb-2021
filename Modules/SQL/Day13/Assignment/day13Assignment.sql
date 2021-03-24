

														---day13 Assignment---

----1.Create a scaler Function to compute PF which will accept parameter basicsalary and compute PF. PF is 12% of the basic salary: 
use Practice --(Day 2 database)-- 

---using declare 

ALTER FUNCTION EmployeesSalary(@Salary float)
RETURNS float
AS
BEGIN
RETURN @Salary*.12
END

DECLARE @Salary float
SET @Salary = 
dbo.EmployeesSalary(10000)
PRINT @Salary




---using salary data from employees table 

ALTER FUNCTION EmployeesSal(@Salary float)
RETURNS float
AS
BEGIN
RETURN @Salary*.12
END


SELECT Salary,dbo.EmployeesSal(Salary)AS PF  
FROM Employees  
WHERE EmployeeID BETWEEN 100 and 110;







--2.Create a scaler Function which will compute PT which will accept MontlyEarning. Criteria as below.

ALTER FUNCTION  CalculatePT (@Earnings FLOAT)
RETURNS VARCHAR(25)
AS
BEGIN
DECLARE @PT VARCHAR(20)

IF @Earnings < 5999 SET @PT ='NIL'
ELSE IF @Earnings > 6000 AND @Earnings < 8999 SET @PT = '80'
ELSE IF @Earnings > 9000 AND @Earnings < 11999 SET @PT = '150'
ELSE IF @Earnings > 12000 SET @PT = '200'
RETURN @PT 
END 


PRINT dbo.CalculatePT(25000)


--3. Create a table valued function which will accept JobTitle which will return new table set based on jobtitle



SELECT * FROM Employees

CREATE FUNCTION InfJobtitle 
(@inf nvarchar(20))
RETURNS TABLE 
AS
RETURN (SELECT * FROM Employees WHERE JobId = @inf 
)
GO 

SELECT * FROM InfJobtitle('PU_CLERK')



---above one can also done through adventures 2012 database
USE AdventureWorks2012


SELECT * FROM HumanResources.Employee

CREATE FUNCTION InfsJobtitle 
(@inf nvarchar(20))
RETURNS TABLE 
AS
RETURN (SELECT * FROM HumanResources.Employee WHERE JobTitle = @inf 
)
GO 

SELECT * FROM InfsJobtitle('Senior Tool Designer')


