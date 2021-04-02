---------------------------Database Creation--------------------------------

CREATE DATABASE RxTraining
GO

USE RxTraining
GO

--------------------------SCHECMAS---------------------------------
CREATE SCHEMA Departments
GO

CREATE SCHEMA Employees
GO

CREATE SCHEMA Contents
GO

CREATE SCHEMA Technologies
GO

--------------------------TABLES----------------------------------------

CREATE TABLE Departments.Departments (
	DepartmentID int NOT NULL CONSTRAINT PK_Departments_DepartmentID PRIMARY KEY IDENTITY(1, 1),
	DepartmentName nvarchar(40) NOT NULL CONSTRAINT UK_Departments_DepartmentName UNIQUE
)
GO

CREATE TABLE Employees.Positions (
	PositionID int CONSTRAINT PK_Positions_PositionID PRIMARY KEY IDENTITY(1, 1),
	PositionName nvarchar(40) NOT NULL  CONSTRAINT UK_Positions_PositionName UNIQUE
)
GO

CREATE TABLE Employees.Employees (
	EmployeeID int NOT NULL CONSTRAINT PK_Employees_EmployeeID PRIMARY KEY IDENTITY(1, 1),
	FirstName nvarchar(40) NOT NULL,
	LastName nvarchar(40) NOT NULL,
	Email nvarchar(40) CONSTRAINT UK_Employees_Email UNIQUE,
	PositionID int CONSTRAINT FK_Employees_PositionID FOREIGN KEY REFERENCES Employees.Positions(PositionID),
	DepartmentID int NOT NULL CONSTRAINT FK_Employees_DepartmentID FOREIGN KEY REFERENCES Departments.Departments(DepartmentID)
)
GO

CREATE TABLE Employees.Users (
	EmployeeID int NOT NULL CONSTRAINT PK_Users_EmployeeID PRIMARY KEY
		CONSTRAINT FK_Users_EmployeeID FOREIGN KEY REFERENCES Employees.Employees(EmployeeID),
	UserName nvarchar(30) NOT NULL CONSTRAINT UK_Users_UserName UNIQUE,
	PasswordHash binary(64) NOT NULL,
	Salt UNIQUEIDENTIFIER 
)
GO

CREATE TABLE Technologies.TechnologyTypes (
	TechnologyTypeID int CONSTRAINT PK_TechnologyTypes_TechnologyTypeID PRIMARY KEY IDENTITY(1, 1),
	TechnologyType nvarchar(40) CONSTRAINT UK_TechnologyTypes_TechnologyType UNIQUE
)
GO

CREATE TABLE Technologies.Technologies (
	TechnologyID int NOT NULL CONSTRAINT PK_Technologies_TechnologyID PRIMARY KEY IDENTITY(1, 1),
	TechnologyTypeID int NOT NULL CONSTRAINT FK_Technologies_TechnologyTypeID FOREIGN KEY REFERENCES Technologies.TechnologyTypes(TechnologyTypeID),
	TechnologyName nvarchar(40) CONSTRAINT UK_Technologies_TechnologyName UNIQUE
)
GO

CREATE TABLE Departments.DepartmentTechnologies (
	TechnologyID int NOT NULL CONSTRAINT FK_DepartmentTechnologies_TechnologyID FOREIGN KEY REFERENCES Technologies.Technologies(TechnologyID),
	DepartmentID int NOT NULL CONSTRAINT FK_DepartmentTechnologies_DepartmentID FOREIGN KEY REFERENCES Departments.Departments(DepartmentID)
)
GO

CREATE TABLE Contents.ContentTypes (
	ContentTypeID int NOT NULL CONSTRAINT PK_ContentTypes_ContentTypeID PRIMARY KEY IDENTITY(1, 1),
	ContentType nvarchar(40) NOT NULL CONSTRAINT UK_ContentTypes_ContentType UNIQUE
)
GO

CREATE TABLE Contents.Topics (
	TopicID int NOT NULL CONSTRAINT PK_Topics_TopicID PRIMARY KEY IDENTITY(1, 1),
	TopicName nvarchar(40),
	ContentTypeID int NOT NULL CONSTRAINT FK_Topics_ContentTypeID FOREIGN KEY REFERENCES Contents.ContentTypes(ContentTypeID),
	TechnologyID int NOT NULL CONSTRAINT FK_Topics_TechnologyID FOREIGN KEY REFERENCES Technologies.Technologies(TechnologyID), 
)
GO

CREATE TABLE Contents.Contents (
	ContentID int NOT NULL CONSTRAINT PK_Contents_ContentID PRIMARY KEY IDENTITY(1, 1),
	ContentUrl nvarchar(MAX) NOT NULL,
	ContentName nvarchar(40),
	TopicID int NOT NULL CONSTRAINT FK_Contents_TopicID FOREIGN KEY REFERENCES Contents.Topics(TopicID)
)
GO





