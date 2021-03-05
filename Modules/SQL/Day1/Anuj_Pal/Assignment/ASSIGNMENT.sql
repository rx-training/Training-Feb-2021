CREATE TABLE Employee(
EmployeeId varchar(10) PRIMARY KEY,
EmployeeName varchar(20),
EmployeeIid varchar(10),
EmployeePercentage varchar(3)

);


CREATE TABLE Inventory(
Iid varchar(10) PRIMARY KEY,
Iname varchar(50) ,
Isales varchar(20)
ALTER TABLE Inventory
ADD  TotalSales varchar(20);


);




kh.

CREATE TABLE Sales(
SalesId varchar(20) PRIMARY KEY,
TotalSales varchar(20), 
Eid varchar(10)FOREIGN KEY (Eid)  REFERENCES Employee(EmployeeId),
Iid varchar(10) FOREIGN KEY (Iid)  REFERENCES Inventory(Iid)
ALTER TABLE Sales
DROP COLUMN TotalSales;



);

select * from Sales

