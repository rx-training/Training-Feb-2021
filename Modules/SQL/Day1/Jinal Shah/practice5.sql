ALTER TABLE JobHistory1 ADD CONSTRAINT fk_job_id FOREIGN KEY (Job_Id) 
REFERENCES Jobs2(JobId) ON UPDATE CASCADE
ON DELETE CASCADE;

ALTER TABLE JobHistory1 DROP CONSTRAINT fk_job_id;

ALTER TABLE JobHistory1 ADD location varchar(20);