CREATE SCHEMA Dealer;
GO

CREATE TABLE Dealer.Cars(
	CarId int CONSTRAINT PkCarId PRIMARY KEY IDENTITY,
	Vin int CONSTRAINT UkVin UNIQUE NOT NULL,
	Make varchar(20) NOT NULL,
	Model varchar(20) NOT NULL,
	Year int NOT NULL,
	Mileage int NOT NULL,
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
