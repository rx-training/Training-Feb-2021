USE CarCompany;

-- Jobs table will have data of different designations in the company.
CREATE TABLE Jobs (
	JobID int PRIMARY KEY NOT NULL,
	JobTitle VARCHAR(50) DEFAULT '',
	MinSalary int NOT NULL DEFAULT 8000,
	MaxSalary int DEFAULT NULL
);
CREATE TABLE Employees (
	EmployeeID int PRIMARY KEY IDENTITY,
	FirstName VARCHAR(50) NOT NULL,
	LastName VARCHAR(50) NOT NULL,
	Email VARCHAR(50) NOT NULL,
	PhoneNumber VARCHAR(10) NOT NULL,
	HireDate date NOT NULL,
	JobID int NOT NULL,
	Salary VARCHAR(50) NOT NULL,
	Commission int NOT NULL,
	ManagerID int NOT NULL
	CONSTRAINT fkJobID FOREIGN KEY (JobID) REFERENCES Jobs (JobID)
);


-- CarModels table has all data of car models that company provides
CREATE TABLE CarModels (
	ModelID int PRIMARY KEY IDENTITY,
	ModelName VARCHAR(50) NOT NULL,
	Price int NOT NULL,
	CarType VARCHAR(50) NOT NULL,
	AvailableStock int NOT NULL,
	Sold int NOT NULL,
	Booked int NOT NULL,
	LaunchDate date NOT NULL,
);

--Inventories table will have data of all cars that company has been manufactured.
CREATE TABLE Inventories (
	CarID int PRIMARY KEY IDENTITY,
	ModelID int NOT NULL,
	ManufactureDate date NOT NULL,
	CONSTRAINT fkModelID FOREIGN KEY (ModelID) REFERENCES CarModels (ModelID)
);

-- Sales table will have data of all sales done by company's salesmen.
CREATE TABLE Sales (
	SaleID int PRIMARY KEY IDENTITY,
	CarID int NOT NULL,
	SalesmanID int NOT NULL,
	SalesmanCommission int NOT NULL,
	SaleDate DATE NOT NULL,
	CONSTRAINT fkCarID FOREIGN KEY (CarID) REFERENCES Inventories (CarID),
	CONSTRAINT fkSalesmanID FOREIGN KEY (SalesmanID) REFERENCES Employees (EmployeeID)
);

