CREATE DATABASE AssignmentDay25
GO

USE AssignmentDay25;
GO

--You have been hired to create a relational database to support a car sales business. 
--You need to store information on the business’s 
--employees, 
--inventory,
--completed sales. 
--You also need to account for the fact that each salesperson receives a different percentage of their sales in commission. 
--What tables and columns would you create in your relational database, and how would you link the tables?


CREATE TABLE Employees(
	EmpId INT CONSTRAINT PKEmpId PRIMARY KEY IDENTITY,
	EmpName VARCHAR(50) NOT NULL,
	Commission INT NOT NULL,
)
GO

CREATE TABLE Inventory(
	CarId INT CONSTRAINT PKCarId PRIMARY KEY IDENTITY,
	CarName VARCHAR(50) NOT NULL,
	CarType VARCHAR(50) NOT NULL,
	NumberOfCar INT NOT NULL,
)
GO

CREATE TABLE Sales(
	SaleId INT CONSTRAINT PKSaleId PRIMARY KEY IDENTITY,
	SaleDate Date NOT NULL,
	SaleEmpId INT CONSTRAINT FKSEmpId FOREIGN KEY REFERENCES Employees(EmpId),
	SaleCarId INT CONSTRAINT FKSCarId FOREIGN KEY REFERENCES Inventory(CarId),
	NumberOfSale INT NOT NULL,
)
GO