/* As a database administrator, you need to increase the performance of the PlanetsID table, so
you decide to create a clustered index. But instead of using SSMS, you decide to use queries
to perform this task. Therefore, you create a new PlanetsID database using the following
commands within SMMS: */

CREATE TABLE PlanetsID(
ID INT NOT NULL,
Item INT NOT NULL,
[Value] INT NOT NULL
);
INSERT INTO PlanetsID VALUES (4, 23, 66)
INSERT INTO PlanetsID VALUES (1, 12, 59)
INSERT INTO PlanetsID VALUES (3, 66, 24)

CREATE CLUSTERED INDEX IX_PlanetsID_ID   
ON PlanetsID (ID);

Select * from PlanetsID