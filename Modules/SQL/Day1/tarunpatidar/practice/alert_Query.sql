ALTER TABLE JobHistories ADD CONSTRAINT FK_JOB_ID FOREIGN KEY (JOBID) REFERENCES Jobs(JObID);

ALTER TABLE Jobhistories DROP CONSTRAINT FK_JOB_ID;

ALTER TABLE Jobhistories ADD location varchar(10);