USE AdventureWorks2012;  
GO  
-- Create a new table with three columns.  
CREATE TABLE dbo.TestTable  
    (TestCol1 int NOT NULL,  
     TestCol2 nchar(10) NULL,  
     TestCol3 nvarchar(50) NULL);  
GO  
-- Create a clustered index called IX_TestTable_TestCol1  
-- on the dbo.TestTable table using the TestCol1 column.  
CREATE CLUSTERED INDEX IX_TestTable_TestCol1   
    ON dbo.TestTable (TestCol1);   
GO  

-- Create a nonclustered index called IX_ProductVendor_VendorID   
-- on the Purchasing.ProductVendor table using the BusinessEntityID column.   
CREATE NONCLUSTERED INDEX IX_ProductVendor_VendorID   
    ON Purchasing.ProductVendor (BusinessEntityID); 


-- Create a unique index called AK_UnitMeasure_Name  
-- on the Production.UnitMeasure table using the Name column.  
CREATE UNIQUE INDEX AK_UnitMeasure1_Name   
   ON Production.UnitMeasure (Name);   

   -- Creates a nonclustered index on the Person.Address table with four included (nonkey) columns.   
-- index key column is PostalCode and the nonkey columns are  
-- AddressLine1, AddressLine2, City, and StateProvinceID.  
CREATE NONCLUSTERED INDEX IX_Address_PostalCode  
ON Person.Address (PostalCode)  
INCLUDE (AddressLine1, AddressLine2, City, StateProvinceID);  

-- delete the IX_ProductVendor_BusinessEntityID index  
-- from the Purchasing.ProductVendor table  
DROP INDEX IX_ProductVendor_BusinessEntityID   
    ON Purchasing.ProductVendor;


	CREATE NONCLUSTERED INDEX IX_WorkOrder_ProductID
    ON Production.WorkOrder(ProductID)
    WITH (FILLFACTOR = 80,
        PAD_INDEX = ON,
        DROP_EXISTING = ON)
;

ALTER INDEX AK_SalesOrderHeader_SalesOrderNumber ON
    Sales.SalesOrderHeader
SET (
    STATISTICS_NORECOMPUTE = ON,
    IGNORE_DUP_KEY = ON,
    ALLOW_PAGE_LOCKS = ON
    )
;

EXEC sp_rename N'Purchasing.ProductVendor.IX_ProductVendor_VendorID', N'IX_VendorID', N'INDEX';