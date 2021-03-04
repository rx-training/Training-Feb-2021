USE [TutorialDB];

CREATE TABLE JobHistory
(
	EmployeeId INT,
	StartDate DATE,
	EndDate DATE,
	JobId int,
	DepartmentId int,
	CONSTRAINT PKEployeeId PRIMARY KEY (EmployeeId)
);


SELECT * FROM JobHistory;

SELECT * FROM JobHistory WHERE Enddate='2008-11-11';

INSERT INTO JobHistory
VALUES (1, '12-02-2009', '12-02-2020',21,2),
(1, '12-02-2009', '12-02-2020',21,2),
(2, '12-03-2002', '12-02-2021',21,2),
(3, '12-04-2006', '12-02-2022',21,2),
(4, '12-05-2004', '12-02-2023',21,2),
(5, '12-06-2005', '12-02-2024',21,2)


ALTER TABLE JobHistory
DROP CONSTRAINT Ckdate;


ALTER TABLE JobHistory
ADD CONSTRAINT FkjobId FOREIGN KEY(JobId) REFERENCES Jobs(JobId);

--ALTER TABLE JobHistory
--DROP FOREIGN KEY FkjobId;

Select * from Jobs;



