CREATE DATABASE AssignmentDay38;
GO

USE AssignmentDay38;
GO

--Detroit Bank need to implement the transaction whenever the amount is transferred from one account to the another account.

CREATE TABLE Accounts(
	ActNo int CONSTRAINT pk_ActNo PRIMARY KEY IDENTITY,
	Cname varchar(30),
	Cgender varchar(10),
	ActType varchar(20),
	Balance decimal(8,2)
);
GO

INSERT INTO Accounts(Cname,Cgender,ActType,Balance) VALUES
('Nirbhay Dubey','Male','SAVING',50000),
('Nirav Patel','Male','SAVING',30000),
('Shubham Bhosle','Male','SAVING',60000),
('Rahul Dank','Male','SAVING',10000),
('Shubhash Jha','Male','SAVING',20000),
('Nilima Mehra','Female','SAVING',45000),
('Pooja Jain','Female','SAVING',1000),
('Jagrati Pandya','Female','SAVING',70000);
GO

SELECT * FROM Accounts;
GO


UPDATE Accounts SET Balance=50000 WHERE Actno=1
UPDATE Accounts SET Balance=30000 WHERE Actno=2