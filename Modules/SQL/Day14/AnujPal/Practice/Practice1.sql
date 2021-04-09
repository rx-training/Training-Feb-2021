						-- Query1


select * from HumanResources.Shift

CREATE TRIGGER trgInsertShift
ON HumanResources.Shift
FOR INSERT
AS 
DECLARE @modifiedDate DATETIME
SELECT @modifiedDate=ModifiedDate FROM inserted
IF(@modifiedDate!=GETDATE())
BEGIN
PRINT 'INVALID'
ROLLBACK TRANSACTION
END

INSERT INTO HumanResources.Shift VALUES ('Inter', '09:00:00.0000000','17:00:00.0000000',GETDATE())

			--Query2

CREATE TRIGGER trgDeleteShift
ON HumanResources.Shift
FOR DELETE
AS 
SELECT * FROM deleted;
PRINT 'Deleted'

DELETE FROM HumanResources.Shift WHERE ShiftID=17

SELECT * FROM HumanResources.EmployeePayHistory
			-- Query 3

CREATE TRIGGER trgUpdateShift 
ON HumanResources.EmployeePayHistory
FOR UPDATE
AS
IF UPDATE(Rate)
BEGIN
DECLARE @avgRate FLOAT
SELECT @avgRate= AVG(Rate) FROM HumanResources.EmployeePayHistory
IF(@avgRate>20)
BEGIN
PRINT'YES'
END
ELSE
BEGIN
PRINT'NO'
ROLLBACK TRANSACTION
END
END

SELECT * FROM HumanResources.EmployeePayHistory

UPDATE HumanResources.EmployeePayHistory
SET Rate=25 WHERE BusinessEntityID=6

		--Query4


CREATE TRIGGER trgDelete ON
HumanResources.Department
INSTEAD OF DELETE
AS
PRINT 'PROJECT REPORT CANNOT BE DELETED'

DELETE FROM HumanResources.Department WHERE DepartmentID =1

