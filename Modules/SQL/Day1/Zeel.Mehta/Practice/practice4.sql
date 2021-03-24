CREATE TABLE Employees
	(Employee_ID int,
	FirstName varchar(15),
	LastName varchar(15),
	Email varchar(20),
	PhoneNumber decimal(12,0),
	Hire_Date date,
	Job_ID int NOT NULL CONSTRAINT fkey1 FOREIGN KEY REFERENCES Jobs1(JobId),
	Salary decimal(10,0),
	Commission int,
	Manager_ID int,
	Department_ID varchar(5) NOT NULL CONSTRAINT fkey FOREIGN KEY REFERENCES Departments(Department_ID)
	)
GO
SELECT * FROM Employees

INSERT INTO Employees(Employee_ID, FirstName, LastName, Email, PhoneNumber, Hire_Date, Job_ID, Commission, Manager_ID, Department_ID)
	VALUES( 1, 'ZEEL', 'MEHTA', 'zee999@gmail.com', 9333352222, '2019-09-08', 2, 2000, 4, 'A03')

INSERT INTO Employees(Employee_ID, FirstName, LastName, Email, PhoneNumber, Hire_Date, Job_ID, Commission, Manager_ID, Department_ID)
	VALUES( 2, 'Aneri', 'Joshi', 'ajjj@gmail.com', 3434344444, '2020-10-18', 1, 5000, 1, 'A01')

INSERT INTO Employees(Employee_ID, FirstName, LastName, Email, PhoneNumber, Hire_Date, Job_ID, Commission, Manager_ID, Department_ID)
	VALUES( 3, 'Kavya', 'Parmar', 'kpp@gmail.com', 7575757543, '2017-03-11', 3, 10000, 5, 'A02')

INSERT INTO Employees(Employee_ID, FirstName, LastName, Email, PhoneNumber, Hire_Date, Job_ID, Commission, Manager_ID, Department_ID)
	VALUES( 1, 'Vidhi', 'Darji', 'vdarji@gmail.com', 4589748375, '2018-09-08', 1, 110000, 4, 'A01')

INSERT INTO Employees(Employee_ID, FirstName, LastName, Email, PhoneNumber, Hire_Date, Job_ID, Commission, Manager_ID, Department_ID)
	VALUES( 1, 'Rishabh', 'Parmar', 'rrpppp@gmail.com', 8378423783, '2017-09-08', 2, 12000, 4, 'A03')

CREATE TABLE Departments
	(Department_ID varchar(5) PRIMARY KEY,
	Department_Name varchar(15),
	)
GO
CREATE TABLE Jobs1
	(JobId int PRIMARY KEY,
	JobTitle varchar(15),
	)
GO

SELECT * FROM Departments
SELECT * FROM Jobs1

INSERT INTO Departments(Department_ID,Department_Name)
	VALUES('A01','NODE')

INSERT INTO Departments(Department_ID,Department_Name)
	VALUES('A02','PHP')

INSERT INTO Departments(Department_ID,Department_Name)
	VALUES('A03','PYTHON')
	
INSERT INTO Jobs1(JobId, JobTitle)
	VALUES(1,'FRESHER');

INSERT INTO Jobs1(JobId, JobTitle)
	VALUES(2,'TRAINER');

INSERT INTO Jobs1(JobId, JobTitle)
	VALUES(3,'MANAGER');



