                                                       /********   String Functions **********/
SELECT * FROM sys.databases;

SELECT ASCII('B');

SELECT name, 'was created on ', create_date, CHAR(13) name, 'is currently ', state_desc FROM sys.databases;  

SELECT TOP(1) CHARINDEX('at', 'This is a string') FROM dbo.DatabaseLog;

SELECT CHARINDEX('B',JobTitle) FROM HumanResources.Employee

CREATE TABLE Concat (  
    emp_name NVARCHAR(200) NOT NULL,  
    emp_middlename NVARCHAR(200) NULL,  
    emp_lastname NVARCHAR(200) NOT NULL  
);  
INSERT INTO Concat VALUES( 'Name', NULL, 'Lastname' );  
SELECT CONCAT( emp_name, emp_middlename, emp_lastname ) AS Result  
FROM Concat;

SELECT STRING_AGG(CONCAT_WS( ',', database_id, recovery_model_desc, containment_desc), char(1)) AS DatabaseInfo FROM sys.databases;

SELECT LEN('Bhargav');
  
SELECT LEFT('abcdefg',2);

SELECT RIGHT('abcdefg',2);

SELECT QUOTENAME('abc [] def');

SELECT REPLACE('abcdefghicde','cde','xxx'); 

SELECT Name,  ContactTypeID AS ItemCode, REPLICATE('1', 4) + ContactTypeID AS FullItemCode  FROM Person.ContactType ORDER BY Name;

SELECT REVERSE(1234) AS Reversed ;  

SELECT RTRIM('Four spaces are after the period in this sentence.    ') + 'Next string.';

SELECT DIFFERENCE('Anothers', 'Brothers');  

SELECT STR (FLOOR (123.45), 8, 3);

SELECT x = SUBSTRING('abcdef', 2, 2);

SELECT LTRIM( '     Bhargav') AS Result;

SELECT RTRIM( 'Bhargav   ') AS Result;

SELECT TRIM( '     Bhargav    ') AS Result;

SELECT UPPER('bhargav') AS Name;

SELECT LOWER('BHARGAV') AS Name;

                                               /*********** DATE FUNCTION ***********/
SELECT GETDATE() AS 'Current DATE And Time';

SELECT DAY(GETDATE()) AS 'DATE';

SELECT MONTH(GETDATE()) AS 'MONTH';

SELECT YEAR(GETDATE()) AS 'YEAR';

SELECT DATENAME(MM,HireDate) AS 'Month', DATENAME(DD,HireDate) AS 'Date', DATENAME(YY,HireDate) AS 'Year' FROM HumanResources.Employee

SELECT DATEDIFF(YYYY,HireDate,GETDATE()) AS 'Difference' FROM HumanResources.Employee

SELECT DATEPART(MM,HireDate) AS 'MONTH' FROM HumanResources.Employee

                                                   /***********   MATH FUNCTIONS **********/
SELECT CEILING(4.5);

SELECT FLOOR(4.5);

SELECT POWER(5,2);

SELECT EXP(4.5);

SELECT ROUND(25.5018,2);

                                                   /**********   SYSTEM FUNCTION **********/
SELECT HOST_ID();

SELECT HOST_NAME();

