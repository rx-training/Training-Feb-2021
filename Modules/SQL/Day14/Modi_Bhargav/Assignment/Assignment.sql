CREATE DATABASE Day14
USE Day14
CREATE TABLE StudentsData
         (
		 StudentID int CONSTRAINT StuIdpk PRIMARY KEY,
		 StudentName varchar(50),
		 TotalFees money ,
         RemaininAmt money
         )
SELECT * FROM StudentsData

CREATE TABLE Courses 
         (
          CourseID int CONSTRAINT CourIdpk PRIMARY KEY,
		  CourseName varchar(50),
		  TotalFees money
         )
SELECT * FROM Courses

CREATE TABLE CourseEnrolled
         (
		  StudentID int CONSTRAINT StudeIdfk FOREIGN KEY REFERENCES StudentsData(StudentID),
		  CourseID int CONSTRAINT CourIdfk FOREIGN KEY REFERENCES Courses(CourseID),
		 )
SELECT * FROM CourseEnrolled

CREATE TABLE FeePayment
         (
		 StudentID int CONSTRAINT StudetIdfk FOREIGN KEY REFERENCES StudentsData(StudentID),
		 AmountPaid money,
		 DateOfPayment date
		 )
SELECT * FROM FeePayment


/***** 1.Create an insert trigger on CourseEnrolled Table, record should be updated
         in TotalFees Field on the Student table for the respective student.*****/
		 SELECT * FROM CourseEnrolled
         SELECT * FROM StudentsData
		 SELECT * FROM Courses

		 CREATE TRIGGER trgTotalFees ON CourseEnrolled
		 FOR INSERT
         AS
		 BEGIN
		      SELECT * FROM inserted
	          DECLARE @TotFee decimal(10,0)
	          SELECT @TotFee = TotalFees FROM Courses WHERE CourseID = (SELECT CourseID FROM inserted)
			  PRINT @TotFee
	          UPDATE StudentsData SET TotalFees = 5000 + @TotFee WHERE StudentID = (SELECT StudentID FROM inserted)
         END
INSERT INTO CourseEnrolled VALUES(2,1)

/***** Create an insert trigger on FeePayment, record should be updated in RemainingAmt 
       Field of the Student Table for the respective student.*****/
	   SELECT * FROM FeePayment
	   SELECT * FROM StudentsData

	   CREATE TRIGGER trgRemainingAmt ON FeePayment 
	   FOR INSERT
	   AS
	   BEGIN
            DECLARE @TotFee decimal(10,0),@amoutpaid decimal(10,0)
			SELECT @TotFee = TotalFees FROM StudentsData WHERE StudentID = (SELECT StudentID FROM inserted)
			SELECT @amoutpaid = AmountPaid FROM FeePayment WHERE StudentID = (SELECT StudentID FROM inserted)
			UPDATE StudentsData SET RemaininAmt = @TotFee - @amoutpaid WHERE StudentID = (SELECT StudentID FROM inserted)
	   END

INSERT INTO FeePayment VALUES (1,13000,'2021-03-15')
INSERT INTO FeePayment VALUES (2,15500,'2021-03-16')








