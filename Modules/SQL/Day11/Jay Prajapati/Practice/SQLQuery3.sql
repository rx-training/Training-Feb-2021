USE SQLDay2

SELECT * FROM Employees;

-- Define Procedure
CREATE PROCEDURE SPGetEmployee
AS
BEGIN
	SELECT * FROM Employees;
END

-- Call Procedure
SPGetEmployee;

SP_Helptext SPGetEmployee;

-- Change the Procedure

ALTER PROCEDURE SPGetEmployee
AS
BEGIN
	SELECT FirstName, Salary FROM Employees ORDER BY Salary DESC;
END

-- Store Procedure with parameter

CREATE PROCEDURE SPGetEmployeeSalary @Salary MONEY
AS
BEGIN
	SELECT EmployeeID,
		FirstName,
		Salary 
		FROM Employees
		WHERE Salary = @Salary;
END

SPGetEmployeeSalary 17000.00

-- Delete Procedure SPGetEmployee

DROP PROCEDURE SPGetEmployee

-- Procedure encryption 
CREATE PROCEDURE SPGetEmployee
WITH ENCRYPTION
AS
BEGIN
	SELECT FirstName, Salary FROM Employees ORDER BY Salary DESC;
END

SP_Helptext SPGetEmployee

CREATE PROCEDURE SPGetEmpCount
@Salary MONEY,
@EmployeeID INT OUTPUT
AS
BEGIN
	SELECT @EmployeeID = COUNT(*) 
	FROM Employees
	WHERE Salary = @Salary;
END

DECLARE @Count int;
EXECUTE SPGetEmpCount 8000.00, @Count OUTPUT
PRINT @COUNT

-- Get info (Meta data) about Procedure
SP_HELP SPGetEmployeeSalary

-- Get dependences of Procedure
SP_DEPENDS SPGetEmployeeSalary


USE AdventureWorks2012;  
GO  
SET NOCOUNT OFF;  
GO  
-- Display the count message.  
SELECT TOP(5)LastName  
FROM Person.Person  
WHERE LastName LIKE 'A%';  
GO  
-- SET NOCOUNT to ON to no longer display the count message.  
SET NOCOUNT ON;  
GO  
SELECT TOP(5) LastName  
FROM Person.Person  
WHERE LastName LIKE 'A%';  
GO  
-- Reset SET NOCOUNT to OFF  
SET NOCOUNT OFF;  
GO  