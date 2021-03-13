CREATE TABLE Cars (
carId int NOT NULL CONSTRAINT pkCarId PRIMARY KEY, 
vin int NOT NULL CONSTRAINT ukVin UNIQUE, 
make varchar(50) NOT NULL,
model varchar(50) NOT NULL,
year int, 
mileage int, 
askPrice money, 
invoiceprice money
)

CREATE TABLE Dealerships (
dealershipId int NOT NULL CONSTRAINT pkDealershipId PRIMARY KEY, 
name varchar(50) NOT NULL, 
address varchar(50),
city varchar(50),
state varchar(50)
)

CREATE TABLE SalesPersons (
salesPersonId int NOT NULL CONSTRAINT pkSalesPersonId PRIMARY KEY,
name varchar(50)
)

 CREATE TABLE Customers (
 customerId int NOT NULL CONSTRAINT pkCustomerId PRIMARY KEY,
 name varchar(50),
 address varchar(50),
 city varchar(50), 
 state varchar(50)
 )

CREATE TABLE ReportsTo (
reportstoId int NOT NULL CONSTRAINT pkReportsTo PRIMARY KEY,
salesPersonId int NOT NULL CONSTRAINT fkSalesPersondId FOREIGN KEY REFERENCES SalesPersons(salesPersonId),
managingSalesPersonId int NOT NULL CONSTRAINT fkManagingSalesPersondId FOREIGN KEY REFERENCES SalesPersons(salesPersonId)
)

CREATE TABLE WorksAt (
worksAtId int NOT NULL CONSTRAINT pkWorksAt PRIMARY KEY,
salesPersonId int NOT NULL CONSTRAINT fkWorkAtSalesPersondId FOREIGN KEY REFERENCES SalesPersons(salesPersonId),
dealershipId int  NOT NULL CONSTRAINT fkDealershipId FOREIGN KEY REFERENCES Dealerships(dealershipId), 
monthworked int,
basesalaryformonth money
)

CREATE TABLE Inventories (
inventoryId int CONSTRAINT pkInventoryId PRIMARY KEY,
vin int NOT NULL CONSTRAINT fkVin FOREIGN KEY REFERENCES Cars(vin),
dealershipId int NOT NULL CONSTRAINT fkInventoriesDealershipId FOREIGN KEY REFERENCES Dealerships(dealershipId)
)

CREATE TABLE Sales (
saleId int NOT NULL CONSTRAINT pkSaleId PRIMARY KEY,
vin int NOT NULL CONSTRAINT fkSalesVin FOREIGN KEY REFERENCES Cars(vin),
customerId int CONSTRAINT fkCustomerId FOREIGN KEY REFERENCES Customers(customerId),
salesPersonId int CONSTRAINT fkSalesSalesPersonId FOREIGN KEY REFERENCES SalesPersons(salesPersonId), 
dealershipId int  NOT NULL CONSTRAINT fkSalesDealershipId FOREIGN KEY REFERENCES Dealerships(dealershipId),
salePrice money,
saleDate date)