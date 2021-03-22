			--------------AdventureWorks2012---------------

	-------CREATION OF TRIGGER-------

	CREATE TRIGGER trgInsertShift ON HumanResources.Shift
	FOR INSERT 
	AS
		DECLARE @ModifiedDate datetime
		SELECT @ModifiedDate = ModifiedDate FROM Inserted
		IF (@ModifiedDate != GETDATE())
		BEGIN
			PRINT 'The modified date should be the current date. Hence, can not insert.'
			ROLLBACK TRANSACTION
		END


	-----------CREATING A DELETE TRIGGER-----------

	CREATE TRIGGER trgDeleteDepartment ON HumanResources.Department
	FOR DELETE
	AS
	PRINT  'Deletion of department is not allowed'
	ROLLBACK TRANSACTION
	RETURN


	-----------CREATING AN UPDATE TRIGGER-----------

	CREATE TRIGGER trgUpdateEmployeePayHistory ON HumanResouces.EmployeePayHistory
	FOR UPDATE
	AS
	IF UPDATE(Rate)
	BEGIN
	DECLARE @AvgRate float
	SELECT @AvgRate = AVG(Rate)
	FROM HumanResouces.EmployeePayHistory
	IF(@AvgRate > 20)
	BEGIN 
	PRINT 'The average value of rate can not be more than 20'
	ROLLBACK TRANSACTION
	END
	END


	---------CREATING AN AFTER TRIGGER-----------

	CREATE TRIGGER trgDeleteShift ON HumanResources.Shift
	AFTER DELETE
	AS
	PRINT 'Deletion successful'


	---------CREATING AN INSTEAD OF TRIGGER-----------

	CREATE TRIGGER trgDelete ON HumanResources.Project
	INSTEAD OF DELETE
	AS
	PRINT 'Project records can not be deleted'


	----------CREATING A DDL TRIGGER------------

	CREATE TRIGGER safety
	ON DATABASE
	FOR DROP_TABLE, ALTER_TABLE
	AS
	PRINT 'You must disable trigger "safety" to drop or alter tables!'
	ROLLBACK

	DROP TRIGGER safety