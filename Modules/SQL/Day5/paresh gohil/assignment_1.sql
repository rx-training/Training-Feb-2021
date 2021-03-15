USE Employees

CREATE TABLE Employees
(
	EmployeeID INT IDENTITY,
	FirstName varchar(10) NOT NULL,
	LastName varchar(10) NOT NULL,
	Salary bigint NOT NULL,
	JoiningDate varchar(30)  NOT NULL,
	Department varchar(10) NOT NULL,
	MangerID INT NULL
)

INSERT INTO Employees VALUES( 'John','Abraham',1000000,'01-JAN-13 12.00.00 AM','Banking', NULL),
							('Michael','Clarke',800000,'01-JAN-13 12.00.00 AM','Insurance', 1),
							('Roy','Thomas',700000,'01-FEB-13 12.00.00 AM','Banking', 1),
							('Tom','Jose',600000,'01-FEB-13 12.00.00 AM','Insurance', 2),
							('Jerry','Pinto',650000,'01-FEB-13 12.00.00 AM','Insurance', 3),
							('Philip','Mathew',750000,'01-JAN-13 12.00.00 AM','Services', 3),
							('TestName1','123',650000,'01-JAN-13 12.00.00 AM','Services', 2),
							('TestName2','Lname%',600000,'01-FEB-13 12.00.00 AM','Insurance', 2)


SELECT * FROM Employees

CREATE  TABLE Incentives
(
	EmployeeRefID INT,
	IncentiveDate varchar(10),
	IncentiveAmount bigint
)

INSERT INTO Incentives values   (1,'01-FEB-13',5000),
								(2,'01-FEB-13',3000),
								(3,'01-FEB-13',4000),
								(1,'01-JAN-13',4500),
								(2,'01-JAN-13',3500)

SELECT * FROM Incentives


/*Get difference between JOINING_DATE and INCENTIVE_DATE from employee and incentives table*/

	SELECT e.JoiningDate,i.IncentiveDate FROM Employees e JOIN Incentives i ON e.EmployeeID = i.EmployeeRefID

/*Select first_name, incentive amount from employee and incentives table for those employees who have incentives and incentive amount greater than 3000*/

	SELECT e.FirstName,i.IncentiveAmount FROM Employees e JOIN Incentives i ON e.EmployeeID = i.EmployeeRefID AND i.IncentiveAmount > 3000

/*Select first_name, incentive amount from employee and incentives table for all employees even if they didn’t get incentives*/

	SELECT FirstName,IncentiveAmount FROM Employees e LEFT OUTER JOIN Incentives i ON e.EmployeeID = i.EmployeeRefID
	
/*Select EmployeeName, ManagerName from the employee table.*/

	SELECT m.FirstName as 'EmployeeName',e.FirstName as 'MangerName' FROM Employees e ,Employees m WHERE e.EmployeeID = m.MangerID

/*Select first_name, incentive amount from employee and incentives table for all employees even if they didn’t get incentives and set incentive amount as 0 for those employees who didn’t get incentives.*/

	SELECT FirstName,ISNULL(IncentiveAmount,0) FROM Employees e LEFT OUTER JOIN Incentives i ON e.EmployeeID = i.EmployeeRefID 
	