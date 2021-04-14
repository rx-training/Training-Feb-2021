/*Q1: Create a Store Procedure which will accept name of the customer as input parameter and product the following output, 
List Names of Customers who are Depositors and have Same Branch City as that of input parameter customer’s Name.*/


CREATE PROCEDURE uspCustomerList   
    @inpName nvarchar(50) 
AS   
    SET NOCOUNT ON;  
    SELECT cName
    FROM Deposits
    WHERE bName IN (SELECT bName 
		FROM Branches 
		WHERE city = (SELECT city 
			FROM Customers
			WHERE cName = @inpName)) 
GO

EXEC uspCustomerList 'KRANTI'  
GO

/*Q2: Create a Store Procedure which will accept name of the customer as input parameter and produce the following output List 
in JSON format, All the Depositors Having Depositors Having Deposit in All the Branches where input parameter customer is Having 
an Account*/


CREATE PROCEDURE uspDepositJson  
    @inpName nvarchar(50) 
AS   
    SET NOCOUNT ON;  
    SELECT cName
    FROM Deposits
    WHERE bName IN (SELECT bName 
		FROM Deposits 
		WHERE cName = @inpName)
	FOR JSON AUTO
GO

EXEC uspDepositJson 'ANIL'
GO


/*Q3: Create a Store Procedure that will accept city name and returns the number of customers in that city.*/

CREATE PROCEDURE uspNumberOfCustomers  
    @inpCity nvarchar(50) 
AS   
	DECLARE @customers int

    SET NOCOUNT ON;  
    SELECT @customers = COUNT(cName) 
    FROM Customers
    WHERE city = @inpCity
	RETURN @customers
GO

DECLARE @customers int
EXEC @customers = uspNumberOfCustomers 'MUMBAI'
PRINT(@customers)
GO

-----

CREATE PROCEDURE uspNumberCustomers  
    @inpCity nvarchar(50) 
AS   
    SET NOCOUNT ON;  
    SELECT COUNT(cName) 'NumberOfCustomers'
    FROM Customers
    WHERE city = @inpCity
GO

EXEC uspNumberCustomers 'MUMBAI'
GO



/*Q4: Create a Store Procedure which will accept city of the customer as input parameter and product the following output List 
in JSON format List All the Customers Living in city provided in input parameter and Having the Branch City as MUMBAI or DELHI*/

CREATE PROCEDURE uspCustomersJson  
    @inpCity nvarchar(50) 
AS   
    SET NOCOUNT ON;  
    SELECT C.cName
    FROM Customers C JOIN Deposits D
	ON C.cName = D.cName
	WHERE D.bName IN (SELECT bName FROM Branches WHERE city IN ('MUMBAI', 'DELHI'))
    AND C.city = @inpCity
	FOR JSON AUTO
GO

EXEC uspCustomersJson 'MUMBAI'
GO

/*Q5: Count the Number of Customers Living in the City where Branch is Located*/

CREATE PROCEDURE uspNumberOfCities 
    @inpBranch nvarchar(50), 
	@outCities int OUTPUT
AS   
    SET NOCOUNT ON;  
    SELECT @outCities = count(C.cName)
	FROM Deposits D JOIN Customers C
	ON D.cName = C.cName
	WHERE C.city IN(SELECT city FROM Branches WHERE bName = @inpBranch)
GO

DECLARE @cities int

EXEC uspNumberOfCities 'ANDHERI', @cities OUTPUT 
PRINT('Number Of Customers : ' + CAST(@cities AS varchar(20)))
GO

----

CREATE PROCEDURE uspNumberCity 
    @inpBranch nvarchar(50) 
AS   
    SET NOCOUNT ON;  
    SELECT count(C.cName) 'NumberOfCustomers'
	FROM Deposits D JOIN Customers C
	ON D.cName = C.cName
	WHERE C.city IN(SELECT city FROM Branches WHERE bName = @inpBranch)
GO

EXEC uspNumberCity 'ANDHERI'
GO

/*Q6: Create a Procedure which will accept input in JSON parameter CustomerName,City, ACTNO,Branch,amount  
And insert these record in the Deposit table. Before inserting some validation should be done like amount should be greater 
than 10Rs. and date should always be current date.*/


CREATE PROCEDURE uspInsertJson 
    @inpJson nvarchar(MAX) 
AS   
    SET NOCOUNT ON; 

	DECLARE @amount money
	DECLARE @bName varchar(18)
	DECLARE @cName varchar(18)
	DECLARE @actNo int
	
	DECLARE CheckAmtCursor CURSOR FOR
	SELECT actNo, cName, bName, amount FROM OPENJSON(@inpJson)
	WITH(
		actNo int '$.actNo',
		cName varchar(18) '$.cName',
		bName varchar(18) '$.bName',
		amount money '$.amount'
	)

	OPEN CheckAmtCursor 
	
	FETCH NEXT FROM CheckAmtCursor INTO @actNo, @cName, @bName, @amount

	WHILE @@FETCH_STATUS = 0
	BEGIN
		--PRINT(@actNo)
		--PRINT(@cName)
		--PRINT(@bName)
		--PRINT(@amount)

		IF (@amount > 10) 
		BEGIN
			PRINT('VALID')
			INSERT INTO Deposits
			VALUES(@actNo, @cName, @bName, @amount, GETDATE())

			SELECT * FROM Deposits WHERE actNo = @actNo
		END
		ELSE
			PRINT('Invalid! Amount should be gereater than 10')
		FETCH NEXT FROM CheckAmtCursor INTO @actNo, @cName, @bName, @amount
	END

	CLOSE CheckAmtCursor
	DEALLOCATE CheckAmtCursor
GO


DECLARE @jsonVar nvarchar(MAX)
SET @jsonVar = N'
	[
	{
		"actNo": 110,
		"cName": "ANIL",
		"bName": "VIRAR",
		"amount": 3300 
	},
	{
		"actNo": 111,
		"cName": "SUNIL",
		"bName": "M.G.ROAD",
		"amount": 9 
	},
	{
		"actNo": 112,
		"cName": "MANDAR",
		"bName": "VRCE",
		"amount": 120
	}
	] 
'

EXEC uspInsertJson @jsonVar
GO


SELECT * FROM Deposits
SELECT * FROM Customers
SELECT * FROM Borrows
SELECT * FROM Branches