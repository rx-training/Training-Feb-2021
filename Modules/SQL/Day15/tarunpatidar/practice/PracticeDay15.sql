------------------------------ ROLLBACK TRANSACTION ------------------------------

USE tempdb;  
GO  
CREATE TABLE ValueTable ([value] INT);  
GO  
  
DECLARE @TransactionName VARCHAR(20) = 'Transaction1';  
  
BEGIN TRAN @TransactionName  
       INSERT INTO ValueTable VALUES(1), (2);  
ROLLBACK TRAN @TransactionName;  
  
INSERT INTO ValueTable VALUES(3),(4);  
  
SELECT [value] FROM ValueTable;  
  
DROP TABLE ValueTable;

-------------------------------------- ISOLATION LEVEL -----------------------------------

USE AdventureWorks2012;

SET TRANSACTION ISOLATION LEVEL
READ COMMITTED
BEGIN TRANSACTION TR
BEGIN TRY
UPDATE Person.EmailAddress 
SET EmailAddress='jolyn@yahoo.com' 
WHERE BusinessEntityID = 2
UPDATE HumanResources.Employee SET JobTitle = 'abc' 
WHERE  BusinessEntityID = 1
COMMIT TRANSACTION TR
PRINT 'Transaction Executed'
END TRY
BEGIN CATCH
ROLLBACK TRANSACTION TR
PRINT 'Transaction Rollbacked'
END CATCH
