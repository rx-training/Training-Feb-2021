--Create table for the Employees

CREATE TABLE Employee(
EmployeeId varchar(10) PRIMARY KEY,
EmployeeName varchar(20),
EmployeeIid varchar(10),
EmployeePercentage varchar(3)

);

-- Create table for the Inventory

CREATE TABLE Inventory(
Iid varchar(10) PRIMARY KEY,
Iname varchar(50) ,
Isales varchar(20),
TotalSales varchar(20)


);

-- create table for the Sales

CREATE TABLE Sales(
SalesId varchar(20) PRIMARY KEY,

Eid varchar(10)FOREIGN KEY (Eid)  REFERENCES Employee(EmployeeId),
Iid varchar(10) FOREIGN KEY (Iid)  REFERENCES Inventory(Iid)




);


