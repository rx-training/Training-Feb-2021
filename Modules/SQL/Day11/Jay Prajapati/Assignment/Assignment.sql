USE BankDB;

SELECT * FROM Deposit
SELECT * FROM Borrow
SELECT * FROM Customer

INSERT INTO Deposit
VALUES (121,'Shivani','Andheri',4000,03/02/1998)
SELECT * FROM Branch

/*Q1: Create a Store Procedure which will accept name of the 
customer as input parameter and product the following output,
List Names of Customers who are Depositors and have Same Branch
City as that of input parameter customer’s Name.*/

CREATE PROCEDURE GetCustomerByName @Name NVARCHAR(50)
AS
BEGIN
	SELECT Cname
	FROM Deposit AS D
	INNER JOIN Branch AS B
	ON D.Bname = B.Bname
	WHERE B.City = 	(SELECT B.City
			FROM Branch AS B
			INNER JOIN Deposit AS D
			ON B.Bname = D.Bname
			WHERE Cname = @Name)
END

EXECUTE GetCustomerByName 'Anil';
/*Q2: Create a Store Procedure which will accept name of the customer
as input parameter and produce the following output List in JSON format,
All Depositors Having Deposit in All the Branches 
where input parameter customer is Having an Account*/

CREATE PROCEDURE GetDepositorByName @Name NVARCHAR(50),@JSONOUT NVARCHAR(MAX) OUTPUT
AS 
BEGIN
 /*SET @JSONOUT =(SELECT Cname
	FROM Deposit
	WHERE Bname = ALL(SELECT Bname FROM Deposit   
						WHERE Cname = @Name)FOR JSON AUTO) SELECT @JSONOUT*/
	
	
	SELECT Cname 
		FROM Deposit 
		WHERE Bname IN (SELECT DISTINCT Bname 
							FROM Deposit 
							WHERE Cname = @Name)  
		GROUP BY Cname 
		HAVING COUNT(*) = (SELECT count(Bname) FROM Deposit WHERE Cname = 'Shivani')
							FOR JSON PATH, ROOT ('Depositors')
END
--DROP PROCEDURE GetDepositorByName

--DECLARE @JsonOutput NVARCHAR(MAX)
EXECUTE GetDepositorByName @Name ='Shivani ',@JSONOUT = OUTPUT 
--PRINT @JsonOutput

SELECT Cname
	FROM Deposit
	WHERE Bname = ALL(SELECT Bname FROM Deposit   
						WHERE Cname = 'Sandip')


/*Q3: Create a Store Procedure that will accept city name and returns 
the number of customers in that city.*/

CREATE PROCEDURE GetCustomerCountByCity @City NVARCHAR(50)
AS 
BEGIN
	RETURN (SELECT Count(Cname) FROM Customer WHERE City = @City)
END

DECLARE @CustCount int
EXECUTE @CustCount = GetCustomerCountByCity 'Mumbai'
PRINT @CustCount

/*Q4: Create a Store Procedure which will accept city of the customer 
as input parameter and produce the following output List in JSON format
List All the Customers Living in city provided in input parameter and 
Having the Branch City as MUMBAI or DELHI*/

ALTER PROCEDURE GetCusDetailByCity @City NVARCHAR(50)
AS
BEGIN
		SELECT C.Cname
		FROM Deposit AS D
		INNER JOIN Branch AS B
		ON D.Bname = B.Bname
		INNER JOIN Customer  AS C
		ON C.Cname = D.Cname
		WHERE B.City = 'Mumbai' OR B.City = 'Delhi' 
		AND C.City = @City
END

EXECUTE GetCusDetailByCity 'Mumbai'

/*Q5: Count the Number of Customers Living in the City where Branch is Located*/

CREATE PROCEDURE GetCustomersCount
AS
BEGIN
	SELECT COUNT(Distinct Cname)
	FROM Customer AS C
	INNER JOIN Branch AS B
	ON C.City = B.City
END

EXECUTE GetCustomersCount

/*Q6: Create a Procedure which will accept input in JSON parameter 
CustomerName,City, ACTNO,Branch,amount And insert these record in 
the Deposit table. Before inserting some
validation should be done like amount should be greater than 10Rs. 
and date should always be current date.  */


ALTER PROCEDURE JsonToTable @JSONVal NVARCHAR(MAX)
AS
BEGIN
	
	INSERT INTO Deposit (ACTNO,Cname,Bname,Amount)
	SELECT ACTNO,Cname,Bname,Amount
	FROM OPENJSON(@JSONVal)
	WITH (ACTNO NVARCHAR(5) ,
			Cname NVARCHAR(18),
			Bname NVARCHAR(18),
			Amount INT)
END


DECLARE @JSON NVARCHAR(MAX)
SET @JSON = '[{"Cname" : "Adam","ACTNO" : 171,"Bname" : "Surat", "Amount" : "5000" }]'
EXECUTE JsonToTable @JSON

SELECT * FROM Deposit



DECLARE @json NVARCHAR(MAX)
SET @json = '[
 { "id" : 2,"firstName": "John", "lastName": "Smith",
   "age": 25, "dateOfBirth": "2007-03-25T12:00:00" },
 { "id" : 5,"firstName": "John", "lastName": "Smith",
   "age": 35, "dateOfBirth": "2005-11-04T12:00:00" },
 { "id" : 7,"firstName": "John", "lastName": "Smith",
   "age": 15, "dateOfBirth": "1983-10-28T12:00:00" },
 { "id" : 8,"firstName": "John", "lastName": "Smith",
   "age": 12, "dateOfBirth": "1995-07-05T12:00:00" },
 { "id" : 9,"firstName": "John", "lastName": "Smith",
   "age": 37, "dateOfBirth": "2015-03-25T12:00:00" }
]'

INSERT INTO Person (id, name, surname, age, dateOfBirth)
 SELECT id, firstNAme, lastName, age, dateOfBirth 
 FROM OPENJSON(@json)
 WITH (id int,
       firstName nvarchar(50), lastName nvarchar(50), 
       age int, dateOfBirth datetime2)

	   
CREATE TABLE Person
(
	id int,
	name NVARCHAR(50),
	surname NVARCHAR(50),
	age int,
	dateOfBirth datetime2
)
SELECT * FrOM Person