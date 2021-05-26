CREATE TABLE Countries
(
	CountryID INT NOT NULL,
	RegionID int NOT NULL,
	CountryName varchar(50) CONSTRAINT chkCountryName CHECK (CountryName IN ('Italy','India','China')),
	UNIQUE (CountryID,RegionID)
)

SELECT * FROM Countries