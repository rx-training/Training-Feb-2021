USE learn

CREATE TABLE Cars
(CarId INT UNIQUE NOT NULL,
VIN INT PRIMARY KEY,
Make NVARCHAR(20),
Modal NVARCHAR(20),
Year INT,
Mileage DECIMAL(3,2),
AskPrice MONEY,
InvoicePrice MONEY);

ALTER TABLE Cars
ALTER COLUMN Mileage FLOAT;

Select * from Cars

INSERT INTO Cars
VALUES(1,41,'Maruti','Swift',2013,26,2000,7000),
(2,11,'Toyota','Camry',2010,23,1000,9500),
(3,31,'Maruti Suzuki','Breeza',2013,25,2000,7500)



SELECT
TABLE_CATALOG,
TABLE_SCHEMA,
TABLE_NAME,
COLUMN_NAME,
DATA_TYPE
FROM INFORMATION_SCHEMA.COLUMNS
		
CREATE TABLE Dealerships
(DealerShipId int CONSTRAINT PkDealerShipId PRIMARY KEY NOT NULL,
Name varchar(25) NOT NULL,
Address varchar(50) NOT NULL,
City varchar(20) NOT NULL,
State varchar(20) NOT NULL)

INSERT INTO Dealerships
VALUES(1,'Toyota','abadnagar','Ahmedabad','Gujarat'),
(2,'Ferrari','SG Highway','Ahmedabad', 'Gujarat'),
(3,'Car World','sola','Ahmedabad','Gujarat'),
(4,'Concept','Ahmedabad Highway','Ahmedabad','Gujarat');


SELECT * FROM Dealerships

CREATE TABLE SalesPersons
(SalesPersonId int CONSTRAINT PkSalesPersonId PRIMARY KEY,
Name varchar(25) NOT NULL,)

INSERT INTO SalesPersons
VALUES(1,'Adam Smith'),
        (2,'Jhon Doe');



SELECT SalesPersonId,Name
FROM SalesPersons 
WHERE SalesPersonId = (SELECT SalesPersonId
FROM Sales
GROUP BY SalesPersonId
HAVING COUNT(SalesPersonId) >= ALL(SELECT COUNT(SalesPersonId)
FROM Sales
WHERE SaleDate BETWEEN 'March 1, 2010' and 'March 31, 2010'
GROUP BY SalesPersonId
))


SELECT * FROM SalesPersons

CREATE TABLE Customers
(CustomerId int CONSTRAINT PkcustomerId PRIMARY KEY ,
Name varchar(25) NOT NULL,
Address varchar(50) NOT NULL,
City varchar(20) NOT NULL,
State varchar(20) NOT NULL)



INSERT INTO Customers
VALUES(1,'Abdul','Malabar','Mumbai','Maharastra'),
(2,'Jhon','Vastrapur','Ahmedabad','Gujarat');


CREATE TABLE ReportsTo
(ReportsToId int CONSTRAINT PkReportsToId PRIMARY KEY ,
SalesPersonId int CONSTRAINT FkReportSPId FOREIGN KEY REFERENCES SalesPersons(SalesPersonId),
ManagingSalesPersonId int CONSTRAINT FkReportMSPId FOREIGN KEY REFERENCES SalesPersons(SalesPersonId))

INSERT INTO ReportsTo
VALUES (1,1,1),
(2,2,2)


CREATE TABLE WorksAt(
WorksAtId int CONSTRAINT PkWorksAtId PRIMARY KEY , 
SalesPersonId int CONSTRAINT FkWorksSPId FOREIGN KEY REFERENCES SalesPersons(SalesPersonId),
DealerShipId int CONSTRAINT FkWorksDSId FOREIGN KEY REFERENCES Dealerships(DealerShipId),
MonthWorked varchar(20) NOT NULL,
BaseSalaryForMonth int NOT NULL,)


	DELETE from WorksAt

INSERT INTO WorksAt
VALUES(1,1,1,12,200000),
    (2,2,2,13,150000)

CREATE TABLE Inventory(
	InventoryId int CONSTRAINT PkInventoryId PRIMARY KEY ,
	Vin int CONSTRAINT FkInventoryVin FOREIGN KEY REFERENCES Cars(Vin),
	DealerShipId int CONSTRAINT FkInventoryDId FOREIGN KEY REFERENCES Dealerships(DealerShipId))

	INSERT INTO Inventory
VALUES 
(1,41,1),
(2,11,2),
(3,31,3)


CREATE TABLE Sales(
	SaleId int CONSTRAINT pkSalesId PRIMARY KEY,
	Vin int ,
	CustomerId int,
	SalesPersonId int ,
	DealerShipId int ,
	SalePrice int NOT NULL,
	SaleDate date NOT NULL)


	INSERT INTO Sales
	VALUES 
	(1, 41, 1, 1, 1, 30000, ('2019-01-11')),
	(2, 11, 2, 2, 2, 35000, ('2021-01-21')),
	(3, 31, 3, 3, 3, 40000, ('2020-03-05'))

	INSERT INTO Sales
	VALUES 
	(4, 41, 4, 4, 4, 30040, ('2010-03-01')),
		(5, 41, 5, 5, 5, 30300, ('2010-03-20'))
		INSERT INTO Sales
	VALUES 
	(6, 41, 6, 6, 6, 30040, ('2010-01-01'))




/*Find the names of all salespeople who have ever worked for the company at any dealership.*/

SELECT S.SalesPersonID, S.Name AS SalesPersonName, X.Name AS DealershipName 
FROM SalesPersons S JOIN 
(SELECT D.DealershipID, D.Name,W.SalesPersonID 
FROM Dealerships D JOIN 
WorksAt W ON D.DealershipID = W.DealershipID) AS X ON X.SalesPersonID = S.SalesPersonID;

/*List the Name, Street Address, and City of each customer who lives in Ahmedabad.*/

SELECT Name, Address, City, State
FROM Customers
WHERE City = 'Ahmedabad';


/*List the VIN, make, model, year, and mileage of all cars in the inventory of the dealership named "Hero Honda Car World".*/
	SELECT C.VIN, C.make, C.Modal, C.year, C.mileage, X.Name AS Dealership 
	FROM Cars C JOIN 
	(SELECT I.*, D.Name FROM Dealerships D JOIN Inventory I ON D.DealershipID = I.DealershipID) AS X 
	ON X.VIN = C.VIN
	WHERE X.Name = 'Car World';


/*List names of all customers who have ever bought cars from the dealership named "Concept Hyundai".*/
SELECT c.Name
FROM Customers AS c JOIN Sales AS s
ON c.CustomerId = s.CustomerId JOIN Dealerships AS d
ON s.DealershipId = d.DealershipId
WHERE d.Name = 'Concept'

/*For each car in the inventory of any dealership, list the VIN, make, model, and year of the car, 
along with the name, city, and state of the dealership whose inventory contains the car.*/
SELECT c.VIN, c.Make, c.Modal, c.Year, d.Name, d.City, d.State
FROM Cars AS c JOIN Inventory AS i
ON c.VIN = i.VIN JOIN Dealerships AS d
ON i.DealershipId = d.DealershipId

/* Find the names of all salespeople who are managed by a salesperson named "Adam Smith".*/
SELECT s.Name
FROM SalesPersons AS s JOIN ReportsTo AS r
ON s.SalesPersonId = r.SalesPersonId JOIN SalesPersons AS Sp
ON r.ManagingSalesPersonId = Sp.SalesPersonId
WHERE Sp.Name = 'Adam Smith'

/*	Find the names of all salespeople who do not have a manager.*/
SELECT s.Name
FROM SalesPersons AS s LEFT OUTER JOIN ReportsTo AS r
ON s.SalesPersonId = r.SalesPersonId
WHERE r.ManagingSalesPersonId IS NULL


/*Find the total number of dealerships.*/
SELECT COUNT(DealershipId) AS 'TotalDealerships'
FROM Dealerships

/*List the VIN, year, and mileage of all "Toyota Camrys" in the inventory of the dealership named "Toyota Performance".
(Note that a "Toyota Camry" is indicated by the make being "Toyota" and the model being "Camry".)*/
SELECT c.VIN, c.Year, c.Mileage
FROM Cars AS c JOIN Inventory 

/*Find the name of all customers who bought a car at a dealership located in a state other than the state in which they live.
*/
SELECT c.Name
FROM Customers AS c JOIN Sales AS s
ON c.CustomerId = s.CustomerId JOIN Dealerships AS d
ON s.DealershipId = d.DealershipId
WHERE c.State <> d.State

/*Find the name of the salesperson that made the largest base salary working at the dealership named "Ferrari Sales" during January 2010.*/
SELECT Name
FROM SalesPerson
WHERE SalesPersonID =(SELECT S.SalesPersonID
FROM Sales AS S
INNER JOIN WorkSat AS W
ON S.SalesPersonID = W.SalesPersonID
WHERE S.DealerShipID =(SELECT DealerShipID
FROM DealerShip
WHERE Name = 'Ferrari Sales')
AND MONTH(S.SaleDate) = 1
AND W.BaseSalaryForMonth = (SELECT MAX(BaseSalaryForMonth)
FROM WorkSat));


/*List the name, street address, city, and state of any customer who has bought more than two cars from all dealerships combined since January 1, 2010.*/
SELECT c.Name, c.Address, c.City, c.State
FROM (
	 SELECT DENSE_RANK() OVER (PARTITION BY CustomerId ORDER BY SaleId ASC) 'dRank', *
	 FROM Sales
	 ) [tblTemp]
JOIN Customers AS c
ON tblTemp.CustomerId = c.CustomerId
WHERE dRank >= 2 AND SaleDate >= '2010-01-01'
GROUP BY c.Name, c.Address, c.City, c.State

/*List the name, salesperson ID, and total sales amount for each salesperson who has ever sold at least one car. The total sales amount for a
salesperson is the sum of the sale prices of all cars ever sold by that salesperson.*/
SELECT s.SalesPersonId, sp.Name, SUM(s.SalePrice) AS 'TotalSales'
FROM SalesPersons AS sp JOIN Sales AS s
ON sp.SalesPersonId = s.SalesPersonId
GROUP BY s.SalesPersonId, sp.Name
HAVING COUNT(s.SalesPersonId) >= 1

/*Find the names of all customers who bought cars during 2010 who were also salespeople during 2010. For the purpose of this query, assume
that no two people have the same name.*/
SELECT c.Name
FROM Customers AS c JOIN SalesPersons as sp
ON c.Name = sp.Name JOIN Sales AS s
ON sp.SalesPersonId = s.SalesPersonId
WHERE DATEPART(YY, s.SaleDate) = 2010

/*Find the name and salesperson ID of the salesperson who sold the most cars for the company at dealerships located in Gujarat
between March 1, 2010 and March 31, 2010.*/
SELECT TOP(1) s.SalesPersonId, sp.Name
FROM SalesPersons AS sp JOIN Sales AS s
ON sp.SalesPersonId = s.SalesPersonId JOIN Dealerships as d
ON d.DealershipId = s.DealershipId
WHERE d.State = 'Gujarat' AND s.SaleDate BETWEEN '2010-03-01' AND '2010-03-31'
GROUP BY s.SalesPersonId, sp.Name
ORDER BY COUNT(s.SalesPersonId) DESC

/*Calculate the payroll for the month of March 2010.
		* The payroll consists of the name, salesperson ID, and gross pay for each salesperson who worked that month.
        * The gross pay is calculated as the base salary at each dealership employing the salesperson that month, along with the total commission
		  for the salesperson that month.
        * The total commission for a salesperson in a month is calculated as 5% of the profit made on all cars sold by the salesperson that month.
        * The profit made on a car is the difference between the sale price and the invoice price of the car. (Assume, that cars are never sold for
		  less than the invoice price.)*/


SELECT sp.SalesPersonId, sp.Name,
        SUM(ISNULL(w.basesalaryformonth, 0) + ISNULL(((c.askprice - c.invoiceprice) * 5 / 100), 0)) [Gross Pay]
    FROM SalesPersons sp
    LEFT JOIN Sales s ON s.SalesPersonID = sp.SalesPersonID
    LEFT JOIN Cars c ON c.VIN = s.VIN
    RIGHT JOIN WorkSat w ON w.SalesPersonID = sp.SalesPersonID
    WHERE DATENAME(MM, s.SaleDate) = 'JANUARY' AND YEAR(s.SaleDate) = 2010
    GROUP BY sp.SalesPersonID, sp.Name
    ORDER BY sp.SalesPersonID;

SELECT sp.SalesPersonId, sp.Name,
        SUM(ISNULL(w.basesalaryformonth, 0) + ISNULL(((c.askprice - c.invoiceprice) * 5 / 100), 0)) [Gross Pay]
    FROM SalesPersons sp
    LEFT JOIN Sales s ON s.SalesPersonID = sp.SalesPersonID
    LEFT JOIN Cars c ON c.VIN = s.VIN
    RIGHT JOIN WorkSat w ON w.SalesPersonID = sp.SalesPersonID
    WHERE DATENAME(MM, s.SaleDate) = 'MARCH' AND YEAR(s.SaleDate) = 2010
    GROUP BY sp.SalesPersonID, sp.Name
    ORDER BY sp.SalesPersonID;

