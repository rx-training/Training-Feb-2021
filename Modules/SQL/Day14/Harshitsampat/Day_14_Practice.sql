CREATE DATABASE DAY_12;
GO
USE DAY_12;
GO
CREATE TABLE dbo.CUSTOMERS
(
	CUSTOMERID INT IDENTITY(1,1) NOT NULL,
	NAME VARCHAR(50) NOT NULL,
	IsActive bit NOT NULL CONSTRAINT DF_Customers_IsActive DEFAULT(1),
	CONSTRAINT PK_Cudtomers_CustomerID PRIMARY KEY(CustomerID) 
	
);
GO

CREATE TABLE dbo.CustomersArchive
(	
	CustomerID Int Not Null,
	Oldname varchar(50) NOT NULL,
	NewName	varchar(50) NOT NULL
);
GO

----------------------------------Trigger Videoes Of site-------------------------------------
CREATE TRIGGER  I_D_Customers_MarkCustomerAsInactive
ON dbo.CUSTOMERS
INSTEAD OF DELETE
AS
BEGIN 
	SET NOCOUNT ON;
	UPDATE dbo.CUSTOMERS
	SET IsActive =0
	FROM dbo.CUSTOMERS C
		INNER JOIN deleted D ON C.CUSTOMERID =D.CUSTOMERID
END	

---------------------Examples of ppt--------------------------
CREATE TRIGGER	trgInsertShift
ON Hmanresources.Shift
FOR INSERT
AS 
	DECLARE @ModifiedDate datetime 
	SELECT @ModifiedDate = @ModifiedDate FROM inserted
	IF (@ModifiedDate != GETDATE())
	BEGIN	
	PRINT 'The  modified date should be the current date.Hence, can not be insert'
	ROLLBACK TRANSACTION
	END

	------------------------------------------DELETE TRIGGER
	CREATE TRIGGER trgDeleteDepartment
	ON HumanResources.Department
	FOR DELETE
	AS
	PRINT 'Deletion of Departmentis not allowed'
	ROLLBACK TRANSACTION
	RETURN
--------------------------------------------
CREATE TRIGGER reminder1  
ON Sales.Customer  
AFTER INSERT, UPDATE   
AS RAISERROR ('Notify Customer Relations', 16, 10);  
GO 

-----------------------------
CREATE TRIGGER reminder2  
ON Sales.Customer  
AFTER INSERT, UPDATE, DELETE   
AS  
   EXEC msdb.dbo.sp_send_dbmail  
        @profile_name = 'AdventureWorks2012 Administrator',  
        @recipients = 'danw@Adventure-Works.com',  
        @body = 'Don''t forget to print a report for the sales force.',  
        @subject = 'Reminder';  
GO 

--------------------
CREATE TRIGGER trgDeleteShift ON Humanresources.Shift
After DELETE
AS
PRINT 'DELETE SUCCESSFUL'

------------------------DML TRIGGERES MSDN
-- Trigger valid for multirow and single row inserts  
-- and optimal for single row inserts.  
USE AdventureWorks2012;  
GO  
CREATE TRIGGER NewPODetail3  
ON Purchasing.PurchaseOrderDetail  
FOR INSERT AS  
IF @@ROWCOUNT = 1  
BEGIN  
   UPDATE Purchasing.PurchaseOrderHeader  
   SET SubTotal = SubTotal + LineTotal  
   FROM inserted  
   WHERE PurchaseOrderHeader.PurchaseOrderID = inserted.PurchaseOrderID  

END  
ELSE  
BEGIN  
      UPDATE Purchasing.PurchaseOrderHeader  
   SET SubTotal = SubTotal +   
      (SELECT SUM(LineTotal)  
      FROM inserted  
      WHERE PurchaseOrderHeader.PurchaseOrderID  
       = inserted.PurchaseOrderID)  
   WHERE PurchaseOrderHeader.PurchaseOrderID IN  
      (SELECT PurchaseOrderID FROM inserted)  
END;

-- This trigger prevents a row from being inserted in the Purchasing.PurchaseOrderHeader 
-- table when the credit rating of the specified vendor is set to 5 (below average).  
  
CREATE TRIGGER Purchasing.LowCredit ON Purchasing.PurchaseOrderHeader  
AFTER INSERT  
AS  
IF (ROWCOUNT_BIG() = 0)
RETURN;
IF EXISTS (SELECT *  
           FROM Purchasing.PurchaseOrderHeader AS p   
           JOIN inserted AS i   
           ON p.PurchaseOrderID = i.PurchaseOrderID   
           JOIN Purchasing.Vendor AS v   
           ON v.BusinessEntityID = p.VendorID  
           WHERE v.CreditRating = 5  
          )  
BEGIN  
RAISERROR ('A vendor''s credit rating is too low to accept new  
purchase orders.', 16, 1);  
ROLLBACK TRANSACTION;  
RETURN   
END;  
GO  
  
-- This statement attempts to insert a row into the PurchaseOrderHeader table  
-- for a vendor that has a below average credit rating.  
-- The AFTER INSERT trigger is fired and the INSERT transaction is rolled back.  
  
INSERT INTO Purchasing.PurchaseOrderHeader (RevisionNumber, Status, EmployeeID,  
VendorID, ShipMethodID, OrderDate, ShipDate, SubTotal, TaxAmt, Freight)  
VALUES (  
2  
,3  
,261  
,1652  
,4  
,GETDATE()  
,GETDATE()  
,44594.55  
,3567.564  
,1114.8638 );  
GO

-----------------Update trigger
CREATE TRIGGER trgUpdateEmployeeHistory
ON Humanresources.EmployeePayHistory
FOR UPDATE
AS
IF UPDATE (RATE)
BEGIN
DECLARE @AvgRate float
SELECT @AvgRate = AVG(Rate)
FROM Humanresources.EmployeePayHistory
IF(@AvgRate > 20)
BEGIN
PRINT 'The average value of rate cannot be more than 20'
If(@AvgRate>20)
PRINT 'The avarage value of rate cannot be more than 20'
ROLLBACK TRANSACTION
END
END

-------------Display a message instead of deleting record from the project
CREATE TRIGGER trgDelete 
ON Production.Product
INSTEAD OF DELETE
AS
PRINT 'Product records cannot be deleted'

-------------------Creating DDL TRIGGER
CREATE TRIGGER SAFETY
ON DATABASE
FOR DROP_TABLE,ALTER_TABLE
AS
PRINT 'You must diable Trigger "safety" to drop or alter tables'
ROLLBACK

--------------------Altering Table
Alter TRIGGER Humanresources.trgDeleteShift
ON Humanresources.Shift
FOR INSERT
AS
DECLARE @ModifiedDate datetime
SELECT @ModifiedDate = ModifiedDate FROM inserted IF(@ModifiedDate !=GETDATE())
BEGIN
RAISERROR('The Modified date is not the current date. The transaction cannot be processed',10,1)
Rollback Transaction
END
RETURN