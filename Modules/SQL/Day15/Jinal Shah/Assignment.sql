	 
			---------------- sqldb_day15 ------------------

/*  Detroit Bank need to implement the transaction whenever the amount is transferred from one account 
    to the another account. */

	CREATE TABLE Banks
	(
		Acno INT PRIMARY KEY,
		Bal INT
	)

	SELECT * FROM Banks

	-------------TRANSACTION------------

	BEGIN TRAN TR1
	BEGIN TRY 
	UPDATE Banks SET Bal = Bal + 1000 WHERE Acno = 101
	UPDATE Banks SET Bal = Bal - 1000 WHERE Acno = 103
	COMMIT TRAN TR1
	PRINT 'AMOUNT TRANSFERED SUCCESSFULLY'
	END TRY
	BEGIN CATCH
	ROLLBACK TRAN TR1
	PRINT 'TRANSACTION FAILED'
	END CATCH