
CREATE TABLE Countries
(
CountryId varchar(2) NOT NULL UNIQUE DEFAULT'',
CountryName varchar(30) NOT NULL CONSTRAINT CHKCountries CHECK(CountryName IN ('INDIA','ITALY','CHINA')), 
RegionId decimal(10,0) NOT NULL, PRIMARY KEY (CountryId,Regionid)
)

SELECT * FROM Countries

CREATE TABLE JobHistories
(
EmployeeId varchar(5) NOT NULL UNIQUE,
StartDate date NOT NULL,
EndDate date NOT NULL CONSTRAINT CHKEmployees CHECK(EndDate LIKE '__/__/____'),
Job_Id varchar(5) NOT NULL,
Department_Id decimal(10,0) NOT NULL 
)

SELECT * FROM JobHistories

CREATE TABLE Jobs
(
JobId varchar(5) NOT NULL CONSTRAINT PKJobId PRIMARY KEY,
JobTitle varchar(10) NOT NULL DEFAULT ' ',
MinSalary decimal(5,0) DEFAULT 8000,
MaxSalary decimal(6,0) DEFAULT NULL
)

SELECT * FROM Jobs

CREATE TABLE Employees
(
EmployeeId INT NOT NULL PRIMARY KEY,
FirstName varchar(10) NOT NULL,
LastName varchar(10) NOT NULL,
Email varchar(15) NOT NULL,
PhoneNumber INT NOT NULL,
HireDate date NOT NULL,
Job_Id varchar(5) NOT NULL CONSTRAINT FKJobs FOREIGN KEY REFERENCES Jobs(JobId),
Salary INT NOT NULL,
Commission INT DEFAULT NULL,
Manager_ID INT NOT NULL,
Department_Id INT CONSTRAINT FKDepartments FOREIGN KEY REFERENCES Departments(Department_Id) 
)

CREATE TABLE Departments
(
Department_Id INT NOT NULL CONSTRAINT PKDepartmentId PRIMARY KEY,
DepartmentName varchar(20) NOT NULL
)

SELECT * FROM Employees

ALTER TABLE JobHistories 
ADD CONSTRAINT FKJob_Id 
FOREIGN KEY (Job_Id) 
REFERENCES Jobs(JobId) 

ALTER TABLE JobHistories
DROP CONSTRAINT FKJob_Id


ALTER TABLE JobHistories
ADD locationNew  varchar(20);

SELECT * FROM JobHistories