/*As a database administrator, you need to increase the performance of the PlanetsID table, so
you decide to create a clustered index. But instead of using SSMS, you decide to use queries
to perform this task. Therefore, you create a new PlanetsID database using the following
commands within SMMS:*/


CREATE TABLE PlanetsID(
[ID] [int] NOT NULL,
[Item] [int] NOT NULL,
[Value] [int] NOT NULL
)
GO
INSERT INTO PlanetsID VALUES (4, 23, 66)
INSERT INTO PlanetsID VALUES (1, 12, 59)
INSERT INTO PlanetsID VALUES (3, 66, 24)
SELECT * FROM PlanetsID
GO



/*You should now see the following output in the results pane (below the Query Editor
Window):
ID Item Value
4 23 66
1 12 59
3 66 24
Now that you have a database with data, what steps would you use to create a clustered index
based on the ID column?*/

CREATE CLUSTERED INDEX MY_PlanetID_ID	
	ON PlanetsID(ID)
GO