/* Write a SQL statement to create a table named countries including columns CountryId, CountryName and RegionId and make sure 
that no countries except Italy, India and China will be entered in the table. and combination of columns CountryId and RegionId 
will be unique. */

CREATE TABLE Countries
	(CountryId varchar(3),
	CountryName varchar(20)
	CHECK(CountryName IN ('Italy','India','China')),
	RegionId int, 
	CONSTRAINT C_R_Id Unique (CountryId,RegionId))
GO

SELECT * FROM Countries
GO

INSERT dbo.Countries (CountryId, CountryName, RegionId)
	VALUES ('AO1', 'India', 10)
GO

INSERT dbo.Countries (CountryId, CountryName, RegionId)
	VALUES ('AO2', 'China', 05)
GO

INSERT dbo.Countries (CountryId, CountryName, RegionId)
	VALUES ('AO5', 'Italy', 15)
GO

INSERT dbo.Countries (CountryId, CountryName, RegionId)
	VALUES ('AO6', 'India', 12)
GO

INSERT dbo.Countries (CountryId, CountryName, RegionId)
	VALUES ('AO3', 'China', 25)
GO

INSERT dbo.Countries (CountryId, CountryName, RegionId)
	VALUES ('AO4', 'Italy', 11)
GO

INSERT dbo.Countries (CountryId, CountryName, RegionId)
	VALUES ('AO7', 'Italy', 17)
GO

INSERT dbo.Countries (CountryId, CountryName, RegionId)
	VALUES ('AO9', 'India', 22)
GO

INSERT dbo.Countries (CountryId, CountryName, RegionId)
	VALUES ('A10', 'China', 27)
GO

INSERT dbo.Countries (CountryId, CountryName, RegionId)
	VALUES ('A08', 'Italy', 01)
GO

