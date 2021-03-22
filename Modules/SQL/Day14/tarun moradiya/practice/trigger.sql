---TRIGGER

USE AdventureWorks2012
GO

--SYNTAX
/*
CREATE TRIGGER trigger_name
ON { OBJECT NAME }
{ FOR | AFTER | INSTEAD OF } { event_type [
, ..n] |
DDL_DATABASE_LEVEL_EVENTS}
{AS 
{sql_statements [ ..n ]
}
*/

----CREATE TRIGGER

CREATE TRIGGER trgInsertShift
ON  HumanResources.Shift
FOR INSERT
AS
	DECLARE @ModifiedDate datetime
	SELECT @ModifiedDate = ModifiedDate FROM inserted
	IF ( @ModifiedDate != GETDATE() )
	BEGIN
		PRINT 'The Modified Date Should Be Current Date. Hence, Can Not Insert'
		ROLLBACK TRANSACTION
	END
GO
	
INSERT INTO HumanResources.Shift (Name, StartTime, EndTime, ModifiedDate)
VALUES ('Afternoon', '15:00:00', '15:00:00', '2008-04-30 00:00:00.000')
GO

---DELETE

CREATE TRIGGER trgDeleteDepartment
ON HumanResources.Department
FOR DELETE
AS
PRINT 'Deletion Of Department Is Not Allowed'
ROLLBACK TRANSACTION
RETURN
GO

---UPDATE

CREATE TRIGGER trgUpdateEmployeePayHistory
ON HumanResources.EmployeePayHistory
FOR UPDATE
AS
	IF UPDATE(Rate) 
	BEGIN
		DECLARE @AvgRate float
		SELECT @AvgRate = AVG(Rate)
		FROM HumanResources.EmployeePayHistory
		IF @AvgRate > 20
		BEGIN
			PRINT 'The avrage rate can not be more then 20'
			ROLLBACK TRANSACTION
		END
	END
GO

--- AFTER TRIGGER

CREATE TRIGGER trgDeletShift
ON HumanResources.Shift
AFTER DELETE
AS 
PRINT 'Deletion successfull'
GO

--- INSTEAD OF TRIGGER

CREATE TRIGGER trgDelete
ON HumanResources.Shift
INSTEAD OF DELETE
AS
PRINT 'Project Record can not be deleted'
GO

--DDL TRIGGER

CREATE TRIGGER safety
ON DATABASE
FOR DROP_TABLE, ALTER_TABLE
AS
PRINT 'You must desable trigger "safety" to drop or alter tables'
ROLLBACK
GO

--- ALTER TRIGGER

/* 
ALTER TRIGGER trigger_name
{ FOR | AFTER } { event_type [ ,..n] |
DDL_DATABASE_EVENTS}
{AS
{ sql_statements [ ..n] }
}
*/

ALTER TRIGGER HumanResources.trgInsertShift
ON HumanResources.Shift
FOR INSERT
AS
	DECLARE @ModifiedDate datetime
	SELECT @ModifiedDate = ModifiedDate FROM inserted
	IF ( @ModifiedDate != GETDATE() )
	BEGIN
		RAISERROR ('The Modified Date Should Be Current Date. Hence, Can Not Insert', 10, 1)
		ROLLBACK TRANSACTION
	END
GO

---DROP TRIGGER

DROP TRIGGER HumanResources.trgInsertShift


