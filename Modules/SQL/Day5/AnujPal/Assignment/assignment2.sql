 


 
/* 1) Find the names of all salespeople who have ever worked for the company at any dealership.*/

		SELECT Name FROM SalesPerson s INNER JOIN s1 ON (s.SalesPersonID= s1.SalesPersonID)
		INNER JOIN DealershipID d ON (d.DealershipID = s.DealershipID) WHERE s.Name = d.Name 

	

/*   2) List the Name, Street Address, and City of each customer who lives in Ahmedabad.*/

		SELECT Name,Address,City FROM Customers WHERE City ='Ahmedabad'

/*  3)  List the VIN, make, model, year, and mileage of all cars in the inventory of the dealership named "Hero Honda Car World".*/

		SELECT c.VIN,c.Make,c.Model,c.Year,c.Mileage FROM 
		Car c INNER JOIN Inventory i ON (c.VIN = i.VIN)
		INNER JOIN Dealership d ON (i.DealershipID = d.DealershipID)
		WHERE d.DealershipName = 'Hero Honda Car World'

/*4. List names of all customers who have ever bought cars from the dealership named "Concept Hyundai".*/

		SELECT c.Name 
		FROM Customer c 
		INNER JOIN Sale s ON  c.CsutomerID = s.CustomerID
		INNER JOIN Dealership d ON d.DealershipID = s.DealershipID ;


/*.  5)   For each car in the inventory of any dealership, list the VIN, make, model, and year of the car, along with the name, city, and state of the dealership whose inventory contains the car.*/

		SELECT c.VIN,c.Make,c.Modal,c.year,d.Name,d.City,d.State FROM Car c 
		INNER JOIN Inventory i ON (c.VIN =i.VIN)
		INNER JOIN Dealership d INNER JOIN ON (d.DealrshipID = i.DealershipID)


/*   6) Find the names of all salespeople who are managed by a salesperson named "Adam Smith".*/

		SELECT Name FROM SalesPerson s INNER JOIN ReportsTo r ON(s.SalesPersonID  = r.SalesPersonID) WHERE Name = 'Adam Smith'

/*   7) Find the names of all salespeople who do not have a manager.*/

		SELECT Name FROM SalesPerson s RIGHT OUTER JOIN ReportsTo r ON(s.SalesPersonID  = r.SalesPersonID) WHERE ManagingSalesPersonID IS NULL

/*   8) Find the total number of dealerships.*/

		SELECT COUNT(DealersipID) AS NumberOfDealerShip FROM Dealership

/*  9) List the VIN, year, and mileage of all "Toyota Camrys" in the inventory of the dealership named "Toyota Performance".
		(Note that a "Toyota Camry" is indicated by the make being "Toyota" and the model being "Camry".)*/

		SELECT c.VIN,Year,Mileage 
		FROM  Inventory i 
		INNER JOIN Dealership d ON  d.DealershipID = i.DealershipID
		INNER JOIN Car c ON c.VIN = i.VIN WHERE c.Make = 'Toyota' AND c.Modal ='Camry' AND d.Name ='Toyota Performance' ;

/*   10)  Find the name of all customers who bought a car at a dealership located in a state other than the state in which they live.*/

		SELECT c.Name From Customer c INNER JOIN Sale s ON(c.CustomerID = s.CustomerID) 
		INNER JOIN Dealership d ON (s.DealershipID = d.DealershipID) WHERE c.State != d.State

/*   11)  Find the name of the salesperson that made the largest base salary working at the dealership named "Ferrari Sales" during January 2010.*/


		SELECT  s.Name FROM SalesPerson s INNER JOIN Worksat w ON(s.SalesPersonID = W.SalesPersonID)
		INNER JOIN Dealership d ON (d.DealershipID = w.DealershipID) 
		WHERE d.Name = 'Ferrari Sales' AND MAX(w.BasedSalaryForMonth) = BasedSalryForMonth



/*   12)  List the name, street address, city, and state of any customer who has bought more than two cars from all dealerships combined since January 1, 2010.*/

		SELECT c.Name,C.Address,c.City,c.State FROM
		(SELECT DENSE_RANK OVER (PARTITION BY CustomerID ORDER BY SalesID ASC))[d_rank],
		FROM Sale)
		[tb1_temp]
		INNER JOIN Customer c ON tb1_temp.CustomerID = c.CustomerID
		WHERE d_rank >=2 AND SaleDate >= '01-01-2010'
 


/*  13)  List the name, salesperson ID, and total sales amount for each salesperson who has ever sold at least one car. The total sales amount for a salesperson is the sum of the sale prices of all cars ever sold by that salesperson.*/

		SELECT s.Name,s.SalesPersonID,SUM(SalesPrice) AS TotalPrice FROM SalesPerson s INNER JOIN Sales s1 ON (s.SalesPersonID = s1.SalesPersonID)
		GROUP BY (s.Name)


/*   14) Find the names of all customers who bought cars during 2010 who were also salespeople during 2010. For the purpose of this query, assume that no two people have the same name.*/

		SELECT c.Name FROM Customerid c INNER JOIN Sales s ON(s.CustomerID = c.CustomerID)
		INNER JOIN SalesPerson s1 ON (s1.SalesPErsonID = s.SalesPersonID)
		WHERE s1.Name = c.Name AND DATEPART(yy,SalesDate) ='2010'




/*   15)   Find the name and salesperson ID of the salesperson 
who sold the most cars for the company at dealerships located in Gujarat between March 1, 2010 and March 31, 2010.*/

	SELECT s.Name,s.SalesPersonID FROM SalesPerson s INNER JOIN Sale s1 ON (S.SalespersonID = s1.SalesPersonID)
	INNER JOIN Dealership d ON (s.DealershipID = d.DealershipID) 
	WHERE d.State = 'Guajarat' AND  s1.SaleDate >= '2010/01/01' and Date <= '2010/01/31'
  

/* 16) Calculate the payroll for the month of March 2010.
	* The payroll consists of the name, salesperson ID, and gross pay for each salesperson who worked that month.
        * The gross pay is calculated as the base salary at each dealership employing the salesperson that month, along with the total commission for the salesperson that month.
        * The total commission for a salesperson in a month is calculated as 5% of the profit made on all cars sold by the salesperson that month.
        * The profit made on a car is the difference between the sale price and the invoice price of the car. (Assume, that cars are never sold for less than the invoice price.)*/


		
    SELECT sp.Salespersonid, sp.Name,
    SUM(ISNULL(w.BaseSalaryFormonth, 0) + ISNULL(((c.Askprice - c.Invoiceprice) * 5 / 100), 0)) [Gross Pay]
    FROM Salesperson sp
    LEFT JOIN sale s ON s.Salespersonid = sp.Salespersonid
    LEFT JOIN car c ON c.vin = s.vin
    RIGHT JOIN Worksat w ON w.Salespersonid = sp.Salespersonid
    WHERE DATENAME(MM, s.Saledate) = 'March' AND YEAR(s.Saledate) = 2010
    GROUP BY sp.Salespersonid, sp.Name
    ORDER BY sp.Salespersonid;



