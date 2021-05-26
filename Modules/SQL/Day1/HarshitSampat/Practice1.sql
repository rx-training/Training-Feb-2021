
use demo1;

CREATE TABLE JobHistories (
	EmployeeID int PRIMARY KEY NOT NULL,
	StartDate date NOT NULL,
	EndDate date NOT NULL DEFAULT GETDATE(),
	JobID int NOT NULL,
	DepartmentID int NOT NULL,
	CONSTRAINT chkEndDate CHECK(EndDate = CONVERT(date, getdate(),103))
);
CREATE TABLE Countries (
	CountryID int NOT NULL,
	CountryName varchar(25) NOT NULL,
	RegionID int NOT NULL,
	CONSTRAINT chkCountryName CHECK(CountryName IN ('Italy','India','China')),
	CONSTRAINT unIDs UNIQUE(CountryID,RegionID)
);

insert into Country
