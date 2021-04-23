USE AssignmentDay35;
GO

--Q1: Create a Store Procedure which will accept name of the customer as input parameter and product the following output, 
--List Names of Customers who are Depositors and have Same Branch City as that of input parameter customer�s Name.

CREATE PROC spCustomersWhoAreDepositors
@Cname varchar(19)
AS
BEGIN
	SELECT c1.Cname 
	FROM Customer c1,Deposit d1 
	WHERE c1.Cname=d1.Cname AND c1.City 
	IN (SELECT b2.City 
		FROM Branch b2 
		WHERE b2.Bname 
		IN (SELECT d3.Bname FROM Deposit d3 WHERE d3.Cname=@Cname 
			UNION 
			SELECT b3.Bname FROM Borrow b3 WHERE b3.Cname=@Cname));
END

EXEC spCustomersWhoAreDepositors @Cname='MEHUL';
GO

--Q2: Create a Store Procedure which will accept name of the customer as input parameter and produce the following output 
--List in JSON format, All the Depositors Having Deposit in All the Branches where input parameter customer is Having an Account

CREATE OR ALTER PROC spDepositorsHavingDepositInAllBranch
@Cname varchar(19)
AS
BEGIN
	WITH CustomersBranch(Bname) AS
	(
		SELECT d5.Bname FROM Deposit d5 WHERE d5.Cname=@Cname
		UNION 
		SELECT b4.Bname FROM Borrow b4 WHERE b4.Cname=@Cname
	)
	SELECT DISTINCT(Cname) FROM Deposit d1
	WHERE 'YES'= (SELECT
						CASE
							WHEN COUNT(Tab1.Bname)=(SELECT COUNT(DISTINCT Bname) FROM CustomersBranch) THEN 'YES'
							ELSE 'NO'
						END
					FROM (SELECT d4.Bname FROM Deposit d4 WHERE d4.Cname=d1.Cname
							INTERSECT
						  SELECT Bname FROM CustomersBranch) AS Tab1);
END

EXEC spDepositorsHavingDepositInAllBranch @Cname='MEHUL';
GO

--Q3: Create a Store Procedure that will accept city name and returns the number of customers in that city.

CREATE PROC spCityCustomers
@City varchar(18)
AS
BEGIN
	SELECT COUNT(Cname) AS 'Number Of Customers' FROM Customer WHERE City=@City;
END

EXEC spCityCustomers @City='Mumbai';
GO

--Q4: Create a Store Procedure which will accept city of the customer as input parameter and product the following output
--List in JSON format List All the Customers Living in city provided in input parameter and Having the Branch City as MUMBAI or DELHI

CREATE PROC spCityCustomersBranchMumbaiDelhi
@City varchar(18) 
AS
BEGIN
	SELECT * FROM Customer c 
	WHERE c.City=@City 
	AND EXISTS(
				((SELECT d2.Bname FROM Deposit d2 WHERE d2.Cname=c.Cname UNION SELECT b2.Bname FROM Borrow b2 WHERE b2.Cname=c.Cname)
					INTERSECT
				  SELECT b3.Bname FROM Branch b3 WHERE b3.City='MUMBAI' OR b3.City='DELHI')
			   ) FOR JSON AUTO;
END

EXEC spCityCustomersBranchMumbaiDelhi @City='MUMBAI';
GO

--Q5: Count the Number of Customers Living in the City where Branch is Located

CREATE PROC spSameBranchCityCustomers
AS
BEGIN
	SELECT * FROM Customer c 
	WHERE 
		c.City IN (SELECT b2.City FROM Branch b2 
					WHERE 
						b2.Bname IN (SELECT d3.Bname FROM Deposit d3 WHERE d3.Cname=c.Cname UNION SELECT b3.Bname FROM Borrow b3 WHERE b3.Cname=c.Cname)
				  );
END

EXEC spSameBranchCityCustomers;
GO

--Q6: Create a Procedure which will accept input in JSON parameter CustomerName,City, ACTNO,Branch,amount 
--And insert these record in the Deposit table. Before inserting some validation should be done like amount should be greater than 10Rs.
--and date should always be current date.

CREATE OR ALTER PROC spInsertJsonDeposit
@Jdata nvarchar(MAX)
As
BEGIN
	BEGIN TRY
		IF(JSON_VALUE(@Jdata,'$.Amount') <= 10)
			BEGIN 
				RAISERROR('Amount should be greater than 10Rs.',16,1)
			END
		IF(DATEDIFF(DD,JSON_VALUE(@Jdata,'$.Adate'),GETDATE()) <> 0)
			BEGIN 
				RAISERROR('Date should always be current date.',16,1)
			END
		INSERT INTO Deposit(Actno,Cname,Bname,Amount,Adate)
		SELECT * FROM OPENJSON(@Jdata)
			WITH(
				Actno varchar(5) '$.Actno',
				Cname varchar(19) '$.Cname',
				Bname varchar(18) '$.Bname',
				Amount int '$.Amount',
				Adate date '$.Adate'
			)
	END TRY
	BEGIN CATCH
		SELECT ERROR_MESSAGE() AS 'ErrorMessage'
	END CATCH
END

EXEC spInsertJsonDeposit @Jdata=N'{"Actno":"110","Cname":"ANIL","Bname":"AJNI","Amount":500,"Adate":"2021-03-20"}';
GO




SELECT * FROM Deposit;
GO

SELECT * FROM Borrow;
GO

SELECT * FROM Customer;
GO

SELECT * FROM Branch;
GO
