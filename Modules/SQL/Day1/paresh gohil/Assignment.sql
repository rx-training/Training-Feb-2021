USE Practices;

CREATE TABLE Emps
(
	EmployeeID INT PRIMARY KEY IDENTITY,
	FirstName varchar(20) NOT NULL,
	LastName varchar(20) NOT NULL,
	Email varchar(30) NOT NULL,
	PhoneNumber bigint NOT NULL,
	JoinDate date NOT NULL,
	JobID INT NOT NULL,
	Salary bigint NOT NULL,

)

CREATE TABLE Inventories
(
	LaunchDate date NOT NULL,
	Make varchar(20) NOT NULL,
	Modal varchar(20) NOT NULL,
	CarID varchar(10) NOT NULL,
	Mileage FLOAT NOT NULL,
	Price bigint NOt NULL,
	SoldPrice bigint NOT NULL,
	Profit bigint NOT NULL,
	DateSold date NOT NULL,
	SalesmanID varchar(10) NOT NULL,
	PRIMARY KEY (SalesmanID,CarID,DateSold)

)

CREATE TABLE Sales
(
	CarID varchar(10) NOT NULL,
	SalesmanID varchar(10) NOT NULL,
	SalesmanCommission INT NOT NULL,
	DateSold date NOT NULL,
	CONSTRAINT fkCarID FOREIGN KEY (SalesmanID,CarID,DateSold) REFERENCES Inventories(SalesmanID,CarID,DateSold),
)