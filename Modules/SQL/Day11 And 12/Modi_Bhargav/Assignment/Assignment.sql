CREATE DATABASE Day11
USE Day11

CREATE TABLE BrancheTable (
BNAME varchar(18) NOT NULL CONSTRAINT pkBraName PRIMARY KEY,
CITY varchar(18) NOT NULL
)

INSERT INTO BrancheTable  VALUES  ('VRCE', 'NAGPUR'),	
		                          ('AJNI', 'NAGPUR'),	
		                          ('KAROLBAGH', 'DELHI'),	
		                          ('CHANDNI',	'DELHI'),	
		                          ('DHARAMPETH', 'NAGPUR'),	
		                          ('M.G.ROAD', 'BANGLORE'),	
		                          ('ANDHERI',	'MUMBAI'),	
		                          ('VIRAR', 'MUMBAI'),	
		                          ('NEHRU PLACE',	'DELHI'),	
		                          ('POWAI', 'MUMBAI')
INSERT INTO BrancheTable  VALUES ('RATANPOL','PATAN')
INSERT INTO BrancheTable  VALUES ('FOURLINE','MEHSANA')
SELECT * FROM BrancheTable

CREATE TABLE CustomerTable (
CNAME varchar(18) NOT NULL CONSTRAINT pkCityName PRIMARY KEY,
CITY varchar(18) NOT NULL
)
INSERT INTO CustomerTable VALUES  ('ANIL', 'KOLKATA'),	
                                  ('SUNIL', 'DELHI'),	
                                  ('MEHUL', 'ARODA'),	
                                  ('MANDAR', 'PATNA'),	
                                  ('MADHURI', 'NAGPUR'),	
                                  ('PRAMOD', 'NAGPUR'),	
                                  ('SANDIP', 'SURAT'),	
                                  ('SHIVANI', 'MUMBAI'),	
                                  ('KRANTI', 'MUMBAI'),	
                                  ('NAREN', 'MUMBAI')
INSERT INTO CustomerTable  VALUES ('BHARGAV','PATAN')
INSERT INTO CustomerTable  VALUES ('PRIT','MEHSANA')

SELECT * FROM CustomerTable

CREATE TABLE DepositTable (
ACTNO varchar(5) NOT NULL CONSTRAINT pkActNo PRIMARY KEY,
CName varchar(18) CONSTRAINT fkCName FOREIGN KEY REFERENCES CustomerTable(CNAME),
BName varchar(18) CONSTRAINT fkBName FOREIGN KEY REFERENCES BrancheTable(BNAME),
Amount int NOT NULL,
Adate date NOT NULL
)

INSERT INTO DepositTable VALUES (100, 'ANIL', 'VRCE', 1000, '1-Mar-1995'),	
		                        (101, 'SUNIL', 'AJNI', 5000, '4-Jan-1996'),	
								(102, 'MEHUL', 'KAROLBAGH',	3500, '17-Nov-1995'),	
								(104, 'MADHURI', 'CHANDNI',	1200, '17-Dec-1995'),	
								(105, 'PRAMOD', 'M.G.ROAD', 3000, '27-Mar-1996'),	
								(106, 'SANDIP',	'ANDHERI', 2000, '31-Mar-1996'),	
								(107, 'SHIVANI', 'VIRAR', 1000, '5-Sep-1995'),	
								(108, 'KRANTI',	'NEHRU PLACE', 5000, '2-Jul-1995'),	
								(109, 'NAREN', 'POWAI',	7000, '10-Aug-1995')

SELECT * FROM DepositTable

CREATE TABLE BorrowTable(
LOANNO varchar(5) NOT NULL CONSTRAINT pkLoanNo PRIMARY KEY,
CNAME varchar(18) CONSTRAINT fkCNameBorrow FOREIGN KEY REFERENCES CustomerTable(CNAME),
BNAME varchar(18) CONSTRAINT fkBNameBorrow FOREIGN KEY REFERENCES BrancheTable(BNAME),
AMOUNT int NOT NULL,
)

INSERT INTO BorrowTable VALUES 	(201, 'ANIL', 'VRCE', 1000),	
								(206, 'MEHUL', 'AJNI', 5000),	
								(311, 'SUNIL', 'DHARAMPETH', 3000),	
								(321, 'MADHURI', 'ANDHERI', 2000),	
								(375, 'PRAMOD', 'VIRAR', 8000),	
								(481, 'KRANTI', 'NEHRU PLACE', 3000)

SELECT * FROM BorrowTable

/*****  1. Create a Store Procedure which will accept name of the customer as input parameter and 
           produce the following output, List Names of Customers who are Depositors and have Same 
		   Branch City as that of input parameter customer’s Name.*****/

           CREATE PROCEDURE CustomerName 
		                         @CusName nvarchar(50) 
           AS   
             SET NOCOUNT ON;  
             SELECT CName FROM DepositTable
             WHERE BName IN (SELECT BNAME FROM CustomerTable c
			                 JOIN BrancheTable b ON c.CITY = b.CITY WHERE c.CNAME = @CusName)
           GO

EXECUTE CustomerName 'SHIVANI' 
GO

/***** 2. Create a Store Procedure which will accept name of the customer as input parameter and
          produce the following output List in JSON format, All the Depositors Having Depositors
		  Having Deposit in All the Branches where input parameter customer is Having an Account. *****/

		  CREATE OR ALTER PROCEDURE DepositorName  @inpName nvarchar(50) 
          AS   
             SET NOCOUNT ON;  
		     SELECT CName FROM DepositTable
             WHERE BName IN (SELECT BNAME FROM DepositTable 
		     WHERE CNAME = @inpName)
			 FOR JSON PATH, ROOT('Depositor')
          GO

EXECUTE DepositorName 'SANDIP'
GO

/***** 3. Create a Store Procedure that will accept city name and returns the number of customers in that city.*****/
       
	   CREATE PROCEDURE CityName  @City nvarchar(50) 
       AS
	   SET NOCOUNT ON;  
       SELECT CNAME FROM CustomerTable
	   WHERE CITY = @City
	   GO

EXECUTE CityName 'DELHI'
EXECUTE CityName 'MUMBAI'
Go

/***** 4.Create a Store Procedure which will accept city of the customer as input parameter 
         and product the following output List in JSON format List All the Customers Living 
		 in city provided in input parameter and Having the Branch City as MUMBAI or DELHI.*****/

		  
	   CREATE OR ALTER PROCEDURE CustomerCity  @City nvarchar(50) 
       AS
	   SET NOCOUNT ON;  
       SELECT CNAME FROM DepositTable d 
	   INNER JOIN BrancheTable b ON b.BNAME = d.BName
	   WHERE b.CITY = @City
	   GO

EXECUTE CityName 'DELHI'
EXECUTE CityName 'MUMBAI'
Go

/***** 5.Count the Number of Customers Living in the City where Branch is Located *****/
       SELECT * FROM CustomerTable
	   SELECT * FROM DepositTable
	   SELECT CNAME FROM CustomerTable WHERE CITY = (SELECT TOP 1 CITY FROM (SELECT c.CITY,COUNT(*) AS 'TotalCustomer' FROM CustomerTable c JOIN DepositTable d
	   ON c.CNAME = d.CName GROUP BY (CITY)) AS A ORDER BY TotalCustomer DESC)
		  
/***** 6. Create a Procedure which will accept input in JSON parameter CustomerName,City, ACTNO,Branch,amount  
          And insert these record in the Deposit table. Before inserting some validation should be done like 
		  amount should be greater than 10Rs. and date should always be current date.*****/

		 CREATE PROCEDURE  DepositData
         @InpData nvarchar(MAX)
         AS   
         SET NOCOUNT ON; 
		 DECLARE @ACTNo int
		 DECLARE @CName varchar(20)
		 DECLARE @BName varchar(18)
		 DECLARE @Amount money
	
	     DECLARE DepositCursor CURSOR FOR
	     SELECT ACTNo, CName, BName, Amount FROM OPENJSON(@inpData)
	     WITH(
		      ACTNO int '$.ACTNo',
		      CNAME varchar(18) '$.CName',
		      BNAME varchar(18) '$.BName',
		      AMOUNT money '$.Amount'
			  )

	        OPEN  DepositCursor
	        FETCH NEXT FROM DepositCursor INTO @ACTNo, @CName, @BName, @Amount

	        WHILE @@FETCH_STATUS = 0
	        BEGIN
		         IF (@Amount > 10) 
		         BEGIN
			          PRINT('VALID AMOUNT')
			          INSERT INTO DepositTable VALUES(@ACTNo, @CName, @BName, @Amount, GETDATE())
			          SELECT * FROM DepositTable WHERE ACTNO = @ACTNo
		         END
		         ELSE
			          PRINT('Invalid! Amount should be gereater than 10')
		              FETCH NEXT FROM DepositCursor INTO @ACTNo, @CName, @BName, @Amount
	         END

CLOSE DepositCursor
DEALLOCATE DepositCursor
GO

DECLARE @CustomerInfo nvarchar(MAX)
SET @CustomerInfo = N'
	[
	{
	    "ACTNo": "120",
	    "CName":"BHARGAV",
		"BName": "RATANPOL",
		"Amount": 1300
	},
	{
	  	"ACTNo": "125",
	    "CName":"PRIT",
		"BName": "FOURLINE",
		"Amount": 2000
	}
	] '

EXECUTE DepositData @CustomerInfo
GO

SELECT * FROM DepositTable