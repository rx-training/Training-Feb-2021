/* 1) Find the names of all salespeople who have ever worked for the company at any dealership.*/

		SELECT Name FROM SalesPerson s INNER JOIN s1 ON (s.SalesPersonID= s1.SalesPersonID)
		INNER JOIN DealershipID d ON (d.DealershipID = s.DealershipID) WHERE s.Name = d.Name 

		SELECT Name FROM SalesPerson WHERE 



		 i. car (carid, vin, make, model, year, mileage, askprice, invoiceprice)
  ii. dealership (dealershipid, name, address, city, state)
 iii. salesperson (salespersonid, name)
  iv. customer (customerid, name, address, city, state)
   v. reportsto (reportstoid, salespersonid, managingsalespersonid)
  vi. worksat (worksatid, salespersonid, dealershipid, monthworked, basesalaryformonth)
 vii. inventory (inventoryid, vin, dealershipid)
viii. sale (saleid, vin, customerid, salespersonid, dealershipid, saleprice, saledate)





SELEct EmployeeID, DepartmentID    FROM Employees WHERE DepartmentID IN (SELECT DepartmentID FROM Departments)


SELECT ManagerID From Departments