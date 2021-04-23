--System Function --

SELECT host_id() as 'Host id'
--1
USE AdventureWorks2012;  
GO  
UPDATE HumanResources.EmployeePayHistory  
    SET PayFrequency = 4  
    WHERE BusinessEntityID = 1;  
IF @@ERROR = 547
    BEGIN
    PRINT 'A check constraint violation occurred.';
    END
GO

--2
