CREATE TABLE EMPLOYEES
(
	EmployeeID decimal(6,0) NOT NULL PRIMARY KEY,
	FirstName varchar NOT NULL,
	LastName varchar NOT NULL,
	Email varchar NOT NULL,
	PhoneNumber bigint NOT NULL,
	HireDate date NOT NULL,
	Job_ID varchar(10) NOT NULL CONSTRAINT Job_Con FOREIGN KEY REFERENCES Jobs(JobId)
	Salary decimal(8,2) DEFAULT NULL,
	Commission decimal(2,2) DEFAULT NULL,
	ManagerID decimal(6,0) DEFAULT NULL,
	Department_Id varchar NOT NULL CONSTRAINT Dept_Con FOREIGN KEY REFERENCES JobHistory(Job_Id )
)