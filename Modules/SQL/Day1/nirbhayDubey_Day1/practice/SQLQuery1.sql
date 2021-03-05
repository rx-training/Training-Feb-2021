CREATE TABLE Countries(
	CountryId INT,
	CountryName VARCHAR(40) CONSTRAINT Chkcname CHECK(CountryName IN('Italy','India','China')),
	RegionId INT,
	CONSTRAINT UQcidrid UNIQUE(CountryId,RegionId)
)
GO	

CREATE TABLE JobHistory(
	EmployeeId INT,
	StartDate Date,
	EndDate varchar(10) CONSTRAINT ChkEndDate CHECK(EndDate LIKE '[0-3][0-9]/[0-1][0-9]/[1-9][0-9][0-9][0-9]'),
	JobId INT,
	DepartmentId INT
)
GO	

CREATE TABLE Jobs(
	JobId INT,
	JobTitle VARCHAR(30) CONSTRAINT ChkJobTitle DEFAULT '',
	MinSalary  INT CONSTRAINT ChkMinSal DEFAULT 8000,
	MaxSalary INT,
)
GO	

CREATE TABLE Employees(
	EmployeeId INT CONSTRAINT PKEmpId PRIMARY KEY,
	FirstName VARCHAR(20),
	LastName VARCHAR(25),
	Email VARCHAR(40),
	PhoneNumber VARCHAR(10),
	HireDate Date,
	JobId INT CONSTRAINT FKJobId FOREIGN KEY REFERENCES dbo.Jobs(JobId),
	Salary INT,
	Commission INT,
	ManagerId INT,
	DepartmentId INT CONSTRAINT FKDeptId FOREIGN KEY REFERENCES dbo.Department(DepartmentId),
)
GO	

CREATE TABLE Department(
	DepartmentId INT PRIMARY KEY,
	DepartmentName VARCHAR(40) 
)
GO

DROP TABLE jobs
GO

ALTER TABLE Jobs ADD CONSTRAINT PKJobId PRIMARY KEY(JobId);
Go

INSERT INTO Department VALUES (5,'Testing');
Go

INSERT INTO JobHistory VALUES (1,'1999-04-04','03/03/2021',1,1);
Go

INSERT INTO Employees VALUES (2,'Nirbhay','Dubey','nirbhaydube4@gmail.com','1234567890','2021-02-01',3,200000,5,2,2);
Go

SELECT * FROM JobHistory
GO

SELECT * FROM Employees
GO

DELETE FROM Countries
GO

ALTER TABLE JobHistory ADD CONSTRAINT fkJobhId FOREIGN KEY(JobId) REFERENCES dbo.Jobs(JobId);
GO

ALTER TABLE JobHistory DROP CONSTRAINT fkJobhId;
GO

ALTER TABLE JobHistory ADD Location VARCHAR(40);
GO