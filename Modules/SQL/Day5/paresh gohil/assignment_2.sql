USE Cars

CREATE TABLE Cars
(
	CarID INT NOT NULL,
	Vin varchar(20) NOT NULL ,
	Make varchar(10) NOT NULL,
	Model varchar(10) NOT NULL,
	Years INT NOT NULL,
	Mileage INT NOT NULL,
	AskPrice bigint NOT NULL,
	InvoicePrice bigint NOT NULL
)

INSERT INTO Cars values (1,'22','Honda','Civic',1997,244,105000,152950),
						(2,'23','Nissan','Altima GXE',1994,114,49000,51380),
						(3,'24','Hyundai','Elantra',2002,107,140000,146300),
						(4,'25','Toyota','Camrys',2003,61,182000,197960)

CREATE TABLE Dealerships
(
	DealershipID INT NOT NULL,
	DName varchar(20) NOt NULL,
	DAddress varchar(10) NOT NULL,
	City varchar(10) NOT NULL,
	DState varchar(10) NOT NULL
)

INSERT INTO Dealerships values (1,'Honda Sales','Nikol','Ahmedabad','Gujarat'),
						(2,'Ferari Sales','Aajwa','Vadodara','Gujarat'),
						(3,'Concept Hyundai','Kamrej','Surat','Gujarat'),
						(4,'Hero Honda Car World','Chowpatty','Mumbai','Maharastra'),
						(5,'Toyota Performance','Bapunagar','Ahmedabad','Gujarat')

CREATE TABLE Salespersons
(
	SalespersonID INT NOT NULL,
	SName varchar(10) NOT NULL
)

INSERT INTO Salespersons values (1,'Raj'),
								(2,'Jayraj'),
								(3,'Mihir'),
								(4,'Adam Smith')
						

CREATE TABLE Customers
(
	CustomerID INT NOT NULL,
	CName varchar(10) NOT NULL,
	CAddress varchar(10) NOT NULL,
	City varchar(10) NOT NULL,
	CState varchar(10) NOT NULL
)

INSERT INTO Customers values (1,'Mayur','Nikol','Ahmedabad','Gujarat'),
						(2,'Brijal','Aajwa','Vadodara','Gujarat'),
						(3,'Tejal','Kamrej','Surat','Gujarat'),
						(4,'Mayank','Bapunagar','Ahmedabad','Gujarat')

CREATE TABLE Reportstos
(
	ReportstoID INT NULL,
	SalespersonID INT NOT NULL,
	ManagingSalespersonID INT NULL
)


INSERT INTO Reportstos values (1,2, ''),
							  (2,1,3),
						      (3,4,2),
						      (4,3,1)
CREATE TABLE Worksats
(
	WorksatID INT NOT NULL,
	SalespersionID INT NOT NULL,
	DealershipID INT NOT NULL,
	MonthWorked INT NOT NULL,
	BaseSalaryformonth INT NOT NULL
)


INSERT INTO Worksats values (1,2,4,6,10000),
							(2,1,2,7,30000),
							(3,4,1,8,20000),
							(4,3,3,9,15000)

CREATE TABLE Inventories
(
	InventoryID INT NOT NULL,
	Vin varchar(20) NOT NULL,
	DealershipID INT NOT NULL
)

INSERT INTO Inventories values  (1,'22',4),
								(2,'25',5),
								(3,'22',1),
								(4,'24',3)

CREATE TABLE Sale
(
	SaleID INT NOT NULL,
	Vin varchar(20) NOT NULL,
	CustormerID INt NOT NULL,
	SalespersionID INT NOT NULL,
	DealershipID INT NOT NULL,
	SalePrice bigint NOT NULL,
	SaleDate date NOt NULL
)


INSERT INTO Sale values (1,'23',4,4,2,49000,'2010-01-01'),
						(2,'22',3,2,1,105000,'2009-04-02'),
						(3,'25',2,3,4,182000,'2020-05-25'),
						(4,'24',1,1,3,14000,'2021-01-02')


/*Find the names of all salespeople who have ever worked for the company at any dealership.*/

	SELECT s.SName FROM Worksats w JOIN Salespersons s ON w.SalespersionID = s.SalespersonID
						   JOIN Dealerships d ON w.DealershipID = d.DealershipID

/*List the Name, Street Address, and City of each customer who lives in Ahmedabad.*/

	SELECT CName,CAddress,City FROM Customers WHERE City = 'Ahmedabad'

/*List the VIN, make, model, year, and mileage of all cars in the inventory of the dealership named "Hero Honda Car World".*/

	SELECT c.Vin,c.Make,c.Model,c.Years,c.Mileage FROM Inventories i JOIN Dealerships d ON i.DealershipID = d.DealershipID
							  JOIN Cars c ON i.Vin = c.Vin WHERE d.DName = 'Hero Honda Car World'

/*List names of all customers who have ever bought cars from the dealership named "Concept Hyundai*/

	SELECT c.CName FROM Sale s  JOIN Customers c ON s.CustormerID = c.CustomerID
								JOIN Dealerships d ON s.DealershipID = d.DealershipID WHERE d.DName = 'Concept Hyundai'

/*For each car in the inventory of any dealership, list the VIN, make, model, and year of the car, 
along with the name, city, and state of the dealership whose inventory contains the car.*/

	SELECT c.Vin,c.Make,c.Model,c.Years,d.DName,d.City,d.DState FROM Inventories i  JOIN Dealerships d ON i.DealershipID = d.DealershipID 
																					JOIN Cars c ON i.Vin = c.Vin
																				
/*Find the names of all salespeople who are managed by a salesperson named "Adam Smith".*/

	SELECT sp.SName FROM Reportstos r JOIN Salespersons s ON s.SalespersonID = r.SalespersonID
							 JOIN Salespersons sp ON r.ManagingSalespersonID = sp.SalespersonID WHERE s.SName = 'Adam Smith'

/*Find the names of all salespeople who do not have a manager.*/

	SELECT s.SName as 'Employee Name',sp.SName as 'Manger Name' FROM Reportstos r JOIN Salespersons s ON s.SalespersonID = r.SalespersonID
							          LEFT OUTER JOIN Salespersons sp ON r.ManagingSalespersonID = sp.SalespersonID WHERE r.ManagingSalespersonID = 0

/*Find the total number of dealerships.*/

	SELECT COUNT(i.DealershipID) as 'Totle Dealerships' FROM Dealerships d JOIN Inventories i ON d.DealershipID = i.DealershipID

/*List the VIN, year, and mileage of all "Toyota Camrys" in the inventory of the dealership named "Toyota Performance". 
(Note that a "Toyota Camry" is indicated by the make being "Toyota" and the model being "Camry".)*/

	SELECT c.Vin,c.Years,c.Mileage FROM Inventories i JOIN Dealerships d ON i.DealershipID = d.DealershipID
										JOIN Cars c ON i.Vin = c.Vin WHERE d.DName = 'Toyota Performance' AND c.Make = 'Toyota' AND c.Model = 'Camrys'

/*Find the name of all customers who bought a car at a dealership located in a state other than the state in which they live.*/

	SELECT c.CName FROM Sale s  JOIN Customers c ON s.CustormerID = c.CustomerID
								JOIN Dealerships d ON s.DealershipID = d.DealershipID WHERE c.CState != d.DState

/*Find the name of the salesperson that made the largest base salary working at the dealership named "Ferrari Sales" during January 2010.*/

	SELECT sp.SName FROM Dealerships d JOIN Sale s ON d.DealershipID = s.DealershipID 
									JOIN Worksats w ON s.DealershipID = w.DealershipID
									JOIN Salespersons sp ON w.SalespersionID = sp.SalespersonID WHERE d.DName = 'Ferari Sales' AND s.SaleDate = '2010-01-01'
	
/*List the name, street address, city, and state of any customer who has bought more than two cars from all dealerships combined since January 1, 2010.*/

	SELECT c.CName,c.CAddress,c.City,c.CState  FROM (SELECT DENSE_RANK() OVER (PARTITION BY CustormerID ORDER BY SaleID ASC)DRank,CustormerID,SaleDate FROM Sale)tbl INNER JOIN Customers c 
											ON tbl.CustormerID = c.CustomerID WHERE DRank >= 2 AND SaleDate >= '2010-01-01'

/*List the name, salesperson ID, and total sales amount for each salesperson who has ever sold at least one car.
The total sales amount for a salesperson is the sum of the sale prices of all cars ever sold by that salesperson.*/

	SELECT sp.SalespersonID,sp.SName,SUM(s.SalePrice) FROM Sale s INNER JOIN Salespersons sp ON s.SalespersionID = sp.SalespersonID GROUP BY sp.SalespersonID , sp.SName

/*Find the names of all customers who bought cars during 2010 who were also salespeople during 2010. 
For the purpose of this query, assume that no two people have the same name.*/

	SELECT c.CNAME as 'Customer Name' FROM Sale s JOIN Salespersons sp ON s.SalespersionID = sp.SalespersonID
							JOIN Customers c ON s.CustormerID = c.CustomerID WHERE YEAR(s.Saledate) = 2010

/*Find the name and salesperson ID of the salesperson who sold the most cars for the company at dealerships located in Gujarat between March 1, 2010 and March 31, 2010.*/

	SELECT sp.SalespersonID,sp.SName FROM Sale s JOIN Salespersons sp ON s.SalespersionID = sp.SalespersonID
								JOIN Dealerships d ON s.DealershipID = d.DealershipID WHERE d.DState = 'Gujarat' AND s.SaleDate BETWEEN '2010-03-01' AND '2010-03-31'

	UPDATE Sale SET SaleDate= '2010-03-20' WHERE SaleID = 4

/*Calculate the payroll for the month of March 2010.
	* The payroll consists of the name, salesperson ID, and gross pay for each salesperson who worked that month.
    * The gross pay is calculated as the base salary at each dealership employing the salesperson that month, along with the total commission for the salesperson that month.
    * The total commission for a salesperson in a month is calculated as 5% of the profit made on all cars sold by the salesperson that month.
    * The profit made on a car is the difference between the sale price and the invoice price of the car. (Assume, that cars are never sold for less than the invoice price.)*/

	SELECT sp.SalespersonID, sp.SName,
        SUM(ISNULL(w.basesalaryformonth, 0) + ISNULL(((c.askprice - c.invoiceprice) * 5 / 100), 0)) [Gross Pay]
    FROM Salespersons sp
    LEFT JOIN Sale s ON s.SalespersionID = sp.SalespersonID
    LEFT JOIN Cars c ON c.Vin = s.Vin
    RIGHT JOIN Worksats w ON w.SalespersionID = sp.SalespersonID
    WHERE DATENAME(MM, s.SaleDate) = 'March' AND YEAR(s.SaleDate) = 2010
    GROUP BY sp.SalespersonID, sp.SName
    ORDER BY sp.SalespersonID;
