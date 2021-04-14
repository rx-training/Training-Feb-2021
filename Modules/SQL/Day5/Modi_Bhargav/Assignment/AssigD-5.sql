                                                                /********** Assignment *********/
USE DayFive
CREATE TABLE Employees
	(
	EMPLOYEE_ID INT NOT NULL DEFAULT NULL,
	FIRST_NAME VARCHAR(20) NOT NULL,
	LAST_NAME VARCHAR(20)NOT NULL,
	SALARY DECIMAL(10,0)NOT NULL,
	JOINING_DATE DATETIME NOT NULL,
	DEPARTMENT VARCHAR(15),
	MANAGER_ID INT
	)
INSERT INTO Employees(EMPLOYEE_ID, FIRST_NAME,LAST_NAME,SALARY,JOINING_DATE,DEPARTMENT,MANAGER_ID)
VALUES(1,'John','Abraham', 1000000, '2013-JAN-01 12:00:00','Banking',NULL),
(2,'Michael','Clarke',800000,'2013-JAN-01 12:00:00', 'Insurance', 1),
(3,'Roy','Thomas',700000,'2013-FEB-01 12:00:00','Banking',1),
(4,'Tom','Jose',600000,'2013-FEB-01 12:00:00','Insurance',2),
(5,'Jerry','Pinto',650000,'2013-FEB-01 12:00:00','Insurance',3),
(6,'Philip','Mathew',750000,'2013-JAN-01 12:00:00','Servicee',3),
(7,'TestName1','123',650000,'2013-JAN-01 12:00:00','Services',2),
(8,'TestName2','Lname%',600000,'2013-FEB-01 12:00:00','Insurance',2)

SELECT * FROM Employees

CREATE TABLE Incentive 
(
EMPLOYEE_REF_ID INT NOT NULL DEFAULT NULL,
INCENTIVE_DATE DATETIME NOT NULL,
INCENTIVE_AMOUNT INT NOT NULL
)

INSERT INTO Incentive VALUES (1,'01-FEB-13',5000),
                             (2,'01-FEB-13',3000),
							 (3,'01-FEB-13',4000),
							 (1,'01-FEB-13',4500),
							 (2,'01-FEB-13',3500)

SELECT * FROM Incentive

/***** 1. Get difference between JOINING_DATE and INCENTIVE_DATE from employee and incentives table. *****/
SELECT EMPLOYEE_ID,FIRST_NAME,INCENTIVE_DATE,JOINING_DATE FROM Employees INNER JOIN  Incentive ON EMPLOYEE_ID = EMPLOYEE_REF_ID
 
/***** 2. Select first_name, incentive amount from employee and incentives table for those employees who have incentives and incentive amount greater than 3000.*****/
 
SELECT EMPLOYEE_ID,FIRST_NAME,INCENTIVE_AMOUNT FROM Employees LEFT JOIN Incentive ON EMPLOYEE_ID = EMPLOYEE_REF_ID WHERE INCENTIVE_AMOUNT > 3000; 
 
/***** 3. Select first_name, incentive amount from employee and incentives table for all employees even if they didn�t get incentives.*****/
 
Select FIRST_NAME,INCENTIVE_AMOUNT from Employees LEFT JOIN Incentive ON EMPLOYEE_ID = EMPLOYEE_REF_ID 

/***** 4. Select EmployeeName, ManagerName from the employee table.*****/

SELECT e.FIRST_NAME AS EmployeeName, m.FIRST_NAME AS ManagerName FROM  Employees e JOIN Employees m on e.EMPLOYEE_ID = m.EMPLOYEE_ID

/***** 5. Select first_name, incentive amount from employee and incentives table for all employees even if they didn’t get incentives and set incentive amount as 0 for 
          those employees who didn’t get incentives.*****/

SELECT FIRST_NAME,ISNULL(INCENTIVE_AMOUNT,0) FROM Employees LEFT JOIN Incentive ON EMPLOYEE_ID = EMPLOYEE_REF_ID 

