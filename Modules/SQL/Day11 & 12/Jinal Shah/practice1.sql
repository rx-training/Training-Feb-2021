

	CREATE PROCEDURE prcGetEmployeeDetail @EmpId int, @DepName char(50) OUTPUT, @ShiftId int OUTPUT
	AS
	BEGIN
		IF EXISTS(SELECT * FROM HumanResources.Employee WHERE BusinessEntityID = @EmpId)
		BEGIN 
			SELECT @DepName = d.Name , @ShiftId = h.ShiftID
			FROM HumanResources.Department D JOIN HumanResources.EmployeeDepartmentHistory H
			ON d.DepartmentID = h.DepartmentID
			WHERE BusinessEntityID =@EmpId AND h.EndDate IS NULL
		RETURN 0
	END
	END

	------EXECUTE--------

	EXEC prcGetEmployeeDetail 10;  
	GO

	-------calls procedure from another procedure-----------

	CREATE PROCEDURE prcDisplayEmployeeStatus @EmpId int
	AS 
	BEGIN
	DECLARE @DepName char(50), @ShiftId int, @ReturnValue int 
	EXEC @ReturnValue = prcGetEmployeeDetail @EmpID ,@DepName OUTPUT, @ShiftId OUTPUT
	IF(@ReturnValue = 0)
	BEGIN
	PRINT 'THE DETAILS OF AN EMPLOYEE WITH ID : '+ CONVERT(CHAR(10),@EmpId)
	PRINT 'DEPARTMENT NAME : '+ @DepName
	PRINT 'SHIFT ID : ' +CONVERT(CHAR(1),@ShiftId)
	SELECT JobTitle FROM HumanResources.Employee
	WHERE BusinessEntityID = @EmpId
	END
	ELSE
	PRINT 'NO RECORDS FOUND'
	END

	EXEC prcDisplayEmployeeStatus 10;  
	GO

	EXEC prcDisplayEmployeeStatus 6;  
	GO


