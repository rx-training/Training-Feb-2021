--DIRTY READ POBLEM BECAUSE OF 'spMoneyTransfer' OF 'SQLQuery35.sql' FILE
 
 SET TRANSACTION ISOLATION LEVEL READ UNCOMMITTED
 CREATE PROC spCheckBalance
 @ActNo int
 AS
 BEGIN
	BEGIN TRY 
		BEGIN TRANSACTION trCheckBalance
			SELECT Balance FROM Accounts WHERE ActNo=@ActNo;
		COMMIT TRANSACTION trCheckBalance;
		PRINT 'Completed Successfully';
	END TRY
	BEGIN CATCH
		ROLLBACK TRANSACTION trCheckBalance;
		PRINT ERROR_MESSAGE();
	END CATCH
 END

 EXEC spCheckBalance @ActNo=2;
 GO





 






--LOST UPDATE POBLEM WITH PROCEDURE 'spDebitAccount' OF 'SQLQuery35.sql' FILE

CREATE OR ALTER PROC spDebitAccount_36
@ActNo1 int,
@DebitAmount1 decimal(8,2)
AS
BEGIN
	BEGIN TRY
		BEGIN TRANSACTION trDebitAccount_36
			DECLARE @CurrentBalance1 decimal(8,2)
			DECLARE @NewBalance1 decimal(8,2)
			SELECT @CurrentBalance1=Balance FROM Accounts WHERE ActNo=@ActNo1;
			IF (@CurrentBalance1<@DebitAmount1) BEGIN
				RAISERROR('INSUFFICIENT BALANCE',16,1);
			END
			SET @NewBalance1=@CurrentBalance1-@DebitAmount1;
			UPDATE Accounts SET Balance=@NewBalance1 WHERE ActNo=@ActNo1;
		COMMIT TRANSACTION trDebitAccount_36;
		PRINT 'Balance Remaining ='+Convert(varchar,@NewBalance1);
	END TRY
	BEGIN CATCH
		ROLLBACK TRANSACTION trDebitAccount_36;
		PRINT ERROR_MESSAGE();
	END CATCH
END

EXEC spDebitAccount_36 @ActNo1=1,@DebitAmount1=10000;
GO