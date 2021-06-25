USE SQLDay2

CREATE TABLE Student
(
	StudentID INT PRIMARY KEY,
	StudentName NVARCHAR(30),
	TotalFees MONEY,
	RemainingAmt MONEY
)
GO
INSERT INTO Student
VALUES(1,'Jhone Doe',0,0),
	  (2,'Adam Smith',0,0)


CREATE TABLE Course
(
	CourseID INT PRIMARY KEY,
	CourseName NVARCHAR(30),
	TotalFees MONEY
)
GO
INSERT INTO Course
VALUES(1,'JAVA',1000),
	(2,'Python',2000)

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

/*Create an insert trigger on CourseEnrolled Table,
record should be updated in TotalFees Field on the 
Student table for the respective student.*/

ALTER TRIGGER trgInsCrsen
ON CourseEnrolled
FOR INSERT
AS
 UPDATE Student
  SET TotalFees = 
	((SELECT TotalFees 
	  FROM Course 
		WHERE CourseID = 
		  (SELECT CourseID 
			 FROM inserted)) + (SELECT TotalFees 
								  FROM Student 
									WHERE StudentID = (SELECT StudentID FROM inserted)))
  WHERE StudentID = (SELECT StudentID FROM inserted);

UPDATE Student
 SET RemainingAmt = 
  (SELECT TotalFees 
	FROM Course 
	WHERE CourseID = 
	    (SELECT CourseID 
		  FROM inserted)) + (SELECT RemainingAmt 
							  FROM Student 
							  WHERE StudentID = (SELECT StudentID FROM inserted))
	WHERE StudentID = (SELECT StudentID FROM inserted);

	

INSERT INTO CourseEnrolled
VALUES(2,1)

/*Create an insert trigger on FeePayment, record 
should be updated in RemainingAmt Field of the 
Student Table for the respective student.*/

ALTER TRIGGER trgInsFeePay
ON FeePayment
FOR Insert
AS
 UPDATE Student
  SET RemainingAmt = 
	((SELECT RemainingAmt 
	  FROM Student 
	    WHERE StudentID = 
		  (SELECT StudentID 
		    FROM inserted))- (SELECT AmountPaid 
								FROM inserted))
  WHERE StudentID = (SELECT StudentID FROM inserted)


INSERT INTO FeePayment
VALUES(2,2000,'03-05-1998')



-- Extra 

ALTER TRIGGER trgDel
ON CourseEnrolled
FOR DELETE
AS
	
	
	DELETE FROM FeePayment
	DELETE FROM Course
	DELETE  FROM Student;


DELETE FROM CourseEnrolled


