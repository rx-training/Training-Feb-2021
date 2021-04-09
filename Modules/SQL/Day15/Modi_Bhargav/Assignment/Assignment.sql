CREATE DATABASE Day15

/***** Detroit Bank need to implement the transaction whenever the amount is transferred
       from one account to the another account.*****/

CREATE TABLE HDFCBANK (
AccountNo int PRIMARY KEY,
Name nvarchar(50),
Balance decimal(10,0) DEFAULT 0
);

INSERT INTO HDFCBANK VALUES(123,'Bhargav',10000),
                           (124,'Meet',15000),
						   (130,'Parth',12000)

SELECT * FROM HDFCBANK 

CREATE TABLE ICICIBANK (
AccountNo int PRIMARY KEY,
Name nvarchar(50),
Balance decimal(10,0) DEFAULT 0
);

INSERT INTO ICICIBANK VALUES(132,'Mahir',12000),
                           (134,'Het',11000),
						   (140,'Nihar',16000)

SELECT * FROM ICICIBANK 

BEGIN TRANSACTION AmountTransfer
      BEGIN TRY
               UPDATE dbo.HDFCBANK 
			   SET Balance = Balance - 3000​ 
			   WHERE AccountNo = 124

               UPDATE dbo.ICICIBANK
			   SET Balance = Balance + 3000​
			   WHERE AccountNo = 134

               COMMIT TRANSACTION AmountTransfer
 
               PRINT 'Trasaction Successful'

      END TRY

	  BEGIN CATCH 
	           ROLLBACK TRANSACTION AmountTransfer

			   PRINT 'Trasaction Failed'
      END CATCH

SELECT * FROM HDFCBANK
SELECT * FROM ICICIBANK

/***** 2. At AdventureWorks, Inc., an employee named Sidney Higa, who is currently working as Production
          Technician – WC10 has been promoted as Marketing Manager. The employee ID of Sidney is 13. 
		  As a database developer, you need to update his records. This involves updating the title in
		  the Employee table and updating the department history details.​
          You need to ensure that all the changes take effect. In addition, you need to ensure that 
		  no other transaction should be able to view the data being modified by the current transaction.​*****/

 ​USE AdventureWorks2012

 SELECT * FROM HumanResources.Department

 BEGIN TRANSACTION UpdateData
      BEGIN TRY
               UPDATE HumanResources.Department
			   SET Name = 'Bhargav'
			   WHERE DepartmentID = 13

               UPDATE HumanResources.Department
			   SET GroupName = 'RadixWeb'
			   WHERE DepartmentID = 13

               COMMIT TRANSACTION UpdateData
 
               PRINT 'Data Successfully Changed'

      END TRY

	  BEGIN CATCH 
	           ROLLBACK TRANSACTION UpdateData

			   PRINT 'Data Failed'
      END CATCH
