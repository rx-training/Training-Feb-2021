/*You have been hired to create a relational database to support a car sales business. You need to store information on the business’s employees, inventory, 
and completed sales. You also need to account for the fact that each salesperson receives a different percentage of their sales in commission. What tables 
and columns would you create in your relational database, and how would you link the tables?*/

CREATE TABLE Employees(
EmployeeId int NOT NULL CONSTRAINT pkEmpId PRIMARY KEY,
EmployeeName varchar(20) NOT NULL,
)

CREATE TABLE Inventories(
InventoryId int NOT NULL CONSTRAINT pkInventoryId PRIMARY KEY,
InventoryName varchar(30) NOT NULL,
Price money NOT NULL,
)

CREATE TABLE Sales(
SalesId int NOT NULL CONSTRAINT pkSalesId PRIMARY KEY,
EmployeeId int NOT NULL CONSTRAINT fkEmpId FOREIGN KEY REFERENCES Employees(EmployeeId),
InventoryId int NOT NULL CONSTRAINT fkInventoryId FOREIGN KEY REFERENCES Inventories(InventoryId),
Amount money NOT NULL,
EmpPercentage float NOT NULL,
)