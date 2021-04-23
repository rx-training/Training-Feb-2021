									---day 15 practices---
use AdventureWorks2012;
--

---implicit transaction:
SET IMPLICIT_TRANSACTIONS ON;
INSERT INTO ValueTable values(3);
INSERT INTO  ValueTable values(4);
Commit transaction;

SET IMPLICIT_TRANSACTIONS OFF

---EXPLICIT TRANSACTION OF 4 TYPES 

---begin Distributed Transaction:



BEGIN DISTRIBUTED TRANSACTION;  
-- Delete candidate from local instance.  
DELETE AdventureWorks2012.HumanResources.JobCandidate  
    WHERE JobCandidateID = 13;  
-- Delete candidate from remote instance.  
DELETE RemoteServer.AdventureWorks2012.HumanResources.JobCandidate  
    WHERE JobCandidateID = 13;  
COMMIT TRANSACTION;  
GO



----using an expicit transaction and begin transaction 
BEGIN TRANSACTION;  
DELETE FROM HumanResources.JobCandidate  
    WHERE JobCandidateID = 13;  
COMMIT;


---rolling back a transaction :
CREATE TABLE ValueTable (id INT);  
BEGIN TRANSACTION;  
       INSERT INTO ValueTable VALUES(1);  
       INSERT INTO ValueTable VALUES(2);  
ROLLBACK;


---another example of rollback transaction :
SELECT * FROM HumanResources.Employee

BEGIN TRANSACTION TR1 
BEGIN TRY 
UPDATE Person.ContactType 
SET Name='Head Department'
WHERE ContactTypeID = 1070
---statement 1 

UPDATE HumanResources.Employee SET NationalIDNumber = 32533
WHERE BusinessEntityId = 1 
COMMIT TRANSACTION TR1 

--STATREMENT 2 

SELECT 'TRANSACTION EXECUTED' 
END TRY 
BEGIN CATCH 
ROLLBACK TRANSACTION TR1 
SELECT 'TRANSACTION ROLLBACKED'
END CATCH 

SELECT * FROM Person.ContactType

---naming a transaction:
DECLARE @TranName VARCHAR(20);  
SELECT @TranName = 'MyTransaction';  
  
BEGIN TRANSACTION @TranName;  
DELETE FROM AdventureWorks2012.HumanResources.JobCandidate  
    WHERE JobCandidateID = 13;  
  
COMMIT TRANSACTION @TranName;  
GO


---marking a transaction:
BEGIN TRANSACTION CandidateDelete  
    WITH MARK N'Deleting a Job Candidate';  
GO  
USE AdventureWorks2012;  
GO  
DELETE FROM AdventureWorks2012.HumanResources.JobCandidate  
    WHERE JobCandidateID = 13;  
GO  
COMMIT TRANSACTION CandidateDelete;  
GO

select * from HumanResources.Employee;

--Implementing Isolation Level:
SET TRANSACTION ISOLATION LEVEL
READ COMMITTED
BEGIN TRANSACTION TR1 
BEGIN TRY 
UPDATE Person.ContactType 
SET Name='Head Department'
WHERE ContactTypeID = 1070
---statement 1 

UPDATE HumanResources.Employee SET NationalIDNumber = 32533
WHERE BusinessEntityId = 1 
COMMIT TRANSACTION TR1 

--STATEMENT 2 

SELECT 'TRANSACTION EXECUTED' 
END TRY 
BEGIN CATCH 
ROLLBACK TRANSACTION TR1 
SELECT 'TRANSACTION ROLLBACKED'
END CATCH 

--COMMIT TRANSACTION :
BEGIN TRANSACTION;   
DELETE FROM HumanResources.JobCandidate  
    WHERE JobCandidateID = 13;   
COMMIT TRANSACTION;

