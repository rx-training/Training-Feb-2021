CREATE DATABASE Practices;

USE Practices

CREATE TABLE Countries
(
	CountryID varchar(2) NOT NULL UNIQUE DEFAULT '',
	CountryName varchar(40) NOT NULL DEFAULT 'INDIA' CHECK(CountryName IN ('INDIA','ITALY','CHINA')),
	RegionID decimal(10,0) NOT NULL,PRIMARY KEY (CountryID,RegionID)
)

CREATE TABLE Jobhistories
(
	EmployeeID INT NOT NULL UNIQUE,
	StartDate date NOT NULL,
	EndDate date NOT NULL CHECK (EndDate Like '--/--/----'),
	JOB_ID varchar(10) NOT NULL,
	DepartmentID varchar(20) NOT NULL CONSTRAINT PKDepartmentID PRIMARY KEY,
)

CREATE TABLE Jobs
(
	JobID varchar(10) NOT NULL CONSTRAINT PKJobID PRIMARY KEY,
	JobTitle varchar(20) NOT NULL DEFAULT ' ',
	MinSalary decimal(6,0) DEFAULT 8000,
	MaxSalary decimal(7,0) DEFAULT NULL	
)

CREATE TABLE Employees
(
	EmployeeID decimal(6,0) NOT NULL PRIMARY KEY,
	FirstName varchar(10) NOT NULL,
	LastName varchar(10) NOT NULL,
	Email varchar(25) NOT NULL,
	PhoneNumber bigint NOT NULL,
	HireDate date NOT NULL,
	Job_ID varchar(10) NOT NULL CONSTRAINT FKJob_ID FOREIGN KEY REFERENCES Jobs(JobID),
	Salary decimal(8,2) DEFAULT NULL, 
	Commission decimal(2,2) DEFAULT NULL, 
	MangerID decimal(6,0) DEFAULT NULL, 
	DEPARTMENT_ID varchar(20) NOT NULL CONSTRAINT FKDEPARTMENT_ID FOREIGN KEY REFERENCES  Jobhistories(DepartmentID)
)

ALTER TABLE Jobhistories ADD CONSTRAINT FK_JOB_ID FOREIGN KEY (JOB_ID) REFERENCES Jobs(JobID);

ALTER TABLE Jobhistories DROP CONSTRAINT FK_JOB_ID;

ALTER TABLE Jobhistories ADD location varchar(10);