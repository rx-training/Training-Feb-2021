USE PracticeDay25;
GO

--Write a SQL statement to create a table named countries including columns 
--CountryId, CountryName and RegionId and make sure that no countries except Italy, India and China will be entered in the table. 
--and combination of columns CountryId and RegionId will be unique.

CREATE TABLE Countries(
	CountryId INT,
	CountryName VARCHAR(40) CONSTRAINT Chkcname CHECK(CountryName IN('Italy','India','China')),
	RegionId INT,
	CONSTRAINT UQcidrid UNIQUE(CountryId,RegionId)
)
GO	

--Write a SQL statement to create a table named JobHistory including columns 
--EmployeeId, StartDate, End_Eate, Job_Id and Department_Id and make sure that the 
--value against column EndDate will be entered at the time of insertion to the format like ‘–/–/—-‘.

CREATE TABLE JobHistory(
	EmployeeId INT,
	StartDate Date,
	EndDate varchar(10) CONSTRAINT ChkEndDate CHECK(EndDate LIKE '[0-3][0-9]/[0-1][0-9]/[1-9][0-9][0-9][0-9]'),
	JobId INT,
	DepartmentId INT
)
GO	

--Write a SQL statement to create a table named jobs including columns JobId, JobTitle, MinSalary and MaxSalary, 
--and make sure that, the default value for JobTitle is blank and MinSalary is 8000 and MaxSalary is NULL 
--will be entered automatically at the time of insertion if no value assigned for the specified columns.

CREATE TABLE Jobs(
	JobId INT,
	JobTitle VARCHAR(30) CONSTRAINT ChkJobTitle DEFAULT '',
	MinSalary  INT CONSTRAINT ChkMinSal DEFAULT 8000,
	MaxSalary INT,
)
GO	

--Write a SQL statement to create a table employees including columns 
--Employee_Id, FirstName, LastName, Email, PhoneNumber, Hire_Date, Job_Id, Salary, Commission, Manager_Id and Department_Id and make sure that,
-- the Employee_Id column does not contain any duplicate value at the time of insertion, 
--and the foreign key column DepartmentId, reference by the column DepartmentId of Departments table, can contain only those values which are exists in the Department table 
--and another foreign key column JobId, referenced by the column JobId of jobs table, can contain only those values which are exists in the jobs table.


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

--Write a SQL statement to add a foreign key constraint named fk_job_id on JobId column of JobHistory table referencing to the primary key JobId of jobs table.

ALTER TABLE JobHistory ADD CONSTRAINT fkJobhId FOREIGN KEY(JobId) REFERENCES dbo.Jobs(JobId);
GO

--Write a SQL statement to drop the existing foreign key fk_job_id from JobHistory table on JobId column which is referencing to the JobId of jobs table.

ALTER TABLE JobHistory DROP CONSTRAINT fkJobhId;
GO

--Write a SQL statement to add a new column named location to the JobHistory table.
ALTER TABLE JobHistory ADD Location VARCHAR(40);
GO