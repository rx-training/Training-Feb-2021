USE AssignmentDay32;
GO

CREATE TABLE Customers(
	CustomerID int NOT NULL,
	Name varchar(40) NOT NULL,
	JoinDate date NOT NULL
);
GO

INSERT INTO Customers VALUES
(44,'Dave','2011-05-12'),
(42,'Christopher','2011-08-11'),
(41,'Anthony','2011-04-04'),
(45,'Susan','2011-07-12'),
(43,'Karin','2011-01-12');
GO

SELECT * FROM Customers;
GO
--OUTPUT
/*
44	Dave		2011-05-12
42	Christopher	2011-08-11
41	Anthony		2011-04-04
45	Susan		2011-07-12
43	Karin		2011-01-12
*/

 --CREATING CLUSTERED INDEX
CREATE CLUSTERED INDEX CIX_CustId ON Customers(CustomerID);
GO

SELECT * FROM Customers;
GO
--OUTPUT
/*
41	Anthony		2011-04-04
42	Christopher	2011-08-11
43	Karin		2011-01-12
44	Dave		2011-05-12
45	Susan		2011-07-12
*/

 --CREATING NON-CLUSTERED INDEX
CREATE NONCLUSTERED INDEX IX_Customer_Name ON Customers(Name,CustomerID);
GO

SELECT 
	Name,
	JoinDate
FROM Customers
WHERE Name LIKE 'Chris%';
GO
