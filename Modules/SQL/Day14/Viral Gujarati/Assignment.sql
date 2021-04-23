use AdventureWorks2012


CREATE TABLE Student
(
	StudentID INT PRIMARY KEY,
	StudentName NVARCHAR(30),
	TotalFees MONEY,
	RemainingAmt MONEY
)
GO
INSERT INTO Student
VALUES(1,'viral',1500,0),
	  (2,'rahul',3000,0)


CREATE TABLE Course
(
	CourseID INT PRIMARY KEY,
	CourseName NVARCHAR(30),
	TotalFees MONEY
)
GO
INSERT INTO Course
VALUES(1,'SQL',1500),
	(2,'JQUERY',3000)

CREATE TABLE CourseEnrolled
(
	StudentID INT FOREIGN KEY REFERENCES Student(StudentID),
	CourseID INT FOREIGN KEY REFERENCES Course(CourseID)
)
GO

CREATE TABLE FeePayment
(
	StudentID INT FOREIGN KEY REFERENCES Student(StudentID),
	AmountPaid MONEY,
	DateofPayment DATE
)
GO



SELECT * FROM Student
SELECT * FROM Course
SELECT * FROM FeePayment
SELECT * FROM CourseEnrolled




--Create an insert trigger on CourseEnrolled Table, record should be updated in TotalFees Field on the Student table for the respective student.

ALTER TRIGGER trgInsertCourseEnrolled
ON CourseEnrolled
FOR INSERT 
AS
DECLARE @StudentID int,
		@CourseID int,
		@TotalFees int

	SELECT @StudentID = StudentID,
			@CourseID = CourseID
			from inserted

	SELECT @TotalFees = TotalFees
	FROM Course
	WHERE CourseID = @CourseID


UPDATE Student
SET TotalFees = TotalFees + @TotalFees
Where StudentID = @StudentID
Go


INSERT INTO CourseEnrolled
VALUES(2,2)


Select * from CourseEnrolled

--Create an insert trigger on FeePayment, record should be updated in RemainingAmt Field of the Student Table for the respective student.

ALTER TRIGGER trgFeePayment
ON FeePayment
FOR INSERT
AS
DECLARE @StudentID int,
		@AmountPaid int,
		@RemainingAmt int,
		@AmtTotal int

	SELECT @StudentID = StudentID,
		   @AmountPaid = AmountPaid from Inserted

	SELECT @AmtTotal = TotalFees
	From Student
	WHERE StudentID = @StudentID

	SET @RemainingAmt = @AmtTotal-@AmountPaid
	UPDATE Student
	SET RemainingAmt = @RemainingAmt
	WHERE StudentID = @StudentID
		   

INSERT INTO FeePayment
VALUES(2,500,'02-02-2020')
VALUES(1,1500,'01-02-2021')

select * from FeePayment









