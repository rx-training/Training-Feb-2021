										-------Day11 Practice Work (Storage Procedures)



--create a stored procedures :

USE AdventureWorks2012;  
GO  
CREATE PROCEDURE HumanResources.uspGetEmployeesTest2   
    @LastName nvarchar(50),   
    @FirstName nvarchar(50)   
AS   

    SET NOCOUNT ON;  
    SELECT FirstName, LastName, Department  
    FROM HumanResources.vEmployeeDepartmentHistory  
    WHERE FirstName = @FirstName AND LastName = @LastName  
    AND EndDate IS NULL;  
GO


---executing in  three ways

EXECUTE HumanResources.uspGetEmployeesTest2 N'Ackerman', N'Pilar'; 
-- Or  
EXEC HumanResources.uspGetEmployeesTest2 @LastName = N'Ackerman', @FirstName = N'Pilar';  
GO  
-- Or  
EXECUTE HumanResources.uspGetEmployeesTest2 @FirstName = N'Pilar', @LastName = N'Ackerman';  
GO  


----modify
IF OBJECT_ID ( 'Purchasing.uspVendorAllInfo', 'P' ) IS NOT NULL   
    DROP PROCEDURE Purchasing.uspVendorAllInfo;  
GO  
CREATE PROCEDURE Purchasing.uspVendorAllInfo  
WITH EXECUTE AS CALLER  
AS  
    SET NOCOUNT ON;  
    SELECT v.Name AS Vendor, p.Name AS 'Product name',   
      v.CreditRating AS 'Rating',   
      v.ActiveFlag AS Availability  
    FROM Purchasing.Vendor v   
    INNER JOIN Purchasing.ProductVendor pv  
      ON v.BusinessEntityID = pv.BusinessEntityID   
    INNER JOIN Production.Product p  
      ON pv.ProductID = p.ProductID   
    ORDER BY v.Name ASC;  
GO



---delete
DROP PROCEDURE Purchasing.uspVendorAllInfo ;  
GO


---using output parameter :

CREATE PROCEDURE prcGetEmployeeDetail @EmpId int, @DepName char(50) OUTPUT ,
@ShiftId int OUTPUT
AS
BEGIN
IF EXISTS (SELECT * FROM HumanResources.Employee WHERE
BusinessEntityID = @EmpId)
BEGIN
SELECT @DepName = d.Name ,@ShiftId = h.ShiftID
FROM HumanResources.Department d JOIN 
HumanResources.EmployeeDepartmentHistory h
ON d.DepartmentID = h.DepartmentID 
WHERE BusinessEntityID = @EmpId AND h.EndDate IS NULL 
RETURN 0 
END 
END


---call a procedure from anoter procedure
CREATE PROCEDURE DisplayEmployeeStatus @EmpId INT 
AS
BEGIN

DECLARE @DepName char(50), @ShiftId int, @ReturnValue int 
EXEC @ReturnValue = prcGetEmployeeDetail @EmpId , @DepName OUTPUT, @ShiftId 
OUTPUT 
IF (@ReturnValue = 0)
BEGIN 
PRINT 'THE DETAILS OF AN EMPLOYEE WITH ID :' + CONVERT (CHAR(10) ,@EmpId)
PRINT 'DEPARTMENT NAME: ' + @DepName 
PRINT 'ShiftId :' + CONVERT (CHAR(1), @ShiftId)
SELECT JobTitle FROM
HumanResources.Employee 
WHERE BusinessEntityID = @EmpId

END 
ELSE 
PRINT 'NO RECORDS FOUND FOR THE GIVEN EMPLOYEE '
END


EXECUTE DisplayEmployeeStatus 12
GO



select * from HumanResources.Employee;
select * from HumanResources.Department;