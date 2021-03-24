USE [TutorialDB]

-- Creating Table and add Constriant
CREATE TABLE dbo.Countries
(
   CountryId INT    NOT NULL,
   CountryName  [NVARCHAR](50)  NOT NULL,
   RegionId  INT  NOT NULL,
   CONSTRAINT PkcontryId PRIMARY KEY(CountryId,RegionId),
   CONSTRAINT CkCName CHECK (CountryName IN ('Italy','India','China'))
);

-- Select the table
SELECT * FROM dbo.Countries;

-- Insert Data in table
INSERT INTO dbo.Countries 
VALUES
(1, 'India', 1),
(2, 'Italy', 2),
(2, 'China', 1);

-- this Camman Gives Error Because CountryName is not match with Constraint
INSERT INTO dbo.Countries
VALUES
(3, 'ShriLanka', 1);

