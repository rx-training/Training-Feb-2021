CREATE TABLE Incentives
(	
	IncentiveID INT PRIMARY KEY,
	EmployeeRefID INT FOREIGN KEY REFERENCES EmployeeDetails(EmployeeID),
	IncentiveDate Date,
	IncentiveAmount INT
);

SELECT * FROM Incentives

DELETE FROM Incentives

DROP TABLE Incentives

INSERT INTO Incentives VALUES 
(1,1,'01-02-2013',5000),
(2,2,'01-02-2013',3000),
(3,3,'01-02-2013',4000),
(4,1,'01-01-2013',4500),
(5,2,'01-01-2013',3500)