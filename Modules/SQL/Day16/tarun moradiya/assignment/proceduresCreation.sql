USE RxTraining
GO

----------------------------PROCEDURES--------------------------------

------TO ADD NEW USER

CREATE PROCEDURE Employees.uspAddUser
    @pUserName NVARCHAR(50), 
    @pPassword NVARCHAR(50),
    @pFirstName NVARCHAR(40), 
    @pLastName NVARCHAR(40),
	@pEmail NVARCHAR(40),
	@pPositionName NVARCHAR(40),
	@pDepartmentName NVARCHAR(40),
    @responseMessage NVARCHAR(250) OUTPUT
AS
BEGIN
    SET NOCOUNT ON

	DECLARE @pDepartmentID int
		, @pPositionID int
		, @EmpID int

	DECLARE @salt UNIQUEIDENTIFIER=NEWID()
    BEGIN TRY

		SELECT @pDepartmentID = DepartmentID
		FROM Departments.Departments
		WHERE DepartmentName = @pDepartmentName

		SELECT @pPositionID = PositionID
		FROM Employees.Positions
		WHERE PositionName = @pPositionName

		INSERT INTO Employees.Employees (FirstName, LastName, Email, DepartmentID, PositionID)
		VALUES (@pFirstName, @pLastName, @pEmail, @pDepartmentID, @pPositionID)

		SET @EmpID = SCOPE_IDENTITY()

        INSERT INTO Employees.Users (EmployeeID, UserName, PasswordHash, Salt)
        VALUES(@EmpID, @pUserName, HASHBYTES('SHA2_512', @pPassword+CAST(@salt AS NVARCHAR(36))), @salt)

       SET @responseMessage='Success'

    END TRY
    BEGIN CATCH
        SET @responseMessage=ERROR_MESSAGE() 
    END CATCH

END
GO

-----------------ADD TECHNOLOGIES

CREATE PROCEDURE Technologies.uspAddTechnology
	@pTechnologyName nvarchar(40),
	@pTechnologyType nvarchar(40),
	@responseMessage NVARCHAR(250) OUTPUT
AS
BEGIN
	BEGIN TRY
		
		DECLARE @TechnologyTypeID int

		SELECT @TechnologyTypeID = TechnologyTypeID
		FROM Technologies.TechnologyTypes
		WHERE TechnologyType = @pTechnologyType

		INSERT INTO Technologies.Technologies (TechnologyName, TechnologyTypeID)
		VALUES (@pTechnologyName, @TechnologyTypeID)
		SET @responseMessage='Success'

    END TRY

    BEGIN CATCH
        SET @responseMessage=ERROR_MESSAGE() 
    END CATCH
END
GO

---------------ADD DEPARTMENT VISE TECHNOLOGY

CREATE PROCEDURE Departments.uspAddDepartmentTechnology
	@pTechnologyName nvarchar(40),
	@pDepartmentName nvarchar(40),
	@responseMessage NVARCHAR(250) OUTPUT
AS
BEGIN
	BEGIN TRY
		
		DECLARE @DepartmentID int
			, @TechnologyID int

		SELECT @DepartmentID = DepartmentID
		FROM Departments.Departments
		WHERE DepartmentName = @pDepartmentName

		SELECT @TechnologyID = TechnologyID
		FROM Technologies.Technologies
		WHERE TechnologyName = @pTechnologyName

		INSERT INTO Departments.DepartmentTechnologies(DepartmentID, TechnologyID)
		VALUES (@DepartmentID, @TechnologyID)

		SET @responseMessage='Success'

    END TRY

    BEGIN CATCH
        SET @responseMessage=ERROR_MESSAGE() 
    END CATCH
END
GO


------------ADD CONTENTS WITH TOPICS

CREATE PROCEDURE Departments.uspAddContents
	@pTopic nvarchar(40),
	@pContentType nvarchar(40),
	@pContentName nvarchar(40),
	@pContentUrl nvarchar(MAX),
	@pTechnologyName nvarchar(40),
	@responseMessage NVARCHAR(250) OUTPUT
AS
BEGIN
	BEGIN TRY
		
		DECLARE @TopicID int
			, @ContentTypeID int
			, @TechnologyID int

		SELECT @TechnologyID = TechnologyID
		FROM Technologies.Technologies
		WHERE TechnologyName = @pTechnologyName

		SELECT @ContentTypeID = ContentTypeID
		FROM Contents.ContentTypes
		WHERE ContentType = @pContentType

		IF NOT EXISTS (SELECT TopicName FROM Contents.Topics WHERE TopicName = @pTopic)
		BEGIN
			INSERT INTO Contents.Topics (TopicName, ContentTypeID, TechnologyID)
			VALUES (@pTopic, @ContentTypeID, @TechnologyID)

			SET @TopicID = SCOPE_IDENTITY()
		END
		ELSE 
		BEGIN
			SELECT @TopicID = TopicID
			FROM Contents.Topics
			WHERE TopicName = @pTopic
		END

		INSERT INTO Contents.Contents(ContentUrl, ContentName, TopicID)
		VALUES (@pContentUrl, @pContentName, @TopicID)

		SET @responseMessage='Success'

    END TRY

    BEGIN CATCH
        SET @responseMessage=ERROR_MESSAGE() 
    END CATCH
END
GO

CREATE PROCEDURE Employees.udpCheckPassword
	@pUserName NVARCHAR(50),
	@pPassword NVARCHAR(50),
	@pOut NVARCHAR(10) OUTPUT,
	@responseMessage NVARCHAR(50) OUTPUT	
AS
BEGIN
	BEGIN TRY
		DECLARE @Password binary(64)
			, @salt nvarchar(36)
			, @CheckPass binary(64)

		SELECT @Password = PasswordHash, @salt = Salt FROM Employees.Users WHERE UserName = @pUserName

		SET @CheckPass = HASHBYTES('SHA2_512', @pPassword+@salt)

		IF @CheckPass = @Password
			SET @pOut = 'Valid'
		ELSE
			SET @pOut = 'Invalid'
			

		SET @responseMessage = 'Success'
	END TRY

	BEGIN CATCH
		SET @responseMessage = ERROR_MESSAGE()
	END CATCH
END
GO

