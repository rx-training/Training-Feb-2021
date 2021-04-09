---   Fill in the Blank  ------
/*

Complete the following sentences by writing the correct word or words in the blanks provided.

1. Normalization is the elimination of redundant data to save ___space_________.
2. The value of a primary key must be ______unique and not null______.
3. A foreign key works in conjunction with primary key or unique constraints to enforce
______relationship______ between tables.
4. Add an index to one or more columns to speed up data ______retrive______.



Multiple Choice

Circle the letter that corresponds to the best answer.
1. Which of the following is not a constraint?
a. CHECK
b. DEFAULT
c. UNIQUE
d. INDEX 

ANS: d. INDEX

2. Which of the following things can help speed data retrieval?
a. A DEFAULT constraint
b. A primary key constraint
c. A clustered index
d. A foreign key constraint

ANS: c. A clustered index

3. Which of the following statements are true?
a. A greater number of narrow tables (with fewer columns) is a characteristic of a
normalized database.
b. A few wide tables (with more columns) are characteristic of a normalized database.
c. Indexes allow faster data retrieval.
d. Optimal database performance can be achieved by indexing every column in a table.

ANS: c. Indexes allow faster data retrieval

4. Which of the following statements is not true with regard to foreign keys?
a. A foreign key is a combination of one or more columns used to establish and enforce
	a link between the data in two tables.
b. You can create a foreign key by defining a foreign key constraint when you create or
	alter a table.
c. A foreign key enforces referential integrity by ensuring only valid data is stored.
d. A table can contain only one foreign key.

ANS: d. A table can contain only one foreign key. 

5. Consider using a clustered index when:
a. Columns contain a large number of distinct values
b. Columns are accessed sequentially
c. Columns undergo frequent changes
d. Queries return large result sets

ANS: 

6. Which normal form ensures that each attribute describes the entity?
a. 1NF
b. 2NF
c. 3NF
d. 4NF

ANS: 1NF

7. Which of the following could not be used as a primary key?
a. A Social Security number
b. An address
c. An employee number
d. The serial number of an electronic component

ANS: b. An address

8. How many clustered indexes can you have for a database?
a. 1
b. 2
c. 4
d. 8

ANS: a. 1

9. What is the name for the situation in which more than one columns act as a primary
key?
a. Composite primary key
b. Escalating key
c. Foreign key
d. Constraint key

ANS: a. Composite primary key

10. When you define a primary key, you have met the criteria for:
a. 1NF
b. 2NF
c. 3NF
d. 4NF

ANS: 2NF

*/


/*You are a database administrator for the AdventureWorks Corporation. You recently created
some databases, and you’ve just realized how large the databases will become in the future.
Therefore, you need to create a new clustered index to help with overall performance.
Using the SSMS interface, what steps would you use to create a new clustered index on the
name column for the AdventureWorks database?*/

CREATE CLUSTERED INDEX IX_tbl_Name
ON AdventuresWorks.name;  




/*
As a database administrator, you need to increase the performance of the PlanetsID table, so
you decide to create a clustered index. But instead of using SSMS, you decide to use queries
to perform this task. Therefore, you create a new PlanetsID database using the following
commands within SMMS:
*/

IF EXISTS (SELECT * FROM sys.objects
WHERE object_id = OBJECT_ID(PlanetsID))
USE TutorialDB
DROP TABLE PlanetsID
GO
USE TutorialDB
GO
CREATE TABLE [dbo].[PlanetsID](
[ID] [int] NOT NULL,
[Item] [int] NOT NULL,
[Value] [int] NOT NULL
) ON [PRIMARY]
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
based on the ID column?
*/

CREATE CLUSTERED INDEX IX_tblPlanetsID_ID
ON PlanetsID(ID)