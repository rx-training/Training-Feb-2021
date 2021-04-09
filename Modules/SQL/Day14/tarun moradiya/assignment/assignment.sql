--Create an insert trigger on CourseEnrolled Table, record should be updated in TotalFees Field on the Student table for the respective student.

CREATE TRIGGER Day14.trgInsertCourseEnrolled
ON Day14.CourseEnrolled
FOR INSERT
AS
	DECLARE @studentId int, @courseId int, @totalFess int
	SELECT @studentId = StudentID, @courseId = CourseID FROM inserted

	SELECT @totalFess = TotalFees 
	FROM Day14.Courses
	WHERE CourseID = @courseId

	UPDATE Day14.Students
	SET TotalFees = TotalFees + @totalFess
	WHERE StudentID = @studentId
GO

--Create an insert trigger on FeePayment, record should be updated in RemainingAmt Field of the Student Table for the respective student.

CREATE TRIGGER Day14.trgInsertFeePayment
ON Day14.FeePayment
FOR INSERT
AS
	DECLARE @studentId int, @amtPaid int, @amtRemaining int, @amtTotal int

	SELECT @studentId = StudentID, @amtPaid = AmountPaid 
	FROM inserted

	SELECT @amtTotal = TotalFees 
	FROM Day14.Students
	WHERE StudentID = @studentId

	SET @amtRemaining = @amtTotal - @amtPaid

	UPDATE Day14.Students
	SET RemainingAmt = @amtRemaining
	WHERE StudentID = @studentId
GO
