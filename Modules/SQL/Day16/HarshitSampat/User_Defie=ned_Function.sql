-----------------------------------USER DEFINED FUNCTION EXTRA PPT


CREATE FUNCTION HUMANRESOURCES.MONTHLLYSAL
(@PayRate FLOAT)
RETURNS FLOAT
AS
BEGIN 
	RETURN(@PayRate*8 * 30)
	END

	Declare @PayRate FLOAT
	SET @PayRate = HumanResources.MONTHLYSAL(12.25)  
	SELECT @PayRate AS MonthlySalary
	Print @PayRate

	------------------Table valued  ffunction
	CREATE FUNCTION fx_Department_Gname(@GrName Nvarchar(20))
	RETURNS table
	AS
	RETURN(SELECT * FROM HumanResources.Department WHERE GroupName =@GrName)
	GO

	SELECT * FROM fx_Department_Gname ('MANUFACTURING')

	------------------------------MultiStatement table Valued Function
	CREATE FUNCTION PayRate(@rate money) 
	RETURNS @table TABLE
	(EmployeeID INT NOT NULL,
	RateChangedate datetime Not	Null,
	Rate MONEY NOT NULL,
	PayFrequency tinyint NOT NULL,
	ModifiedDate datetime NOT NULL
	)
	AS
	BEGIN
		INSERT @table
		SELECT * FROM HumanResources.EmployeePayHistory
		WHERE Rate > @rate
	RETURN
	END

	SElECT * FROM PayRate(45)

--------------------------------TRANSACTION
Select * FROM HumanResources.Employee
BEGIN TRANSACTION
	UPDATE HumanResources.Employee
	SET SickLeaveHours = 50 WHERE  SickLeaveHours =69
	COMMIT TRANSACTION
	

