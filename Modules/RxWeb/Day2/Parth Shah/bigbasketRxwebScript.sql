Create database RxwebBigbasket;
Create database RxwebBigbasketlog;

Use RxwebBigbasket;


CREATE TABLE Customer
(
CustId int NOT NULL CONSTRAINT PKCustID PRIMARY KEY IDENTITY(1,1),
Cust_Name Varchar(50) NOT NULL,
Address VARCHAR(50),
PhoneNo VARCHAR(50) 
)

CREATE TABLE Country 
(
CountryId int NOT NULL CONSTRAINT PKCountryID PRIMARY KEY IDENTITY(1,1),
CountryName VARCHAR(50) NOT NULL 
)


CREATE TABLE City 
(
CityId int NOT NULL CONSTRAINT PKCityID PRIMARY KEY IDENTITY(1,1),
Country_ID int NOT NULL CONSTRAINT FKCountryID FOREIGN KEY REFERENCES Country(CountryId),
CityName VARCHAR(30) NOT NULL
)

CREATE TABLE Category
(
CategoryId int NOT NULL CONSTRAINT PKCatID PRIMARY KEY IDENTITY(1,1),
CategoryName VARCHAR(50) NOT NULL,
)

CREATE TABLE Brand 
(
BrandId int NOT NULL CONSTRAINT PKBrandID PRIMARY KEY IDENTITY(1,1),
BrandName VARCHAR(50) NOT NULL ,
CategoryID int NOT NULL CONSTRAINT FKCatID FOREIGN KEY REFERENCES Category(CategoryId),
)

CREATE TABLE Product
(
ProductId int NOT NULL CONSTRAINT PKProductID PRIMARY KEY IDENTITY(1,1),
ProductName VARCHAR(50) NOT NULL,
BrandId int NOT NULL CONSTRAINT FKBrandID FOREIGN KEY REFERENCES Brand(BrandID),
ProductPrice MONEY NOT NULL ,
ProductDescription Varchar(50),
Ingredients Varchar(50)
)

CREATE TABLE Cart
(
CartID int NOT NULL CONSTRAINT PKCartID PRIMARY KEY IDENTITY(1,1),
ProductId int NOT NULL CONSTRAINT FKProdID FOREIGN KEY REFERENCES Product(ProductId),
CustId int CONSTRAINT FKPCustID FOREIGN KEY REFERENCES Customer(CustId)
)

CREATE TABLE Sales 
(
SaleId int NOT NULL CONSTRAINT  PKID PRIMARY KEY IDENTITY(1,1),
ProductID int NOT NULL CONSTRAINT FKProductID FOREIGN KEY REFERENCES Product(ProductID),
ProductQty INT ,
InvoiceDate Date NOT NULL,
ProductPrice MONEY NOT NULL,
CustId int NOT NULL CONSTRAINT FKCust_ID FOREIGN KEY REFERENCES Customer(CustId),
CountryId int NOT NULL CONSTRAINT FKCountID FOREIGN KEY REFERENCES Country(CountryId),
CityId int NOT NULL CONSTRAINT FKCityID FOREIGN KEY REFERENCES City(CityId),
ShippedAddress Varchar(100) NOT NULL,
Taxes MONEY,
InvoiceAmount MONEY NOT NULL
)

----------views-----------------
CREATE VIEW bbBrandCategory AS
SELECT P.ProductName , B.BrandName , C.CategoryName FROM Product AS P JOIN Brand AS B ON P.BrandID =B.BrandID
JOIN Category AS C ON C.CategoryId = B.CategoryID 


---creating a view of what are the products purchased on particular date 
CREATE VIEW bbProductPurchased AS
SELECT ProductID FROM Sales WHERE InvoiceDate = '2021-03-01'

--CREATING A VIEW how much product sold on a particular date 

CREATE VIEW bbProductSold
AS SELECT COUNT(P.ProductID) AS Pid , S.InvoiceDate FROM Sales AS S JOIN Product AS P 
ON S.ProductID = P.ProductID 
GROUP BY (S.InvoiceDate)

---Creating a view of getting customer with its respective product :

CREATE VIEW bbCustomerProduct
AS 
SELECT C.CustId ,S.ProductID FROM Customer AS C 
JOIN Sales AS S ON C.CustId = S.CustId 


--create view of getting product name ,and brand name and category name :
CREATE VIEW BbproductDetail
AS
Select P.ProductID, P.ProductName , B.BrandName ,C.CategoryName FROM Product AS P Join Brand AS B on P.BrandID = B.BrandID 
Join Category as C On B.CategoryID = C.CategoryId; 


--Create a view to see data :

Create VIEW bbSaleCustomer AS
Select c.CartID ,P.ProductName , Cu.Cust_Name From Product As P Join Cart as c On P.ProductId = c.ProductId Join Customer as Cu On cu.CustId = c.CustId;


--Create a Sale  detail:
 Create View bbSaleDetail as
 Select s.SaleId , s.ProductPrice, s.InvoiceAmount , s.ProductQty , s.InvoiceDate , c.Cust_Name ,c.Address, ci.CityName , P.ProductName , co.countryName From Sales as S Join Customer as c on s.CustId = c.CustId join Country as co on s.CountryId = co.CountryId
 join City as ci on s.CityId = ci.CityId join Product as P on s.ProductID = P.ProductId;





