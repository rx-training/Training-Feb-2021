ALTER TABLE JobHistories ADD CONSTRAINT fk_job_id PRIMARY KEY (JobID)

ALTER TABLE JobHistories DROP CONSTRAINT fk_job_id

ALTER TABLE JobHistories ADD Location varchar(20);

SELECT * FROM JobHistories