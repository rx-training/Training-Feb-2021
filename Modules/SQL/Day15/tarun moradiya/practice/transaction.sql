-- TRANSATIONS

--AUTOCOMMIT TRANSACTION - EACH INDIVIDUAL STATEMENTS - DEFAULT 

-- IMPLICIT TRANSACTION

SET IMPLICIT_TRANSACTIONS ON

INSERT INTO Students(StudentID, StudentName)
VALUES(1, 'Tarun')

INSERT INTO Students(StudentID, StudentName)
VALUES(2, 'Meet')

COMMIT TRANSACTION

SET IMPLICIT_TRANSACTIONS OFF

-- EXPLICIT TRANSACTION

/*
BEGIN { TRAN | TRANSACTION }   
    [ { transaction_name | @tran_name_variable }  
      [ WITH MARK [ 'description' ] ]  
    ]  
[ ; ]



COMMIT [ { TRAN | TRANSACTION }  [ transaction_name | @tran_name_variable ] ] [ WITH ( DELAYED_DURABILITY = { OFF | ON } ) ]  
[ ; ]

COMMIT [ WORK ]  
[ ; ]

------ SAVEPOINT --------


SAVE { TRAN | TRANSACTION } { savepoint_name | @savepoint_variable }  
[ ; ]

*/

BEGIN TRAN myTran

	UPDATE Students
	SET TotalFees = TotalFees + 5000
	WHERE StudentID = 1

	UPDATE Students
	SET TotalFees = TotalFees + 10000
	WHERE StudentID = 2

COMMIT TRAN myTran


BEGIN TRANSACTION;  
DELETE FROM HumanResources.JobCandidate  
    WHERE JobCandidateID = 13;  
COMMIT;

-- ROLLBACK

/*
ROLLBACK [TRAN[SACTION]] [transaction_name | @transaction_variable | savepoint_name | @savpoint_variable]

ROLLBACK { TRAN | TRANSACTION }   
     [ transaction_name | @tran_name_variable  
     | savepoint_name | @savepoint_variable ]   
[ ; ]

ROLLBACK [ WORK ]  
[ ; ]
*/

USE AdventureWorks2012
GO

BEGIN TRANSACTION TR1

	BEGIN TRY
		
		UPDATE Person.EmailAddress
		SET EmailAddress = 'ken1@adventure-works.com'
		WHERE EmailAddressID = 1

		UPDATE HumanResources.Employee
		SET MaritalStatus = 'M'
		WHERE BusinessEntityID = 1

		COMMIT TRANSACTION TR1

		SELECT 'TRANSACTION EXECUTED'

	END TRY

	BEGIN CATCH

		ROLLBACK TRANSACTION TR1

		SELECT 'TRANSACTION ROLLBACKED'
	
	END CATCH


CREATE TABLE ValueTable (id INT);  
BEGIN TRANSACTION;  
       INSERT INTO ValueTable VALUES(1);  
       INSERT INTO ValueTable VALUES(2);  
ROLLBACK;

--NAMING TRANSACTION

DECLARE @TranName VARCHAR(20);  
SELECT @TranName = 'MyTransaction';  
  
BEGIN TRANSACTION @TranName;  
DELETE FROM AdventureWorks2012.HumanResources.JobCandidate  
    WHERE JobCandidateID = 13;  
  
COMMIT TRANSACTION @TranName;  
GO

--MARKING TRANSACTION

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


-- ISOLATION LEVEL

/*
READ COMMITTED 
READ UNCOMMITTED
REPEATABLE READ
SNAPSHOT ISOLATION
SERIALIZABLE
*/

SET TRANSACTION ISOLATION LEVEL
READ COMMITTED

BEGIN TRANSACTION TR
	
	BEGIN TRY

		UPDATE Person.EmailAddress
		SET EmailAddress = 'ken1@adventure-works.com'
		WHERE EmailAddressID = 1

		UPDATE HumanResources.Employee
		SET MaritalStatus = 'M'
		WHERE BusinessEntityID = 1

		COMMIT TRANSACTION TR

		PRINT 'TRANSACTION EXECUTED'

	END TRY

	BEGIN CATCH
		
		ROLLBACK TRANSACTION TR

		PRINT 'TRANSACTION ROLLBACKED'
	
	END CATCH




-- DISTRIBUTED TRANSACTION

USE AdventureWorks2012;  
GO  
BEGIN DISTRIBUTED TRANSACTION;  
-- Delete candidate from local instance.  
DELETE AdventureWorks2012.HumanResources.JobCandidate  
    WHERE JobCandidateID = 13;  
-- Delete candidate from remote instance.  
DELETE RemoteServer.AdventureWorks2012.HumanResources.JobCandidate  
    WHERE JobCandidateID = 13;  
COMMIT TRANSACTION;  
GO

