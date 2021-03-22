							
					------------sqldb_day11------------


/* Q1: Create a Store Procedure which will accept name of the customer as input parameter and product the following 
	   output, List Names of Customers who are Depositors and have Same Branch City as that of input parameter 
	   customer’s Name. */

		CREATE PROCEDURE P1 @inpCname nvarchar(50)
		AS
		SET NOCOUNT ON;
		SELECT Cname FROM Deposit WHERE Bname IN 
		 (SELECT Bname FROM Branch WHERE City = (SELECT City FROM Customer WHERE Cname = @inpCname))
		GO

		EXECUTE P1 'SHIVANI'

/* Q2: Create a Store Procedure which will accept name of the customer as input parameter and produce the following 
	   output List in JSON format, All the Depositors Having Depositors Having Deposit in All the Branches where 
	   input parameter customer is Having an Account */

	   CREATE PROCEDURE P2 @inpCname nvarchar(50)
	   AS
	   SET NOCOUNT ON;
	   SELECT Cname FROM Deposit WHERE Bname IN (SELECT Bname FROM Deposit WHERE Cname = @inpCname)
	   FOR JSON AUTO
	   GO

	   EXECUTE P2 'MEHUL'

/* Q3: Create a Store Procedure that will accept city name and returns the number of customers in that city. */

		CREATE PROCEDURE P3 @inpCity nvarchar(50)
		AS
		SET NOCOUNT ON;
		SELECT COUNT(Cname) 'number of customers' FROM Customer WHERE City = @inpCity
		GO

		EXEC P3 'NAGPUR'

/* Q4: Create a Store Procedure which will accept city of the customer as input parameter and product the following 
       output List in JSON format List All the Customers Living in city provided in input parameter and Having the 
	   Branch City as MUMBAI or DELHI */

	   CREATE PROCEDURE P4 @inpCity nvarchar(50)
	   AS
	   SET NOCOUNT ON;
	   SELECT C.Cname FROM Customer C JOIN Deposit D ON C.Cname = D.Cname
	   WHERE Bname IN(SELECT Bname FROM Branch WHERE City IN('MUMBAI','DELHI')) AND C.City = @inpCity
	   FOR JSON AUTO
	   GO

	   EXEC P4 'MUMBAI'
	   EXEC P4 'DELHI'
	   GO

/* Q5: Count the Number of Customers Living in the City where Branch is Located.  */

		CREATE PROCEDURE P5
		AS
		SET NOCOUNT ON;
		SELECT COUNT(d.Cname) FROM Deposit D JOIN Branch B ON d.Bname = b.Bname
		WHERE  b.City IS NOT NULL AND d.Bname IS NOT NULL
		GO

		EXECUTE P5

	 /* 	CREATE PROCEDURE P51 @inpbname nvarchar(50)
			AS
			SET NOCOUNT ON;
			SELECT COUNT(c.Cname) 'Number of Customers'
			FROM Deposit D JOIN Customer C
			ON D.Cname = C.Cname
			WHERE C.City IN(SELECT City FROM Branch WHERE Bname = @inpbname)
			GO

			EXECUTE P51 'AJNI'       */

/* Q6: Create a Procedure which will accept input in JSON parameter CustomerName,City, ACTNO,Branch,amount And insert 
       these record in the Deposit table. Before inserting some validation should be done like amount should be 
	   greater than 10Rs. and date should always be current date. */

	   CREATE PROCEDURE 
	   P6 @inpdata nvarchar(MAX)
	   AS
	   SET NOCOUNT ON;

	   DECLARE @cname VARCHAR(18)
	   DECLARE @amt MONEY
	   DECLARE @bname VARCHAR(18)
	   DECLARE @actno INT

	   DECLARE C1 CURSOR FOR
	   SELECT ActNo, Cname , Bname, Amount FROM OPENJSON(@inpdata)
	   WITH(
			ActNo int '$.actno',
			Cname VARCHAR(18) '$.cname',
			Bname VARCHAR(18) '$.bname',
			Amount MONEY '$.amt'
	   )
	   OPEN C1
	   FETCH NEXT FROM C1 INTO @actno, @bname, @cname, @amt
	   WHILE @@FETCH_STATUS = 0
	   BEGIN
	   PRINT(@amt)
	   PRINT(@cname)
	   PRINT(@bname)
	   PRINT(@actno)
		IF(@amt > 10)
			BEGIN 
				PRINT('AMOUNT IS MORE THAN 10 RUPEES')
				INSERT INTO Deposit VALUES (@actno, @cname,@bname , @amt,GETDATE())
				SELECT * FROM Deposit WHERE ActNo = @actno
			END
		ELSE
			PRINT('AMOUNT IS NOT MORE THAN 10 RUPEES')
			FETCH NEXT FROM C1 INTO @actno, @bname, @cname, @amt
		END
		CLOSE C1
		DEALLOCATE C1
		GO


		DECLARE @jsonvar NVARCHAR(MAX)
		SET @jsonvar = N'
		[
			{"actno":110, "cname":"ANIL", "bname":"AJNI","amt":"9000"},
			{"actno":111, "cname":"MANDAR", "bname":"VRCE","amt":"5500"},
			{"actno":112, "cname":"KRANTI", "bname":"KAROLBAGH","amt":"3600"}, 
			{"actno":113, "cname":"ANIL", "bname":"VIRAR","amt":"6"}
		]'

		EXECUTE P6 @jsonvar
		GO

		SELECT * FROM Deposit