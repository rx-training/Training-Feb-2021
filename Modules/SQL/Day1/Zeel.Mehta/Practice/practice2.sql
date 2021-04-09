CREATE TABLE JobHistories
	(EmployeeID decimal(5,0) NOT NULL,
	StartDate date NOT NULL,
	EndDate varchar(20) NOT NULL,
	JobID int NOT NULL,
	DepartmentID varchar(3) NOT NULL
	)
GO

SELECT * FROM JobHistories


INSERT INTO JobHistories (EmployeeID,StartDate,EndDate,JobID,DepartmentID)
	VALUES (102,'2020-08-25',CONVERT (varchar,'09/02/2021'),21,'A02')

INSERT INTO JobHistories (EmployeeID,StartDate,EndDate,JobID,DepartmentID)
	VALUES (101,'2017-12-11',CONVERT (varchar,'13/12/2009'),11,'A11')

INSERT INTO JobHistories (EmployeeID,StartDate,EndDate,JobID,DepartmentID)
	VALUES (103,'2019-02-27',CONVERT (varchar,GETDATE(),103),21,'A02')

INSERT INTO JobHistories (EmployeeID,StartDate,EndDate,JobID,DepartmentID)
	VALUES (104,'2017-12-11',CONVERT (varchar,'27/02/1976'),14,'A05')

INSERT INTO JobHistories (EmployeeID,StartDate,EndDate,JobID,DepartmentID)
	VALUES (105,'2019-02-27',CONVERT (varchar,'07/05/1975'),05,'A10')
