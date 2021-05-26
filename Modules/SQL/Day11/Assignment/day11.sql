

---Create the following tables and insert the data as listed below:


CREATE DATABASE Procedures;

USE Procedures;

----Customer table

CREATE TABLE Customer 
(
CName VARCHAR(18) NOT NULL CONSTRAINT PKCName PRIMARY  KEY,
City VARCHAR(18) NOT NULL
)

INSERT INTO Customer (CName, City)
VALUES
('ANIL','KOLKATA'),
('SUNIL','DELHI'),
('MEHUL','BARODA'),	
('MANDAR','PATNA')	,
('MADHURI','NAGPUR'),	
('PRAMOD','NAGPUR'),
('SANDIP','SURAT'),	
('SHIVANI','MUMBAI'),	
('KRANTI','MUMBAI')	,
('NAREN','MUMBAI');

----branch table

CREATE TABLE Branch
(
BName VARCHAR(18)  NOT NULL CONSTRAINT PKBName PRIMARY  KEY,
City  VARCHAR(18) NOT NULL
)

INSERT INTO Branch (BName,City)
VALUES 
('VRCE','NAGPUR'),	
('AJNI','NAGPUR'),
('KAROLBAGH','DELHI'),	
('CHANDNI','DELHI'	),
('DHARAMPETH','NAGPUR'),	
('M.G.ROAD','BANGLORE')	,
('ANDHERI','MUMBAI'),
('VIRAR','MUMBAI'),
('NEHRU PLACE','DELHI'),	
('POWAI','MUMBAI');

--deposit table 
CREATE TABLE Deposit 
(
ActNo VARCHAR(5) NOT NULL CONSTRAINT PKActNo PRIMARY KEY,
CName VARCHAR(18) NOT NULL CONSTRAINT FKCname FOREIGN KEY REFERENCES Customer(CName),
BName VARCHAR(18) NOT NULL CONSTRAINT FKBName FOREIGN KEY REFERENCES Branch(BName),
Amount int NOT NULL,
Adate DATE NOT NULL);

INSERT INTO Deposit (ActNo,CName,BName,Amount,Adate)
VALUES 
(100,'ANIL','VRCE',1000,'1-Mar-1995'),
(101,'SUNIL','AJNI',5000,'4-Jan-1996'),	
(102,'MEHUL','KAROLBAGH',3500,'17-Nov-1995'),	
(104,'MADHURI','CHANDNI',1200,'17-Dec-1995'),	
(105,'PRAMOD','M.G.ROAD',3000,'27-Mar-1996'),	
(106,'SANDIP','ANDHERI',2000,'31-Mar-1996'),
(107,'SHIVANI','VIRAR',1000,'5-Sep-1995'),
(108,'KRANTI','NEHRU PLACE',5000,'2-Jul-1995'),	
(109,'NAREN','POWAI',7000,'10-Aug-1995')

--borrow table 
CREATE TABLE Borrow
(
LoanNo VARCHAR(5) NOT NULL CONSTRAINT PKLoanNo PRIMARY KEY,
CName VARCHAR(18) NOT NULL CONSTRAINT FKCnames FOREIGN KEY REFERENCES Customer(CName),
BName VARCHAR(18) NOT NULL CONSTRAINT FKBnames FOREIGN KEY REFERENCES Branch(BName),
Amount INT NOT NULL
)

INSERT INTO Borrow (LoanNo, CName, BName, Amount)
VALUES 
(201,'ANIL','VRCE',1000),	
(206,'MEHUL','AJNI',5000	),
(311,'SUNIL','DHARAMPETH',3000),	
(321,'MADHURI','ANDHERI',2000),	
(375,'PRAMOD','VIRAR',8000	),
(481,'KRANTI','NEHRU PLACE',3000)


SELECT * FROM Deposit;
SELECT * FROM Customer;
SELECT * FROM Branch;
SELECT * FROM Borrow;



--step 2.  Create the queries listed below:

/*--1.Create a Store Procedure which will accept name of the customer as input parameter and product 
the following output, List Names of Customers who are Depositors and have Same Branch City as that of input parameter customer’s Name.*/

ALTER PROCEDURE CustCity
@BCust varchar(18),
@Cust varchar(100) OUTPUT

AS 
BEGIN 
SET NOCOUNT ON
SELECT  @Cust=D.CName FROM Deposit AS D JOIN Branch AS B ON D.BName = B.BName WHERE B.City = 
(SELECT City FROM Customer WHERE CName = @BCust )
END 
GO

DECLARE @Cust VARCHAR(50) 
EXECUTE CustCity 'KRANTI', @Cust OUTPUT
PRINT @Cust
GO


-----without output parameter
ALTER PROCEDURE CustCity
@Cust varchar(18)
AS 
BEGIN 
SET NOCOUNT ON
SELECT  D.CName FROM Deposit AS D JOIN Branch AS B ON D.BName = B.BName WHERE B.City = 
(SELECT City FROM Customer WHERE CName = @Cust )
END 
GO


EXECUTE CustCity 'KRANTI';
GO


/*2.Create a Store Procedure which will accept name of the customer as input parameter and produce the following 
output List in JSON format, All the Depositors Having Depositors Having Deposit in All 
the Branches where input parameter customer is Having an Account*/

ALTER PROCEDURE getJSONOutput
@Cust varchar(25),
@BCust varchar(18) OUTPUT

AS
BEGIN
SET NOCOUNT ON;
SELECT @BCust = CName FROM Deposit WHERE BName IN 
(SELECT BName FROM Deposit WHERE CName = @Cust)
FOR JSON AUTO ;
END
GO

DECLARE @Cname VARCHAR(50) 
EXECUTE getJSONOutput 'ANIL', @Cname OUTPUT
PRINT @Cname
GO


-----without output parameter 
ALTER PROCEDURE getJSONOutput

@Cname varchar(18) 

AS

SET NOCOUNT ON;
SELECT CName FROM Deposit WHERE BName IN 
(SELECT BName FROM Deposit WHERE CName = @Cname)
FOR JSON AUTO ;
GO

EXECUTE getJSONOutput 'ANIL';






--5.Count the Number of Customers Living in the City where Branch is Located

ALTER PROCEDURE Counting
@CUST VARCHAR(18)
AS 

SET NOCOUNT ON;
SELECT COUNT(D.CName) AS 'COUNTING' FROM Deposit D JOIN Branch B ON D.BName = B.BName  WHERE B.City = @CUST 
GO 


EXECUTE Counting 'MUMBAI';



--3.Create a Store Procedure that will accept city name and returns the number of customers in that city.

ALTER PROCEDURE getCustomer
(
@CUST varchar(18)

)
AS 
BEGIN
SET NOCOUNT ON ;
SELECT Cname FROM Customer WHERE City = @CUST
END 
GO 


EXECUTE getCustomer 'MUMBAI';


----WITH OUTPUT PARAMETER


ALTER PROCEDURE getCustomer

@CUST varchar(18),
@CName varchar(18) OUTPUT

AS 
BEGIN
SET NOCOUNT ON ;
SELECT @CName=Cname FROM Customer WHERE City = @CUST
END 
GO 

DECLARE @CName VARCHAR(50) 
EXECUTE getCustomer 'MUMBAI',  @CName OUTPUT
PRINT @CName
go







/*--4.Create a Store Procedure which will accept city of the customer as input parameter and product the following output 
List in JSON format List All the Customers Living in city provided in input parameter and Having the Branch City as MUMBAI or DELHI*/

ALTER PROCEDURE CityCustomer
@Cust varchar(18)
AS 

SET NOCOUNT ON ;

SELECT C.CName FROM Customer AS C JOIN Deposit  AS D ON C.CName = D.CName JOIN Branch AS B ON D.BName = B.BName
WHERE B.CITY = 'MUMBAI' OR B.City= 'DELHI' AND C.City = @Cust
FOR JSON AUTO;
GO


EXECUTE CityCustomer 'MUMBAI';
SELECT * FROM Deposit
SELECT * FROM Branch
SELECT * FROM Customer



/*--6.Create a Procedure which will accept input in JSON parameter CustomerName,City, ACTNO,Branch,amount  
And insert these record in the Deposit table. Before insertin
g some validation should be done like amount should be greater than 10Rs. and date should always be current date.*/

ALTER PROCEDURE InsertJSON
@insJSON nvarchar(max)
AS
SET NOCOUNT ON ;

DECLARE @Amount MONEY
DECLARE @BName VARCHAR(18)
DECLARE @CName VARCHAR(18)
DECLARE @ActNo int 


DECLARE DemoCursor CURSOR FOR 
SELECT ActNo , CName ,BName , Amount FROM OPENJSON(@insJSON)
	WITH(
	ActNo int '$.ActNo',
CName varchar(18) '$.CName',
BName varchar(18) '$.BName',
Amount money '$.Amount'
)

OPEN DemoCursor 
FETCH NEXT FROM DemoCursor INTO @ActNo, @CName , @BName , @Amount 


WHILE @@FETCH_STATUS = 0
BEGIN 
IF (@Amount > 10)
BEGIN 
PRINT ('Its Valid') 
INSERT INTO Deposit
VALUES (@ActNo,@CName,@BName,@Amount ,GETDATE())
END 
FETCH NEXT FROM DemoCursor INTO @ActNo, @CName , @BName , @Amount 

END

CLOSE DemoCursor
DEALLOCATE DemoCursor
GO

DECLARE @JSONData NVARCHAR(MAX) 
SET @JSONData = N'
[{
"ActNo":111 , "CName":"Anil","BName":"VRCE","amount":2200
},
{"ActNo":112 , "CName":"Sunil","BName":"M.G.Road","amount":1400
},
{"ActNo":113 , "CName":"Mehul","BName":"Andheri","amount":3400
},
{"ActNo":114 , "CName":"Madhuri","BName":"VRCE","amount":400
}]
'
EXECUTE InsertJSON @JSONData;
SELECT * FROM Deposit

