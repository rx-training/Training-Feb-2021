USE AdventureWorks2012
GO

/*Day 15*/

/*Detroit Bank need to implement the transaction whenever the amount is transferred from one account to the another account.*/

	USE Day15
	GO

	CREATE TABLE SavingAccounts
	(
		AccountNo varchar(20),
		Name varchar(20),
		Address varchar(20),
		Balance INT
	)

	CREATE TABLE Transfers
	(
		AccountNo1 varchar(20),
		AccountNo2 varchar(20),
		TransferAmount INT
	)

	INSERT INTO SavingAccounts VALUES('110','Harsh','Surat',20000),
									 ('111','Risabh','Mumbai',10000),
									 ('112','Mahesh','Ahmedabad',5000)

	SELECT * FROM SavingAccounts

	CREATE TRIGGER TransferMoney ON Transfers
	AFTER INSERT AS
	BEGIN TRANSACTION	
	BEGIN TRY

		UPDATE SavingAccounts SET Balance = Balance + (SELECT TransferAmount FROM inserted) WHERE AccountNo = (SELECT AccountNo1 FROM inserted)
		UPDATE SavingAccounts SET Balance = Balance - (SELECT TransferAmount FROM inserted) WHERE AccountNo = (SELECT AccountNo2 FROM inserted)
	
	END TRY
	BEGIN CATCH
		IF @@TRANCOUNT > 0
			ROLLBACK TRANSACTION
	END CATCH
	IF @@TRANCOUNT > 0  
		COMMIT TRANSACTION
	GO

	INSERT INTO Transfers VALUES('111','112',500)
	GO
	/*Tansfer money = 500 from AccountNo = 112 to AccountNo = 111*/
	INSERT INTO Transfers VALUES('112','110',1000)
	GO

/*At AdventureWorks, Inc., an employee named Sidney Higa, who is currently working as Production Technician – WC10 has been promoted as Marketing Manager. 
The employee ID of Sidney is 13(In database 50). As a database developer, you need to update his records. 
This involves updating the title in the Employee table and updating the department history details.​
You need to ensure that all the changes take effect. 
In addition, you need to ensure that no other transaction should be able to view the data being modified by the current transaction.*/

USE AdventureWorks2012;

	SELECT * FROM HumanResources.Employee Where BusinessEntityId = 50
	SELECT * FROM Person.Person WHERE FirstName = 'Sidney' AND BusinessEntityID = 50
	SELECT * FROM HumanResources.Employee WHERE Name = 'Production'
	SELECT * FROM HumanResources.Department
	SELECT * FROM HumanResources.EmployeeDepartmentHistory WHERE BusinessEntityId = 50

	
	BEGIN TRANSACTION
	SET TRANSACTION ISOLATION LEVEL 
	READ COMMITTED
	BEGIN TRY

		UPDATE HumanResources.Employee SET JobTitle = 'Marketing Manager' WHERE BusinessEntityId = 50 AND EXISTS(SELECT * FROM Person.Person WHERE FirstName = 'Sidney' AND LastName = 'Higa')
		UPDATE HumanResources.EmployeeDepartmentHistory SET DepartmentId = (SELECT DepartmentId FROM HumanResources.Department WHERE Name = 'Marketing') WHERE BusinessEntityId = 50
			
	END TRY
	BEGIN CATCH
		IF @@TRANCOUNT > 0
			ROLLBACK TRANSACTION
	END CATCH
	IF @@TRANCOUNT > 0  
		COMMIT TRANSACTION
	GO
