USE RxTraining
GO

---------------------------INSERTING DATA--------------------------------------

INSERT INTO Departments.Departments (DepartmentName)
VALUES ('NodeJS')
	, ('DotNet')
	, ('PHP')
	, ('QA')
GO

INSERT INTO Contents.ContentTypes (ContentType)
VALUES ('Video')
	, ('PPT')
GO

INSERT INTO Employees.Positions (PositionName)
VALUES ('Trainee')
	, ('Trainer')
GO

INSERT INTO Technologies.TechnologyTypes (TechnologyType)
VALUES ('Common')
	, ('FrontEnd')
	, ('BackEnd')
GO

------------------USERS 

DECLARE @out nvarchar(50)

EXEC  Employees.uspAddUser
    @pUserName = 'TarunMoradiya', 
    @pPassword = 'tarun123',
    @pFirstName = 'Tarun', 
    @pLastName = 'Moradiya',
	@pEmail = 'tarun@gmail.com',
	@pPositionName = 'Trainee',
	@pDepartmentName = 'NodeJS',
    @responseMessage = @out  OUTPUT

PRINT @out
GO

DECLARE @out nvarchar(50)

EXEC  Employees.uspAddUser
    @pUserName = 'ParthShah', 
    @pPassword = 'parth123',
    @pFirstName = 'Parth', 
    @pLastName = 'Shah',
	@pEmail = 'parth@gmail.com',
	@pPositionName = 'Trainee',
	@pDepartmentName = 'DotNet',
    @responseMessage = @out  OUTPUT

PRINT @out
GO

DECLARE @out nvarchar(50)

EXEC  Employees.uspAddUser
    @pUserName = 'DevangDabhi', 
    @pPassword = 'devang123',
    @pFirstName = 'Devang', 
    @pLastName = 'Dabhi',
	@pEmail = 'devang@gmail.com',
	@pPositionName = 'Trainee',
	@pDepartmentName = 'PHP',
    @responseMessage = @out  OUTPUT

PRINT @out
GO

DECLARE @out nvarchar(50)

EXEC  Employees.uspAddUser
    @pUserName = 'VarshaOberoy', 
    @pPassword = 'varsha123',
    @pFirstName = 'Varsha', 
    @pLastName = 'Oberoy',
	@pEmail = 'oberoy@gmail.com',
	@pPositionName = 'Trainer',
	@pDepartmentName = 'DotNet',
    @responseMessage = @out  OUTPUT

PRINT @out
GO
--------------TECHNOLOGIES

DECLARE @out nvarchar(50)

EXEC  Technologies.uspAddTechnology
	@pTechnologyName = 'HTML',
	@pTechnologyType = 'Common',
	@responseMessage = @out  OUTPUT

PRINT @out
GO

DECLARE @out nvarchar(50)

EXEC  Technologies.uspAddTechnology
	@pTechnologyName = 'CSS',
	@pTechnologyType = 'Common',
	@responseMessage = @out  OUTPUT

PRINT @out
GO

DECLARE @out nvarchar(50)

EXEC  Technologies.uspAddTechnology
	@pTechnologyName = 'Bootstrap',
	@pTechnologyType = 'Common',
	@responseMessage = @out  OUTPUT

PRINT @out
GO

DECLARE @out nvarchar(50)

EXEC  Technologies.uspAddTechnology
	@pTechnologyName = 'SQL',
	@pTechnologyType = 'Common',
	@responseMessage = @out  OUTPUT

PRINT @out
GO

DECLARE @out nvarchar(50)

EXEC  Technologies.uspAddTechnology
	@pTechnologyName = 'React',
	@pTechnologyType = 'FrontEnd',
	@responseMessage = @out  OUTPUT

PRINT @out
GO

DECLARE @out nvarchar(50)

EXEC  Technologies.uspAddTechnology
	@pTechnologyName = 'TypeScript',
	@pTechnologyType = 'FrontEnd',
	@responseMessage = @out  OUTPUT

PRINT @out
GO

DECLARE @out nvarchar(50)

EXEC  Technologies.uspAddTechnology
	@pTechnologyName = 'Angular',
	@pTechnologyType = 'FrontEnd',
	@responseMessage = @out  OUTPUT

PRINT @out
GO

DECLARE @out nvarchar(50)

EXEC  Technologies.uspAddTechnology
	@pTechnologyName = 'Node',
	@pTechnologyType = 'BackEnd',
	@responseMessage = @out  OUTPUT

PRINT @out
GO

DECLARE @out nvarchar(50)

EXEC  Technologies.uspAddTechnology
	@pTechnologyName = 'DotNetCore',
	@pTechnologyType = 'BackEnd',
	@responseMessage = @out  OUTPUT

PRINT @out
GO

--------------------- ADD DEPARTMENT VISE TECHNOLOGY

DECLARE @out nvarchar(50)

EXEC Departments.uspAddDepartmentTechnology
	@pTechnologyName = 'React',
	@pDepartmentName = 'NodeJS',
	@responseMessage = @out  OUTPUT

PRINT @out
GO

DECLARE @out nvarchar(50)

EXEC Departments.uspAddDepartmentTechnology
	@pTechnologyName = 'TypeScript',
	@pDepartmentName = 'NodeJS',
	@responseMessage = @out  OUTPUT

PRINT @out
GO

DECLARE @out nvarchar(50)

EXEC Departments.uspAddDepartmentTechnology
	@pTechnologyName = 'TypeScript',
	@pDepartmentName = 'DotNet',
	@responseMessage = @out  OUTPUT

PRINT @out
GO

DECLARE @out nvarchar(50)

EXEC Departments.uspAddDepartmentTechnology
	@pTechnologyName = 'Angular',
	@pDepartmentName = 'DotNet',
	@responseMessage = @out  OUTPUT

PRINT @out
GO

DECLARE @out nvarchar(50)

EXEC Departments.uspAddDepartmentTechnology
	@pTechnologyName = 'Node',
	@pDepartmentName = 'NodeJS',
	@responseMessage = @out  OUTPUT

PRINT @out
GO

DECLARE @out nvarchar(50)

EXEC Departments.uspAddDepartmentTechnology
	@pTechnologyName = 'DotNetCore',
	@pDepartmentName = 'DotNet',
	@responseMessage = @out  OUTPUT

PRINT @out
GO

------------ADD CONTENTS WITH TOPICS

DECLARE @out nvarchar(50)

EXEC Departments.uspAddContents
	@pTopic = 'Introduction',
	@pContentType = 'Video',
	@pContentName = 'intro',
	@pContentUrl = 'https://tutorials.rxtrainees.radixweb.net/wp-content/uploads/2021/01/01_01-Introduction.mp4',
	@pTechnologyName = 'HTML',
	@responseMessage = @out  OUTPUT

PRINT @out
GO

DECLARE @out nvarchar(50)

EXEC Departments.uspAddContents
	@pTopic = 'Semantic Markup',
	@pContentType = 'Video',
	@pContentName = 'intro',
	@pContentUrl = 'https://tutorials.rxtrainees.radixweb.net/wp-content/uploads/2021/01/02_01-Introduction-4.mp4',
	@pTechnologyName = 'HTML',
	@responseMessage = @out  OUTPUT

PRINT @out
GO

DECLARE @out nvarchar(50)

EXEC Departments.uspAddContents
	@pTopic = 'Semantic Markup',
	@pContentType = 'Video',
	@pContentName = 'Structural Emlements',
	@pContentUrl = 'https://tutorials.rxtrainees.radixweb.net/wp-content/uploads/2021/01/02_02-Structural_Elements-2.mp4',
	@pTechnologyName = 'HTML',
	@responseMessage = @out  OUTPUT

PRINT @out
GO

SELECT * FROM Contents.Contents

SELECT * FROM Contents.ContentTypes

SELECT * FROM Contents.Topics

SELECT * FROM Departments.Departments

SELECT * FROM Departments.DepartmentTechnologies

SELECT * FROM Employees.Employees

SELECT * FROM Employees.Positions

SELECT * FROM Employees.Users

SELECT * FROM Technologies.Technologies

SELECT * FROM Technologies.TechnologyTypes