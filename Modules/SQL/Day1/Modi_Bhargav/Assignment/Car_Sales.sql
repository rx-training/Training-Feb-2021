/*------------------------------Assignment--------------------------*/

/* You have been hired to create a relational database to support a car sales business. 
   You need to store information on the business’s employees, inventory, and completed sales.
   You also need to account for the fact that each salesperson receives a different percentage
   of their sales in commission. What tables and columns would you create in your relational
   database, and how would you link the tables?
*/


CREATE TABLE CompanyEmployes (
 EmpId int NOT NULL PRIMARY KEY,
 EmpName varchar(30) NOT NULL,
 EmpLocation varchar(20) NOT NULL,
 EmpContact int NOT NULL,
 EmpSalary int NOT NUll,
 EmpCommission int NOT NULL
);

ALTER TABLE CompanyEmployes 
ALTER COLUMN EmpContact nvarchar(10);
INSERT INTO CompanyEmployes VALUES(1,'Bhargav','Patan',8849422641,15000,1500);
INSERT INTO CompanyEmployes VALUES(2,'Meet','Prajapati',2545522512,12000,1200);

SELECT * FROM CompanyEmployes

CREATE TABLE CarsInventory (
    CarId int NOT NULL PRIMARY KEY,
	CarName varchar(20) NOT NULL,
	CarColor varchar(20) NOT NULL,
	CarTotal int NOT NULL,
);
INSERT INTO CarsInventory VALUES(1,'ALTo','White',10),(2,'Swift','Blue',5);
SELECT * FROM CarsInventory

CREATE TABLE CarsSale (
       SalesId int NOT NULL PRIMARY KEY,
	   EmpId int NOT NULL,
	   CarId int NOT NULL,
	   SalesDate date NOT NULL,
	   CONSTRAINT fkEmpId FOREIGN KEY (EmpId) REFERENCES CompanyEmployes(EmpId),
	   CONSTRAINT fkCarID FOREIGN KEY (CarId) REFERENCES CarsInventory(CarId)
	   );
INSERT INTO CarsSale VALUES(1,1,1,'2020-02-10');
INSERT INTO CarsSale VALUES(2,2,2,'2020-02-10');
INSERT INTO CarsSale VALUES(3,1,1,'2020-01-20');
INSERT INTO CarsSale VALUES(4,2,1,'2020-01-20');
INSERT INTO CarsSale VALUES(5,1,2,'2020-01-15');
SELECT * FROM CarsSale 

