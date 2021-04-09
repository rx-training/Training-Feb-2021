/*You are a database administrator for the AdventureWorks Corporation. You recently created
some databases, and you’ve just realized how large the databases will become in the future.
Therefore, you need to create a new clustered index to help with overall performance.
Using the SSMS interface, what steps would you use to create a new clustered index on the
name column for the AdventureWorks database?*/

Use AdventureWorks2012
CREATE CLUSTERED INDEX IX_Name ON Person.person (FirstName)

SELECT * FROM Person.person


/*As a database administrator, you need to increase the performance of the PlanetsID table, so
you decide to create a clustered index. But instead of using SSMS, you decide to use queries
to perform this task. Therefore, you create a new PlanetsID database using the following
commands within SMMS:*/

CREATE TABLE dbo.PlanetsID
(
	ID INT NOT NULL,
	Item varchar(20) NOT NULL,
	Valuee INT NOT NULL 
)

INSERT INTO dbo.PlanetsID Values (4,'Item1',66),
							 (1,'Item2',59),
							 (3,'Item3',24)

SELECT * FROM dbo.PlanetsID

