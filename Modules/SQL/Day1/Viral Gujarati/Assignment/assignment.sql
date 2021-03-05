use MyDB

CREATE TABLE businessEmployees(
	EmpId int CONSTRAINT pkEmpId PRIMARY KEY,
	EmpName varchar(50),
	EmpSalary int,
	EmpCommission int CONSTRAINT ukEmpCommission UNIQUE
)

insert businessEmployees(EmpId, EmpName, EmpSalary, EmpCommission) VALUES (1, 'viral', 15000, 10)
insert businessEmployees(EmpId, EmpName, EmpSalary, EmpCommission) VALUES (2, 'rahul', 25000, 12)
insert businessEmployees(EmpId, EmpName, EmpSalary, EmpCommission) VALUES (3, 'jay', 35000, 13)
insert businessEmployees(EmpId, EmpName, EmpSalary, EmpCommission) VALUES (4, 'ram', 25000, 15)





CREATE TABLE CarInventory(
	CarId int CONSTRAINT pkCarId PRIMARY KEY,
	CarName varchar(50) NOT NULL,
	CarColour varchar(50),
	CarQty int CONSTRAINT DefCarQty DEFAULT 0
)
INSERT CarInventory(CarId, CarName, CarColour, CarQty) VALUES (1, 'Swift', 'blue', 10)
INSERT CarInventory(CarId, CarName, CarColour, CarQty) VALUES (2, 'Swift', 'red', 12)
INSERT CarInventory(CarId, CarName, CarColour, CarQty) VALUES (3, 'Swift', 'black', 13)
INSERT CarInventory(CarId, CarName, CarColour, CarQty) VALUES (4, 'Swift', 'white', 14)

select * from CarInventory


CREATE TABLE CompletedSales(
	SalesId int CONSTRAINT pkSCompletedalesId PRIMARY KEY,
	EmpId int CONSTRAINT fkSalesEmpId FOREIGN KEY REFERENCES businessEmployees(EmpId),
	CarId int CONSTRAINT fkCarInventoryId FOREIGN KEY REFERENCES CarInventory(CarId),
	DateOfSelling date NOT NULL,
)

select * from CompletedSales
