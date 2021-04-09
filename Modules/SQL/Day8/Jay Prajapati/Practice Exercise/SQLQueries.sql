USE SQLDay2;

SELECT * FROM Employees;
SP_HelpIndex Employees;

CREATE CLUSTERED INDEX IX_tblEmployees_Manager_Department
ON Employees(ManagerID ASC, DepartmentID DESC);

DROP INDEX Employees.pkEmployeeID;

CREATE NONCLUSTERED INDEX IX_tblEmployees_LastName
ON Employees(LastName)





--CLUSTERED TABLE INDEX

CREATE TABLE TestTable  
(TestCol1 int NOT NULL,  
TestCol2 nchar(10) NULL,  
TestCol3 nvarchar(50) NULL);

CREATE CLUSTERED INDEX IX_TestTable_TestCol1   
ON dbo.TestTable (TestCol1);

SELECT * FROM TestTable;

-- NON CLUSTRED INDEX

CREATE NONCLUSTERED INDEX IX_TestTable_TestCol3
ON dbo.TestTable (TestCol3);

-- UNIQUE INDEXES

IF EXISTS (SELECT name from sys.indexes  
           WHERE name = 'NonClusteredIndex-20210312-140201')   
   DROP INDEX [NonClusteredIndex-20210312-140201] ON TestTable;

CREATE UNIQUE INDEX IX_UNIQUE_TestTable_TestCol2   
   ON TestTable(TestCol2); 