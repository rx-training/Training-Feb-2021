CREATE DATABASE Day13
GO

USE Day13
GO

/*Day13*/


CREATE TABLE Students
(
	StudentID varchar(20),
	StudentName varchar(20),
	TotalFees INT ,
	RemainingAmt INT
)

CREATE TABLE Courses
(
	CourseID varchar(20),
	CourseName varchar(20),
	TotalFees INT
)

CREATE TABLE CourseEnrolled
(
	StudentID varchar(20),
	CourseID varchar(20)
)

CREATE TABLE FeePayment
(
	StudentID varchar(20),
	AmountPaid INT,
	DateofPayment Date
)

INSERT INTO Students VALUES('101','Nayan',200,100),
							('102','Parag',300,50),
							('103','Pritesh',400,150)

INSERT INTO Courses VALUES('11','Html',200),
							('12','Javascript',300),
							('13','Java',400)

INSERT INTO CourseEnrolled VALUES('101','11'),
								('102','12'),
								('103','13')

INSERT INTO FeePayment VALUES('101',200,'2020-01-19'),
							('102',300,'2020-01-20'),
							('103',400,'2020-01-21')


/*Create an insert trigger on CourseEnrolled Table, record should be updated in TotalFees Field on the Student table for the respective student*/

	CREATE TRIGGER Enrolledtrigger ON CourseEnrolled
	FOR INSERT AS
	BEGIN
		UPDATE Students SET TotalFees = TotalFees + (SELECT c.TotalFees FROM inserted i JOIN Courses c ON i.CourseID = c.CourseID) WHERE StudentID = (SELECT StudentID FROM inserted)

	END
	GO

	INSERT INTO CourseEnrolled VALUES('103','12')

	SELECT * FROM Students

/*Create an insert trigger on FeePayment, record should be updated in RemainingAmt Field of the Student Table for the respective student*/

	CREATE TRIGGER Paymenttrigger ON FeePayment
	FOR INSERT AS
	BEGIN
		UPDATE Students SET RemainingAmt = (SELECT s.TotalFees - i.AmountPaid FROM inserted i JOIN Students s ON i.StudentID = s.StudentID) WHERE StudentID = (SELECT StudentID FROM inserted)

	END
	GO

	INSERT INTO FeePayment VALUES('101',50,'2020-01-19')

	SELECT * FROM Students
