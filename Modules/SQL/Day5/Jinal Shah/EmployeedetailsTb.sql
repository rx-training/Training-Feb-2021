CREATE TABLE EmployeeDetails
(	
	EmployeeID INT PRIMARY KEY,
	FirstName VARCHAR(20),
	LastName VARCHAR(20),
	Salary INT,
	JoiningDate Date,
	Department VARCHAR(20),
	ManagerID INT
);

SELECT * FROM EmployeeDetails

DELETE FROM EmployeeDetails

INSERT INTO EmployeeDetails VALUES
(1,'john','Abraham',1000000,'01-01-2013','Banking',NULL),
(2,'Michael','Clarke',800000,'01-01-2013','Insurance',1),
(3,'Roy','Thomas',700000,'01-02-2013','Banking',1),
(4,'Tom','Jose',600000,'01-02-2013','Insurance',2),
(5,'Jerry','Pinto',650000,'01-02-2013','Insurance',3),
(6,'Philip','Mathew',750000,'01-01-2013','Services',3),
(7,'TestName1','123',650000,'01-01-2013','Services',2),
(8,'TestName2','Lname',600000,'01-01-2013','Insurance',2)