USE RxTraining
GO

----------------------------------- VIEWS ---------------------------------------

CREATE VIEW Employees.vEmployees
AS
	SELECT E.EmployeeID
		, E.FirstName
		, E.LastName
		, E.Email
		, P.PositionName
		, U.UserName
		, U.PasswordHash
		, U.Salt
		, D.DepartmentName
	FROM Employees.Employees E JOIN Employees.Users U
	ON E.EmployeeID = U.EmployeeID
	JOIN Employees.Positions P
	ON P.PositionID = E.PositionID
	JOIN Departments.Departments D
	ON D.DepartmentID = E.DepartmentID
GO


CREATE VIEW Technologies.vTechnologies
AS
	SELECT T.TechnologyID
		, T.TechnologyName
		, TP.TechnologyType
		, D.DepartmentName
	FROM Technologies.Technologies T JOIN Technologies.TechnologyTypes TP
	ON T.TechnologyTypeID = TP.TechnologyTypeID
	JOIN Departments.DepartmentTechnologies DT
	ON DT.TechnologyID = T.TechnologyID
	JOIN Departments.Departments D
	ON DT.DepartmentID = D.DepartmentID
GO


CREATE VIEW Contents.vContents
AS
	SELECT T.TopicID 
		, T.TopicName
		, CT.ContentType
		, C.ContentName
		, C.ContentUrl
		, TC.TechnologyName
	FROM Contents.Topics T JOIN Contents.ContentTypes CT
	ON T.ContentTypeID = CT.ContentTypeID
	JOIN Contents.Contents C
	ON C.TopicID = T.TopicID
	JOIN Technologies.Technologies TC
	ON TC.TechnologyID = T.TechnologyID
GO

CREATE VIEW Departments.vDepartmentContents
AS
	SELECT T.TechnologyID
		, T.TechnologyName
		, TP.TechnologyType
		, D.DepartmentName
		, CT.TopicName
		, C.ContentName
		, C.ContentUrl
		, CP.ContentType
	FROM Technologies.Technologies T JOIN Technologies.TechnologyTypes TP
	ON T.TechnologyTypeID = TP.TechnologyTypeID
	JOIN Departments.DepartmentTechnologies DT
	ON DT.TechnologyID = T.TechnologyID
	JOIN Departments.Departments D
	ON DT.DepartmentID = D.DepartmentID
	JOIN Contents.Topics CT
	ON CT.TechnologyID = T.TechnologyID
	JOIN Contents.Contents C
	ON C.TopicID = CT.TopicID
	JOIN Contents.ContentTypes CP
	ON CP.ContentTypeID = CT.ContentTypeID

GO
 
 SELECT * FROM Employees.vEmployees
 SELECT * FROM Technologies.vTechnologies
 SELECT * FROM Contents.vContents
 SELECT * FROM Departments.vDepartmentContents
 
 SELECT * FROM Departments.vDepartmentContents 
 WHERE ContentType = 'Video' 
 AND TechnologyName = 'HTML' 
 AND DepartmentName = 'NodeJS'