USE AdventureWorks2012;  
GO  
-- Find an existing index named IX_ProductVendor_VendorID and delete it if found.   
IF EXISTS (SELECT name FROM sys.indexes  
            WHERE name = N'IX_ProductVendor_VendorID')   
    DROP INDEX IX_ProductVendor_VendorID ON Purchasing.ProductVendor;   
GO  
-- Create a nonclustered index called IX_ProductVendor_VendorID   
-- on the Purchasing.ProductVendor table using the BusinessEntityID column.   
CREATE NONCLUSTERED INDEX IX_ProductVendor_VendorID   
    ON Purchasing.ProductVendor (BusinessEntityID);   
GO