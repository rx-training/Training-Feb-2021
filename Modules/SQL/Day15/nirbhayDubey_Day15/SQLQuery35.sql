USE AssignmentDay38;
GO

--DIRTY READ POBLEM IN PROCEDURE 'spCheckBalance' OF 'SQLQuery36.sql' FILE

CREATE OR ALTER PROC spMoneyTransfer
@ActFrom int,
@ActTo int,
@Money decimal(8,2)
AS
BEGIN
	BEGIN TRY
		BEGIN TRANSACTION trMoneyTransfer
			DECLARE @CheckBalance decimal(8,2)
			SELECT @CheckBalance=Balance FROM Accounts WHERE ActNo=@ActFrom;
			IF(@CheckBalance<@Money) 
			BEGIN
				RAISERROR('Insufficient Balance',16,1);
			END
			UPDATE Accounts SET Balance=@CheckBalance-@Money WHERE ActNo=@ActFrom;
			UPDATE Accounts SET Balance=Balance+@Money WHERE ActNo=@ActTo;
			WAITFOR DELAY '00:00:05';
			RAISERROR('Explicit Raised Error',16,1); --Explicitly Raising Error for dirty read
		COMMIT TRANSACTION trMoneyTransfer;
		PRINT 'Money Transfered Succesfully.';
	END TRY
	BEGIN CATCH
		ROLLBACK TRANSACTION trMoneyTransfer;
		PRINT ERROR_MESSAGE();
	END CATCH
END

EXEC spMoneyTransfer @ActFrom=1,@ActTo=2,@Money=10000;
GO


--LOST UPDATE POBLEM WHILE EXECUTING PROCEDURE 'spDebitAccount' IN 'SQLQuery36.sql' FILE

CREATE OR ALTER PROC spDebitAccount_35
@ActNo int,
@DebitAmount decimal(8,2)
AS
BEGIN
	BEGIN TRY
		BEGIN TRANSACTION trDebitAccount
		SET TRANSACTION ISOLATION LEVEL SERIALIZABLE;
			DECLARE @CurrentBalance decimal(8,2)
			DECLARE @NewBalance decimal(8,2)
			SELECT @CurrentBalance=Balance FROM Accounts WHERE ActNo=@ActNo;
			IF (@CurrentBalance<@DebitAmount) BEGIN
				RAISERROR('INSUFFICIENT BALANCE',16,1);
			END
			SET @NewBalance=@CurrentBalance-@DebitAmount;
			WAITFOR DELAY '00:00:10'; 
			UPDATE Accounts SET Balance=@NewBalance WHERE ActNo=@ActNo;
		COMMIT TRANSACTION trDebitAccount;
		PRINT 'Balance Remaining ='+Convert(varchar,@NewBalance);
	END TRY
	BEGIN CATCH
		ROLLBACK TRANSACTION trDebitAccount;
		PRINT ERROR_MESSAGE();
	END CATCH
END

EXEC spDebitAccount_35 @ActNo=1,@DebitAmount=10000;
GO


SELECT * FROM Accounts;
GO
