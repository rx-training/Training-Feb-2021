USE TutorialDB



SELECT * FROM Emp

CREATE TABLE Emp
(
	Name NVARCHAR(20),
	Job NVARCHAR(20)
);

-- Implicit Transactions

SET IMPLICIT_TRANSACTIONS ON;

 INSERT INTO Emp VALUES('Jack','Marketing');
 INSERT INTO Emp VALUES('Robert','Finance');
COMMIT TRANSACTION;

SET IMPLICIT_TRANSACTIONS OFF;


-- Explicit Transaction
 
BEGIN TRAN myTran
 UPDATE Emp
 SET Job = 'Sales'
 WHERE Name = 'Jack'
COMMIT TRAN myTran

-- Transaction
USE AdventureWorks2012;

BEGIN TRANSACTION MyTransaction
USE AdventureWorks2012;
DELETE FROM HumanResources.JobCandidate
	WHERE JobCandidateID = 13
COMMIT TRANSACTION MyTransaction;
GO


-- Marking Transaction

BEGIN TRANSACTION CandidateDelete
	WITH MARK N'Deleting a Job Candidate';
GO
USE AdventureWorks2012;
GO
DELETE FROM AdventureWorks2012.HumanResources.JobCandidate
	WHERE JobCandidateID = 12;
GO
COMMIT TRANSACTION CandidateDelete
GO


-- Isolation Level
USE AdventureWorks2012


SET TRANSACTION ISOLATION LEVEL
READ COMMITTED
BEGIN TRANSACTION TR
BEGIN TRY
UPDATE Person.Contact
SET EmailAddress = 'joly@yahoo.com'
WHERE ContactID = 1070
UPDATE HumanResources.EmployeeAddress 
SET AddressID = 3253
COMMIT TRANSACTION TR
PRINT 'Transaction Executed'
END TRY
BEGIN CATCH
ROLLBACK TRANSACTION TR
PRINT 'Transaction Rollbacked'
END CATCH

-- 
BEGIN TRANSACTION;
DELETE FROM HumanResources.JobCandidate
	WHERE JobCandidateID = 13;
COMMIT TRANSACTION;

