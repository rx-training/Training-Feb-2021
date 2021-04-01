USE Day15

CREATE TABLE BankAccount(
BankAccountId int PRIMARY KEY,
BName varchar(50),
Balance money
)

---- 1. Detroit Bank need to implement the transaction whenever the amount is transferred from one account to the another account. -------- 

BEGIN TRANSACTION TransferMoney
BEGIN TRY
UPDATE BankAccount
SET Balance = Balance - 5000
WHERE BankAccountId = 1
UPDATE BankAccount
SET Balance = Balance + 5000
WHERE BankAccountId = 2

COMMIT TRANSACTION TransferMoney

PRINT 'TRANSACTION SUCCESSFULL'
END TRY
BEGIN CATCH
ROLLBACK TRANSACTION TransferMoney

PRINT 'TRANSACTION FAILLED'

END CATCH

SELECT * FROM BankAccount
