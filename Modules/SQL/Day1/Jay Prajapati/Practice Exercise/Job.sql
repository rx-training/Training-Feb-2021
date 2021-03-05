USE [TutorialDB]

CREATE TABlE Jobs
(
	JobId INT PRIMARY KEY,
	JobTitle nvarchar (20) DEFAULT '',
	MinSalary money DEFAULT 8000,
	MaxSalary money DEFAULT NULL,
);

SELECT * FROM Jobs;