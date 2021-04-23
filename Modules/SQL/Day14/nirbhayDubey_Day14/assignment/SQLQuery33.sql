USE AssignmentDay37;
GO

--Create an insert trigger on CourseEnrolled Table, record should be updated in TotalFees Field on the Student table for the respective student.

CREATE TRIGGER tr_CourseEnrolled_ForInsert ON CourseEnrolled
FOR INSERT
AS
BEGIN
	DECLARE @StudentId int
	DECLARE @CourseId int
	DECLARE @Count int
	DECLARE @Fees decimal(8,2)

	SELECT ROW_NUMBER() OVER(ORDER BY (SELECT 0)) AS 'CountTT',* into #TempTable FROM inserted;

	WHILE(EXISTS(SELECT CountTT FROM #TempTable))
	BEGIN
		SELECT @Count=CountTT,@StudentId=StudentID,@CourseId=CourseID FROM #TempTable; 

		SELECT @fees=TotalFees FROM Course WHERE CourseID=@CourseId;

		UPDATE Student SET TotalFees=TotalFees+@fees,RemainingAmt=RemainingAmt+@Fees WHERE StudentID=@StudentId;

		DELETE FROM #TempTable WHERE CountTT=@Count;
	END
END

INSERT INTO CourseEnrolled (StudentID,CourseID) VALUES			--THIS INSERTION IS ALREADY DONE
(1,2),
(2,2),
(3,1),
(4,1),
(4,2),
(5,6),
(5,4)
GO

--Create an insert trigger on FeePayment, record should be updated in RemainingAmt Field of the Student Table for the respective student.

CREATE TRIGGER tr_FeePayment_ForInsert ON FeePayment 
FOR INSERT
AS 
BEGIN
	DECLARE @StudentID int
	DECLARE @AmountPaid decimal(8,2)
	DECLARE @Count int

	SELECT ROW_NUMBER() OVER(ORDER BY (SELECT 0)) AS 'CountTT2',* INTO #TempTable2 FROM inserted;
	WHILE(EXISTS(SELECT CountTT2 FROM #TempTable2))
	BEGIN
		SELECT @Count=CountTT2,@StudentID=StudentID,@AmountPaid=AmountPaid FROM #TempTable2;
		
		UPDATE Student SET RemainingAmt=RemainingAmt-@AmountPaid WHERE StudentID=@StudentID;

		DELETE FROM #TempTable2 WHERE CountTT2=@Count;
	END
END

INSERT INTO FeePayment(StudentID,AmountPaid,DateofPayment) VALUES	--THIS INSERTION IS ALREADY DONE
(1,5000,'2021-03-01'),
(2,5000,'2021-02-15'),
(5,20000,'2021-02-10')
GO




--------------------------------------------------------------------------------------------------------

SELECT * FROM Student;
GO

SELECT * FROM CourseEnrolled;
GO

SELECT * FROM Course;
GO

SELECT * FROM FeePayment;
GO