CREATE TABLE Employees (

	EmployeeID int PRIMARY KEY IDENTITY,
	FirstName varchar(50) NOT NULL,
	LastName varchar(50) NOT NULL,
	Email varchar(50) NOT NULL,
	PhoneNumber varchar(10) NOT NULL,
	JoiningDate date NOT NULL,
	JobID int NOT NULL,
	Salary varchar(50) NOT NULL,
	ManagerID int NOT NULL,
	DepartmentID int NOT NULL
	CONSTRAINT fkDepartmentID FOREIGN KEY (DepartmentID) REFERENCES Departments (DepartmentID),
	CONSTRAINT fkJobID FOREIGN KEY (JobID) REFERENCES Jobs (JobID)
	
);

INSERT INTO Employees VALUES ('Tarun','Patidar','patidartarun355@gmail.com','9630627424','01-02-2021',1,2500000,1,1);