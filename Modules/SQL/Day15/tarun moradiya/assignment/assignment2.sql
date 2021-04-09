/*
At AdventureWorks, Inc., an employee named Sidney Higa, who is currently working as Production Technician – WC10 has been promoted as Marketing Manager. The employee ID of Sidney is 13. As a database developer, you need to update his records. This involves updating the title in the Employee table and updating the department history details.
	You need to ensure that all the changes take effect. In addition, you need to ensure that no other transaction should be able to view the data being modified by the current transaction.
*/


BEGIN TRAN ChangeDepartment

	BEGIN TRY

		DECLARE @businessEntityId int
			, @departmentId int
			, @shiftID int

		SELECT @businessEntityId = E.BusinessEntityID 
		FROM Person.Person P JOIN HumanResources.Employee E
		ON E.BusinessEntityID = P.BusinessEntityID
		WHERE P.FirstName = 'Sidney' AND P.LastName = 'Higa'
		AND E.JobTitle = 'Production Technician - WC10'

		SELECT @departmentId = DepartmentID 
		FROM HumanResources.Department
		WHERE Name LIKE '%Marketing%'

		SELECT @shiftID = ShiftID FROM HumanResources.EmployeeDepartmentHistory 
		WHERE BusinessEntityID = @businessEntityId


		UPDATE HumanResources.Employee
		SET JobTitle = 'Marketing Manager'

		UPDATE HumanResources.EmployeeDepartmentHistory
		SET EndDate = GETDATE()
			, ModifiedDate = GETDATE()
		WHERE BusinessEntityID = @businessEntityId

		INSERT INTO HumanResources.EmployeeDepartmentHistory 
		(BusinessEntityID, DepartmentID, ShiftID, StartDate, ModifiedDate)
		VALUES (@businessEntityId, @departmentId, @shiftID, GETDATE(), GETDATE())

		PRINT 'TRANSACTION SUCCESSFULL'

		SELECT * FROM HumanResources.Employee
		WHERE BusinessEntityID = @businessEntityId

		SELECT * FROM HumanResources.EmployeeDepartmentHistory 
		WHERE BusinessEntityID = @businessEntityId

		COMMIT TRAN ChangeDepartment

	END TRY

	BEGIN CATCH
		
		PRINT 'TRANSACTION FAILLED'

		ROLLBACK TRAN ChangeDepartment

	END CATCH