CREATE DATABASE AssignmentDay37;
GO

USE AssignmentDay37;
GO

CREATE TABLE Student(
	StudentID int CONSTRAINT pk_StudentId PRIMARY KEY IDENTITY,
	StudentName varchar(30),
	TotalFees decimal(8,2) DEFAULT 0,
	RemainingAmt decimal(8,2) DEFAULT 0
);
GO

CREATE TABLE Course(
	CourseID int CONSTRAINT pk_CourseId PRIMARY KEY IDENTITY,
	CourseName varchar(25) DEFAULT 0,
	TotalFees decimal(8,2) DEFAULT 0
);
GO

CREATE TABLE CourseEnrolled(
	StudentID int CONSTRAINT fk_CEStudentId FOREIGN KEY REFERENCES Student(StudentID),
	CourseID int CONSTRAINT fk_CECourseId FOREIGN KEY REFERENCES Course(CourseID)
);
GO

CREATE TABLE FeePayment(
	StudentID int CONSTRAINT fk_FPStudentId FOREIGN KEY REFERENCES Student(StudentID),
	AmountPaid decimal(8,2) DEFAULT 0,
	DateofPayment date NOT NULL
);
GO


INSERT INTO Course(CourseName,TotalFees) VALUES
('Data Structure',13000.00),
('Algorithms',17000.00),
('Computer Networks',18000.00),
('Operating System',10000.00),	
('DBMS',13000.00),
('TOC',12000.00);
GO

INSERT INTO Student(StudentName) VALUES
('Nirbhay Dubey'),
('Rahul Suthar'),
('Manish Yadav'),
('Yamit Thakkar'),
('Sreyas Menon'),
('Shubham Bhosle'),
('Pooja Jain'),
('Nirav Patel');
GO

SELECT * FROM Student;
GO

SELECT * FROM CourseEnrolled;
GO

SELECT * FROM Course;
GO

SELECT * FROM FeePayment;
GO
