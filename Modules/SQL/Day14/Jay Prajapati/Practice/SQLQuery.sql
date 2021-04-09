USE AdventureWorks2012;


--- Insert Trigger
CREATE TRIGGER trgInsertShift
ON HumanResources.Shift
FOR INSERT
AS 
 DECLARE @ModifiedDate datetime
 SELECT @ModifiedDate = ModifiedDate FROM Inserted
 IF (@ModifiedDate != getdate())
 BEGIN
	PRINT 'The modified date should be the current date. Hence, Cannot insert.'
	ROLLBACK TRANSACTION
 END

 SELECT * FROM HumanResources.Shift
 INSERT INTO HumanResources.Shift
 VALUES('Afternoon','12:00:00.0000000','15:00:00.0000000','04-03-1998')

 -- Alter Trigger

ALTER TRIGGER HumanResources.trgInsertShift
ON HumanResources.Shift
FOR INSERT
AS
DECLARE @ModifiedDate datetime
SELECT @ModifiedDate = ModifiedDate 
FROM INSERTED 
IF(@ModifiedDate != getdate())
BEGIN
 RAISERROR ('The modified date is not the current
 date. the transction cannot be processed.',10,1)
 ROLLBACK TRANSACTION
 END
RETURN




---DELETE Trigger

 CREATE TRIGGER trgDeleteDepartment
 ON HumanResources.Department
 FOR DELETE
 AS
 PRINT 'Deletion of Department is not allowed'
 ROLLBACK TRANSACTION
 RETURN


 DELETE  FROM HumanResources.Department 
	WHERE DepartmentID = 11;


-- update trigger
SELECT * FROM HumanResources.EmployeePayHistory

CREATE TRIGGER trgUpdateEmployeePayHistory
ON HumanResources.EmployeePayHistory
FOR UPDATE
AS
IF UPDATE(Rate)
BEGIN
DECLARE @AvgRate FLOAT
SELECT @AvgRate = AVG(Rate)
FROM HumanResources.EmployeePayHistory
IF(@AvgRate > 20)
	BEGIN
	PRINT 'The average value of rate cannot be more than 20'
	ROLLBACK TRANSACTION
	END
END

UPDATE HumanResources.EmployeePayHistory
SET Rate = 50
WHERE PayFrequency = 1


-- DELETE TRIGGER

CREATE TRIGGER trgDeleteShit 
ON HumanResources.Shift
AFTER DELETE
AS
PRINT 'Delete Successful'

SELECT * FROM HumanResources.Shift

DELETE FROM HumanResources.Shift WHERE ShiftID = 3


-- Data Definition Language Trigger

CREATE TRIGGER safety
ON DATABASE
FOR DROP_TABLE, ALTER_TABLE
AS
PRINT 'You must disable Trigger "safety" to drop or alter tables!'
ROLLBACK

DROP Table HumanResources.JobCandidate




