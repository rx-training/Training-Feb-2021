CREATE SCHEMA Day14
GO

CREATE TABLE Day14.Students(
StudentID int CONSTRAINT Students_StudentID_PK PRIMARY KEY,
StudentName varchar(50),
TotalFees money CONSTRAINT Students_TotalFees_DEF DEFAULT 0,
RemainingAmt money CONSTRAINT Students_RemainingAmt_DEF DEFAULT 0
)

CREATE TABLE Day14.Courses (
CourseID int CONSTRAINT Courses_CourseID_PK PRIMARY KEY,
CourseName varchar(50),
TotalFees money
)

CREATE TABLE Day14.CourseEnrolled(
StudentID int CONSTRAINT CourseEnrolled_StudentID_FK FOREIGN KEY REFERENCES Day14.Students(StudentID),
CourseID int CONSTRAINT CourseEnrolled_CourseID_FK FOREIGN KEY REFERENCES Day14.Courses(CourseID)
)

CREATE TABLE Day14.FeePayment (
StudentID int CONSTRAINT FeePayment_StudentID_FK FOREIGN KEY REFERENCES Day14.Students(StudentID),
AmountPaid money,
DateofPayment date
)

