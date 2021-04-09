USE AdventureWorks2012

/*Day 8*/

/*You are a database administrator for the AdventureWorks Corporation. You recently created
some databases, and you’ve just realized how large the databases will become in the future.
Therefore, you need to create a new clustered index to help with overall performance.
Using the SSMS interface, what steps would you use to create a new clustered index on the
name column for the AdventureWorks database?*/

CREATE CLUSTERED INDEX IX_Person_FirstName ON Person (FirstName)

SELECT * FROM Person


/*As a database administrator, you need to increase the performance of the PlanetsID table, so
you decide to create a clustered index. But instead of using SSMS, you decide to use queries
to perform this task. Therefore, you create a new PlanetsID database using the following
commands within SMMS:*/

CREATE TABLE PlanetsID
(
	ID INT NOT NULL,
	Item varchar(20) NOT NULL,
	Price INT NOT NULL 
)

INSERT INTO PlanetsID Values (4,'Book1',200),
							 (1,'Book2',300),
							 (2,'Book3',400),
							 (3,'Book4',100)

/*Now that you have a database with data, what steps would you use to create a clustered index
based on the ID column?*/

CREATE CLUSTERED INDEX IX_PlanetsID_ID ON PlanetsID (ID)

