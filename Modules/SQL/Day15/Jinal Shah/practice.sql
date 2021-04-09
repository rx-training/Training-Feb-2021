				--(ppt practice)
			------------- Transaction Example ------------

	BEGIN TRANSACTION TR1
	BEGIN TRY
	UPDATE Person.Contact 
	SET EmailAddress = 'jolyn@yahoo.com'
	WHERE ContactID = 1070
	---statement 1
	UPDATE HumanResources.EmployeeAddress SET AddressID = 32533
	WHERE EmployeeID = 1
	COMMIT TRANSACTION TR1
	---statement 2
	SELECT 'TRANSACTION EXECUTED'
	END TRY
	BEGIN CATCH
		ROLLBACK TRANSACTION TR1
		SELECT 'Transaction Rollbacked'
	END CATCH


	---------- IMPLEMENT ISOLATION LEVEL ------------

	SET TRANSACTION ISOLATION LEVEL
	READ COMMITED
	BEGIN TRANSACTION TR
	BEGIN TRY
		UPDATE Person.Contact 
	SET EmailAddress = 'jolyn@yahoo.com'
	WHERE ContactID = 1070
	UPDATE HumanResources.EmployeeAddress SET AddressID = 32533
	WHERE EmployeeID = 1
	COMMIT TRANSACTION TR
	SELECT 'TRANSACTION EXECUTED'
	END TRY
	BEGIN CATCH
		ROLLBACK TRANSACTION TR
		SELECT 'Transaction Rollbacked'
	END CATCH
