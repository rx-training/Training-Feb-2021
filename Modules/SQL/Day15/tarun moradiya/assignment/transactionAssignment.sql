--Detroit Bank need to implement the transaction whenever the amount is transferred from one account to the another account.

CREATE SCHEMA Day15

CREATE TABLE Day15.BankAccount(
BankAccountId int PRIMARY KEY,
Name varchar(50),
Balance money
)

INSERT INTO Day15.BankAccount
VALUES
(1, 'Tarun', 50000),
(2, 'Meet', 150000),
(3, 'Himanshu', 70000)

SELECT * FROM Day15.BankAccount

BEGIN TRAN TransferMoney
	
	BEGIN TRY
		UPDATE Day15.BankAccount
		SET Balance = Balance - 5000
		WHERE BankAccountId = 1

		UPDATE Day15.BankAccount
		SET Balance = Balance + 5000
		WHERE BankAccountId = 3

		COMMIT TRAN TransferMoney

		PRINT 'TRANSACTION SUCCESSFULL'

	END TRY

	BEGIN CATCH

		ROLLBACK TRAN TransferMoney

		PRINT 'TRANSACTION FAILLED'
	END CATCH
		
SELECT * FROM Day15.BankAccount
	