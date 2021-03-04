CREATE TABLE Jobs ( 
JobId varchar(10), 
JobTitle varchar(35) DEFAULT ' ', 
MinSalary  decimal(6,0) DEFAULT 8000 
CONSTRAINT Min_sal CHECK(MinSalary>=8000), 
MaxSalary decimal(6,0) DEFAULT NULL
);

select * from dbo.Jobs;

drop table Jobs;

insert into Jobs (JobId, JobTitle ,MinSalary ,MaxSalary) 
VALUES ('a21','developer',9000,47000);

insert into Jobs (JobId, JobTitle ,MinSalary ,MaxSalary) 
VALUES ('a21','developer',7000,50000);

insert into Jobs (JobId, JobTitle) 
VALUES ('h1','analyst');