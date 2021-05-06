CREATE DATABASE SQLDay14
USE SQLDay14

CREATE TABLE Students(
StudentID VARCHAR(20) PRIMARY KEY ,
StudentName VARCHAR(50),
TotalFees VARCHAR(10),
RemainingAmount VARCHAR(10)
)
ALTER TABLE FeesPayment ALTER COLUMN AmountPaid INT;

CREATE TABLE Cources(
CourceID VARCHAR(20) PRIMARY KEY ,
CourceName VARCHAR(50),
TotalFees VARCHAR(10)
)

CREATE TABLE CourceEnrolled(
StudentID VARCHAR(20) ,
CourceID VARCHAR(20)
PRIMARY KEY(StudentID,CourceID)
FOREIGN KEY (StudentID) REFERENCES Students(StudentID),
FOREIGN KEY (CourceID) REFERENCES Cources(CourceID)
)

CREATE TABLE FeesPayment(
StudentID VARCHAR(20),
AmountPaid VARCHAR(10),
DateOfPayment DATE
FOREIGN KEY (StudentID) REFERENCES Students(StudentID)
PRIMARY KEY(StudentID,DateOfPayment)

)




/*	QUERY 1)  Create an insert trigger on CourseEnrolled Table, record should be updated in TotalFees 
	Field on the Student table for the respective student.*/

		CREATE OR ALTER TRIGGER ForCourceEnrolled
		ON  CourceEnrolled
		AFTER INSERT
		AS
		BEGIN
		UPDATE Students
		SET TotalFees=TotalFees+(SELECT c.TotalFees FROM Cources c JOIN inserted i ON(c.CourceID=i.CourceID))WHERE StudentID=(SELECT StudentID FROM inserted)
		END
		GO
		
		INSERT INTO CourceEnrolled VALUES(1,4)

		

/*  QUERY 2)   Create an insert trigger on FeePayment, record should be updated in RemainingAmt Field of the
	Student Table for the respective student.*/




	CREATE OR ALTER TRIGGER ForFeesPayment
	ON FeesPayment
	AFTER INSERT
	AS
	BEGIN
	
	UPDATE Students
	SET RemainingAmount=RemainingAmount-(SELECT AmountPaid FROM inserted) WHERE StudentID=(SELECT StudentID FROM inserted)
	END 
	INSERT INTO FeesPayment VALUES(3,1000,'2021-04-04')
	Go

	--All the tables used in the task
	select * from Students
	select * from Cources
	select * from CourceEnrolled
	select * from FeesPayment
	


