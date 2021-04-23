USE AssignmentDay29;
GO

CREATE TABLE Assignment.Employees(
	EMPLOYEE_ID int CONSTRAINT PkEid PRIMARY KEY IDENTITY,
	FIRST_NAME varchar(20) NOT NULL,
	LAST_NAME varchar(20) NOT NULL,
	SALARY int NOT NULL,
	JOINING_DATE datetime NOT NULL,
	DEPARTMENT varchar(25) NOT  NULL,
	MANAGER_ID int CONSTRAINT FkMid FOREIGN KEY REFERENCES Assignment.Employees(EMPLOYEE_ID) 
)

CREATE TABLE Assignment.Incentive(
	EMPLOYEE_REF_ID int CONSTRAINT FkIeid FOREIGN KEY REFERENCES Assignment.Employees(EMPLOYEE_ID),
	INCENTIVE_DATE date NOT NULL,
	INCENTIVE_AMOUNT int NOT NULL
)

INSERT INTO Assignment.Employees
(
	FIRST_NAME,
	LAST_NAME,
	SALARY,
	JOINING_DATE,
	DEPARTMENT,
	MANAGER_ID
) VALUES
('John','Abraham',1000000,'2013-01-01 12:00:00 AM','Banking',NULL),
('Michael','Clarke',800000,'2013-01-01 12:00:00 AM','Insurance',1),
('Roy','Thomas',700000,'2013-01-01 12:00:00 AM','Banking',1),
('Tom','Jose',600000,'2013-01-01 12:00:00 AM','Insurance',2),
('Jerry','Pinto',650000,'2013-01-01 12:00:00 AM','Insurance',3),
('Philip','Mathew',750000,'2013-01-01 12:00:00 AM','Services',3),
('TestName1','123',650000,'2013-01-01 12:00:00 AM','Services',2),
('TestName2','Lname%',600000,'2013-01-01 12:00:00 AM','Banking',2);
GO

INSERT INTO Assignment.Incentive
(
	EMPLOYEE_REF_ID,
	INCENTIVE_DATE,
	INCENTIVE_AMOUNT
) VALUES
(1,'2013-02-01',5000),
(2,'2013-02-01',3000),
(3,'2013-02-01',4000),
(1,'2013-01-01',4500),
(2,'2013-01-01',3500);
GO

SELECT * FROM Assignment.Employees;
GO

SELECT * FROM Assignment.Incentive;
GO

--Get difference between JOINING_DATE and INCENTIVE_DATE from employee and incentives table
SELECT 
	e.EMPLOYEE_ID,
	e.FIRST_NAME+' '+e.LAST_NAME AS 'Employee Name',
	DATEDIFF(DD,e.JOINING_DATE,i.INCENTIVE_DATE) AS 'Days' 
FROM Assignment.Employees e JOIN Assignment.Incentive i 
ON e.EMPLOYEE_ID=i.EMPLOYEE_REF_ID;
GO

--Select first_name, incentive amount from employee and incentives table for those employees who have incentives and incentive amount greater than 3000
SELECT 
	e.EMPLOYEE_ID,
	e.FIRST_NAME,
	i.INCENTIVE_AMOUNT 
FROM Assignment.Employees e JOIN Assignment.Incentive i 
ON e.EMPLOYEE_ID=i.EMPLOYEE_REF_ID 
WHERE i.INCENTIVE_AMOUNT>3000;
GO

--Select first_name, incentive amount from employee and incentives table for all employees even if they didn’t get incentives.
SELECT 
	e.EMPLOYEE_ID,
	e.FIRST_NAME,
	i.INCENTIVE_AMOUNT 
FROM Assignment.Employees e LEFT OUTER JOIN Assignment.Incentive i 
ON e.EMPLOYEE_ID=i.EMPLOYEE_REF_ID;
GO

--Select EmployeeName, ManagerName from the employee table.
SELECT 
	e.FIRST_NAME+' '+e.LAST_NAME AS 'Employee Name',
	m.FIRST_NAME+' '+m.LAST_NAME AS 'Manager Name' 
FROM Assignment.Employees e, Assignment.Employees m 
WHERE e.MANAGER_ID=m.EMPLOYEE_ID;
GO

--Select first_name, incentive amount from employee and incentives table for all employees even if they didn’t get incentives and set incentive amount as 0 for those employees who didn’t get incentives.
SELECT
	e.EMPLOYEE_ID,
	e.FIRST_NAME,
	CASE WHEN i.INCENTIVE_AMOUNT IS NULL THEN 0
		 ELSE i.INCENTIVE_AMOUNT
	END AS 'INCENTIVE_AMOUNT'
FROM Assignment.Employees e LEFT OUTER JOIN Assignment.Incentive i 
ON e.EMPLOYEE_ID=i.EMPLOYEE_REF_ID;
GO