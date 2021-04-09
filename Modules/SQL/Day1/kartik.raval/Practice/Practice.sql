CREATE TABLE Projects
(
	ProjectID INT NOT NULL CONSTRAINT PKProjects PRIMARY KEY IDENTITY,
	ProjectName varchar(20) NOT NULL
)

INSERT INTO Projects values ('Indigo'),('Vistara')

CREATE TABLE Employees
(
	EmployeeID INT NOT NULL CONSTRAINT PKEmployees PRIMARY KEY IDENTITY,
	EmployeeName varchar(20) NOT NULL
)

INSERT INTO Employees values ('Kartik'),('Hardik')

Select * from Projects
SELECT * FROM Employees

Select * from Allocations

DROP TABLE Projects

CREATE TABLE Allocations
(
	AllocationID INT NOT NULL CONSTRAINT PKAllocations PRIMARY KEY IDENTITY,
	EmployeeID INT CONSTRAINT FKEmployees FOREIGN KEY REFERENCES Employees(EmployeeID),
	ProjectID INT CONSTRAINT FKProjects FOREIGN KEY REFERENCES Projects(ProjectID)	
)

DROP TABLE Allocations