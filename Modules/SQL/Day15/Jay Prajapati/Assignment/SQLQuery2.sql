USE DetroitBank;

CREATE TABLE AccountHolder
(
	AccountNumber BIGINT PRIMARY KEY,
	Name NVARCHAR(50),
	City NVARCHAR(30)
)


INSERT INTO AccountHolder
VALUES(1000001,'Adam Smith', 'Ahmedabad'),
(1000002,'John Doe','Gandhinagar')



CREATE TABLE Account
(
	AccountNumber BIGINT FOREIGN KEY REFERENCES AccountHolder(AccountNumber),
	Balance MONEY NOT NULL
)

INSERT INTO Account
VALUES(1000001,3000),
(1000002,5000)



SELECT * FROM AccountHolder
SELECT * FROM Account

/*Detroit Bank need to implement the transaction
whenever the amount is transferred from one
account to the another account.*/


	

BEGIN TRANSACTION Tr1

UPDATE Account
SET Balance = (SELECT Balance FROM Account WHERE AccountNumber = 1000001) - 1000
WHERE AccountNumber = 1000001

UPDATE Account
SET Balance = (SELECT Balance FROM Account WHERE AccountNumber = 1000002) + 1000
WHERE AccountNumber = 1000002

COMMIT TRANSACTION Tr1





-- OR


ALTER PROCEDURE TransferAmt 
@fromAccount BIGINT,
@toAccount BIGINT,
@ammountToTransfer MONEY

AS
BEGIN
	BEGIN TRANSACTION T1
	DECLARE @balance MONEY;
	SET @balance = (SELECT balance FROM Account WHERE AccountNumber = @fromAccount)
	IF(@balance >= @ammountToTransfer)
	BEGIN
		UPDATE Account
		SET Balance = (SELECT Balance FROM Account WHERE AccountNumber = @fromAccount) - @ammountToTransfer
		WHERE AccountNumber = @fromAccount

		UPDATE Account
		SET Balance = (SELECT Balance FROM Account WHERE AccountNumber = @toAccount) + @ammountToTransfer
		WHERE AccountNumber = @toAccount;
		COMMIT TRANSACTION T1;
		PRINT 'Transaction Has been Successfully Completed'
	END
	ELSE
	BEGIN
		PRINT 'Insufficiant Balance To Transfer The Amount'
		ROLLBACK TRANSACTION T1;
		PRINT 'Transaction Rollbacked'
	END
END


-- Execute TransferAmt Proc


EXECUTE TransferAmt @fromAccount = 1000001,
@toAccount = 1000002,
@ammountToTransfer = 4000

