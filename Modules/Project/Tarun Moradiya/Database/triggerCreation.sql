USE RxTraining
GO

------------------------TRIGGERS --------------------------------

----------WHEN COMMON TYPE TECHNOLOGY IS ADDED

CREATE TRIGGER Technologies.trgInsertCommonTechnology
ON Technologies.Technologies
FOR INSERT
AS
	DECLARE @TechnologyID int
		, @TechnologyName nvarchar(40)
		, @TechnologyTypeID int
		, @TechnologyTypeIDCheck int

	SELECT @TechnologyID = TechnologyID
		, @TechnologyName = TechnologyName
		, @TechnologyTypeID = TechnologyTypeID 
	FROM inserted

	SELECT @TechnologyTypeIDCheck = TechnologyTypeID
	FROM Technologies.TechnologyTypes
	WHERE TechnologyType = 'Common'

	IF @TechnologyTypeIDCheck = @TechnologyTypeID
	BEGIN
		
		DECLARE @Dept int;

		DECLARE DepartmentTechCursor CURSOR FOR
		SELECT DepartmentID 
		FROM Departments.Departments

		OPEN DepartmentTechCursor;

		FETCH NEXT FROM DepartmentTechCursor INTO @Dept;

		WHILE @@FETCH_STATUS = 0
			BEGIN
		
			INSERT INTO Departments.DepartmentTechnologies (DepartmentID, TechnologyID)
			VALUES(@Dept, @TechnologyID)
		
			FETCH NEXT FROM DepartmentTechCursor INTO @Dept;	
		END

		CLOSE DepartmentTechCursor;
		DEALLOCATE DepartmentTechCursor;

	END
GO