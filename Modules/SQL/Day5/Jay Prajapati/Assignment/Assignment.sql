USE SQLDay2;
CREATE TABLE EmployeesDetail
(EmployeeID INT PRIMARY KEY,
FirstName NVARCHAR(15),
LastName NVARCHAR(15),
Salary MONEY,
JoiningDate DATE,
Department NVARCHAR(20),
ManagerID INT);

INSERT INTO EmployeesDetail
VALUES(1,'John', 'Abraham',1000000, '01-01-2013' , 'Banking', NULL)
(2,'Michael', 'Clarke',80000, '01-01-2013' , 'Insurance', 1),
(3,'Roy', 'Thomas',70000, '01-02-2013' , 'Banking', 1),
(4,'Tom', 'Jose',60000, '01-02-2013' , 'Insurance', 2),
(5,'Jerry', 'Pinto',560000, '01-02-2013' , 'Insurance', 3),
(6,'Philip', 'Mathew',750000, '01-01-2013' , 'Services', 3),
(7,'TestName1', '123',650000, '01-01-2013' , 'Sercices', 2),
(8,'TestName2', 'Lname%',600000, '01-02-2013' , 'Insurance', 2);

SELECT * FROM EmployeesDetail;

USE SQLDay2;
CREATE TABLE Incentive
(IncentiveID INT PRIMARY KEY,
EmployeeRefId INT FOREIGN KEY REFERENCES EmployeesDetail(EmployeeID),
IncentiveDate DATE,
IncentiveAmount MONEY
);



SELECT * FROM Incentive;

INSERT INTO Incentive 
VALUES(1,1,'01-02-2013',5000),
(2,2,'01-02-2013',3000),
(3,3,'01-02-2013',4000),
(4,1,'01-01-2013',4500),
(5,2,'01-01-2013',3500);

/* 1. Get difference between JOINING_DATE and INCENTIVE_DATE
from employee and incentives table*/

SELECT DATEDIFF(DAY,JoiningDate,IncentiveDate) AS 'Difference'
FROM EmployeesDetail AS EMP
 INNER JOIN Incentive AS INC
 ON EMP.EmployeeID = INC.EmployeeRefId;

/* 2. Select first_name, incentive amount from employee and
incentives table for those employees who have incentives
and incentive amount greater than 3000*/

SELECT EMP.FirstName,INC.IncentiveAmount
FROM EmployeesDetail AS EMP
 INNER JOIN Incentive AS INC
 ON EMP.EmployeeID = INC.EmployeeRefId
 WHERE INC.IncentiveAmount > 3000;

/* 3. Select first_name, incentive amount from employee 
and incentives table for all employees even if they 
didn’t get incentives.*/

SELECT EMP.FirstName,
	INC.IncentiveAmount
FROM EmployeesDetail AS EMP
 LEFT OUTER JOIN Incentive AS INC
 ON EMP.EmployeeID = INC.EmployeeRefId;



/* 4. Select EmployeeName, ManagerName from the employee table.*/
USE SQLDay2
SELECT (EMP.FirstName + ' ' + EMP.LastName) AS EmployeeName,
		(MNG.FirstName + ' ' + MNG.LastName) AS ManagerName
FROM Employees AS EMP
     JOIN Employees As MNG 
	 ON EMP.ManagerID = MNG.EmployeeID;




 /*Select first_name, incentive amount from employee
 and incentives table for all employees even if they 
 didn’t get incentives and set incentive amount 
 as 0 for those employees who didn’t get incentives.*/

 SELECT FirstName,
ISNULL(IncentiveAmount,0)
FROM EmployeesDetail
LEFT JOIN incentive 
ON EmployeeID = EmployeeRefId


--OR 

 SELECT EMP.FirstName,
		INC.IncentiveAmount
 FROM EmployeesDetail AS EMP
 LEFT OUTER JOIN Incentive AS INC
 ON EMP.EmployeeID = INC.EmployeeRefId;

 
 UPDATE Incentive
 SET IncentiveAmount = 0
 WHERE (SELECT INC.IncentiveAmount
		FROM EmployeesDetail AS EMP
		LEFT OUTER JOIN Incentive AS INC
		ON EMP.EmployeeID = INC.EmployeeRefId)= NULL;
-- OR

UPDATE Incentive
SET IncentiveAmount = 0
FROM Incentive AS INC 
 RIGHT OUTER JOIN EmployeesDetail As ED
 ON INC.EmployeeRefId = ED.EmployeeID
 WHERE IncentiveAmount = NULL;

 SELECT * 
 FROM EmployeesDetail As ED
 LEFT OUTER JOIN Incentive AS INC 
 ON INC.EmployeeRefId = ED.EmployeeID;

 

 