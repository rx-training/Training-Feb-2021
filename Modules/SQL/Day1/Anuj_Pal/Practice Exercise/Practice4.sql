CREATE TABLE Employees(
EmployeeId varchar(5) UNIQUE,
EmployeeFname varchar(20),
EmployeeLname varchar(20),
EmployeeEmail varchar(100),
EmployeePhone varchar(12),
EmployeeHireDate DATE,
EmployeeJobId varchar(5),
EmployeeDeptId varchar(20)

FOREIGN KEY (EmployeeDeptId)  REFERENCES department(DepartmentID)
);

drop table Employees

select * from Employees

CREATE TABLE Department(
DepartmentID varchar(20) PRIMARY KEY
FOREIGN KEY (DepartmentID)  REFERENCES Job(JobID)
);

drop table Department

ALTER TABLE Department ADD DepartmentID varchar(20) PRIMARY KEY
FOREIGN KEY (DepartmentID)  REFERENCES Job(JobID)

select * from Department


CREATE TABLE Job(
JobID varchar(20) PRIMARY KEY
);

drop table Job
select * from Job 


insert into Employees values('1','anuj','pal','anujpal@gmail.com','6463836483','12-2-2021','1J','1D')
insert into Department values('1D')
insert into Job values('1D')
