/*Create a Store Procedure which will accept name of the customer as input parameter and product the following output, 
List Names of Customers who are Depositors and have Same Branch City as that of input parameter customer’s Name.*/


Select * from CUSTOMER
Select * from Deposit
Select * from BORROW

Alter PROCEDURE Getdepositors
@Cname varchar(15)
As
BEGIN
SELECT CNAME FROM DEPOSIT 
WHERE Bname IN (SELECT BNAME FROM BRANCH
WHERE CITY = (SELECT CITY FROM CUSTOMER WHERE CNAME = @Cname))
END
GO
exec Getdepositors 'KRANTI'


/* Create a Store Procedure which will accept name of the customer as input parameter and produce the following output List 
in JSON format, All the Depositors Having Depositors Having Deposit in All the Branches where input parameter customer is 
Having an Account*/

ALTER PROCEDURE GetCustomer 
@Cname nvarchar(50)
AS
BEGIN
	SET NOCOUNT ON;
	SELECT CNAME FROM DEPOSIT
	WHERE Bname IN(SELECT Bname FROM DEPOSIT WHERE  Cname=@Cname)
END
GO
EXEC GetCustomer  'KRANTI'


/* Create a Store Procedure that will accept city name and returns the number of customers in that city.*/

ALTER PROCEDURE GetCityWiseCustomer
@CITY VARCHAR(50)
AS
BEGIN
SET NOCOUNT ON;
SELECT CNAME FROM CUSTOMER WHERE CITY = @CITY
END
GO	
EXEC GetCityWiseCustomer 'NAGPUR'

/* Create a Store Procedure which will accept city of the customer as input parameter and product the following output List 
in JSON format List All the Customers Living in city provided in input parameter and Having the Branch City as MUMBAI or 
DELHI*/

CREATE PROCEDURE CITYOFCUSTOMER 
@City VARCHAR(50)
AS
SET NOCOUNT ON;
BEGIN
SELECT C.CNAME
FROM CUSTOMER AS C JOIN DEPOSIT AS D ON C.CNAME = D.Cname
WHERE D.Bname IN(SELECT Bname FROM BRANCH WHERE CITY IN('MUMBAI','DELHI')) AND C.CITY=@City
FOR JSON AUTO
END
 
EXEC CITYOFCUSTOMER 'MUMBAI'

 /*Count the Number of Customers Living in the City where Branch is Located*/

 CREATE PROCEDURE CustomersInCityBranch
 @Bname nvarchar(50)
 AS
 BEGIN
 SET NOCOUNT ON;
 SELECT COUNT(C.CNAME) 'TotalCustomer'
 FROM DEPOSIT D JOIN CUSTOMER C ON D.Cname=C.CNAME
 WHERE C.CITY IN(SELECT CITY FROM BRANCH WHERE Bname=@Bname)
 END
 EXEC CustomersInCityBranch 'VIHAR'


