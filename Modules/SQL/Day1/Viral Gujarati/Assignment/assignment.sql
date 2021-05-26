use MyDB

CREATE TABLE BusinessEmployees(
	EmpId Int CONSTRAINT pkEmpId PRIMARY KEY,
	EmpName varchar(50),
	EmpSalary Int,
	EmpCommission Int CONSTRAINT ukEmpCommission UNIQUE
)

INSERT BusinessEmployees(EmpId, EmpName, EmpSalary, EmpCommission) VALUES (1, 'viral', 15000, 10)
INSERT BusinessEmployees(EmpId, EmpName, EmpSalary, EmpCommission) VALUES (2, 'rahul', 25000, 12)
INSERT BusinessEmployees(EmpId, EmpName, EmpSalary, EmpCommission) VALUES (3, 'jay', 35000, 13)
INSERT BusinessEmployees(EmpId, EmpName, EmpSalary, EmpCommission) VALUES (4, 'ram', 25000, 15)





CREATE TABLE CarInventory(
	CarId Int CONSTRAINT pkCarId PRIMARY KEY,
	CarName varchar(50) NOT NULL,
	CarColour varchar(50),
	CarQty Int CONSTRAINT DefCarQty DEFAULT 0
)
INSERT CarInventory(CarId, CarName, CarColour, CarQty) VALUES (1, 'Swift', 'blue', 10)
INSERT CarInventory(CarId, CarName, CarColour, CarQty) VALUES (2, 'Swift', 'red', 12)
INSERT CarInventory(CarId, CarName, CarColour, CarQty) VALUES (3, 'Swift', 'black', 13)
INSERT CarInventory(CarId, CarName, CarColour, CarQty) VALUES (4, 'Swift', 'white', 14)

SELECT * From CarInventory


CREATE TABLE CompletedSales(
	SalesId Int CONSTRAINT pkSCompletedalesId PRIMARY KEY,
	EmpId   Int CONSTRAINT fkSalesEmpId FOREIGN KEY REFERENCES businessEmployees(EmpId),
	CarId   Int CONSTRAINT fkCarInventoryId FOREIGN KEY REFERENCES CarInventory(CarId),
	DateOfSelling Date NOT NULL,
)

SELECT * From CompletedSales
