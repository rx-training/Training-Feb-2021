                                                /********** Assignment - 2 **********/

                                                /***********    DATABASE : **********/

/***** Assume a hypothetical company that manages multiple automobile dealerships throughout INDIA.*****/

/***** Following are the data requirements of our company :*****/

/***** A "car" is described by a vehicle identification number (VIN), make (e.g., Toyota), model (e.g., Prius), year, mileage,and two prices:
       the asking price (how much the dealership would like to sell the car for) and the invoice price (how much the dealership paid for the car).
	   This information is maintained for every car currently in any dealership's inventory, and also for every car that has ever been sold by one
       of the dealerships. 

/***** A dealership is a single location where the company sells cars. The company manages many dealerships, each one being described by a unique
       dealership ID, a name (e.g., Honda Sales,Yamaha World, Concept Hyundai etc.), street address, city, and state.

/***** The company employs a number of salespeople. Each salesperson is assigned a unique salesperson ID. *****/

/***** Salespeople work at one or more dealerships each month, and are paid a monthly base salary at each, regardless of how many cars they sell.
       Additionally, they are paid a commission on each car they sell. *****/

/***** Information is maintained about all salespeople who ever worked for any dealership.*****/

/***** The following information is kept about each customer : ID, name, street address, city, and state.*****/

/***** Salespeople are arranged in a strict hierarchy, with each salesperson reporting to a "managing salesperson.*****/

/***** It is necessary to keep track of the inventory of cars currently available at each dealership. Of course, a particular car can only be in
      the inventory of one dealership at any given time.*****/

/***** A long-term record of all car sales is maintained. For each sale,the company tracks which car was bought, which customer bought it, 
      which salesperson sold it, which dealership it was sold by, at which price it was sold for, and on which date it was sold.*****/

/***** CREATE DATABASE Automobile Company;*****/
/***** i. car (carid, vin, make, model, year, mileage, askprice, invoiceprice) *****/
CREATE DATABASE AutoMobileCompany

CREATE TABLE CarsData
   ( 
   CarId int NOT NULL,
   Vin int NOT NULL UNIQUE,
   Make nvarchar(30) NOT NULL,
   Modal nvarchar(30) NOT NULL,
   Year decimal(4,0) NOT NULL,
   Mileage decimal(3,1) NOT NULL,
   AskPrice decimal(10,0) NOT NULL,
   InvoicePrice decimal(10,0) NOT NULL,
   CONSTRAINT pkCarId PRIMARY KEY(CarId)
   );
INSERT INTO CarsData VALUES(1,101,'Tata','Nexon',2019,25,400000,500000),
		                  (2,201,'Toyata','Innova',2020,15,2000000,2200000),
						  (3,301,'Maruti Suzuki','Swift',2021,25,350000,450000),
SELECT * FROM CarsData;

/***** ii. dealership (dealershipid, name, address, city, state) . *****/

CREATE TABLE DealerShip
    (
	DealerShipId int NOT NULL PRIMARY KEY,
    Name varchar(30) NOT NULL,
    Address varchar(50) NOT NULL,
    City varchar(30) NOT NULL,
    State varchar(30) NOT NULL
	);

INSERT INTO DealerShip VALUES(1,'Maruti Suzuki','T.B Three Line','Patan','Gujarat'),
                             (2,'Tata Motors','SG Highway','Ahmedabad', 'Gujarat'),
                             (3,'Toyata Infinium','Mehsana-Ahmedabad Highway','Mehsana','Gujarat');

SELECT * FROM DealerShip;

/***** iii. salesperson (salespersonid, name).  *****/

CREATE TABLE SalesPerson
     (
	 SalesPersonId int NOT NULL PRIMARY KEY,
     Name varchar(30)
	 );

INSERT INTO SalesPerson VALUES(1,'Bhargav Modi'),
		                      (2,'Meet Patel'),
							  (3,'Jay Soni');

SELECT * FROM SalesPerson;

/***** iv. customer (customerid, name, address, city, state). *****/

CREATE TABLE Customer
     (
	 CustomerId int NOT NULL PRIMARY KEY,
     Name varchar(30),
     Address varchar(50),
     City varchar(30),
     State varchar(30)
	 );

INSERT INTO Customer VALUES (001,'Ketan Modi','Vejalpur','Ahmedabad','gujarat'),
	                        (002,'Kalpesh Shah','Abika Nager','Patan','Gujarat'),
							(003,'Dipesh patel','Ratan Pol','Mehsana','Gujarat'),
                            (004,'Mega Soni','Shri Nager','Surat','Gujarat');
SELECT * FROM Customer;

/****** v. reportsto (reportstoid, salespersonid, managingsalespersonid). *****/

CREATE TABLE ReportSTo
      (
 	  ReportStoID int NOT NULL PRIMARY KEY,
      SalesPersonID int FOREIGN KEY REFERENCES SalesPerson(SalesPersonId),
      ManagingSalesPersonID int FOREIGN KEY REFERENCES SalesPerson(SalesPersonId)
	  );

INSERT INTO ReportSTo VALUES (1,1,2),
	                         (2,2,3);
SELECT * FROM ReportSTo;


/***** vi. worksat (worksatid, salespersonid, dealershipid, monthworked, basesalaryformonth).*****/
       CREATE TABLE WorkSat
       (
	   WorkSatId int NOT NULL PRIMARY KEY,
       SalesPersonId int FOREIGN KEY REFERENCES SalesPerson(SalesPersonId),
       DealerShipId int FOREIGN KEY REFERENCES DealerShip(DealerShipId),
       MonthWorked int,
       BaseSalaryForMonth MONEY NOT NULL 
	   );

INSERT INTO WorkSat VALUES(101,1,1,11,18000),
	                      (102,2,2,12,20000),
						  (103,3,3,12,22000);

SELECT * FROM WorkSat;

/***** vii. inventory (inventoryid, vin, dealershipid).*****/
      CREATE TABLE Inventory
      (
	  InventoryId int NOT NULL PRIMARY KEY,
      Vin int FOREIGN KEY REFERENCES CarsData(Vin),
      DealerShipId int NOT NULL FOREIGN KEY REFERENCES DealerShip(DealerShipId)
	  );
	  
INSERT INTO Inventory VALUES (1001,101,1),
                              (1002,201,2),
							  (1003,301,3);

SELECT * FROM Inventory;

/***** viii. sale (saleid, vin, customerid, salespersonid, dealershipid, saleprice, saledate) *****/
      CREATE TABLE Sales
      (
	  SaleId int NOT NULL PRIMARY KEY,
      Vin int NOT NULL FOREIGN KEY REFERENCES CarsData(Vin),
      CustomerId int NOT NULL FOREIGN KEY REFERENCES Customer(CustomerId),
      SalesPersonId int NOT NULL FOREIGN KEY REFERENCES SalesPerson(SalesPersonId),
      DealerShipId int NOT NULL FOREIGN KEY REFERENCES DealerShip(DealerShipId),
      SalePrice MONEY NOT NULL,
      SaleDate date NOT NULL
	  );

INSERT INTO Sales VALUES (10001,101,001,1,2,600000,'2020-08-15'),
                         (20001,101,002,2,1,300000,'2020-02-25'),
                         (30001,201,003,3,3,2500000,'2020-11-20'),
                         (40001,301,004,2,2,500000,'2021-01-14');

SELECT * FROM Sales;



                                                         /**********  QUERIES : *********/

/**** 1. Find the names of all salespeople who have ever worked for the company at any dealership.*****/
      SELECT * FROM SalesPerson
	  SELECT * FROM DealerShip

      SELECT s.SalesPersonId,s.Name,d.Name FROM SalesPerson AS s INNER JOIN DealerShip AS d
      ON s.SalesPersonId = d.DealerShipId
      WHERE d.DealerShipId IS NOT NULL;

/***** 2. List the Name, Street Address, and City of each  customer who lives in Ahmedabad.*****/

       SELECT Name,Address,City FROM Customer WHERE City = 'Ahmedabad';

/***** 3. List the VIN, make, model, year, and mileage of all cars in the inventory of the dealership named  "Hero Honda Car World".*****/

       SELECT c.Vin,c.Make, c.Modal,c.Year,c.Mileage,t.Name AS DealerName FROM CarsData As c
       JOIN (SELECT i.*,d.Name FROM DealerShip AS d JOIN Inventory AS i ON i.DealerShipId = d.DealerShipId) AS t
	   ON t.Vin = c.Vin
       WHERE Name = 'Tata Motors'


/***** 4. List names of all customers who have ever bought cars from the dealership named "Concept Hyundai".*****/

       SELECT c.Name,c.Address,c.State FROM Customer AS c INNER JOIN Sales AS s
       ON c.CustomerId = s.CustomerId
       WHERE s.DealerShipId = (SELECT DealerShipId FROM DealerShip WHERE Name = 'Toyata Infinium');
							

/***** 5. For each car in the inventory of any dealership, list the VIN, make, model, and year of the car, along with the name,    
        city, and state of the dealership whose inventory contains the car.*****/

       SELECT c.Vin,c.Make,c.Modal,c.Year,d.Name,d.City,d.State FROM CarsData AS c
       INNER JOIN Inventory AS i ON c.Vin = i.Vin INNER JOIN DealerShip AS d
       ON i.DealerShipId = d.DealerShipId



/***** 6. Find the names of all salespeople who are managed by a salesperson named "Adam Smith".*/

      SELECT * FROM SalesPerson WHERE  SalesPersonId IN                                                 
	  (SELECT SalesPersonId FROM ReportsTo r 
      WHERE r.ManagingSalesPersonId = (SELECT SalesPersonId FROM SalesPerson WHERE Name = 'Meet Patel'));


/***** 7. Find the names of all salespeople who do not have a manager. *****/
      
	   SELECT * FROM SalesPerson WHERE SalesPersonId NOT IN (SELECT SalesPersonId FROM ReportsTo)

/***** 8. Find the total number of dealerships. */

       SELECT COUNT(DealerShipID) AS TotalDealerShip FROM DealerShip;

/***** 9. List the VIN, year, and mileage of all "Toyota Camrys" in the inventory of the dealership named "Toyota Performance".
       (Note that a "Toyota Camry" is indicated by the make being "Toyota" and the model being "Camry".)*****/

       SELECT c.Vin,c.Year,c.Mileage FROM CarsData AS c INNER JOIN Inventory AS i ON c.Vin = i.Vin
       WHERE i.DealerShipId =(SELECT DealerShipId FROM DealerShip WHERE Name = 'Toyata Infinium') 
       AND c.Make = 'Toyota' 
       AND c.Modal = 'Innova';

/***** 10. Find the name of all customers who bought a car at a dealership located in a state other than the state in which they live.*****/

      SELECT c.CustomerId,c.Name FROM Customer As c INNER JOIN Sales AS s ON c.CustomerId = s.CustomerId 
	  WHERE c.State NOT IN (SELECT d.State FROM DealerShip AS d INNER JOIN Sales AS s ON d.DealerShipId = s.DealerShipId);

/***** 11. Find the name of the salesperson that made the largest base salary working at the dealership named "Ferrari Sales" during January 2010.*****/

        SELECT s. *, l.BaseSalaryForMonth FROM SalesPerson s JOIN 
	    (SELECT w.SalesPersonId,w.BaseSalaryForMonth FROM WorkSat w JOIN DealerShip d ON d.DealerShipId = w.DealerShipId
	    WHERE DATEDIFF(MM,'2021-01-14',GETDATE()) = w.MonthWorked AND d.Name = 'Toyata Infinium') AS l
	    ON l.SalesPersonId = s.SalesPersonId ORDER BY BaseSalaryForMonth DESC;

/***** 12. List the name, street address, city, and state of any customer who has bought more than two cars from all dealerships combined since
      January 1, 2010.*****/

        SELECT c.CustomerId, c.Name,c.Address,c.City,c.State FROM Customer AS c JOIN Sales s ON s.CustomerId = c.CustomerId
		WHERE SaleDate > '2020-01-14' 
		GROUP BY c.CustomerId,c.Name,c.Address,c.City,c.State HAVING COUNT(c.CustomerId) > 2

/***** 13. List the name, salesperson ID, and total sales amount for each salesperson who has ever sold at least one car. 
           The total sales amount for a salesperson is the sum of the sale prices of all cars ever sold by that salesperson.*/

         SELECT sp.Name,sp.SalesPersonID,SUM(SalePrice) AS SalesAmount FROM SalesPerson AS sp
         INNER JOIN Sales AS s ON sp.SalesPersonID = s.SalesPersonID GROUP BY sp.SalesPersonID,sp.Name;


/***** 14. Find the names of all customers who bought cars during 2010 who were also salespeople during 2010. For the purpose
           of this query, assume that no two people have the same name.*****/

        SELECT c.Name FROM Customer AS c WHERE C.CustomerID IN (SELECT CustomerId FROM Sales WHERE YEAR(SaleDate) = 2020
        AND CustomerId IN (SELECT c.CustomerId FROM Customer AS c INNER JOIN SalesPerson AS s ON c.Name = s.Name));

/***** 15. Find the name and salesperson ID of the salesperson who sold the most cars for the company at dealerships located in
           Gujarat between March 1, 2010 and March 31, 2010.******/

		   SELECT l.SalesPersonId,l.Name FROM Dealership AS d
		   JOIN
		   (SELECT s.DealershipId,sp.Name,sp.SalesPersonId,MAX(s.SalePrice) AS SalePrice FROM Sales AS s
		   JOIN SalesPerson AS sp ON s.SalesPersonId = sp.SalesPersonId
		   GROUP BY s.DealershipId,sp.Name,sp.SalesPersonId) AS l
		   ON l.DealershipId = d.DealershipId
		   WHERE State = 'Gujarat'
		   ORDER BY SalePrice DESC

/*****16. Calculate the payroll for the month of March 2010.
	      i.    The payroll consists of the name, salesperson ID,and gross pay for each salesperson who worked that month.
          ii.   The gross pay is calculated as the base salary at each dealership employing the salesperson that month, along with 
		           the total commission for the salesperson that month.
          iii.  The total commission for a salesperson in a month is calculated as 5% of the profit made on all cars sold by the salesperson that month.
          iv.   The profit made on a car is the difference between the sale price and the invoice price of the car. (Assume, that cars 
		          are never sold for less than the invoice price.) *****/

	     SELECT sp.SalesPersonId, sp.Name,
         SUM(ISNULL(w.BaseSalaryForMonth, 0) + ISNULL(((c.AskPrice - c.InvoicePrice) * 5 / 100), 0)) [Gross Pay]
         FROM SalesPerson sp
         LEFT JOIN Sales s ON s.SalesPersonId = sp.SalesPersonId
         LEFT JOIN CarsData c ON c.vin = s.vin
         RIGHT JOIN WorkSat w ON w.SalesPersonId = sp.SalesPersonId
         WHERE DATENAME(MM, s.SaleDate) = 'March' AND YEAR(s.SaleDate) = 2010
         GROUP BY sp.SalesPersonId, sp.Name
         ORDER BY sp.SalesPersonId;