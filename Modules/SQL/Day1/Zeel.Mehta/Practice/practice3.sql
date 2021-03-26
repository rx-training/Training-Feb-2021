CREATE TABLE Jobs
	(JobId int,
	JobTitle varchar(10) DEFAULT ' ',
	MinSalary decimal(10,0) DEFAULT 8000,
	MaxSalary decimal(10,0) DEFAULT NULL
	)
GO

SELECT * FROM Jobs

INSERT INTO Jobs (JobId, JobTitle, MinSalary, MaxSalary)
	VALUES (1,'Fresher', 9000, 11000)

INSERT INTO Jobs(JobId)
	VALUES (2)

INSERT INTO Jobs (JobId, JobTitle, MinSalary, MaxSalary)
	VALUES (3,'Manager', 14000, 20000)

INSERT INTO Jobs (JobId, MinSalary, MaxSalary)
	VALUES (4, 15000, 25000)

INSERT INTO Jobs (JobId, JobTitle, MaxSalary)
	VALUES (5,'Trainer', 30000)

INSERT INTO Jobs (JobId, JobTitle, MinSalary)
	VALUES (6,'Trainer', 12000)

