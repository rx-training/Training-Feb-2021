-- Creating Database named StackOverflow

CREATE DATABASE StackOverFlow
GO

USE StackOverFlow
GO
-- Create Tables

-- Login Details
CREATE TABLE UserLoginDetails(
	ID INT PRIMARY KEY,
	Email NVARCHAR(50) UNIQUE NOT NULL,
	CurrentPassword NVARCHAR(20),
	PreviousPassword NVARCHAR(20)
)
GO

-- Users Information
CREATE TABLE Users(
	UserID INT PRIMARY KEY,
	UserName NVARCHAR(20) NOT NULL,
	FullName NVARCHAR(30) NOT NULL,
	Title NVARCHAR(20),
	VisitedDays INT,
	GitHub NVARCHAR(100),
	Twitter NVARCHAR(100),
	Location NVARCHAR(50),
	LastSeen DATETIME,
	ProfileViews INT,
	AboutUser NVARCHAR(200),
	PhoneNumber NVARCHAR(10),
	EmailID NVARCHAR(50) UNIQUE NOT NULL,
	CONSTRAINT Fk_email FOREIGN KEY(EmailID) REFERENCES UserLoginDetails(Email)
)
GO
-- Badges details
CREATE TABLE Badges(
	BadgeID INT PRIMARY KEY,
	BadgeName NVARCHAR(30),
	BadgeCategory NVARCHAR(30),
	BadgeDescription NVARCHAR(200),
	BadgeType NVARCHAR(20)
)
GO


-- Badges Eearned By User
CREATE TABLE BadgesEarnedByUser(
	UserID INT,
	BadgeID INT,
	ADD DateOfEarned DATE,
	CONSTRAINT Fk_UserIDBadge FOREIGN KEY(UserID) REFERENCES Users(UserID),
	CONSTRAINT Fk_BadgeIDBadge FOREIGN KEY(BadgeID) REFERENCES Badges(BadgeID)
)
GO


-- User's Educational Details
CREATE TABLE Education(
	UserID INT,
	Degree NVARCHAR(30),
	University NVARCHAR(50),
	FromYear INT,
	ToYear INT,
	Summary NVARCHAR(200),
	CONSTRAINT Fk_UserIDEducation FOREIGN KEY(UserID) REFERENCES Users(UserID)
)
GO
-- Table for Technologies Used As Student
CREATE TABLE TechnologiesUsedAsStudent(
	UserID INT,
	Technology NVARCHAR(20),
	CONSTRAINT Fk_UserIDTech FOREIGN KEY(UserID) REFERENCES Users(UserID)

)
GO
-- Work Profile Information
CREATE TABLE WorkExperience(
	UserID INT,
	JobTitle NVARCHAR(30),
	CompanyName NVARCHAR(30),
	YearOfJoinning int,
	Responsibilities NVARCHAR(200),
	CONSTRAINT Fk_UserIDWork FOREIGN KEY(UserID) REFERENCES Users(UserID)
)
GO
-- Technologies Used By User In Job
CREATE TABLE TechnologiesUsedByUserInJob(
	UserID INT,
	Technologies NVARCHAR(20),
	CONSTRAINT Fk_UserIDTechInJob FOREIGN KEY(UserID) REFERENCES Users(UserID)
)
GO


-- Table of Questions with UserID
CREATE TABLE Questions(
	QuestionID INT PRIMARY KEY,
	UserID INT,
	Question NVARCHAR(500),
	Views INT,
	Vote INT,
	TimeOfAsk DATETIME,
	CONSTRAINT Fk_UserIDQuestion FOREIGN KEY(UserID) REFERENCES Users(UserID)
)
GO


-- Table for Bookmarks
CREATE TABLE Bookmarks(
UserID INT FOREIGN KEY REFERENCES Users(UserID),
QuestionID INT FOREIGN KEY REFERENCES Questions(QuestionID),
)
GO

-- information of Tag of Questions
CREATE TABLE Tags(
	QuestionID INT FOREIGN KEY REFERENCES Questions,
	TagName NVARCHAR(30)
)
GO

-- Table For Answers of Questions
CREATE TABLE Answers(
	AnswerID INT PRIMARY KEY,
	QuestionID INT FOREIGN KEY REFERENCES Questions,
	Answer NVARCHAR(MAX),
	Vote INT,
)
GO

ALTER TABLE Answers
ADD USERID INT FOREIGN KEY REFERENCES Users(UserID)




-- FOR JOB APPLY


-- Job Profile Information
CREATE TABLE JobProfile(
	UserID INT FOREIGN KEY REFERENCES Users(UserID),
	JobType NVARCHAR(30),
	Role NVARCHAR(30),
	JobSearchStatus NVARCHAR(50),
	Industry NVARCHAR(30),
	MinAnnualSalary MONEY,
	MinExperience INT,
	MaxExperience INT,
)
GO

-- industries are exclude while apply for job
CREATE TABLE IndustriesToExclude(
	UserID INT FOREIGN KEY REFERENCES Users(UserID),
	IndustryToExclude NVARCHAR(30)
)
GO

-- technologies which are not prefer to work with
CREATE TABLE TechPreferNotToWorkWith(
 UserID INT FOREIGN KEY REFERENCES Users(UserID),
 TechPeferNotToWorkWith NVARCHAR(30)
)
GO

-- technologies which are prefer to work with
CREATE TABLE TechWantToWorkWith(
	UserID INT FOREIGN KEY REFERENCES Users(UserID),
	TechYouWantToWorkWith NVARCHAR(30)
)
GO

-- Location where like to work
CREATE TABLE WhereUserLikeToWork(
	UserID int FOREIGN KEY REFERENCES Users(UserID),
	Location NVARCHAR(30)
)
GO

-- Companies which are Eccluded to work
CREATE TABLE CompaniesToExclude(
	UserID INT FOREIGN KEY REFERENCES Users(UserID),
	CompanyToExclude NVARCHAR(30)
)
GO