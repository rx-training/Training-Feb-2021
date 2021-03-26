USE AssignmentDay29;
GO

--1. Find the names of all salespeople who have ever worked for the company at any dealership.
SELECT sp.Name
FROM Dealer.SalesPersons sp
WHERE SalesPersonId IN (SELECT DISTINCT SalesPersonId FROM Dealer.WorksAt);
GO

--2. List the Name, Street Address, and City of each customer who lives in Ahmedabad.
SELECT 
	c.Name,
	c.Address,
	c.City
FROM Dealer.Customers c 
WHERE City='Ahmedabad';
GO

--3. List the VIN, make, model, year, and mileage of all cars in the inventory of the dealership named "Chirag Moters".
SELECT 
	c.Vin,
	c.Make,
	c.Model,
	c.Year,
	c.Mileage
FROM Dealer.Cars c,Dealer.Inventory i,Dealer.Dealerships d
WHERE c.Vin=i.Vin AND i.DealerShipId=d.DealerShipId AND d.Name='Chirag Moters';

--4. List names of all customers who have ever bought cars from the dealership named "Concept Hyundai".
SELECT c.Name
FROM Dealer.Customers c JOIN Dealer.Sales s ON c.CustomerId=s.CustomerId;
GO

--5. For each car in the inventory of any dealership, list the VIN, make, model, and year of the car, along with the name, city, and state of the dealership whose inventory contains the car.
SELECT 
	c.Vin,
	c.Make,
	c.Model,
	c.Year,
	d.Name AS 'Dealer Name',
	d.City AS 'Dealer City',
	d.State AS 'Dealer State'
FROM 
	Dealer.Cars c,Dealer.Inventory i,Dealer.Dealerships d
WHERE 
	c.Vin=i.Vin AND i.DealerShipId=d.DealerShipId;
GO

--6. Find the names of all salespeople who are managed by a salesperson named "Nitish Sharma".
SELECT sp.Name
FROM 
	Dealer.SalesPersons sp, Dealer.ReportsTo rt
WHERE 
	sp.SalesPersonId=rt.SalesPersonId AND rt.ManagingSalesPersonId=(SELECT SalesPersonId FROM Dealer.SalesPersons WHERE Name='Nitish Sharma');
GO

--7. Find the names of all salespeople who do not have a manager.
SELECT 
	sp.Name AS 'SalesPerson Name'
FROM 
	Dealer.SalesPersons sp
WHERE 
	sp.SalesPersonId NOT IN (SELECT DISTINCT SalesPersonId FROM Dealer.ReportsTo WHERE ManagingSalesPersonId IS NOT NULL);
GO

--8. Find the total number of dealerships.
SELECT COUNT(DealerShipId) AS 'Total Dealerships.'
FROM Dealer.Dealerships;
GO

--9. List the VIN, year, and mileage of all "Toyota Camrys" in the inventory of the dealership named "Honda Sales". (Note that a "Toyota Camry" is indicated by the make being "Toyota" and the model being "Camry".)
SELECT 
	c.Vin,
	c.Year,
	c.Mileage
FROM 
	Dealer.Cars c,Dealer.Inventory i,Dealer.Dealerships d
WHERE 
	c.Make='Toyota' AND c.Model='Camry' AND d.Name='Honda Sales' AND c.Vin=i.Vin AND i.DealerShipId=d.DealerShipId;
GO

--10. Find the name of all customers who bought a car at a dealership located in a state other than the state in which they live.
SELECT c.Name
FROM 
	Dealer.Customers c,Dealer.Sales s,Dealer.Dealerships d 
WHERE 
	c.CustomerId=s.CustomerId AND s.DealerShipId=d.DealerShipId AND d.State<>c.State;
GO

--11. Find the name of the salesperson that made the largest base salary working at the dealership named "Honda Sales" during January 2020.
SELECT 
	TOP 1 s.Name,
	w.BaseSalaryForMonth AS 'MaxSalary'
FROM Dealer.SalesPersons s,Dealer.Dealerships d,Dealer.WorksAt w
WHERE 
	d.Name='Honda Sales' AND w.MonthWorked='Jan' AND s.SalesPersonId=w.SalesPersonId AND d.DealerShipId=w.DealerShipId 
ORDER BY w.BaseSalaryForMonth DESC;
GO

--12. List the name, street address, city, and state of any customer who has bought more than two cars from all dealerships combined since January 1, 2010.
WITH CustSaleDealer(Cid,Did) AS
(
	SELECT 
		c.CustomerId,
		d.DealerShipId
	FROM Dealer.Customers c,Dealer.Sales s,Dealer.Dealerships d
	WHERE c.CustomerId=s.CustomerId AND s.DealerShipId=d.DealerShipId
)
SELECT *
FROM Dealer.Customers c
WHERE (SELECT COUNT(Cid) FROM CustSaleDealer WHERE Cid=c.CustomerId)>=(SELECT COUNT(DealerShipId) FROM Dealer.Dealerships)*2
AND (SELECT COUNT(DISTINCT Did) FROM CustSaleDealer WHERE Cid=c.CustomerId)>=(SELECT COUNT(DealerShipId) FROM Dealer.Dealerships)
AND (SELECT MIN(Sdate) FROM CustSaleDealer WHERE Cid=c.CustomerId)>'2010-01-01';
GO


--13. List the name, salesperson ID, and total sales amount for each salesperson who has ever sold at least one car. The total sales amount for a salesperson is the sum of the sale prices of all cars ever sold by that salesperson.
SELECT sp.Name,sp.SalesPersonId,SUM(sl.SalePrice) AS 'Total Sales Amount'
FROM Dealer.SalesPersons sp,Dealer.Sales sl 
WHERE sp.SalesPersonId=sl.SalesPersonId GROUP BY sp.NAME,sp.SalesPersonId;
GO

--14. Find the names of all customers who bought cars during 2010 who were also salespeople during 2010. For the purpose of this query, assume that no two people have the same name.


--15. Find the name and salesperson ID of the salesperson who sold the most cars for the company at dealerships located in Gujarat between March 1, 2020 and March 31, 2020.
SELECT 
	sp.Name,
	sp.SalesPersonId
FROM 
	Dealer.SalesPersons sp
WHERE 
	sp.SalesPersonId = (SELECT SalesPersonId FROM
						(
							SELECT DENSE_RANK() OVER(ORDER BY COUNT(SalesPersonId) DESC) AS 'TopSale',SalesPersonId
							FROM Dealer.Sales 
							WHERE 
								DealerShipId IN (SELECT DealerShipId FROM Dealer.Dealerships WHERE State='Gujarat') 
								AND SaleDate BETWEEN '2020-03-01' AND '2020-03-31'
								GROUP BY SalesPersonId
						 ) AS Tab1 WHERE Tab1.TopSale=1
						);
GO

--SELECT * FROM Dealer.Sales WHERE SaleDate BETWEEN '2020-03-01' AND '2020-03-31';
SELECT * 
FROM Dealer.Sales 
WHERE SaleDate BETWEEN '2020-03-01' AND '2020-03-31';

/*16. Calculate the payroll for the month of March 2010.
	* The payroll consists of the name, salesperson ID, and gross pay for each salesperson who worked that month.
        * The gross pay is calculated as the base salary at each dealership employing the salesperson that month, along with the total commission for the salesperson that month.
        * The total commission for a salesperson in a month is calculated as 5% of the profit made on all cars sold by the salesperson that month.
        * The profit made on a car is the difference between the sale price and the invoice price of the car. (Assume, that cars are never sold for less than the invoice price.) */

WITH SalesProfit(SalesPersonId,SalesPersonProfit) AS
(
	SELECT
		Tab1.SalesPersonId,
		SUM((Tab1.SalePrice-car.InvoicePrice)*0.05) AS 'SalesPersonProfit'
	FROM 
		Dealer.Cars car,
		(SELECT * FROM Dealer.Sales WHERE DATEPART(MM,SaleDate)=3 AND DATEPART(YY,SaleDate)=2020) AS Tab1
	WHERE car.Vin=Tab1.Vin GROUP BY Tab1.SalesPersonId
)
SELECT 
	sp.Name,
	sp.SalesPersonId,
	wa.BaseSalaryForMonth,
	CASE 
		WHEN spr.SalesPersonProfit IS NULL THEN 0
		ELSE Spr.SalesPersonProfit
	END AS 'SaleProfit',
	CASE 
		WHEN spr.SalesPersonProfit IS NULL THEN wa.BaseSalaryForMonth
		ELSE (wa.BaseSalaryForMonth+SalesPersonProfit) 
	END AS 'GrossPay'
FROM Dealer.SalesPersons sp,Dealer.WorksAt wa LEFT OUTER JOIN SalesProfit spr ON wa.SalesPersonId=spr.SalesPersonId
WHERE 
	wa.MonthWorked='March' AND
	sp.SalesPersonId=wa.SalesPersonId;
GO