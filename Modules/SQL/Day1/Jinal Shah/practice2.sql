CREATE TABLE JobHistory (
	EmployeeId decimal(6,0) NOT NULL,
	StartDate varchar(20) NOT NULL,
	End_Date varchar(20) NOT NULL,
	Job_Id  varchar(20) NOT NULL,
	Department_Id decimal(6,0) NOT NULL,
);	

select * from JobHistory

INSERT INTO JobHistory VALUES (1,CONVERT(varchar(20),GETDATE(),103),
CONVERT(varchar(20),GETDATE(),103),001,1)

INSERT INTO JobHistory VALUES (1,CONVERT(varchar(20),'2018-12-15',103),
CONVERT(varchar(20),'2020-12-15',103),001,1)