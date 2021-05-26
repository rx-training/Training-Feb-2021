/* Write a SQL statement to add a foreign key constraint named fk_job_id on JobId column of JobHistory table referencing to the 
primary key JobId of jobs table. */
ALTER TABLE JobHistories ADD CONSTRAINT fk_job_id PRIMARY KEY (JobID)
GO

/* Write a SQL statement to drop the existing foreign key fk_job_id from JobHistory table on JobId column which is 
referencing to the JobId of jobs table. */
ALTER TABLE JobHistories DROP CONSTRAINT fk_job_id
GO

--Write a SQL statement to add a new column named location to the JobHistory table.
ALTER TABLE JobHistories ADD Location varchar(20);
GO

SELECT * FROM JobHistories
GO