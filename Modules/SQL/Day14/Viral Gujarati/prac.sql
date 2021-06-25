CREATE TRIGGER trgInsertShift
ON HumanResources.Shift
FOR INSERT
AS

DECLARE @ModifiedDate datetime
SELECT @ModifiedDate = ModifiedDate from Inserted
IF (@ModifiedDate != getdate())
BEGIN 
PRINT 'MODIFIED DATE SHOULD BE CURRENT DATE HENCE NOT INSERTED'
ROLLBACK TRANSACTION 
END 

-- for delete


CREATE TRIGGER trgdeletedepartment

ON HumanResources.Department 
FOR DELETE
AS
PRINT 'DELETE OF DEPAERTMENT NOT ALLOWEDED'
ROLLBACK TRANSACTION 
RETURN 