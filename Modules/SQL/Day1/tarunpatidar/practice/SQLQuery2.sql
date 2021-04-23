CREATE TABLE Countries (
	CountryID int NOT NULL,
	CountryName varchar(25) NOT NULL,
	RegionID int NOT NULL,
	CONSTRAINT chkCountryName CHECK(CountryName IN ('India','Australia','Switzerland')),
	CONSTRAINT unIDs UNIQUE(CountryID,RegionID)
);