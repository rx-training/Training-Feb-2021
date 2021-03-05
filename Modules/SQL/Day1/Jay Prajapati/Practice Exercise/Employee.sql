USE TutorialDB


CREATE TABLE Departments
(
	DepartmentId INT PRIMARY KEY,
	DepartmentName NVARCHAR(20),

);

INSERT INTO Departments
VALUES( 1, 'DotNet'),
(2,'React'),
(3,'Node.js'),
(4,'MechineLearning');

SELECT * FROM Departments;

CREATE TABlE Jobs
(
	JobId INT PRIMARY KEY,
	JobTitle nvarchar (20) DEFAULT '',
	MinSalary money DEFAULT 8000,
	MaxSalary money DEFAULT NULL,
);

INSERT INTO Jobs
VALUES( 1, 'SoftwareEngineer',20000,100000),
( 2, 'Developer',15000,100000),
( 3, 'Designer',10000,50000),
( 4, 'CA',200000,1000000);

INSERT INTO Jobs
VALUES
( 5, 'Architect',10000,50000),
( 6, 'CA',200000,1000000),
( 7, 'Artist',10000,50000),
( 8, 'ABC',200000,1000000);


INSERT INTO Jobs
VALUES
( 21, 'ABC',200000,1000000);

SELECT * FROM Jobs;

CREATE TABLE Employees
(
	EmployeeId INT UNIQUE,
	FirstName NVARCHAR(20),
	LastName NVARCHAR(20),
	Email NVARCHAR(30) CHECK (Email like '[aA-zZ]%@%.%'),
	PhoneNumber NVARCHAR(10),
	HireDate DATE,
	Job_Id INT FOREIGN KEY REFERENCES Jobs(JobId),
	Salary MONEY,
	Commision MONEY,
	ManagerId INT,
	DepartmentId INT FOREIGN KEY REFERENCES Departments(DepartmentId)
);

SELECT * FROM Employees;

