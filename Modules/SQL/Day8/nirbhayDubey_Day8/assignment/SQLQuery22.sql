CREATE DATABASE AssignmentDay32;
GO

USE AssignmentDay32;
GO

--EXAMPLE 1
CREATE TABLE PlanetsID(
	ID int NOT NULL,
	Item int NOT NULL,
	Value int NOT NULL
);
GO

INSERT INTO PlanetsID VALUES (4, 23, 66),
							(1, 12, 59),
							(3, 66, 24);
GO

SELECT * FROM PlanetsID;
GO

--CREATING CLUSTERED INDEX NOW
CREATE CLUSTERED INDEX CIX_PlanetsID ON PlanetsId(ID);
GO

--NOW DATA IN PlnetsID IS SORTED ACCORDING TO CLUSTERED INDEX 'ID'
SELECT * FROM PlanetsID;
GO

--EXAMPLE 1
CREATE TABLE  Employees (
    EmployeeID int,
	Name varchar(40) NOT NULL,
	Salary decimal(8,2) NOT NULL,
	Gender varchar(10) NOT NULL,
	City varchar(40) NOT NULL
 )
 GO

 INSERT INTO Employees VALUES(3,'Nirbhay Dubey',80000,'Male','Ahmedabad');
 INSERT INTO Employees VALUES(6,'Rahul Suthar',55000,'Male','Aburoad');
 INSERT INTO Employees VALUES(4,'Aman Rathore',66000,'Male','Banglore');
 INSERT INTO Employees VALUES(1,'Manish Shah',75000,'Male','Jaipur');
 INSERT INTO Employees VALUES(7,'Avni Mehta',85000,'Female','Surat');
 INSERT INTO Employees VALUES(5,'Rishabh Panday',80000,'Male','Gwaliyar');
 INSERT INTO Employees VALUES(2,'Sahil Patel',30000,'Male','mumbai');
 GO

 SELECT * FROM Employees;
 GO
--OUTPUT 
/*
3	Nirbhay Dubey	80000.00	Male	Ahmedabad
6	Rahul Suthar	55000.00	Male	Aburoad
4	Aman Rathore	66000.00	Male	Banglore
1	Manish Shah		75000.00	Male	Jaipur
7	Avni Mehta		85000.00	Female	Surat
5	Rishabh Panday	80000.00	Male	Gwaliyar
2	Sahil Patel		30000.00	Male	mumbai
*/

 --CREATING CLUSTERED INDEX
CREATE CLUSTERED INDEX CIX_EmpId ON Employees(EmployeeID);
GO

 SELECT * FROM Employees;
 GO
 --OUTPUT
 /*
1	Manish Shah		75000.00	Male	Jaipur
2	Sahil Patel		30000.00	Male	mumbai
3	Nirbhay Dubey	80000.00	Male	Ahmedabad
4	Aman Rathore	66000.00	Male	Banglore
5	Rishabh Panday	80000.00	Male	Gwaliyar
6	Rahul Suthar	55000.00	Male	Aburoad
7	Avni Mehta		85000.00	Female	Surat
*/

--DROPING CLUSTERED INDEX CIX_EmpId
DROP INDEX Employees.CIX_EmpName_Salary; 
--Employees.CIX_EmpId;
GO

--CREATING COMPOSITE CLUSTERED INDEX
CREATE CLUSTERED INDEX CIX_EmpName_Gender ON Employees(Name,Gender DESC);
GO

 SELECT * FROM Employees;
 GO
 --OUTPUT
 /*
4	Aman Rathore	66000.00	Male	Banglore
7	Avni Mehta		85000.00	Female	Surat
1	Manish Shah		75000.00	Male	Jaipur
3	Nirbhay Dubey	80000.00	Male	Ahmedabad
6	Rahul Suthar	55000.00	Male	Aburoad
5	Rishabh Panday	80000.00	Male	Gwaliyar
2	Sahil Patel		30000.00	Male	mumbai
 */

 --CREATING NON-CLUSTERED INDEX
CREATE NONCLUSTERED INDEX CIX_EmpName ON Employees(Name);
GO

SELECT * FROM Employees WHERE Name='Nirbhay Dubey';
Go

 --CREATING COMPOSITE NON-CLUSTERED INDEX
CREATE NONCLUSTERED INDEX CIX_EmpGender_City ON Employees(Gender,City);
GO

SELECT * FROM Employees WHERE Gender='Male' AND City='Ahmedabad';
Go