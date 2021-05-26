USE AdventureWorks2019;  
GO  
-- Find an existing index named AK_UnitMeasure_Name and delete it if found  
IF EXISTS (SELECT name from sys.indexes  
           WHERE name = N'AK_UnitMeasure_Name')   
   DROP INDEX AK_UnitMeasure_Name ON Production.UnitMeasure;   
GO  
-- Create a unique index called AK_UnitMeasure_Name  
-- on the Production.UnitMeasure table using the Name column.  
CREATE UNIQUE INDEX AK_UnitMeasure_Name   
   ON Production.UnitMeasure (Name);   
GO