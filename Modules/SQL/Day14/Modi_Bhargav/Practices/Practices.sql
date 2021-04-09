               /***** Practices *****/
SELECT * FROM dbo.Sales
/*** ---> Rollback transaction to New data not inserted ***/
CREATE TRIGGER triInsertData ON dbo.Sales FOR INSERT
AS
BEGIN
     ROLLBACK TRANSACTION 
END

/*****  Insert method *****/
CREATE TRIGGER triAddedData1 ON dbo.Sales FOR INSERT
AS
BEGIN
      SELECT * FROM inserted
	  SELECT * FROM deleted
END

INSERT INTO dbo.Sales VALUES('India','Gujarat',200)

/***** Insert And Update Method *****/
SELECT * FROM Course
SELECT * FROM Students

CREATE TRIGGER trgStudents ON Students FOR INSERT
AS
BEGIN
      SELECT * FROM inserted
	  DECLARE @amountpay decimal(18,0)
	  SELECT @amountpay = Price + (Price * Discount) FROM Course WHERE Id = (SELECT CourseId FROM inserted)
	  PRINT @amountpay
	  UPDATE Students SET AmountPay = @amountpay WHERE Id = (SELECT Id FROM inserted)
END

INSERT INTO Students VALUES(7,'Mohit',1,NULL)

/***** Update table *****/
SELECT * FROM HumanResources.vEmployee WHERE BusinessEntityID = 281
UPDATE HumanResources.vEmployee SET JobTitle = 'IT' , StateProvinceName = 'India' WHERE BusinessEntityID = 281

CREATE OR ALTER TRIGGER DataUpdated ON HumanResources.vEmployee
INSTEAD OF UPDATE
AS BEGIN
UPDATE HumanResources.vEmployee SET JobTitle = (SELECT JobTitle FROM inserted) WHERE BusinessEntityID = (SELECT BusinessEntityID FROM inserted)
UPDATE HumanResources.vEmployee SET StateProvinceName = (SELECT StateProvinceName FROM inserted) WHERE BusinessEntityID = (SELECT BusinessEntityID FROM inserted)
SELECT * FROM inserted
SELECT * FROM deleted
END

/**** ppt ****/
CREATE TRIGGER triInsertShift
ON HumanResources.Shift
FOR INSERT
AS 
   DECLARE @ModifiedDate datetime
   SELECT @ModifiedDate = ModifiedDate FROM Inserted
   IF (@ModifiedDate != getdate())
   BEGIN 
       PRINT 'The Modified Date should be the current date.Hence, cannot insert'
	   ROLLBACK TRANSACTION 
   END

INSERT INTO HumanResources.Shift (ShiftID,Name,StartTime,EndTime,ModifiedDate)
VALUES(5,'NOON','10:00:00','11:00:00','2021-03-23 00:00:00.000')
SET IDENTITY_INSERT HumanResources.Shift ON; 
SELECT * FROM HumanResources.Shift

/***** delete *****/
CREATE TRIGGER triDeleteShift
ON HumanResources.Shift
AFTER DELETE
AS
BEGIN
    PRINT 'DELECT Susscess'
END
DELETE HumanResources.Shift WHERE ShiftID = 3

CREATE TRIGGER triDelteShift
ON HumanResources.Employee INSTEAD OF DELETE
AS
BEGIN
PRINT 'Project Record Cannot be deleted'
ROLLBACK TRANSACTION
END


CREATE TRIGGER safety ON DATABASE 
FOR DROP_TABLE, ALTER_TABLE
AS
PRINT 'you must disable trigger "safety" to drop or alter tales'

CREATE TRIGGER triDeleteDepartment
ON HumanResources.Department
FOR DELETE
AS 
PRINT 'Delete Depaarment is not Allowed'
ROLLBACK TRANSACTION 
RETURN

DROP TRIGGER triDeleteDepartment

SELECT * FROM HumanResources.EmployeePayHistory
CREATE TRIGGER triUpdateEmployeePayHistory
ON HumanResources.EmployeePayHistory
FOR UPDATE
AS 
   IF UPDATE(Rate)
   BEGIN
   DECLARE @AvgRate float
   SELECT @AvgRate = AVG(Rate) FROM HumanResources.EmployeePayHistory
   IF (@AvgRate > 20)
   BEGIN 
       PRINT 'The Average value of rate cannot be more than 20'
	   ROLLBACK TRANSACTION 
   END
   END

UPDATE HumanResources.EmployeePayHistory SET Rate = 10 WHERE BusinessEntityID = 4
UPDATE HumanResources.EmployeePayHistory SET Rate = 5000 WHERE BusinessEntityID = 2

