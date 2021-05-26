CREATE DATABASE Day11
GO

USE Day11 
/*Deposite Table*/

CREATE TABLE Deposits
(
	ActNo varchar(5) PRIMARY KEY,
	Cname varchar(18)  FOREIGN KEY (Cname) REFERENCES Customers(Cname),
	Bname varchar(18)  FOREIGN KEY (Bname) REFERENCES Branches(Bname),
	Amount INT,
	Adate DATE 
)

INSERT INTO Deposits VALUES ('100','ANIL','VRCE',1000,'1995-03-01'),
							('101','SUNIL','AJNI',5000,'1996-01-04'),
							('102','MEHUL','KAROLBAGH',3500,'1995-11-17'),
							('104','MADHURI','CHANDNI',1200,'1995-12-17'),
							('105','PRAMOD','M.G.ROAD',3000,'1996-03-27'),
							('106','SANDIP','ANDHERI',2000,'1996-03-31'),
							('107','SHIVANI','VIRAR',1000,'1995-09-05'),
							('108','KRANTI','NEHRU PLACE',5000,'1995-07-02'),
							('109','NAREN','POWAI',7000,'1995-08-10')
CREATE TABLE Branches
(
	Bname varchar(18) PRIMARY KEY,
	City varchar(18)
)


INSERT INTO Branches VALUES ('VRCE','NAGPUR'),
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
	Bname varchar(18) FOREIGN KEY (Bname) REFERENCES Branches(Bname),
	Amount INT
)

INSERT INTO Borrows VALUES ('201','ANIL','VRCE',1000),
						  ('206','MEHUL','AJNI',5000),
						  ('311','SUNIL','DHARAMPETH',3000),
						  ('321','MADHURI','ANDHERI',2000),
						  ('375','PRAMOD','VIRAR',8000),
						  ('481','KRANTI','NEHRU PLACE',3000)

SELECT * FROM Deposits
SELECT * FROM Branches
SELECT * FROM Customers
SELECT * FROM Borrows

/*Create a Store Procedure which will accept name of the customer as input parameter and product the following output, 
List Names of Customers who are Depositors and have Same Branch City as that of input parameter customer’s Name*/

	CREATE PROCEDURE Query_11_1 
	@Cname varchar(18)
	AS

		SET NOCOUNT ON;
		SELECT d.Cname FROM Deposits d JOIN Branches b ON d.Bname = b.Bname WHERE b.City = (SELECT b.City FROM Deposits d JOIN Branches b ON d.Bname = b.Bname WHERE Cname = @Cname)

GO

	EXECUTE Query_11_1 N'ANIL'
GO


/*Create a Store Procedure which will accept name of the customer as input parameter and produce the following output List in JSON format, 
All the Depositors Having Depositors Having Deposit in All the Branches where input parameter customer is Having an Account*/

	CREATE PROCEDURE Query_11_2 
	@Cname varchar(18)
	AS

		SET NOCOUNT ON;
		SELECT Cname FROM Deposits  WHERE Bname IS NOT NULL AND Amount IS NOT NULL AND EXISTS(SELECT * FROM Deposits WHERE Cname = @Cname AND ActNo IS NOT NULL) FOR JSON PATH

GO
	
	EXECUTE Query_11_2 N'SUNIL'

/*Create a Store Procedure that will accept city name and returns the number of customers in that city*/

	CREATE PROCEDURE Query_11_3 
	@City varchar(18),
	@CUST varchar(18) OUTPUT
	AS

		SET NOCOUNT ON;
		SELECT @CUST=Cname FROM Customers WHERE City = @City 
	RETURN
GO
	
	DECLARE @CUSTOMER varchar(18)
	EXECUTE Query_11_3 N'SUNIL' ,@CUST = @CUSTOMER OUTPUT
	
GO

/*Create a Store Procedure which will accept city of the customer as input parameter and product the following output List in JSON format 
List All the Customers Living in city provided in input parameter and Having the Branch City as MUMBAI or DELHI*/

	CREATE PROCEDURE Query_11_4 
	@City varchar(18)
	AS

		SET NOCOUNT ON;
		SELECT d.Cname FROM Deposits d JOIN Customers c ON d.Cname = c.Cname 
									   JOIN Branches b ON d.Bname = b.Bname WHERE c.City = @City OR b.City IN ('MUMBAI','DELHI') FOR JSON PATH

GO
	
	EXECUTE Query_11_4 N'NAGPUR'
GO

/*Count the Number of Customers Living in the City where Branch is Located*/

	CREATE PROCEDURE Query_11_5
	AS

		SET NOCOUNT ON;
		SELECT COUNT(d.Cname) FROM Deposits d JOIN Branches b ON d.Bname = b.Bname WHERE b.City IS NOT NULL AND d.Bname IS NOT NULL
		
GO

	EXECUTE Query_11_5

/*Create a Procedure which will accept input in JSON parameter CustomerName,City, ACTNO,Branch,amount  
And insert these record in the Deposit table. Before inserting some validation should be done like amount should be greater than 10Rs. 
and date should always be current date*/

		SELECT * INTO Deposits1 FROM Deposits 

		CREATE PROCEDURE Query_11_7 @json nvarchar(MAX)
		AS BEGIN 
		SET NOCOUNT ON
		DECLARE @actno varchar(5) ,@cname varchar(18) ,@bname varchar(18) ,@amount INT ,@adate DATE
		DECLARE cursor_7 CURSOR FOR 
		SELECT ActNo ,Cname,Bname,Amount,Adate FROM OPENJSON(@json)
		WITH(
			ActNo varchar(5) '$.ActNo',
			Cname varchar(18) '$.Cname',
			Bname varchar(18) '$.Bname',
			Amount MONEY '$.Amount',
			Adate DATE '$.Adate'			 
		)  
		OPEN cursor_7
		if @@CURSOR_ROWS > 0
		BEGIN 
		FETCH NEXT FROM cursor_7 INTO @actno,@cname,@bname,@amount,@adate
		WHILE @@FETCH_STATUS = 0
			BEGIN 
				IF @amount > 10 AND @adate = CONVERT(date,GETDATE())
				BEGIN
					INSERT INTO Deposits1 VALUES(@actno,@cname,@bname,@amount,@adate)
				END
				ELSE 
					PRINT ('Please insert correct values')
					FETCH NEXT FROM cursor_7 INTO @actno,@cname,@bname,@amount,@adate
				
			END
		END
		CLOSE cursor_7
		DEALLOCATE cursor_7
		SET NOCOUNT OFF
		END


		DECLARE @JSONv nvarchar(MAX)
		SET @JSONv = N'[{"ActNo": "110","Cname": "MANISH","Bname": "AJNI","Amount": 4000 ,"Adate": "2021-03-23"},
					  {"ActNo": "111","Cname": "HARESH","Bname": "CHARODI","Amount": 8000,"Adate": "2021-03-23" },
					  {"ActNo": "112","Cname": "NAYAN","Bname": "VRCE","Amount": 6000,"Adate": "1996-03-19"}]'

		EXECUTE Query_11_7 @JSONv  
		GO
		SELECT * FROM Deposits1