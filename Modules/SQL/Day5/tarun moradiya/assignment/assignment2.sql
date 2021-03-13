
--1. Find the names of all salespeople who have ever worked for the company at any dealership.

SELECT name
FROM SalesPersons S JOIN WorksAt W
ON S.salesPersonId = W.salesPersonId

--2. List the Name, Street Address, and City of each customer who lives in Ahmedabad.

SELECT name
	, address
	, city
FROM Customers 
WHERE city = 'Ahmedabad'

--3. List the VIN, make, model, year, and mileage of all cars in the inventory of the dealership named "Hero Honda Car World".

SELECT C.vin
	, make
	, model
	, year
	, mileage
FROM Cars C JOIN (SELECT I.dealershipId, I.vin, D.name 
		FROM Inventories I JOIN Dealerships D
		ON I.dealershipId = D.dealershipId) B
ON C.vin = B.vin
WHERE B.name = 'Hero Honda Car World'


--4. List names of all customers who have ever bought cars from the dealership named "Concept Hyundai".

SELECT C.name
FROM Customers C JOIN (SELECT D.name, S.customerId
		FROM Dealerships D JOIN Sales S
		ON D.dealershipId = S.dealershipId) B
ON B.customerId = C.customerId
WHERE B.name = 'Concept Hyundai'

--5. For each car in the inventory of any dealership, list the VIN, make, model, and year of the car, along with the name, city, and state 
--of the dealership whose inventory contains the car.

SELECT C.vin
	,make
	,model
	,C.year
	,B.name
	,B.city
	,B.state
FROM Cars C JOIN (SELECT I.vin
		, D.name
		, D.city
		, D.state
	FROM Inventories I JOIN Dealerships D
	ON I.dealershipId = D.dealershipId) B
ON B.vin = C.vin


--6. Find the names of all salespeople who are managed by a salesperson named "Adam Smith".

SELECT S.name
FROM SalesPersons S JOIN (SELECT R.salesPersonId
		FROM ReportsTo R JOIN SalesPersons A
		ON R.managingSalesPersonId = A.salesPersonId
		WHERE A.name = 'Adam Smith') B
ON S.salesPersonId = B.salesPersonId

--7. Find the names of all salespeople who do not have a manager.

SELECT S.name
FROM SalesPersons S JOIN (SELECT R.salesPersonId
		FROM ReportsTo R JOIN SalesPersons A
		ON R.managingSalesPersonId = A.salesPersonId
		WHERE A.name = NULL) B
ON S.salesPersonId = B.salesPersonId

--8. Find the total number of dealerships.

SELECT COUNT(1) AS 'TotalDealerships'
FROM Dealerships D JOIN Sales S
ON D.dealershipId = S.dealershipId

--9. List the VIN, year, and mileage of all "Toyota Camrys" in the inventory of the dealership named "Toyota Performance".
--(Note that a "Toyota Camry" is indicated by the make being "Toyota" and the model being "Camry".)

SELECT C.vin
	, year
	, mileage
FROM Cars C JOIN (SELECT vin
	FROM Inventories I JOIN Dealerships D
	ON I.dealershipId = D.dealershipId
	WHERE D.name = 'Toyota Performance') B
ON C.vin = B.vin
WHERE make = 'Toyota' AND model = 'Camrys';

--10. Find the name of all customers who bought a car at a dealership located in a state other than the state in which they live.

SELECT C.name 
	, C.state AS 'CustomerState'
	, B.state AS 'DealershipState'
FROM Customers C JOIN (SELECT S.customerId
		, D.state
	FROM Sales S JOIN Dealerships D
	ON S.dealershipId = D.dealershipId) B
ON B.customerId = C.customerId
WHERE B.state != C.state

--11. Find the name of the salesperson that made the largest base salary working at the dealership named "Ferrari Sales" during January 2010.

SELECT S.name
	, B.saleDate
	, B.name
FROM SalesPersons S JOIN (SELECT D.name
		,A.saleDate
		, A.salesPersonId
	FROM Sales A JOIN Dealerships D
	ON A.dealershipId = D.dealershipId
	WHERE D.name = 'Ferrari Sales' AND YEAR(saleDate) = 2010 AND MONTH(saleDate) = 1 ) B
ON S.salesPersonId = B.salesPersonId;

--12. List the name, street address, city, and state of any customer who has bought more than two cars from all dealerships combined 
--since January 1, 2010.

SELECT name
	, address
	, city
	, state
FROM Customers C JOIN ( SELECT DENSE_RANK() OVER (PARTITION BY CustomerId ORDER BY Saleid) [d_rank], * FROM Sales) B
ON C.customerId = B.customerId
WHERE B.d_rank > 2 AND B.saleDate >= '2010-01-01';



--13. List the name, salesperson ID, and total sales amount for each salesperson who has ever sold at least one car. 
--The total sales amount for a salesperson is the sum of the sale prices of all cars ever sold by that salesperson.

SELECT name
	, SP.salesPersonId 
	, SUM(salePrice) AS 'TotalSalesAmount'
FROM Sales S JOIN SalesPersons SP
ON S.salesPersonId = SP.salesPersonId
GROUP BY SP.salesPersonId, SP.name

--14. Find the names of all customers who bought cars during 2010 who were also salespeople during 2010. 
--For the purpose of this query, assume that no two people have the same name.

SELECT C.name [CustomerName]
FROM Customers C 
	JOIN SalesPersons SP ON C.name = SP.name
	JOIN Sales S ON S.salesPersonId = SP.salesPersonId
	WHERE YEAR(S.saleDate) = 2010

--15. Find the name and salesperson ID of the salesperson who sold the most cars for the company at dealerships located in 
--Gujarat between March 1, 2010 and March 31, 2010.

SELECT SP.*
FROM SalesPersons SP
JOIN Sales S ON S.salesPersonId = SP.salesPersonId
JOIN Dealerships D ON D.dealershipId = S.dealershipId
WHERE SP.salesPersonId IN (
	SELECT salesPersonId
	FROM Sales
	GROUP BY salesPersonId
	HAVING COUNT(salesPersonId) =
		(
			SELECT MAX(countid)
			FROM (
					SELECT COUNT(salesPersonId) countid
					FROM Sales
					GROUP BY salesPersonId
				) tbl
		)
	)AND D.state = 'MADHYA PRADESH' AND S.saleDate >= '2010-03-01' 
	AND S.saleDate <= '2010-03-31';

/*16. Calculate the payroll for the month of March 2010.
	* The payroll consists of the name, salesperson ID, and gross pay for each salesperson who worked that month.
        * The gross pay is calculated as the base salary at each dealership employing the salesperson that month, 
		along with the total commission for the salesperson that month.
        * The total commission for a salesperson in a month is calculated as 5% of the profit made on all cars sold by
		the salesperson that month.
        * The profit made on a car is the difference between the sale price and the invoice price of the car. 
		(Assume, that cars are never sold for less than the invoice price.)*/

SELECT SP.salesPersonId
	, SP.name
	, SUM( ISNULL(W.basesalaryformonth, 0) + ISNULL(((C.askPrice - C.invoiceprice) * 5 / 100), 0)) [Gross Pay]
FROM SalesPersons SP
LEFT JOIN Sales S ON s.salesPersonId = SP.salesPersonId
LEFT JOIN Cars C ON C.vin = S.vin
RIGHT JOIN WorksAt W ON W.salesPersonId = SP.salesPersonId
WHERE DATENAME(MM, S.saleDate) = 'March' AND YEAR(S.saleDate) = 2010
GROUP BY SP.salesPersonId, SP.name
ORDER BY SP.salesPersonId;