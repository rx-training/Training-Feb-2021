CREATE TABLE Employees
(
EmployeeId INT NOT NULL PRIMARY KEY,
FirstName varchar(10) NOT NULL,
LastName varchar(10) NOT NULL,
Email varchar(15) NOT NULL,
PhoneNumber INT NOT NULL,
HireDate date NOT NULL,
Job_Id varchar(5) NOT NULL,
Salary INT NOT NULL,
Commission INT DEFAULT NULL,
Manager_ID INT NOT NULL,
Department_Id INT NOT NULL
)

CREATE TABLE Inventories
(
ItemId INT NOT NULL,
ItemName varchar(20) NOT NULL,
Price INT NOT NULL,
SoldPrice INT NOT NULL,
DateSold date NOT NULL,
SalesmanId varchar(10) NOT NULL,
PRIMARY KEY (SalesmanId,ItemId,DateSold)
)

CREATE TABLE Sales
(
ItemId INT NOT NULL,
SalesmanID varchar(10) NOT NULL,
SalesmanProfit INT NOT NULL,
DateSold date NOT NULL,
CONSTRAINT FKItemId FOREIGN KEY (SalesmanId,ItemId,DateSold) REFERENCES Inventories(SalesmanId,ItemId,DateSold)
)

SELECT * FROM Sales