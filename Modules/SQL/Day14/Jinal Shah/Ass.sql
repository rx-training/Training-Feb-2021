
				------------- sqldb_day14 ---------------

/* Create an insert trigger on CourseEnrolled Table, record should be updated in TotalFees Field 
	on the Student table for the respective student. */

	SELECT * FROM Students
	SELECT * FROM Course
	SELECT * FROM CourseEnrolled
	SELECT * FROM FeePayment

	ALTER TRIGGER trgCE ON CourseEnrolled FOR INSERT
	AS
		DECLARE  @sid int,@cid int ,@tfees int 
		SELECT @sid =(SELECT StudentID FROM inserted) ,@cid = (SELECT CourseID FROM inserted) 
		SELECT @tfees = TotalFees FROM Course WHERE CourseID = @cid
		UPDATE Students SET TotalFees = @tfees WHERE StudentID = @sid
	GO

	INSERT INTO CourseEnrolled VALUES (1,121)

/* Create an insert trigger on FeePayment, record should be updated in RemainingAmt Field of the Student 
    Table for the respective student. */

	CREATE TRIGGER trgFP ON FeePayment FOR INSERT
	AS
		DECLARE @sid int,@amtpaid int, @amtr int, @amtot int
		SELECT @sid =(SELECT StudentID FROM inserted), @amtpaid = (SELECT AmountPaid FROM inserted)
		SELECT @amtot = TotalFees FROM Students WHERE StudentID = @sid
		SET @amtr = @amtot -@amtpaid
		UPDATE Students SET RemainingAmt = @amtr WHERE StudentID = @sid
	GO

	INSERT INTO FeePayment VALUES (1,1000,GETDATE())