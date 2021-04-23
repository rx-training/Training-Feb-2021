
						---------- AdventureWorks2012 ------------

	------------- BEGIN DISTRIBUTED TRANSACTION ---------------

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

	-------------- Using an explicit transaction -----------------

	SELECT * FROM HumanResources.JobCandidate  

	BEGIN TRANSACTION;  
	DELETE FROM HumanResources.JobCandidate  
		WHERE JobCandidateID = 13;  
	COMMIT;

	------------ Naming a transaction -------------

	DECLARE @TranName VARCHAR(20);  
	SELECT @TranName = 'MyTransaction';  
  
	BEGIN TRANSACTION @TranName;  
	USE AdventureWorks2012;  
	DELETE FROM AdventureWorks2012.HumanResources.JobCandidate  
		WHERE JobCandidateID = 13;  
  
	COMMIT TRANSACTION @TranName;  
	GO

	------------- Marking a transaction ----------------

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


	--------------------ROLLBACK-------------------

 /* A ROLLBACK TRANSACTION statement does not produce any messages to the user. 
	If warnings are needed in stored procedures or triggers, use the RAISERROR or PRINT statements. 
	RAISERROR is the preferred statement for indicating errors. */