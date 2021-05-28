/*SET IMPLICIT_TRANSACTION ON;
INSERT INTO Employees VALUE('jack','marketing')
INSERT INTO	EMPLOYEES VALUES('Robert','Finance') Commit Transaction*/
 
------Explicit transaction

/*

BEGIN TRAN mytran
UPADATE FixedDepositAccount
SET Balance = Balance -25000
where AccountName ='JOHN'

Update Saving Account
SET BALANCE =BALANCE+25000
WHERE AccountName ='JOHN'
COMMIT TRAN myTran
*/
Select * from Person.EmailAddress

Select * from Person.Address

BEGIN TRANSACTION TR1	
BEGIN TRY
UPDATE Person.EmailAddress
SET EmailAddress ='harshit.sampat.12@gmail.com'
WHERE EmailAddressID =20
----STATEMENT 1 
UPDATE Person.Address SET PostalCode =23232 WHERE 
AddressID =291
COMMIT TRANSACTION TR1

-------------- STATEMENT 2
SELECT 'TRANSACTION EXECUTED' AS RESULT_OF_QUERY
END TRY
BEGIN CATCH
	ROLLBACK TRANSACTION TR1
	SELECT 'Transaction Rollbacked'
END CATCH

--------------------------------Isolation Level
SET TRANSACTION ISOLATION LEVEL
READ CMMITTED
BEGIN TRANSACTION TR
BEGIN TRY
UPDATE Person.EmailAddress
SET EmailAddress ='jolyn@yahoo.com'
WHERE EmailAddressID=12

UPDATE Person.Address
SET AddressID = 1212
WHERE AddressID =3
COMMIT TRANSACTION TR
PRINT 'Transaction Executed'
END TRY
BEGIN CATCH
ROLLBACK 'Transaction Rollbacked'
END CATCH

------------------------Examples Of MSDN------------
BEGIN DISTRIBUTED TRANSACTION;
----DELETE CANDIDATE FROM LOCAL INSTANCE
DELETE AdventureWorks2012.HumanResources.JobCandidate
WHERE JobCandidateID=13;

--------DELETE CANDIDATE FROM REMOTE INSTANCE
DELETE RemoteServer.AdventureWorks2012.HumanResources.JobCandidate  
	WHERE JobCandidateID =13;
COMMIT TRANSACTION;
GO

--------------USING AN EXPLICIT TRANSACTION
BEGIN TRANSACTION;  
DELETE FROM HumanResources.JobCandidate  
    WHERE JobCandidateID = 13;  
COMMIT;  
--------------------------------ROLLING BACK TRANSACTION

CREATE TABLE ValueTable (id INT);  
BEGIN TRANSACTION;  
       INSERT INTO ValueTable VALUES(1);  
       INSERT INTO ValueTable VALUES(2);  
ROLLBACK

-----------------------------NAMING TRANSACTION
DECLARE @TranName varchar(20);
SELECT @TranName = 'My Transaction';

BEGIN TRANSACTION @TranName;
USE AdventureWorks2012;
DELETE FROM AdventureWorks2012.HumanResources.JobCandidate
	WHERE JobCandidateID =13;

	COMMIT TRANSACTION @TranName;
	GO	

-----------------Marking a transaction
BEGIN TRANSACTION CandidateDelete
	WITH MARK N'DELETING A JOB CANDIDATE';
	GO
	DELETE FROM AdventureWorks2012.HumanResources.JobCandidate
	WITH JobCandidateID =13;
	Go

------------------------------------
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

	SELECT * FROM HumanResources.JobCandidate
