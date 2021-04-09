CREATE TABLE Employees
(EMPLOYEE_ID int PRIMARY KEY,
 FirstName varchar(20),
 LastName varchar(25),
 Salary int,
 joiningDate datetime,
 Department varchar(20),
 ManagerID int,
);

INSERT INTO Employees
(EMPLOYEE_ID,FirstName,LastName,Salary,joiningDate,Department,ManagerID)
VALUES
(1,'John','Abraham',1000000,'01-JAN-13 12:00:00 AM','Banking',NULL),
(2,'Michale','Clarke',800000,'01-JAN-13 12:00:00 AM','Insurance',1),
(3,'Roy','Thomas',700000,'01-FEB-13 12:00:00 AM','Banking',1),
(4,'Tom','Jose',600000,'01-FEB-13 12:00:00 AM','Insurance',2),
(5,'Jerry','Pinto',650000,'01-FEB-13 12:00:00 AM','Insurance',3),
(6,'Philip','Mathew',750000,'01-JAN-13 12:00:00 AM','Services',3),
(7,'Parth','Shah',650000,'01-JAN-13 12:00:00 AM','Services',2),
(8,'Kush','Shah',600000,'01-FEB-13 12:00:00 AM','Insurance',2);



CREATE TABLE Incentives
(
IncentiveID int Primary Key,
EMPLOYEE_ID int FOREIGN KEY REFERENCES Employees(EMPLOYEE_ID),
IncentiveDate date,
IncentiveAmount int);

SELECT * FROM Incentives;
INSERT INTO Incentives
(IncentiveID,EMPLOYEE_ID,IncentiveDate,IncentiveAmount)
VALUES
(1,1,'01-FEB-13',5000),
(2,2,'01-FEB-13',3000),
(3,3,'01-FEB-13',4000),
(4,1,'01-JAN-13',4500),
(5,2,'01-JAN-13',3500);

---1.Get difference between JOINING_DATE and INCENTIVE_DATE from employee and incentives table

SELECT FirstName,JoiningDate,IncentiveDate,DATEDIFF(DAY,JoiningDate,IncentiveDate) AS 'Difference' 
FROM Employees A inner join Incentives B on A.EMPLOYEE_ID=B.EMPLOYEE_ID;


/*2.Select first_name, incentive amoun
t from employee and incentives table for those employees who have incentives and incentive amount greater than 3000*/

SELECT FirstName,IncentiveAmount 
FROM Employees A inner join Incentives B on A.EMPLOYEE_ID = B.EMPLOYEE_ID AND B.IncentiveAmount > 3000;


--3.select first_name, incentive amount from employee and incentives table for all employees even if they didn’t get incentives.

SELECT FirstName, IncentiveAmount 
FROM Employees A left join Incentives B on A.EMPLOYEE_ID = B.EMPLOYEE_ID;


--4.Select EmployeeName, ManagerName from the employee table.

SELECT A.Firstname AS EmployeeName , B.FirstName As ManagerName
FROM Employees AS A JOIN Employees As B ON A.ManagerID = B.EMPLOYEE_ID; 


/*5. Select first_name, incentive amount from employee and incentives table for all employees 
even if they didn’t get incentives and set incentive amount as 0 for those employees who didn’t get incentives.*/

SELECT FirstName,ISNULL(IncentiveAmount,0) AS Incentives
FROM Employees A LEFT JOIN Incentives B ON A.EMPLOYEE_ID=B.EMPLOYEE_ID;

