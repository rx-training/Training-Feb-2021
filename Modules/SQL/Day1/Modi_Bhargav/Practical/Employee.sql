   /* 4.Write a SQL statement to create a table employees including columns Employee_Id,
 	FirstName, LastName, Email, PhoneNumber, Hire_Date, Job_Id, Salary, Commission, 
 	Manager_Id and Department_Id and make sure that, the Employee_Id column does not
  	contain any duplicate value at the time of insertion, and the foreign key column 
  	DepartmentId, reference by the column DepartmentId of Departments table, can contain
   	only those values which are exists in the Department table and another foreign key
    column JobId, referenced by the column JobId of jobs table, can contain only those 
	values which are exists in the jobs table.*/
	
CREATE TABLE Job(
       JobId int NOT NULL PRIMARY KEY,
	   JobTitle varchar(30) DEFAULT '',
	   MinSalary MONEY DEFAULT 8000,
	   MaxSalary MONEY DEFAULT NULL
);

INSERT INTO Job(JobId,JobTitle) VALUES(1,'ER')
INSERT INTO Job(JobId,JobTitle,MinSalary,MaxSalary) VALUES (2,'Trainee',2000,50000);

SELECT * FROM Job

CREATE TABLE Departments (
  DepartmentId int NOT NULL PRIMARY KEY,
  DepartmentName varchar(30) NOT NULL
);
INSERT INTO Departments(DepartmentId,DepartmentName) VALUES (1,'CSE'),(2,'IT');
SELECT * FROM Departments

CREATE TABLE  Employees (
    EmployeeId int NOT NULL PRIMARY KEY,
	FirstName varchar(30) NOT NULL,
	LastName varchar(30) NOT NULL,
	Email varchar(50) NOT NULL,
	PhoneNumber int NOT NULL,
	HireDate date NOT NULL,
	JobId int NOT NULL,
	Salary int NOT NULL,
	CommissionPct int NOT NULL,
	ManagerId int NOT NULL,
	DepartmentId int NOT NULL,
	CONSTRAINT fkDepartId FOREIGN KEY (DepartmentId) REFERENCES Departments(DepartmentId),
	CONSTRAINT fkjobId FOREIGN KEY (JobId) REFERENCES Job(JobId)
 );
 INSERT INTO Employees VALUES (3,'shah','Parth','abc@gmail.com',586458565,'01-01-2021',2,21000,2000,1,1);

 SELECT * FROM Employees