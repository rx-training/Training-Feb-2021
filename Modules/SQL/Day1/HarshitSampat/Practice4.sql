VARCHARUSE demo1;




CREATE TABLE Employees (

	EmployeeID int PRIMARY KEY IDENTITY,
	FirstName VARCHAR(50) NOT NULL,
	LastName VARCHAR(50) NOT NULL,
	Email VARCHAR(50) NOT NULL,
	PhoneNumber VARCHAR(10) NOT NULL,
	HireDate date NOT NULL,
	JobID int NOT NULL,
	Salary VARCHAR(50) NOT NULL,
	Commission int NOT NULL,
	ManagerID int NOT NULL,
	DepartmentID int NOT NULL
	CONSTRAINT fkDepartmentID FOREIGN KEY (DepartmentID) REFERENCES Departments (DepartmentID),
	CONSTRAINT fkJobID FOREIGN KEY (JobID) REFERENCES Jobs (JobID)
);

INSERT INTO Employees VALUES ('Harshit','Sampat','sampatharsit@we.com','9876787679','2021-01-04',1,1500000,2000,1,1);