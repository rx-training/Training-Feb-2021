USE demo1;




CREATE TABLE Employees (

	EmployeeID int PRIMARY KEY IDENTITY,
	FirstName varchar(50) NOT NULL,
	LastName varchar(50) NOT NULL,
	Email varchar(50) NOT NULL,
	PhoneNumber varchar(10) NOT NULL,
	HireDate date NOT NULL,
	JobID int NOT NULL,
	Salary varchar(50) NOT NULL,
	Commission int NOT NULL,
	ManagerID int NOT NULL,
	DepartmentID int NOT NULL
	CONSTRAINT fkDepartmentID FOREIGN KEY (DepartmentID) REFERENCES Departments (DepartmentID),
	CONSTRAINT fkJobID FOREIGN KEY (JobID) REFERENCES Jobs (JobID)
);

INSERT INTO Employees VALUES ('Harshit','Sampat','sampatharsit@we.com','9876787679','2021-01-04',1,1500000,2000,1,1);