/* 1. Write a SQL statement to create a table named countries including columns 
CountryId, CountryName and RegionId and make sure that no countries except
 Italy, India and China will be entered in the table. and combination of 
 columns CountryId and RegionId will be unique.*/

 CREATE TABLE Countries (
           CountryId int NOT NULL,
		   CountryName varchar(30) NOT NULL,
		   RegionId int NOT NULL,
		   CONSTRAINT ChkCouName CHECK (CountryName IN('India','UK','USA')),
		   CONSTRAINT pkCountry PRIMARY KEY(CountryId,RegionId)
		   );

INSERT INTO Countries VALUES(1,'India',1);
SELECT * FROM Countries