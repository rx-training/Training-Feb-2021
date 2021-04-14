/****** Script for SelectTopNRows command from SSMS  ******/
SELECT TOP (1000) [FirstName]
      ,[LastName]
      ,[Email]
      ,[PhoneNumber]
  FROM [Learn].[dbo].[Table_1]


  USE Learn  
GO  
-- Create a new table with three columns.  
CREATE TABLE dbo.TestTable1  
    (rollnumber int NOT NULL,  
     Name nchar(10) NULL,  
     Gender nvarchar(50) NULL);  
GO  


insert into TestTable1
Values(21,'john','doe'), 
(21,'viral','gujarati')
insert into TestTable1
values (4, 'ankita', 'female');

insert into TestTable1
values (3, 'anita', 'female');

insert into TestTable1
values (5, 'mahima', 'female'); 
 
-- Create a clustered index called IX_TestTable_TestCol1  
-- on the dbo.TestTable table using the TestCol1 column.  
CREATE CLUSTERED INDEX IX_TestTable_TestCol1   
    ON dbo.TestTable (TestCol1);   
GO

select *  from TestTable1

