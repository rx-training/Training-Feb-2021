	
		--------------sqldb_day14------------

	CREATE TABLE Students
	(
		StudentID INT ,
		StudentName VARCHAR(20),
		TotalFees INT,
		RemainingAmt INT
	)

	CREATE TABLE Course
	(
		CourseID INT ,
		CourseName VARCHAR(20),
		TotalFees INT 
	)

	CREATE TABLE CourseEnrolled
	(
		StudentID INT ,
		CourseID INT
	)

	CREATE TABLE FeePayment
	(
		StudentID INT ,
		AmountPaid INT,
		DateofPayment date
	)