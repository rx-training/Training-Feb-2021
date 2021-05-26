/*Step 1: Create the following tables and insert the data as listed below:*/



CREATE TABLE Branches(
	Bname VARCHAR(18) CONSTRAINT PK_Branches_Bname PRIMARY KEY,
	City VARCHAR(18),
 )

INSERT INTO Branches
VALUES
('VRCE',
'NAGPUR'),
 
('AJNI',
'NAGPUR'),
 
('KAROLBAGH',
'DELHI'),
 
('CHANDNI',
'DELHI'),
 
('DHARAMPETH',
'NAGPUR'),
 
('M.G.ROAD',
'BANGLORE'),
 
('ANDHERI',
'MUMBAI'),
 
('VIRAR',
'MUMBAI'),
 
('NEHRU PLACE',
'DELHI'),
 
('POWAI',
'MUMBAI')
 



CREATE TABLE Customers(
	Cname VARCHAR(18) CONSTRAINT PK_Customers_Cname PRIMARY KEY,
	City VARCHAR(18)
 )

INSERT INTO Customers
VALUES
('ANIL',
'KOLKATA'),
 
('SUNIL',
'DELHI'),
 
('MEHUL',
'BARODA'),
 
('MANDAR',
'PATNA'),
 
('MADHURI',
'NAGPUR'), 

('PRAMOD',
'NAGPUR'),
 
('SANDIP',
'SURAT'),
 
('SHIVANI',
'MUMBAI'),
 
('KRANTI',
'MUMBAI'),
 
('NAREN',
'MUMBAI')

CREATE TABLE Deposits(
	ActNo VARCHAR(5) CONSTRAINT PK_Deposits_ActNo PRIMARY KEY,
	Cname VARCHAR(18) CONSTRAINT FK_Deposits_Cname FOREIGN KEY REFERENCES Customers(Cname),
	Bname VARCHAR(18) CONSTRAINT FK_Deposits_Bname FOREIGN KEY REFERENCES Branches(Bname),
	Amount INT,
	Adate DATE
)
 

INSERT INTO Deposits
VALUES 
('100',
'ANIL',
'VRCE',
1000,
'1-Mar-1995'),
 
('101',
'SUNIL',
'AJNI',
5000,
'4-Jan-1996'),
 
('102',
'MEHUL',
'KAROLBAGH',
3500,
'17-Nov-1995'),
 
('104',
'MADHURI',
'CHANDNI',
1200,
'17-Dec-1995'),
 

('105',
'PRAMOD',
'M.G.ROAD',
3000,
'27-Mar-1996'),
 

('106',
'SANDIP',
'ANDHERI',
2000,
'31-Mar-1996'),
 

('107',
'SHIVANI',
'VIRAR',
1000,
'5-Sep-1995'),
 

('108',
'KRANTI',
'NEHRU PLACE',
5000,
'2-Jul-1995'),
 

('109',
'NAREN',
'POWAI',
7000,
'10-Aug-1995')
 
 
CREATE TABLE Borrows(
	LoanNo VARCHAR(5) CONSTRAINT PK_Borrows_LoanNo PRIMARY KEY,
	Cname VARCHAR(18) CONSTRAINT FK_Borrows_Cname FOREIGN KEY REFERENCES Customers(Cname),
	Bname VARCHAR(18) CONSTRAINT FK_Borrows_Bname FOREIGN KEY REFERENCES Branches(Bname),
	Amount INT
 )

INSERT INTO Borrows
VALUES
('201',
'ANIL',
'VRCE',
1000),
 
('206',
'MEHUL',
'AJNI',
5000),
 
('311',
'SUNIL',
'DHARAMPETH',
3000),
 
('321',
'MADHURI',
'ANDHERI',
2000),
 

('375',
'PRAMOD',
'VIRAR',
8000),
 
('481',
'KRANTI',
'NEHRU PLACE',
3000)
 



 

 

/*Step 2: Create the queries listed below USING Store Procedure

Q1: List Names of Customers who are Depositors and have Same Branch City as that of SUNIL*/

SELECT C.Cname
FROM Customers C JOIN Deposits D
ON C.Cname = D.Cname
JOIN Branches B
ON B.Bname = D.Bname
WHERE B.City = (SELECT B2.City
	FROM Deposits D2 JOIN Branches B2
	ON B2.Bname = D2.Bname
	WHERE D2.Cname = 'SUNIL' ) 


/*
Q2: List All the Depositors Having Depositors Having Deposit in All the Branches where SUNIL is Having Account*/

SELECT Cname
FROM Deposits 
WHERE Bname = (SELECT Bname
	FROM Deposits
	WHERE Cname = 'SUNIL')

/*Q3: List the Names of Customers Living in the City where the Maximum Number of Depositors are Located*/

SELECT Cname
FROM Customers
WHERE City = (SELECT TOP(1) City
	FROM Branches
	GROUP BY City
	ORDER BY COUNT(City) DESC)


/*List Names of Borrowers Having Deposit Amount Greater than 1000 and Loan Amount Greater than 2000*/

SELECT B.Cname
FROM Borrows B JOIN Deposits D
ON B.Cname = D.Cname
WHERE B.Amount > 2000 AND D.Amount > 1000

/*List All the Customers Living in NAGPUR and Having the Branch City as MUMBAI or DELHI*/

SELECT C.Cname
FROM Customers C JOIN Deposits D
ON C.Cname = D.Cname
JOIN Branches B
ON B.Bname = D.Bname
WHERE C.City = 'NAGPUR'
AND B.City IN ('MUMBAI', 'DELHI')
GO
/*Create a store procedure which will take input parameter a JSON object [{"ACTNO":110,"Cname":"ANIL","Bname":"ANDHERI","Amount":10000,"Date":"3/31/2021"},{"ACTNO":111,"Cname":"SHIVANI","Bname":"VIRAR","Amount":10000,"Date":"04/3/2021"},{"ACTNO":112,"Cname":"NAREN","Bname":"POWAI","Amount":10000,"Date":"06/3/2021"}]

will store these transaction in deposit table.*/

CREATE PROCEDURE uspInsertJson 
    @inpJson nvarchar(MAX) 
AS   
    SET NOCOUNT ON; 

	DECLARE @amount money
	DECLARE @bName varchar(18)
	DECLARE @cName varchar(18)
	DECLARE @actNo int
	DECLARE @date date
	
	DECLARE InsertCursor CURSOR FOR
	SELECT actNo, cName, bName, amount, Date  FROM OPENJSON(@inpJson)
	WITH(
		actNo int '$.ACTNO',
		cName varchar(18) '$.Cname',
		bName varchar(18) '$.Bname',
		amount money '$.Amount',
		Date date '$.Date'
	)

	OPEN InsertCursor 
	
	FETCH NEXT FROM InsertCursor INTO @actNo, @cName, @bName, @amount, @date

	WHILE @@FETCH_STATUS = 0
	BEGIN
		INSERT INTO Deposits
		VALUES(@actNo, @cName, @bName, @amount, @date)

		FETCH NEXT FROM InsertCursor INTO @actNo, @cName, @bName, @amount, @date
	END

	CLOSE InsertCursor
	DEALLOCATE InsertCursor
GO

DECLARE @myJson nvarchar(MAX)

SET @myJson = N'
[{"ACTNO":110,"Cname":"ANIL","Bname":"ANDHERI","Amount":10000,"Date":"3/31/2021"},{"ACTNO":111,"Cname":"SHIVANI","Bname":"VIRAR","Amount":10000,"Date":"04/3/2021"},{"ACTNO":112,"Cname":"NAREN","Bname":"POWAI","Amount":10000,"Date":"06/3/2021"}]
'

EXEC uspInsertJson @myJson
GO

select * from Deposits
GO

/*Count the Number of Customers Living in the City where Branch is Located using store procedure.*/

CREATE PROCEDURE uspNumberOfCustomers
	@bname varchar(18)
AS
BEGIN
SELECT  COUNT(Cname) AS 'NumberOfCustomers'
FROM Customers
WHERE City = (SELECT City FROM Branches WHERE Bname = @bname)
END

EXEC uspNumberOfCustomers 'ANDHERI'

