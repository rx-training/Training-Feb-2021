CREATE DATABASE Companies;

CREATE TABLE Cars(
CarId INT NOT NULL CONSTRAINT PKCarId PRIMARY KEY,
Vin INT NOT NULL CONSTRAINT UKVin UNIQUE,
Make varchar(20) NOT NULL,
Model varchar(20) NOT NULL,
years date NOT NULL,
mileage decimal(5) NOT NULL,
AskPrice INT NOT NULL,
InvoicePrice INT NOT NULL,
)

CREATE TABLE Dealerships(
DealershipId INT NOT NULL CONSTRAINT PKDealershipId PRIMARY KEY,
Names varchar(25) NOT NULL,
Addresses varchar(25) NOT NULL,
City varchar(15) NOT NULL,
States varchar(15) NOT NULL
)

CREATE TABLE SalesPersons(
SalesPersonId INT NOT NULL CONSTRAINT PKSalePersonId PRIMARY KEY,
Names varchar(25) NOT NULL 
)

CREATE TABLE Customers(
CustomerId INT NOT NULL CONSTRAINT PKCustomerId PRIMARY KEY,
Names varchar(25) NOT NULL,
Addresses varchar(25) NOT NULL,
City varchar(15) NOT NULL,
States varchar(15) NOT NULL
)

CREATE TABLE ReprtSto(
reportstoid INT NOT NULL CONSTRAINT PKreportstoid PRIMARY KEY,
SalespersonId INT NOT NULL CONSTRAINT FKSalePersonId FOREIGN KEY REFERENCES SalesPersons(SalesPersonId),
managingsalespersonid INT NOT NULL)

CREATE TABLE WorkSat(
worksatid INT NOT NULL CONSTRAINT PKworksatid PRIMARY KEY,
SalespersonId INT NOT NULL CONSTRAINT FKSalePersons FOREIGN KEY REFERENCES SalesPersons(SalesPersonId),
DealershipId INT NOT NULL CONSTRAINT FKDealershipId FOREIGN KEY REFERENCES Dealerships(DealershipId),
monthworked DATE NOT NULL,
basesalaryformonth INT NOT NULL
)

CREATE TABLE Inventories(
InventoryId INT NOT NULL CONSTRAINT PKInventoryId PRIMARY KEY ,
Vin INT NOT NULL CONSTRAINT FKVin FOREIGN KEY REFERENCES Cars(Vin),
DealershipId INT NOT NULL CONSTRAINT FKDealership FOREIGN KEY REFERENCES Dealerships(DealershipId)
)

CREATE TABLE Sale 
(
SaleId INT NOT NULL CONSTRAINT PKSaleId PRIMARY KEY, 
Vin INT NOT NULL CONSTRAINT FKVins FOREIGN KEY REFERENCES Cars(Vin),
CustomerId INT NOT NULL CONSTRAINT FKCustomerId FOREIGN KEY REFERENCES Customers(CustomerId),
SalespersonId INT NOT NULL CONSTRAINT FKSalePerson FOREIGN KEY REFERENCES SalesPersons(SalesPersonId),
DealershipId INT NOT NULL CONSTRAINT FKDealerships FOREIGN KEY REFERENCES Dealerships(DealershipId),
SalePrice INT NOT NULL,
SaleDate DATE NOT NULL
)


----Enter the values in the table with the help of UI:



--1. Find the names of all salespeople who have ever worked for the company at any dealership:

SELECT S.Names FROM SalesPersons  AS S INNER JOIN WorkSat AS W ON S.SalesPersonId = W.SalespersonId 
INNER JOIN Dealerships AS D ON D.DealershipId = W.DealershipId;


--2. List the Name, Street Address, and City of each customer who lives in Ahmedabad.
SELECT * FROM Customers;

SELECT c.Names ,c.Addresses ,c.City FROM Customers AS  c WHERE c.City = 'Ahemdabad';

--3. List the VIN, make, model, year, and mileage of all cars in the inventory of the dealership named "Hero Honda Car World".


SELECT C.Vin , C.Make , C.Model , C.Years , C.Mileage FROM Inventories AS I 
INNER JOIN Dealerships AS D ON I.DealershipId = D.DealershipId
INNER JOIN CARS AS C  ON I.Vin = C.Vin
WHERE D.Names = 'Hero Honda Car World';


--4.  List names of all customers who have ever bought cars from the dealership named "Concept Hyundai".

SELECT * FROM Cars;
SELECT * FROM Dealerships;
SELECT * FROM Customers;

SELECT C.Names, D.Names[Dealaership Name] FROM Customers AS C INNER JOIN Sale S ON C.CustomerId = S.CustomerId 
INNER JOIN Dealerships D ON S.DealershipId = D.DealershipId
WHERE D.Names = 'Concept Hyundai';



/*--5. For each car in the inventory of any dealership, list the VIN, make, model, and year of the car, 
along with the name, city, and state of the dealership whose inventory contains the car.*/

SELECT I.Vin ,C.Make , C.Model ,C.Years ,D.Names , D.City , D.States FROM Inventories I 
INNER JOIN Dealerships D ON I.DealershipId = D.DealershipId 
INNER JOIN Cars C ON C.Vin = I.Vin ORDER BY I.Vin;


--6. Find the names of all salespeople who are managed by a salesperson named "Adam Smith".

SELECT SP.Names FROM SalesPersons AS SP 
INNER JOIN ReprtSto AS R ON SP.SalespersonId = R.SalespersonId
WHERE R.managingsalespersonid = ( SELECT SalespersonId 
FROM SalesPersons 
WHERE Names = 'Adam Smith');

--7. Find the names of all salespeople who do not have a manager.

SELECT * FROM SalesPersons S WHERE S.SalesPersonId NOT IN 
(SELECT managingsalespersonid FROM ReprtSto);

--8.  Find the total number of dealerships.

SELECT COUNT(DealershipId) FROM Dealerships;

/*--9.  List the VIN, year, and mileage of all "Toyota Camrys" in the inventory o
f the dealership nameS "Toyota Performance". (Note that a "Toyota Camry" is indicated by the make being "Toyota" and the model being "Camry".)*/

		SELECT C.Vin , C.Years , C.Mileage FROM Inventories I 
		INNER JOIN Dealerships AS D ON I.DealershipId = D.DealershipId
		INNER JOIN Cars AS C ON C.Vin = I.Vin 
		WHERE D.Names = 'Toyota Perfomance' AND C.Make + ' ' + C.Model = 'TOYOTA CAMRY';


/* --10. Find the name of all customers who bought a car at a dealership located in a state other than 
the state in which they live.*/

SELECT C.Names , C.States , D.States FROM Customers C 
INNER JOIN Sale S ON c.CustomerId = S.CustomerId 
INNER JOIN Dealerships AS D ON D.DealershipId =S.DealershipId 
WHERE C.States != D.States;

--11. Find the name of the salesperson that made the largest base salary working at the dealership named "Ferrari Sales" during January 2010.

SELECT Names FROM (
SELECT DENSE_RANK() OVER (ORDER BY W.basesalarymonth DESC)[d_rank] , 
SP.SalesPersonId ,SP.Names , W.worksatid , W.monthworked , W.basesalaryformonth,
W.dealershipid , D.Names, D.Addresses, D.City , D.States 
FROM SalesPersons AS SP 
INNER JOIN WorkSat AS W ON W.SalespersonId = SP.SalespersonId
INNER JOIN Dealerships AS D ON D.DealershipId = W.DealershipId
WHERE D.Names = 'FERRARI SALES') [tbl_tmp]
INNER JOIN Sale S ON S.SalespersonId = tbl_tmp.SalespersonId 
WHERE d_rank = 1 AND YEAR(S.SaleDate) = 2010 AND DATENAME(MM, S.SaleDate) = 'Febuary';

SELECT * FROM Sale;
select * from WorkSat;


/* List the name, street address, city, and state of any customer who has bought more than 
two cars from all 
dealerships combined since January 1, 2010. */

SELECT C.Names , C.Addresses ,C.City, C.States
FROM ( SELECT DENSE_RANK() OVER (PARTITION BY CustomerId ORDER BY SaleId  ASC) [d_rank], * 
FROM SALE ) [tbl_tmp]
INNER JOIN Customers C ON tbl_tmp.CustomerId = c.CustomerId
WHERE d_rank >= 2  AND SaleDate >= '2010-01-01';


/*---13. List the name, salesperson ID, and total sales amount for each salesperson who has 
ever sold at least one car. The total sales amount for a salesperson is the sum 
of the sale prices of all cars ever sold by that salesperson.*/

SELECT SP.salespersonid ,SP.Names, SUM(S.SalePrice)
FROM Sale AS S 
INNER JOIN SalesPersons AS SP ON S.SalespersonId = SP.SalesPersonId 
GROUP BY SP.SalesPersonId, SP.Names;

/*--14. Find the names of all customers who bought cars during 2010 who were also salespeople during 2010. For the purpose of this query,
assume that no two people have the same name.*/

SELECT C.Names FROM Customers AS C 
INNER JOIN SalesPersons AS SP ON C.Names = SP.NAMES 
INNER JOIN Sale S ON S.SalespersonId = SP.SalesPersonId 
WHERE YEAR(S.SaleDate) = 2010; 

/*--15. Find the name and salesperson ID of the salesperson who sold the most cars for the company 
at dealerships located in Gujarat between March 1, 2010 and March 31, 2010.*/

SELECT SP.* 
FROM SalesPersons  AS SP 
INNER JOIN Sale AS S ON S.SalespersonId = SP.SalesPersonId 
INNER JOIN Dealerships AS D ON D.DealershipId = S.DealershipId
WHERE SP.SalesPersonId IN ( 
SELECT SalesPersonId FROM Sale GROUP BY SalesPersonId 
HAVING COUNT(SalesPersonId) =
(
SELECT MAX(countid)
FROM ( SELECT COUNT(SalesPersonId) countid
FROM Sale 
GROUP BY SalespersonId ) tbl
)
)
AND D.States = 'Gujarat' AND S.SaleDate >= '2010-03-01' AND 
S.SaleDate <= '2010-03-31' ;

/*--16.  Calculate the payroll for the month of March 2010.
	* The payroll consists of the name, salesperson ID, and gross pay for each salesperson who worked that month.
        * The gross pay is calculated as the base salary at each dealership employing the salesperson that month, along with the total commission for the salesperson that month.
        * The total commission for a salesperson in a month is calculated as 5% of the profit made on all cars sold by the salesperson that month.
        * The profit made on a car is the difference between the sale price and the invoice price of the car. (Assume, that cars are never sold for less than the invoice price.)*/

		SELECT SP.SalesPersonId, SP.Names,
		SUM(ISNULL(W.basesalaryformonth,0) + ISNULL(((C.AskPrice -C.InvoicePrice) *5/ 100) ,0 )) [Gross Pay]
		FROM SalesPersons SP  LEFT JOIN Sale AS S ON S.SalespersonId = SP.SalesPersonId 
		LEFT JOIN Cars AS C ON C.Vin = S.Vin 
		RIGHT JOIN WorkSat W ON W.SalespersonId = SP.SalesPersonId 
		WHERE DATENAME(MM, S.SaleDate) = 'March' AND YEAR(S.SaleDate) = 2010 
		GROUP BY SP.SalesPersonId, SP.Names 
		ORDER BY SP.SalesPersonId ; 
