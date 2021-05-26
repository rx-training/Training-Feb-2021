--TRY CATCH

BEGIN TRY
	INSERT INTO Customers
	VALUES ('SUNIL', 'DELHI')
END TRY

BEGIN CATCH
	PRINT ERROR_LINE()
	PRINT ERROR_MESSAGE()
END CATCH

--RAISE ERROR

BEGIN TRY
	DECLARE @num1 int, @num2 int, @num3 int
	SET @num1 = 10
	SET @num2 = 0
	IF @num2 = 0
		RAISERROR('DENOMINATOR CAN NOT BE ZERO', 10, 1)
	ELSE
	SET @num3 = @num1/@num2
	PRINT (@num3)
END TRY

BEGIN CATCH
	PRINT ERROR_MESSAGE()
END CATCH
go

--stored procedure help

sp_helptext uspCustomerList

--WITH ENCRYPTION

CREATE PROCEDURE uspMyProc
@inp varchar(20)
WITH ENCRYPTION
AS
BEGIN
	SELECT * FROM Customers WHERE cName = @inp
END
GO

EXEC uspMyProc 'ANIL'
GO

SP_HELPTEXT uspMyProc
go

--OUTPUT


CREATE PROCEDURE uspOutputProc
@inp varchar(20),
@outCity varchar(20) OUTPUT,
@outName varchar(20) OUTPUT
WITH ENCRYPTION
AS
BEGIN
	SELECT @outCity = city, @outName = cName FROM Customers WHERE cName = @inp
END
GO

DECLARE @city varchar(20), @name varchar(20)

EXEC uspOutputProc 'ANIL', @city OUTPUT, @name OUTPUT
PRINT (@city)
PRINT (@name)
GO

--NESTED PROCEDURE

CREATE PROCEDURE uspNestedProc
@inp varchar(20)
AS
BEGIN
	DECLARE @city varchar(20), @name varchar(20)
	EXEC uspOutputProc @inp, @city OUTPUT, @name OUTPUT
	SELECT * FROM Branches WHERE city = @city
END
GO

EXEC uspNestedProc 'SHIVANI'
GO 

--RETURN

ALTER PROCEDURE uspMyProc
@inp varchar(20)
AS
BEGIN
	DECLARE @city varchar(20)
	SELECT @city = city FROM Customers WHERE cName = @inp

	INSERT INTO Test 
	VALUES (@inp, @city)
	RETURN @@identity
END
GO

DECLARE @id int
EXEC @id = uspMyProc 'ANIL'
PRINT @id
GO





