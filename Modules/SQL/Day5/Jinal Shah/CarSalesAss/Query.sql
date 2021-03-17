/*
16. Calculate the payroll for the month of March 2010.
	* The payroll consists of the name, salesperson ID, and gross pay for each salesperson who worked that month.
    * The gross pay is calculated as the base salary at each dealership employing the salesperson that month, 
	  along with the total commission for the salesperson that month.
    * The total commission for a salesperson in a month is calculated as 5% of the profit made on all cars sold 
	  by the salesperson that month.
    * The profit made on a car is the difference between the sale price and the invoice price of the car. 
	  (Assume, that cars are never sold for less than the invoice price.)    */

	
      SELECT sp.salespersonid, sp.name,
        SUM(ISNULL(w.basesalaryformonth, 0) + ISNULL(((c.askprice - c.invoiceprice) * 5 / 100), 0)) [Gross Pay]
    FROM salesperson sp
    LEFT JOIN sale s ON s.salespersonid = sp.salespersonid
    LEFT JOIN car c ON c.vin = s.vin
    RIGHT JOIN worksat w ON w.salespersonid = sp.salespersonid
    WHERE DATENAME(MM, s.saledate) = 'March' AND YEAR(s.saledate) = 2010
    GROUP BY sp.salespersonid, sp.name
    ORDER BY sp.salespersonid;