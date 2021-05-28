USE Day14

CREATE TABLE Student
(
	StudentID INT PRIMARY KEY,
	StudentName NVARCHAR(30),
	TotalFees MONEY,
	RemainingAmt MONEY
)

CREATE TABLE Course
(
	CourseID INT PRIMARY KEY,
	CourseName NVARCHAR(30),
	TotalFees MONEY
)

CREATE TABLE CourseEnrolled
(
	StudentID INT FOREIGN KEY REFERENCES Student(StudentID),
	CourseID INT FOREIGN KEY REFERENCES Course(CourseID)
)

CREATE TABLE FeePayment
(
	StudentID INT FOREIGN KEY REFERENCES Student(StudentID),
	AmountPaid MONEY,
	DateofPayment DATE
)

SELECT * FROM Student
SELECT * FROM Course
SELECT * FROM CourseEnrolled
SELECT * FROM FeePayment

---- 1. Create an insert trigger on CourseEnrolled Table, record should be updated in TotalFees Field on the Student table for the respective student. --------

CREATE TRIGGER trgCourseEnrolled
ON CourseEnrolled
FOR INSERT 
AS
DECLARE @StudentID int, @CourseID int, @TotalFees int
SELECT @StudentID = StudentID, @CourseID = CourseID from inserted
SELECT @TotalFees = TotalFees FROM Course WHERE CourseID = @CourseID
UPDATE Student SET TotalFees = TotalFees + @TotalFees Where StudentID = @StudentID

GO

INSERT INTO CourseEnrolled VALUES (2,1)

GO

---- 2. Create an insert trigger on FeePayment, record should be updated in RemainingAmt Field of the Student Table for the respective student. --------

CREATE TRIGGER trgFeePayment
ON FeePayment
FOR INSERT
AS
DECLARE @StudentID int, @AmountPaid int, @RemainingAmt int, @AmtTotal int
SELECT @StudentID = StudentID, @AmountPaid = AmountPaid from Inserted
SELECT @AmtTotal = TotalFees From Student WHERE StudentID = @StudentID
SET @RemainingAmt = @AmtTotal-@AmountPaid
UPDATE Student SET RemainingAmt = @RemainingAmt WHERE StudentID = @StudentID

GO

INSERT INTO FeePayment VALUES (1,1000,GETDATE())

GO