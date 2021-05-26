
Use AdventureWorks2012;

-----day 14 Practice:

--Creation of Trigger:

CREATE TRIGGER InsertShift 
ON HumanResources.Shift 
FOR INSERT 
AS
DECLARE @ModifiedDate datetime 
SELECT @ModifiedDate = ModifiedDate FROM inserted IF (@ModifiedDate != GETDATE())
BEGIN 

PRINT 'THE MODIFIED DATE SHOULD BE CURRENT DATE . HENCE CANT INSERT'
ROLLBACK TRANSACTION 
END 

---CREATING A DELETE TRIGGER :

CREATE TRIGGER DeleteDepartment 
ON HumanResources.Department
FOR DELETE 
AS
PRINT 'DELETION OF DEPARTMENT IS NOT ALLOWED'
ROLLBACK TRANSACTION 
RETURN




---CREATING AN UPDATE TRIGGER :
CREATE TRIGGER UpdateEmployeePayHistory
ON HumanResources.EmployeePayHistory
FOR UPDATE 
AS
IF UPDATE(RATE)
BEGIN
DECLARE @AvgRate float
SELECT @AvgRate = AVG(Rate)
FROM HumanResources.EmployeePayHistory
IF (@AvgRate > 20)
BEGIN
PRINT 'THE AVERAGE VALUE OF RATE CANNOT BE MORE THAN 20'
ROLLBACK TRANSACTION 
END
END


---CREATING AN AFTER TRIGGER :

CREATE TRIGGER DeleteShift ON HumanResources.Shift
AFTER DELETE 
AS
PRINT 'DELETION SUCCESSFUL'

---CREATING AN INTEAD OF TRIGGER :
CREATE TRIGGER trgDelete
ON 
HumanResources.Project
INSTEAD OF DELETE
AS
PRINT'PROJECTS RECORDS CANNOT BE DELETED'


--CREATING A DDL TRIGGER

CREATE TRIGGER safety   
ON DATABASE   
FOR DROP_TABLE, ALTER_TABLE   
AS   
   PRINT 'You must disable Trigger "safety" to drop or alter tables!'   
   ROLLBACK;  
GO


----Using a DML trigger with a reminder message

CREATE TRIGGER reminder1  
ON Sales.Customer  
AFTER INSERT, UPDATE   
AS RAISERROR ('Notify Customer Relations', 16, 10);  
GO

	
--Using a DML trigger with a reminder e-mail message

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



---alter trigger:

CREATE TRIGGER Sales.bonus_reminder  
ON Sales.SalesPersonQuotaHistory  
WITH ENCRYPTION  
AFTER INSERT, UPDATE   
AS RAISERROR ('Notify Compensation', 16, 10);  
GO  

-- Now, change the trigger. 

ALTER TRIGGER Sales.bonus_reminder  
ON Sales.SalesPersonQuotaHistory  
AFTER INSERT  
AS RAISERROR ('Notify Compensation', 16, 10);  
GO


---drop trigger 
IF OBJECT_ID ('employee_insupd', 'TR') IS NOT NULL  
   DROP TRIGGER employee_insupd;

---Enabling a DML Trigger:
DISABLE TRIGGER Sales.bonus_reminder  
ON Sales.SalesPersonQuotaHistory;
GO  
ENABLE Trigger Sales.bonus_reminder  
ON Sales.SalesPersonQuotaHistory;
GO

---Enabling A DDL trigger:

  
DISABLE TRIGGER safety ON DATABASE;  
GO  
ENABLE TRIGGER safety ON DATABASE;  
GO

-- Enabling all triggers that were defined with the same scope

ENABLE Trigger ALL ON ALL SERVER;  
GO


