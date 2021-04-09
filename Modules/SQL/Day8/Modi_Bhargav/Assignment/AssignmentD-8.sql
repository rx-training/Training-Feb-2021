        /*********** Assignment **********/
/***** As a database administrator, you need to increase     the performance of the PlanetsID table, so
      you decide to create a clustered index. But instead of using SSMS, you decide to use queries
      to perform this task. Therefore, you create a new PlanetsID database using the following
      commands within SMMS:*****/

CREATE TABLE PlanetID (
[ID] [int] NOT NULL,
[Item] [int] NOT NULL,
[Value] [int] NOT NULL
)
GO
INSERT INTO PlanetID VALUES (10,20,30),
                             (15,25,35),
				 (40,45,60)
SELECT * FROM PlanetID
Go

/***** Now that you have a database with data, what steps would you use to create a clustered index
       based on the ID column?*****/

CREATE CLUSTERED INDEX IX_PlanetID_ID
       ON PlanetID(ID)
GO
                                