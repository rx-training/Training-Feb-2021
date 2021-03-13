CREATE TABLE Employees (
employeeId int CONSTRAINT pkEmployeeId PRIMARY KEY,
firstName varchar(50),
lastName varchar(50),
salary int,
joiningDate datetime,
Department varchar(50),
managerId int
)



CREATE TABLE Incentives(
employeeRefId int CONSTRAINT fkEmployeeId FOREIGN KEY REFERENCES Employees(employeeId),
incentiveDate date,
incentiveAmount money
)

INSERT INTO Employees
VALUES(1, 
	'John', 
	'Abraham', 
	1000000, 
	'01-JAN-13 12:00:00 AM', 
	'Banking', 
	NULL),

	(2,
	'Michael',
	'Clarke',
	800000,
	'01-JAN-13 12:00:00 AM',
	'Insurance',
	1),
	
	(3,
	'Roy',
	'Thomas',
	700000,
	'01-FEB-13 12:00:00 AM',
	'Banking',
	1),

	(4,
	'Tom',
	'Jose',
	600000,
	'01-FEB-13 12:00:00 AM',
	'Insurance',
	2),

	(5,
	'Jerry',
	'Pinto',
	650000,
	'01-FEB-13 12:00:00 AM',
	'Insurance',
	3),

	(6,
	'Philip',
	'Mathew',
	750000,
	'01-JAN-13 12:00:00 AM',
	'Services',
	3),

	(7,
	'TestName1',
	'123',
	650000,
	'01-JAN-13 12:00:00 AM',
	'Services',
	2),

	(8,
	'TestName2',
	'Lname%',
	600000,
	'01-FEB-13 12:00:00 AM',
	'Insurance',
	2)




INSERT INTO Incentives
VALUES
	(1,
	'01-FEB-13',
	5000),

	(2,
	'01-FEB-13',
	3000),

	(3,
	'01-FEB-13',
	4000),

	(1,
	'01-JAN-13',
	4500),

	(2,
	'01-JAN-13',
	3500)




