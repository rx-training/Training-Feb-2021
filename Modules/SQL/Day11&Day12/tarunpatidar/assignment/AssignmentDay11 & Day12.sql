CREATE TABLE Deposit
(
	ActNo varchar(5) PRIMARY KEY,
	Cname varchar(18)  FOREIGN KEY (Cname) REFERENCES Customers(Cname),
	Bname varchar(18)  FOREIGN KEY (Bname) REFERENCES Branch(Bname),
	Amount INT,
	Adate DATE 
)

INSERT INTO Deposit VALUES ('100','ANIL','VRCE',1000,'1995-03-01'),
							('101','SUNIL','AJNI',5000,'1996-01-04'),
							('102','MEHUL','KAROLBAGH',3500,'1995-11-17'),
							('104','MADHURI','CHANDNI',1200,'1995-12-17'),
							('105','PRAMOD','M.G.ROAD',3000,'1996-03-27'),
							('106','SANDIP','ANDHERI',2000,'1996-03-31'),
							('107','SHIVANI','VIRAR',1000,'1995-09-05'),
							('108','KRANTI','NEHRU PLACE',5000,'1995-07-02'),
							('109','NAREN','POWAI',7000,'1995-08-10')

CREATE TABLE Branch
(
	Bname varchar(18) PRIMARY KEY,
	City varchar(18)
)


INSERT INTO Branch VALUES ('VRCE','NAGPUR'),
							('AJNI','NAGPUR'),
							('KAROLBAGH','DELHI'),
							('CHANDNI','DELHI'),
							('DHARAMPETH','NAGPUR'),
							('M.G.ROAD','BANGLORE'),
							('ANDHERI','MUMBAI'),
							('VIRAR','MUMBAI'),
							('NEHRU PLACE','DELHI'),
							('POWAI','MUMBAI')

CREATE TABLE Customers
(
	Cname varchar(18) PRIMARY KEY,
	City varchar(18)
)

INSERT INTO Customers VALUES ('ANIL','KOLKATA'),
							 ('SUNIL','DELHI'),
							 ('MEHUL','BARODA'),
							 ('MANDAR','PATNA'),
							 ('MADHURI','NAGPUR'),
							 ('PRAMOD','NAGPUR'),
							 ('SANDIP','SURAT'),
							 ('SHIVANI','MUMBAI'),
							 ('KRANTI','MUMBAI'),
							 ('NAREN','MUMBAI')


CREATE TABLE Borrows
(
	LoanNo varchar(5) PRIMARY KEY,
	Cname varchar(18) FOREIGN KEY (Cname) REFERENCES Customers(Cname),
	Bname varchar(18) FOREIGN KEY (Bname) REFERENCES Branch(Bname),
	Amount INT
)

INSERT INTO Borrows VALUES ('201','ANIL','VRCE',1000),
						  ('206','MEHUL','AJNI',5000),
						  ('311','SUNIL','DHARAMPETH',3000),
						  ('321','MADHURI','ANDHERI',2000),
						  ('375','PRAMOD','VIRAR',8000),
						  ('481','KRANTI','NEHRU PLACE',3000)


SELECT * FROM Deposit
SELECT * FROM Branch
SELECT * FROM Customers
SELECT * FROM Borrows

---- 1. Create a Store Procedure which will accept name of the customer as input parameter and product the following output, List Names of Customers who are Depositors and have Same Branch City as that of input parameter customer’s Name. --------

CREATE PROCEDURE SP @Cname varchar(18)
AS
SET NOCOUNT ON;
SELECT d.Cname FROM Deposit d JOIN Branch b ON d.Bname = b.Bname
WHERE b.City = (SELECT b.City FROM Deposit d JOIN Branch b ON d.Bname = b.Bname WHERE Cname = @Cname)

GO

EXECUTE SP N'ANIL'

GO

---- 2. Create a Store Procedure which will accept name of the customer as input parameter and produce the following output List in JSON format, All the Depositors Having Depositors Having Deposit in All the Branches where input parameter customer is Having an Account. --------

CREATE PROCEDURE SP1 @Name nvarchar(50) 
AS   
    SET NOCOUNT ON;  
    SELECT Cname
    FROM Deposit
    WHERE Bname IN (SELECT Bname 
		FROM Deposit 
		WHERE Cname = @Name)
	FOR JSON PATH
GO

EXEC SP1 'ANIL'
GO

---- 3. Create a Store Procedure that will accept city name and returns the number of customers in that city. --------

CREATE PROCEDURE SP2 @City nvarchar(50)
AS
SET NOCOUNT ON;
SELECT COUNT(Cname) 'number of customers' FROM Customers WHERE City = @City

GO

EXECUTE SP2 N'NAGPUR'

GO

---- 4. Create a Store Procedure which will accept city of the customer as input parameter and product the following output List in JSON format List All the Customers Living in city provided in input parameter and Having the Branch City as MUMBAI or DELHI. --------


CREATE PROCEDURE SP3 @City varchar(18)
AS
SET NOCOUNT ON;
SELECT d.Cname FROM Deposit d JOIN Customers c ON d.Cname = c.Cname 
JOIN Branch b ON d.Bname = b.Bname WHERE c.City = @City OR b.City IN ('MUMBAI','DELHI') FOR JSON PATH

GO

EXECUTE SP3 N'NAGPUR'

GO

---- 5. Count the Number of Customers Living in the City where Branch is Located. --------

CREATE PROCEDURE SP4
AS
SET NOCOUNT ON;
SELECT COUNT(d.Cname) FROM Deposit D JOIN Branch B ON d.Bname = b.Bname
WHERE  b.City IS NOT NULL AND d.Bname IS NOT NULL

GO

EXECUTE SP4

GO

---- 6. Create a Procedure which will accept input in JSON parameter CustomerName,City, ACTNO,Branch,amount And insert these record in the Deposit table. Before inserting some validation should be done like amount should be greater than 10Rs. and date should always be current date. --------

CREATE PROCEDURE SP5Json @inpJson nvarchar(MAX) 
AS   
    SET NOCOUNT ON; 

	DECLARE @amount money
	DECLARE @bName varchar(18)
	DECLARE @cName varchar(18)
	DECLARE @actNo int
	
	DECLARE Cursor1 CURSOR FOR
	SELECT actNo, cName, bName, amount FROM OPENJSON(@inpJson)
	WITH(
		actNo int '$.actNo',
		cName varchar(18) '$.cName',
		bName varchar(18) '$.bName',
		amount money '$.amount'
	)

	OPEN Cursor1 
	
	FETCH NEXT FROM Cursor1 INTO @actNo, @cName, @bName, @amount

	WHILE @@FETCH_STATUS = 0
	BEGIN
		--PRINT(@actNo)
		--PRINT(@cName)
		--PRINT(@bName)
		--PRINT(@amount)

		IF (@amount > 10) 
		BEGIN
			PRINT('VALID')
			INSERT INTO Deposit
			VALUES(@actNo, @cName, @bName, @amount, GETDATE())

			SELECT * FROM Deposit WHERE actNo = @actNo
		END
		ELSE
			PRINT('Invalid! Amount should be gereater than 10')
		FETCH NEXT FROM Cursor1 INTO @actNo, @cName, @bName, @amount
	END

	CLOSE Cursor1
	DEALLOCATE Cursor1
GO


DECLARE @jsonVar nvarchar(MAX)
SET @jsonVar = N'[
                   {"actNo": 110, "cName": "ANIL", "bName": "M.G.ROAD", "amount": 3300 },
	               {"actNo": 111, "cName": "SUNIL", "bName": "VIRAR", "amount": 8 },
	               {"actNo": 112, "cName": "MEHUL", "bName": "VRCE", "amount": 500}
	             ]'

EXECUTE SP5Json @jsonVar
GO

select * from Deposit