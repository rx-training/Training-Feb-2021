SELECT ASCII('D') AS D;

SELECT CHAR(68) AS Value;

SELECT CHARINDEX ('R','MICROSOFT SQL SERVER 2018');

SELECT CONCAT('SQL',' ','SERVER');

DECLARE @d DATETIME = '07/05/2020'; SELECT FORMAT (@d,'d','en-US');
	
SELECT LEFT ('MICROSOFT SQL SERVER',6);

SELECT RIGHT ('MICROSOFT SQL SERVER',9);

SELECT LEN('SQL SERVER');

SELECT LOWER('MICROSOFT SERVER');

SELECT UPPER('sql server');

SELECT LTRIM('      MICROSOFT SERVER');

SELECT ('          MICROSOFT SERVER          ');

SELECT RTRIM(' MICROSOFT SERVER          ');