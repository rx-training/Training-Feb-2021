CREATE TABLE JobHistory1 (
	EmployeeId decimal(6,0) NOT NULL,
	StartDate varchar(20) NOT NULL,
	End_Date varchar(20) NOT NULL,
	Job_Id  varchar(20) NOT NULL,
	Department_Id decimal(6,0) PRIMARY KEY,
);	

select * from JobHistory1

INSERT INTO JobHistory1 VALUES (1,CONVERT(varchar(20),GETDATE(),101),
CONVERT(varchar(20),GETDATE(),103),001,1)

INSERT INTO JobHistory1 VALUES (3,CONVERT(varchar(20),'2018-12-15',103),
CONVERT(varchar(20),'2020-12-15',103),001,3)

INSERT INTO JobHistory1 VALUES (2,CONVERT(varchar(20),'02/08/2018',103),
CONVERT(varchar(20),'22/08/2020',103),231,11)

DELETE FROM JobHistory WHERE EmployeeId=2 ;