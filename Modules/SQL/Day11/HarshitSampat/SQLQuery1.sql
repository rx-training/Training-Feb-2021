EXECUTE HumanResources.uspGetEmployeesTest2 N'Ackerman', N'Pilar';  
-- Or  
EXEC HumanResources.uspGetEmployeesTest2 @LastName = N'Ackerman', @FirstName = N'Pilar';  
GO  
-- Or  
EXECUTE HumanResources.uspGetEmployeesTest2 @FirstName = N'Pilar', @LastName = N'Ackerman';  
GO

---------------------------------------------------------------------------
EXECUTE HumanResources.uspGetEmployeesTest2 N'David', N'T';

SELECT * FROM HumanResources.vEmployeeDepartmentHistory

DROP TABLE BRANCH


---------------------------------------  RETURN DATA USING A RESULT SET
USE AdventureWorks2012
GO
IF OBJECT_ID('Sales.uspGetEmployeeSalesYTD','P') IS NOT NULL
 DROP PROCEDURE	Sales.uspGetEmployeeSalesYTD;
GO
CREATE PROCEDURE Sales.uspGetEmpployeeSalesYTD

AS

	SET NOCOUNT ON;
	SELECT LastName,SalesYTD
	FROM Sales.SalesPerson as sp
	join HumanResources.vEmployee as e	ON e.BusinessEntityID =sp.BusinessEntityID

	RETURN
GO
----------------------------------------------------------------------------------------------------------------------------------------
USE AdventureWorks2012;  
GO  
IF OBJECT_ID('Sales.uspGetEmployeeSalesYTD', 'P') IS NOT NULL  
    DROP PROCEDURE Sales.uspGetEmployeeSalesYTD;  
GO  
CREATE PROCEDURE Sales.uspGetEmployeeSalesYTD  
@SalesPerson nvarchar(50),  
@SalesYTD money OUTPUT  
AS    
  
    SET NOCOUNT ON; 
    SELECT @SalesYTD = SalesYTD  
    FROM Sales.SalesPerson AS sp  
    JOIN HumanResources.vEmployee AS e ON e.BusinessEntityID = sp.BusinessEntityID  
    WHERE LastName = @SalesPerson;  
RETURN  
GO

-------------------------------------------------------------------------------------------------------------------------
-- Declare the variable to receive the output value of the procedure.  
DECLARE @SalesYTDBySalesPerson money;  
-- Execute the procedure specifying a last name for the input parameter  
-- and saving the output value in the variable @SalesYTDBySalesPerson  
EXECUTE Sales.uspGetEmployeeSalesYTD  
    N'Blythe', @SalesYTD = @SalesYTDBySalesPerson OUTPUT;  
-- Display the value returned by the procedure.  
PRINT 'Year-to-date sales for this employee is ' +   
    convert(varchar(10),@SalesYTDBySalesPerson);  
GO

-------------------------------------------------------------------------------------------------------------------------------
