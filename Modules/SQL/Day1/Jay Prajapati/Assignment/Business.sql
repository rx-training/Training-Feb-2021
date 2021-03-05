CREATE TABLE businessEmployees(
	EmpId int CONSTRAINT pkEmpId PRIMARY KEY,
	EmpName varchar(20),
	EmpSalary int,
	EmpCommission int CONSTRAINT ukEmpCommission UNIQUE
);



CREATE TABLE CarInventory(
	CarId int CONSTRAINT pkCarId PRIMARY KEY,
	CarName varchar(20) NOT NULL,
	CarColour varchar(20),
	CarQty int CONSTRAINT DefCarQty DEFAULT 0
);

select * from CarInventory


CREATE TABLE CompletedSales(
	SalesId int CONSTRAINT pkSCompletedalesId PRIMARY KEY,
	EmpId int CONSTRAINT fkSalesEmpId FOREIGN KEY REFERENCES businessEmployees(EmpId),
	CarId int CONSTRAINT fkCarInventoryId FOREIGN KEY REFERENCES CarInventory(CarId),
	DateOfSelling date NOT NULL,
);

select * from CompletedSales