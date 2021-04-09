CREATE TABLE Jobs (
	JobID int PRIMARY KEY NOT NULL,
	JobTitle varchar(50) DEFAULT '',
	MinSalary int NOT NULL DEFAULT 8000,
	MaxSalary int DEFAULT NULL
);
select * from Jobs

CREATE TABLE Employees (
	EmployeeID int PRIMARY KEY IDENTITY,
	FirstName varchar(50) NOT NULL,
	LastName varchar(50) NOT NULL,
	Email varchar(50) NOT NULL,
	PhoneNumber varchar(10) NOT NULL,
	HireDate date NOT NULL,
	JobID int NOT NULL,
	Salary varchar(50) NOT NULL,
	Commission int NOT NULL,
	ManagerID int NOT NULL
	CONSTRAINT fkJobID FOREIGN KEY (JobID) REFERENCES Jobs (JobID)
);

select * from Employees


CREATE TABLE CarModels (
	ModelID int PRIMARY KEY IDENTITY,
	ModelName varchar(50) NOT NULL,
	Price int NOT NULL,
	CarType varchar(50) NOT NULL,
	AvailableStock int NOT NULL,
	Sold int NOT NULL,
	Booked int NOT NULL,
	LaunchDate date NOT NULL,
);
select * from CarModels

CREATE TABLE Inventories (
	CarID int PRIMARY KEY IDENTITY,
	ModelID int NOT NULL,
	ManufactureDate date NOT NULL,
	CONSTRAINT fkModelID FOREIGN KEY (ModelID) REFERENCES CarModels (ModelID)
);
select * from Inventories


CREATE TABLE Sales (
	SaleID int PRIMARY KEY IDENTITY,
	CarID int NOT NULL,
	SalesmanID int NOT NULL,
	SalesmanCommission int NOT NULL,
	SaleDate date NOT NULL,
	CONSTRAINT fkCarID FOREIGN KEY (CarID) REFERENCES Inventories (CarID),
	CONSTRAINT fkSalesmanID FOREIGN KEY (SalesmanID) REFERENCES Employees (EmployeeID)
);

select * from Sales