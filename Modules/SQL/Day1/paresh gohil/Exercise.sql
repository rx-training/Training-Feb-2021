CREATE DATABASE Students;

USE Students;

CREATE TABLE Students
(
	StudentID INT NOT NULL CONSTRAINT PKStudents PRIMARY KEY IDENTITY,
	StudentName varchar(20) NOT NULL
)

INSERT INTO Students values ('ABHIJIT'),
							('JAYKANT')

SELECT * FROM Students

CREATE TABLE Teachers
(
	TeacherID INT NOT NULL CONSTRAINT PKTeachers PRIMARY KEY IDENTITY,
	TeacherName varchar(20) NOT NULL
)

INSERT INTO Teachers values ('VIKAS'),
							('TEJAS'),
							('VINAY')

SELECT * FROM Teachers

CREATE TABLE Allocations
(
	AllocationID INT PRIMARY KEY IDENTITY,
	StudentID INT CONSTRAINT PKStudent FOREIGN KEY REFERENCES Students(StudentID),
	TeacherID INT CONSTRAINT PKTeacher FOREIGN KEY REFERENCES Teachers(TeacherID)
)

