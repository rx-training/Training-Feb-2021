/*3. Write a SQL statement to create a table named JobHistory including columns
 EmployeeId, StartDate, End_Eate, Job_Id and Department_Id and make sure that
  the value against column EndDate will be entered at the time of insertion to
   the format like ‘–/–/—-‘.*/

                           /* ALTER USE*/
/* 1.Write a SQL statement to add a foreign key constraint named fk_job_id on JobId column 
       of JobHistory table referencing to the primary key JobId of jobs table.
   2.Write a SQL statement to drop the existing foreign key fk_job_id from JobHistory table 
       on JobId column which is referencing to the JobId of jobs table.
   3.Write a SQL statement to add a new column named location to the JobHistory table.
*/
CREATE TABLE JobHistory (
     EmployeeId int NOT NULL PRIMARY KEY,
	 StartDate varchar(15) NOT NULL,
	 EndDate varchar(15) NOT NULL, 
	 JobId int NOT NULL,
	 DepartmentID int NOT NULL,
	 CONSTRAINT chEndDate CHECK(EndDate LIKE('[0-3][0-9]/[0-1][0-9]/[0-9][0-9][0-9][0-9]'))
);
SELECT * FROM JobHistory

ALTER TABLE JobHistory ADD CONSTRAINT FK_JOB_ID fOREIGN KEY (JobId) REFERENCES Job(JobId);
ALTER TABLE JobHistory DROP CONSTRAINT FK_JOB_ID;
ALTER TABLE JobHistory ADD Location varchar(20);