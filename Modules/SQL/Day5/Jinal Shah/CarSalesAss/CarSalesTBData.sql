CREATE TABLE car 
(
	carid INT,
	vin INT,
	make VARCHAR(20),
	model VARCHAR(20),
	year INT,
	mileage INT,
	askprice INT,
	invoiceprice INT
);

SELECT * FROM car 

DELETE FROM car 

INSERT INTO car  VALUES
(1,12,'Toyota','Prius',2019,23.91,52.08,45.09),
(2,112,'Hyundai','verna',2020,25.10,26.80,23.94),
(3,12,'Tata','sumo',2021,14.65,8.08,5.26),
(4,12,'maruti','swift',2019,23.2,11.48,5.93)

-------------------------TABLE DealerShip ---------------------

CREATE TABLE dealership  
(
	dealershipid INT,
	name VARCHAR(20),
	address VARCHAR(100),
	city VARCHAR(20),
	state VARCHAR(20)
)

SELECT * FROM dealership 

DELETE FROM dealership 

INSERT INTO dealership  VALUES
(1,'honda sales','Ram Bunglows','Ahmedabad','Gujarat'),
(2,'yamaha world','Balmukund squar','Gandhinagar','Gujarat'),
(3,'concept hyundai','Shiv Appartment','Ujjain','Madhya Pradesh'),
(4,'honda','Pooja Recedency','Mumbai','Maharashtra')


----------------------TABLE SalsePerson------------------------

CREATE TABLE salesperson 
(
	salespersonid INT PRIMARY KEY,
	name VARCHAR(20)
)

SELECT * FROM salesperson 

INSERT INTO salesperson  VALUES 
(1,'Viraj'),
(2,'Harsh'),
(3,'Mihir'),
(4,'Sahil')

-------------------------TABLE Customer-----------------------

CREATE TABLE customer 
(
	customerid INT PRIMARY KEY,
	name VARCHAR(20),
	address VARCHAR(100),
	city VARCHAR(20),
	state VARCHAR(20)
)

SELECT * FROM customer

INSERT INTO customer VALUES
(1,'Nayan','Umiya Bunglows','Ahmedabad','Gujarat'),
(2,'Hardik','Pratharna Exotica','Gandhinagar','Gujarat'),
(3,'Naitik','Hari Nivas','Ujjain','Madhya Pradesh'),
(4,'Dhruv','Aadarsh Ternaments','Ahmedabad','Gujarat'),
(5,'Raj','Balmukund Square','Gandhinagar','Gujarat')


--------------------------TABLE ReportsTo-----------------------

CREATE TABLE reportsto (
	reportstoid  INT PRIMARY KEY,
	salespersonid INT,
	managingsalespersonid INT
)


---------------------------TABLE WorksAt-------------------------


CREATE TABLE worksat (
	worksatid INT PRIMARY KEY, 
	salespersonid INT,
	dealershipid INT,
	monthworked varchar(20),
	basesalaryformonth INT,
)


--------------------------TABLE Inventory----------------

CREATE TABLE inventory (
	inventoryid INT PRIMARY KEY,
	vin INT,
	dealershipid INT
)

-----------------------------TABLE Sales-------------------

CREATE TABLE sale (
	saleid INT PRIMARY KEY,
	vin INT,
	customerid INT,
	salespersonid INT,
	dealershipid INT,
	saleprice INT,
	saledate date 
)