/*3. Write a SQL statement to create a table named jobs including columns JobId,
 JobTitle, MinSalary and MaxSalary, and make sure that, the default value 
 for JobTitle is blank and MinSalary is 8000 and MaxSalary is NULL will be entered 
 automatically at the time of insertion if no value assigned for the 
specified columns.*/

CREATE TABLE Job(
       JobId int NOT NULL PRIMARY KEY,
	   JobTitle varchar(30) DEFAULT '',
	   MinSalary MONEY DEFAULT 8000,
	   MaxSalary MONEY DEFAULT NULL
);

INSERT INTO Job(JobId,JobTitle) VALUES(1,'ER')
INSERT INTO Job(JobId,JobTitle,MinSalary,MaxSalary) VALUES (2,'Trainee',2000,50000);

SELECT * FROM Job