----------------------------- CLUSTERED INDEXES ---------------------------------

USE AdventureWorks2012;  
GO  

---- Create a new table with three columns. ------  

CREATE TABLE dbo.TestTable  
    (TestCol1 int NOT NULL,  
     TestCol2 nchar(10) NULL,  
     TestCol3 nvarchar(50) NULL);  
GO  

---- Create a clustered index called IX_TestTable_TestCol1 ------  
---- on the dbo.TestTable table using the TestCol1 column. ------ 

CREATE CLUSTERED INDEX IX_TestTable_TestCol1   
    ON dbo.TestTable (TestCol1);   
GO 

----------------------------- NONCLUSTERED INDEXES ---------------------------------

---- Find an existing index named IX_ProductVendor_VendorID and delete it if found. ------  

IF EXISTS (SELECT name FROM sys.indexes  
            WHERE name = N'IX_ProductVendor_VendorID')   
    DROP INDEX IX_ProductVendor_VendorID ON Purchasing.ProductVendor;   
GO  

---- Create a nonclustered index called IX_ProductVendor_VendorID ------  
---- on the Purchasing.ProductVendor table using the BusinessEntityID column. ------ 

CREATE NONCLUSTERED INDEX IX_ProductVendor_VendorID   
    ON Purchasing.ProductVendor (BusinessEntityID);   
GO