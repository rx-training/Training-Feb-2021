
------sqldb1----------

CREATE TABLE Jobs2 ( 
JobId varchar(20) PRIMARY KEY, 
JobTitle varchar(35) DEFAULT ' ', 
MinSalary  decimal(6,0) DEFAULT 8000 
CONSTRAINT Min_sal CHECK(MinSalary>=8000), 
MaxSalary decimal(6,0) DEFAULT NULL
);

select * from dbo.Jobs2;

drop TABLE Jobs2;

insert into Jobs2 (JobId, JobTitle ,MinSalary ,MaxSalary) 
VALUES ('a21','developer',9000,47000);

insert into Jobs2 (JobId, JobTitle ,MinSalary ,MaxSalary) 
VALUES ('a21','developer',7000,50000);

insert into Jobs2 (JobId, JobTitle) 
VALUES ('h1','analyst');