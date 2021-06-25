/* Lecture' work 

CREATE FUNCTION FullName
(@Firstname Varchar(50),
@lastName varchar(50))
RETURNS VARCHAR
BEGIN
declare @fullname VARCHAR(50);
 SET @fullname=@firstname+@lastname
return @fullname;
End*/

----------------------------Assignment---------------------------
CREATE TABLE STUDENT (
  STUDENT_ID INT,
  StudentName Varchar(50),
  TotalFees INT,
  RemainingAmt INT
  
);

CREATE TABLE COURSE(
	CourseID INT,
	CourseName VARCHAR(15),
	TotalFees INT,

	);

CREATE TABLE CourseEnrolled (
		StudentID INT,
		CourseID INT
		
);

CREATE TABLE FEEPAYMENT	(
   STUDENTId INT,
   AmountPaid INT,
   DateOfPayment datetime

);
/*Create an insert trigger on CourseEnrolled Table, record should be updated in TotalFees Field on the Student table for
the respective student.*/

CREATE TRIGGER TrgInsertCourseEnrolled
ON CourseEnrolled
For INSERT
AS
	DECLARE @STUDENTID INT ,@COURSEID INT ,@TOTALFEES INT
	SELECT @STUDENTID =StudentID,@COURSEID=CourseID FROM inserted

	SELECT @TOTALFEES =@TOTALFEES	
	FROM COURSE WHERE @COURSEID=CourseID

	UPDATE STUDENT	SET TotalFees =TotalFees +@TOTALFEES
	WHERE STUDENT_ID =@STUDENTID

/*Create an insert trigger on FeePayment, record should be updated in RemainingAmt Field of the Student Table for the 
respective student*/
CREATE TRIGGER Paymenttrigger ON FEEPAYMENT
FOR INSERT AS
	DECLARE @Stundent_Id INT, @Paid_Amount INT, @Amount_Remaining INT, @Total_Amount INT

	SELECT @Stundent_Id =StudentId,@Paid_Amount=AmountPaid FROM inserted

	SELECT @Total_Amount =TotalFees FROM STUDENT WHERE STUDENT_ID =@Stundent_Id
	
	SET @Amount_Remaining =@Total_Amount-@Paid_Amount

	UPDATE STUDENT
	SET RemainingAmt =@Amount_Remaining WHERE STUDENT_ID =@Stundent_Id
