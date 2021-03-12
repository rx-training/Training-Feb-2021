/*=========================================================================================
DATABASE :
=========================================================================================

Assume a hypothetical company that manages multiple
automobile dealerships throughout INDIA.

Following are the data requirements of our company :
*/

/**A "car" is described by a vehicle identification number 
(VIN), make (e.g., Toyota), model (e.g., Prius), year, mileage,
and two prices: the asking price (how much the dealership would
like to sell the car for) and the invoice price (how much the 
dealership paid for the car). This information is maintained
for every car currently in any dealership's inventory, 
and also for every car that has ever been sold by one
of the dealerships. 


* A dealership is a single location where the company sells 
cars. The company manages many dealerships, each one being 
described by a unique dealership ID, a name (e.g., Honda Sales,
Yamaha World, Concept Hyundai etc.), street address, city, and state.


* The company employs a number of salespeople. Each salesperson
is assigned a unique salesperson ID. 

* Salespeople work at one or more dealerships each month, and are 
paid a monthly base salary at each, regardless of how many cars they 
sell. Additionally, they are paid a commission on each car they sell. 

* Information is maintained about all salespeople who ever worked
for any dealership.

* The following information is kept about each customer : 
ID, name, street address, city, and state.

* Salespeople are arranged in a strict hierarchy, with each 
salesperson reporting to a "managing salesperson."

* It is necessary to keep track of the inventory of cars currently 
available at each dealership. Of course, a particular car can only 
be in the inventory of one dealership at any given time.

* A long-term record of all car sales is maintained. For each sale,
the company tracks which car was bought, which customer bought it, 
which salesperson sold it, which dealership it was sold by, at which
price it was sold for, and on which date it was sold.*/


CREATE DATABASE AutomobileCompany;
USE AutomobileCompany
/*i. car (carid, vin, make, model, year, mileage, askprice, invoiceprice) */

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

SELECT * FROM Cars;
USE AutomobileCompany;
INSERT INTO Cars
VALUES(1,1001,'Toyota','Camry',2010,23,1000,9500),
		(2,3001,'Maruti Suzuki','Breeza',2013,25,2000,7500)



SELECT 
TABLE_CATALOG,
TABLE_SCHEMA,
TABLE_NAME, 
COLUMN_NAME, 
DATA_TYPE 
FROM INFORMATION_SCHEMA.COLUMNS 

/*ii. dealership (dealershipid, name, address, city, state)*/

CREATE TABLE DealerShip
(DealerShipID INT PRIMARY KEY,
Name NVARCHAR(40),
Address NVARCHAR(50),
City NVARCHAR(20),
State NVARCHAR(20));

SELECT * FROM DealerShip;

INSERT INTO DealerShip
VALUES(5,'Toyota Performance','Kubernagar','Ahmedabad','Gujarat')
(3,'Ferrari Sales','SG Highway','Ahmedabad', 'Gujarat')
(1,'Hero Honda Car World','sola','Ahmedabad','Gujarat'),
		(2,'Concept Hyundai','Himmatnagar-Ahmedabad Highway','Himmatnagar','Gujarat');

/*iii. salesperson (salespersonid, name)*/

CREATE TABLE SalesPerson
(SalesPersonID INT PRIMARY KEY,
Name NVARCHAR(20));

SELECT * FROM SalesPerson;

INSERT INTO SalesPerson
VALUES(1,'Adam Smith'),
		(2,'Jhon Doe');

/*iv. customer (customerid, name, address, city, state)*/

CREATE TABLE Customers
(CustomerID INT PRIMARY KEY,
Name NVARCHAR(20),
Address NVARCHAR(50),
City NVARCHAR(20),
State NVARCHAR(20));

SELECT * FROM Customers;

INSERT INTO Customers
VALUES(101,'Sahrukh Khan','Juhoo','Mumbai','Maharastra'),
	(102,'Jhon Doe','Vastral','Ahmedabad','Gujarat');
		

/*v. reportsto (reportstoid, salespersonid, 
					managingsalespersonid)*/

CREATE TABLE ReportSto
(ReportStoID INT PRIMARY KEY,
SalesPersonID INT FOREIGN KEY REFERENCES SalesPerson(SalesPersonID),
ManagingSalesPersonID INT FOREIGN KEY REFERENCES SalesPerson(SalesPersonID));

SELECT * FROM ReportSto;

INSERT INTO ReportSto
VALUES (1,1,2),
	(2,2,1)
/*vi. worksat (worksatid, salespersonid, dealershipid, 
				monthworked, basesalaryformonth)*/
DROP TABLE WorkSat
CREATE TABLE WorkSat
(WorkSatID INT PRIMARY KEY,
SalesPersonID INT FOREIGN KEY REFERENCES SalesPerson(SalesPersonID),
DealerShipID INT FOREIGN KEY REFERENCES DealerShip(DealerShipID),
MonthWorked INT,
BaseSalaryForMonth MONEY);

SELECT * FROM WorkSat;

INSERT INTO WorkSat
VALUES(101,1,3,10,200000),
	(105,2,2,12,150000)
/*vii. inventory (inventoryid, vin, dealershipid)*/

CREATE TABLE Inventory
(InventoryID INT PRIMARY KEY,
VIN INT FOREIGN KEY REFERENCES Cars(VIN),
DealerShipID INT FOREIGN KEY REFERENCES DealerShip(DealerShipID));

SELECT * FROM Inventory;

INSERT INTO Inventory
VALUES (11010,1001,5),
(11007,1001,1)
,(11001,1001,3),
(11005,3001,2)


/*viii. sale (saleid, vin, customerid, salespersonid, 
			dealershipid, saleprice, saledate) */

CREATE TABLE Sales
(SaleID INT PRIMARY KEY,
VIN INT FOREIGN KEY REFERENCES Cars(VIN),
CustomerID INT FOREIGN KEY REFERENCES Customers(CustomerID),
SalesPersonID INT FOREIGN KEY REFERENCES SalesPerson(SalesPersonID),
DealerShipID INT FOREIGN KEY REFERENCES DealerShip(DealerShipID),
SalePrice MONEY,
SaleDate DATE);

SELECT * FROM Sales;

INSERT INTO Sales
VALUES (50022,3001,102,1,3,3500000,'1-1-2010'),
(50011,3001,102,2,3,3000000,'1-1-2010'),
(50010,3001,102,2,3,300000,'1-1-2010'),
(50002,3001,102,2,3,250000,'1-2-2010'),
(50005,3001,102,2,3,200000,'1-2-2012'),
(50001,1001,101,1,2,2500000,'1-1-2010')

/*
=========================================================================================
QUERIES :
=========================================================================================

1. Find the names of all salespeople who have ever worked for 
the company at any dealership.*/

SELECT SP.Name
FROM Salesperson AS SP
INNER JOIN WorkSat AS WS
ON SP.SalesPersonID = WS.SalesPersonID
WHERE WS.dealershipID IS NOT NULL;

/* 2. List the Name, Street Address, and City of each 
customer who lives in Ahmedabad.*/

SELECT Name,Address,City
FROM Customers 
WHERE City = 'Ahmedabad';

/* 3. List the VIN, make, model, year, and mileage of 
all cars in the inventory of the dealership named 
"Hero Honda Car World".*/

 SELECT C.VIN,
	   C.Make,
	   C.Modal,
	   C.Year,
	   C.Mileage
 FROM Cars As c
  INNER JOIN Inventory As i
  ON c.VIN = i.VIN
  WHERE i.DealerShipID = (SELECT DealerShipID
							FROM DealerShip
							WHERE Name = 'Hero Honda Car World');


/* 4. List names of all customers who have ever bought 
cars from the dealership named "Concept Hyundai".*/

SELECT C.Name
FROM Customers AS C
 INNER JOIN Sales AS S
 ON C.CustomerID = S.CustomerID
 WHERE S.DealerShipID = (SELECT DealerShipID
							FROM DealerShip
							WHERE Name = 'Concept Hyundai');

/* 5. For each car in the inventory of any dealership, 
list the VIN, make, model, and year of the car, along 
with the name, city, and state of the dealership whose
inventory contains the car.*/

SELECT C.VIN,C.Make,C.Modal,C.Year,D.Name,D.City,D.State
FROM Cars AS C
INNER JOIN Inventory AS I
ON C.VIN = I.VIN
INNER JOIN DealerShip AS D
ON I.DealerShipID = D.DealerShipID



/* 6. Find the names of all salespeople who are managed 
by a salesperson named "Adam Smith".*/

SELECT SP.Name
FROM SalesPerson AS SP
INNER JOIN Reportsto AS RS
ON SP.SalesPersonID = RS.SalesPersonID 
WHERE RS.ManagingSalesPersonID = (SELECT SalesPersonID
									FROM SalesPerson AS SP
									WHERE SP.Name = 'Adam Smith');


/* 7. Find the names of all salespeople who do not have 
a manager. */

SELECT SP.Name
FROM SalesPerson AS SP
LEFT OUTER JOIN Reportsto AS RS
ON SP.SalesPersonID = RS.SalesPersonID 
WHERE RS.ManagingSalesPersonID = NULL;

/* 8. Find the total number of dealerships. */

SELECT COUNT(DealerShipID)
FROM DealerShip;

/*9. List the VIN, year, and mileage of all "Toyota Camrys" 
in the inventory of the dealership named "Toyota Performance".
(Note that a "Toyota Camry" is indicated by the make 
being "Toyota" and the model being "Camry".)*/

SELECT C.VIN,
	   C.Year,
	   C.Mileage
FROM Cars AS C
INNER JOIN Inventory AS I
ON C.VIN = I.VIN
WHERE I.DealerShipID =(SELECT DealerShipID
FROM DealerShip
WHERE Name = 'Toyota Performance') 
AND C.Make = 'Toyota' 
AND C.Modal = 'Camry';

/* 10. Find the name of all customers who bought a car at 
a dealership located in a state other than the state in 
which they live.*/

SELECT C.Name
FROM Customers As C
INNER JOIN Sales AS S
ON C.CustomerID = S.CustomerID
WHERE C.State NOT IN (SELECT DS.State
		FROM DealerShip AS DS
		INNER JOIN Sales AS SS
		ON DS.DealerShipID = SS.DealerShipID)  ;

/* 11. Find the name of the salesperson that made the 
largest base salary working at the dealership named 
"Ferrari Sales" during January 2010.*/

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


/*
	SELECT SP.
	FROM SalesPerson AS SP
	INNER JOIN WorkSat AS WS
	ON SP.SalesPersonID = WS.SalesPersonID
	WHERE WS.DealerShipID =(SELECT DealerShipID
	FROM Dealership 
	WHERE Name = 'Ferrari Sales') 
	AND WS.BaseSalaryForMonth = MAX(WS.BaseSalaryForMonth);
*/

/*12. List the name, street address, city, and state of 
any customer who has bought more than two cars from all 
dealerships combined since January 1, 2010.*/

SELECT C.Name,
	   C.Address,
	   C.City,
	   C.State
FROM Customers AS C
WHERE CustomerID IN (SELECT CustomerID
				FROM Sales
				GROUP BY CustomerID,SaleDate
				HAVING COUNT(CustomerID)>2 
				AND MONTH(SaleDate) = 1
				AND YEAR(SaleDate) = 2010);


/*13. List the name, salesperson ID, and total sales amount 
for each salesperson who has ever sold at least one car. 
The total sales amount for a salesperson is the sum of the
sale prices of all cars ever sold by that salesperson.*/

SELECT SP.Name,SP.SalesPersonID,SUM(SalePrice) AS SalesAmount
FROM SalesPerson AS SP
INNER JOIN Sales AS S
ON SP.SalesPersonID = S.SalesPersonID
GROUP BY SP.SalesPersonID,SP.Name;


/*14. Find the names of all customers who bought cars during
2010 who were also salespeople during 2010. For the purpose
of this query, assume that no two people have the same name.*/

SELECT C.Name
FROM Customers AS C
WHERE C.CustomerID IN (SELECT CustomerID
FROM Sales
WHERE YEAR(SaleDate) = 2010
AND CustomerID IN (SELECT C.CustomerID
			FROM Customers AS C
			INNER JOIN SalesPerson AS SP
			ON C.Name = SP.Name));

/*15. Find the name and salesperson ID of the salesperson who
sold the most cars for the company at dealerships located in
Gujarat between March 1, 2010 and March 31, 2010.*/

SELECT SP.Name, SP.SalesPersonID
FROM SalesPerson AS SP
WHERE SP.SalesPersonID = (SELECT SalesPersonID
FROM Sales
GROUP BY SalesPersonID
HAVING COUNT(SalesPersonID) >= ALL (SELECT COUNT(SalesPersonID)
FROM Sales
WHERE SaleDate BETWEEN '03-01-2010' AND '03-31-2010'
GROUP BY SalesPersonID
))

/*16. Calculate the payroll for the month of March 2010.
	* The payroll consists of the name, salesperson ID,
	and gross pay for each salesperson who worked that month.
    * The gross pay is calculated as the base salary at each 
	dealership employing the salesperson that month, along 
	with the total commission for the salesperson that month.
    * The total commission for a salesperson in a month is 
	calculated as 5% of the profit made on all cars sold by
	the salesperson that month.
    * The profit made on a car is the difference between the
	sale price and the invoice price of the car. (Assume, 
	that cars are never sold for less than the invoice price.)
*/

SELECT sp.salespersonid, sp.name,
        SUM(ISNULL(w.basesalaryformonth, 0) + ISNULL(((c.askprice - c.invoiceprice) * 5 / 100), 0)) [Gross Pay]
    FROM SalesPerson sp
    LEFT JOIN Sales s ON s.SalesPersonID = sp.SalesPersonID
    LEFT JOIN Cars c ON c.VIN = s.VIN
    RIGHT JOIN WorkSat w ON w.SalesPersonID = sp.SalesPersonID
    WHERE DATENAME(MM, s.SaleDate) = 'JANUARY' AND YEAR(s.SaleDate) = 2010
    GROUP BY sp.SalesPersonID, sp.Name
    ORDER BY sp.SalesPersonID;

SELECT sp.salespersonid, sp.name,
        SUM(ISNULL(w.basesalaryformonth, 0) + ISNULL(((c.askprice - c.invoiceprice) * 5 / 100), 0)) [Gross Pay]
    FROM SalesPerson sp
    LEFT JOIN Sales s ON s.SalesPersonID = sp.SalesPersonID
    LEFT JOIN Cars c ON c.VIN = s.VIN
    RIGHT JOIN WorkSat w ON w.SalesPersonID = sp.SalesPersonID
    WHERE DATENAME(MM, s.SaleDate) = 'MARCH' AND YEAR(s.SaleDate) = 2010
    GROUP BY sp.SalesPersonID, sp.Name
    ORDER BY sp.SalesPersonID;