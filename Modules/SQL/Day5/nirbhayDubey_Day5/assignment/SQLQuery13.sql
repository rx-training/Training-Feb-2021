CREATE SCHEMA Dealer;
GO

CREATE TABLE Dealer.Cars(
	CarId int CONSTRAINT PkCarId PRIMARY KEY IDENTITY,
	Vin int CONSTRAINT UkVin UNIQUE NOT NULL,
	Make varchar(20) NOT NULL,
	Model varchar(20) NOT NULL,
	Year int NOT NULL,
	Mileage float NOT NULL,
	AskPrice int NOT NULL,
	InvoicePrice int NOT NULL
)

CREATE TABLE Dealer.Dealerships(
	DealerShipId int CONSTRAINT PkDealerShipId PRIMARY KEY IDENTITY,
	Name varchar(25) NOT NULL,
	Address varchar(50) NOT NULL,
	City varchar(20) NOT NULL,
	State varchar(20) NOT NULL
)

CREATE TABLE Dealer.SalesPersons(
	SalesPersonId int CONSTRAINT PkSalesPersonId PRIMARY KEY IDENTITY,
	Name varchar(25) NOT NULL,
)

CREATE TABLE Dealer.Customers(
	CustomerId int CONSTRAINT PkcustomerId PRIMARY KEY IDENTITY,
	Name varchar(25) NOT NULL,
	Address varchar(50) NOT NULL,
	City varchar(20) NOT NULL,
	State varchar(20) NOT NULL
)

CREATE TABLE Dealer.ReportsTo(
	ReportsToId int CONSTRAINT PkReportsToId PRIMARY KEY IDENTITY,
	SalesPersonId int CONSTRAINT FkReportSPId FOREIGN KEY REFERENCES Dealer.SalesPersons(SalesPersonId),
	ManagingSalesPersonId int CONSTRAINT FkReportMSPId FOREIGN KEY REFERENCES Dealer.SalesPersons(SalesPersonId)
)

CREATE TABLE Dealer.WorksAt(
	WorksAtId int CONSTRAINT PkWorksAtId PRIMARY KEY IDENTITY, 
	SalesPersonId int CONSTRAINT FkWorksSPId FOREIGN KEY REFERENCES Dealer.SalesPersons(SalesPersonId),
	DealerShipId int CONSTRAINT FkWorksDSId FOREIGN KEY REFERENCES Dealer.Dealerships(DealerShipId),
	MonthWorked varchar(20) NOT NULL,
	BaseSalaryForMonth int NOT NULL,
)

CREATE TABLE Dealer.Inventory(
	InventoryId int CONSTRAINT PkInventoryId PRIMARY KEY IDENTITY,
	Vin int CONSTRAINT FkInventoryVin FOREIGN KEY REFERENCES Dealer.Cars(Vin),
	DealerShipId int CONSTRAINT FkInventoryDId FOREIGN KEY REFERENCES Dealer.Dealerships(DealerShipId)
)

CREATE TABLE Dealer.Sales(
	SaleId int CONSTRAINT PkSaleId PRIMARY KEY IDENTITY,
	Vin int CONSTRAINT FkSaleVin FOREIGN KEY REFERENCES Dealer.Cars(Vin),
	CustomerId int CONSTRAINT FkSaleCId FOREIGN KEY REFERENCES Dealer.Customers(CustomerId),
	SalesPersonId int CONSTRAINT FkSaleSPId FOREIGN KEY REFERENCES Dealer.SalesPersons(SalesPersonId),
	DealerShipId int CONSTRAINT FkSaleDId FOREIGN KEY REFERENCES Dealer.Dealerships(DealerShipId),
	SalePrice int NOT NULL,
	SaleDate date NOT NULL
)

INSERT INTO Dealer.Cars (Vin,Make,Model,Year,Mileage,AskPrice,InvoicePrice) 
VALUES
(100,'Toyota','Prius',2019,20,4500000,4400000),
(101,'Toyota','Camry',2014,19,3900000,380000),
(102,'Toyota','Avanza',2012,20,600000,550000),
(103,'Honda','City',2012,18.4,1090000,1000000),
(104,'Chevrolet','Malibu',2014,20,1698000,1620000),
(105,'Ford','Endeavour',2014,13.9,2999000,2900000),
(106,'BMW','BMW 3',2013,16.13,4360000,4200000),
(108,'Audi','A4',2014,17.42,4234000,4200000);
GO

INSERT INTO Dealer.Dealerships (Name,Address,City,State)
VALUES
('Honda Sales','ABCD','Jaipur','Rajasthan'),
('Yamaha World','EFGH','Hyderabad','Telangana'),
('Concept Hyundai','IJKL','Surat','Gujarat'),
('Chirag Moters','MNOP','Ahmedabad','Gujarat');
GO

INSERT INTO Dealer.SalesPersons (Name) 
VALUES
('Rahul Suthar'),
('Prashant Parihar'),
('Nitish Sharma'),
('Yamit Thakkar'),
('Dhwani Modi'),
('Naveen Tiwari'),
('Zeel Ruparelia'),
('Nirav Patel'),
('Shubham Bhosle'),
('Rajesh Mali');
Go

INSERT INTO Dealer.Customers(Name,Address,City,State)
VALUES
('Vishal Prajapati','AABEBB','Ahmedabad','Gujarat'),
('Anirudh Ravichander','BWDCCD','Hyderabad','Telangana'),
('Nirbhay Dubey','VCSDER','Beawar','Rajasthan'),
('Neel Brahmbhatt','GRVSKH','Surat','Gujarat'),
('Dhwani Upadhyay','PEYXTI','Udaipur','Rajasthan'),
('Udita Dwivedi','LORCJS','Udaipur','Rajasthan'),
('Nisarg Upadhyay','LKMJDD','Gandhinagar','Gujarat'),
('Amit Shukla','RRMKSD','Mumbai','Maharashtra'),
('Dharmendra Tiwari','AABBB','New Delhi','Delhi'),
('Stenny Macwan','RPLOCS','Ujjain','Madhya Pradesh'),
('Niyati Mehta','QWCCVD','Ahmedabad','Gujarat'),
('Sonu Tiwari','XSWDRR','Banglore','Karnataka'),
('Pranay Maru','RUHUYY','Chandigarh','Haryana'),
('Archna Sharma','URBHSR','Gandhinagar','Gujarat'),
('Shubhash Jha','KDRHBV','Lucknow','Uttar Pradesh'),
('Jagrati Pandya','PLOIUI','Jaipur','Rajasthan');
GO

INSERT INTO Dealer.ReportsTo(SalesPersonId,ManagingSalesPersonId)
VALUES
(1,3),
(2,1),
(4,1),
(5,1),
(6,3),
(7,6),
(8,6),
(9,3),
(10,9);
GO

INSERT INTO Dealer.WorksAt(SalesPersonId,DealerShipId,MonthWorked,BaseSalaryForMonth)
VALUES
(1,4,'Jan',30000),
(2,1,'Jan',40000),
(3,1,'Jan',60000),
(4,2,'Jan',25000),
(5,3,'Jan',33000),
(6,1,'Jan',40000),
(7,3,'Jan',33000),
(8,1,'Jan',40000),
(9,4,'Jan',30000),
(10,4,'Jan',30000),
(1,4,'Feb',30000),
(2,1,'Feb',40000),
(3,1,'Feb',60000),
(4,2,'Feb',25000),
(5,3,'Feb',33000),
(6,1,'Feb',40000),
(7,3,'Feb',33000),
(8,1,'Feb',40000),
(9,4,'Feb',30000),
(10,4,'Feb',30000),
(1,1,'March',40000),
(2,1,'March',30000),
(3,4,'March',60000),
(4,1,'March',40000),
(5,3,'March',40000),
(6,3,'March',40000),
(7,3,'March',40000),
(8,2,'March',30000),
(9,2,'March',30000),
(10,2,'March',30000),
(1,2,'April',35000),
(2,1,'April',30000),
(3,4,'April',70000),
(4,2,'April',35000),
(5,3,'April',40000),
(6,1,'April',30000),
(7,3,'April',40000),
(8,3,'April',34000),
(9,3,'April',34000),
(10,4,'April',40000);
GO

INSERT INTO Dealer.Inventory(Vin,DealerShipId)
VALUES
(100,4),
(101,1),
(102,3),
(103,1),
(104,2),
(105,3),
(106,4),
(108,4);
GO

INSERT INTO Dealer.Sales(Vin,CustomerId,SalesPersonId,DealerShipId,SalePrice,SaleDate)
VALUES
(106,3	,3,	4,	4360000,'2020-04-04'),
(108,1	,1,	4,	4234000,'2020-02-12'),
(102,2	,5,	3,	600000,'2020-03-18'),
(101,4	,4,	1,	3900000,'2020-03-21'),
(106,2	,9,	4,	4360000,'2020-01-13'),
(104,6	,1,	2,	1698000,'2020-04-16'),
(105,7	,6,	3,	2999000,'2020-03-17'),
(102,9	,8,	3,	600000,'2020-04-25'),
(103,8	,6,	1,	1090000,'2020-02-19'),
(102,10	,7,	3,	600000,'2020-03-10'),
(101,12	,1,	1,	3900000,'2020-03-12'),
(103,14	,8,	1,	1090000,'2020-01-30'),
(104,13	,4,	2,	1698000,'2020-04-22'),
(108,16	,10,4,	4234000,'2020-02-05'),
(106,15	,1,	4,	4360000,'2020-01-15'),
(100,11	,3,	4,	4500000,'2020-03-27');
GO

SELECT * FROM Dealer.Cars;
Go

SELECT * FROM Dealer.Dealerships;
GO

SELECT * FROM Dealer.SalesPersons;
GO

SELECT * FROM Dealer.Customers;
GO

SELECT * FROM Dealer.ReportsTo;
GO

SELECT * FROM Dealer.WorksAt;
GO

SELECT * FROM Dealer.Inventory;
GO

SELECT * FROM Dealer.Sales;
GO