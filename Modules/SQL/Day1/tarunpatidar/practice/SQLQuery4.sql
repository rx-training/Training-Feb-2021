CREATE TABLE Jobs (
	JobID int PRIMARY KEY NOT NULL,
	JobTitle varchar(50) DEFAULT '',
	MinSalary int NOT NULL DEFAULT 8000,
	MaxSalary int DEFAULT NULL
);