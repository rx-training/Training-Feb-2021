CREATE DATABASE students ;

USE students;

CREATE TABLE Students 
(
StudentId varchar(25) NOT NULL CONSTRAINT PKSId Primary key,
StudentName varchar(50) NOT NULL,
TotalFees money NOT NULL,
RemainingAmt money NOT NULL
);

INSERT INTO Students (StudentId,StudentName,TotalFess,RemainingAmt)
VALUES
(100,'Parth',15000,2500),
(101,'Kush',15000,5000),
(102,'Mahesh',15000,2500),
(103,'Varun',25000,2500),
(104,'Siddharth',25000,5000)




CREATE TABLE Course 
(
CourseId varchar(25) NOT NULL CONSTRAINT PKCId Primary key, 
CourseName varchar(50),
TotalFees money
)

INSERT INTO Course(CourseId,CourseName,TotalFees)
VALUES
(200,'Btech',15000),
(201,'Bsc',15000),
(202,'Mtech',25000),
(203,'Msc',25000)

CREATE TABLE CourseEnrolled
(
StudentId varchar(25) NOT NULL CONSTRAINT FKSId FOREIGN KEY REFERENCES Students(StudentId),
CourseId varchar(25) NOT NULL CONSTRAINT FKCId FOREIGN KEY REFERENCES Course(CourseId)
)

INSERT INTO CourseEnrolled(StudentId,CourseId)
VALUES
(100,200),
(101,201),
(102,200),
(103,202),
(104,203)

CREATE TABLE FeePayment 
(
StudentId varchar(25) NOT NULL CONSTRAINT FKStudentid FOREIGN KEY REFERENCES Students(StudentId),
AmountPaid int ,
DateOfPayment Date 
)

INSERT INTO FeePayment (StudentId,AmountPaid,DateOfPayment)
VALUES
(100,10000,'2020-1-2'),
(101,10000,'2020-1-2'),
(102,5000,'2020-5-2'),
(103,5000,'2020-8-2'),
(104,8000,'2020-5-2')




/*--1. Create an insert trigger on CourseEnrolled Table, record should be
updated in TotalFees Field on the Student table for the respective student.*/

ALTER TRIGGER CourseUpdate on CourseEnrolled
FOR INSERT AS 
DECLARE @StudentID int,@CourseId int ,@totalfees int 
SELECT @StudentID = (SELECT StudentId FROM inserted),
	   @CourseId = (SELECT CourseId FROM inserted)

SELECT @totalfees = TotalFees FROM Course WHERE CourseId = @CourseId
UPDATE Students 
SET TotalFees = TotalFees + @totalfees
WHERE StudentId = @StudentID 
GO

INSERT INTO CourseEnrolled VALUES (105,201)
select * from Students

/*---Create an insert trigger on FeePayment, record should be updated in 
RemainingAmt Field of the Student Table for the respective student.*/

CREATE TRIGGER UpdateRemAmt ON FeePayment
FOR INSERT
AS
DECLARE @StudentId int , @amtpaid int , @remainingAmt int , @totalamt int 

SELECT @StudentId = (Select StudentId FROM inserted),
@amtpaid = (Select AmountPaid FROM inserted)

SELECT @totalamt = TotalFees 
FROM Students 
WHERE @StudentId = StudentId 

SET @remainingAmt = @totalamt - @amtpaid 

UPDATE Students 
SET RemainingAmt = @remainingAmt 
WHERE StudentId = @StudentId
GO

INSERT INTO FeePayment Values (103,5000,GETDATE())
SELECT * FROM FeePayment