SELECT * FROM Employees WHERE EMPLOYEE_ID IN (SELECT Employee_REF_ID FROM IncentiveDetails)


SELECT FIRST_NAME,SALARY FROM Employees WHERE SALARY > (SELECT SALARY FROM Employees where FIRST_NAME= 'ROY') 

/*CREATE VIEW IncentiveDetailsOfEmployee
AS
SELECT e.FIRST_NAME,e.LAST_NAME,e.SALARY,e.JOINING_DATE,Id.INCENTIVE_AMOUNT,Id.INCENTIVE_DATE
From Employees e 
INNER JOIN IncentiveDetails Id ON e.EMPLOYEE_ID = Id.Employee_REF_ID
----------------- VIEWINNG THE VIEWS-------------------
SELECT * FROM IncentiveDetailsOfEmployee*/

CREATE VIEW IncentiveDetailsOfEmployee
AS
SELECT e.FIRST_NAME,e.LAST_NAME,e.SALARY,e.JOINING_DATE,Id.INCENTIVE_AMOUNT,Id.INCENTIVE_DATE
From Employees e 
INNER JOIN IncentiveDetails Id ON e.EMPLOYEE_ID = Id.Employee_REF_ID
----------------- VIEWINNG THE VIEWS-------------------
SELECT * FROM IncentiveDetailsOfEmployee

---------------------------------------4---------------
CREATE OR ALTER VIEW Incentive_View_2
AS
SELECT e.FIRST_NAME, e.LAST_NAME,e.SALARY, Id.INCENTIVE_DATE, Id.INCENTIVE_AMOUNT 
FROM Employees e
INNER JOIN	IncentiveDetails Id ON e.EMPLOYEE_ID = Id.Employee_REF_ID WHERE Id.INCENTIVE_AMOUNT > 3000;
GO
SELECT * FROM Incentive_View_2

-----------------------5----------------------
USE DaySix
CREATE OR ALTER VIEW Assignment5
AS
SELECT e.FirstName,e.LastName,e.JobId,d.DepartmentID,d.DepartmentName  
FROM Employees e INNER JOIN Departments d ON d.DepartmentID = e.DepartmentID INNER JOIN Locations L ON L.LocationID =d.LocationID
WHERE L.City='LONDON';
GO

SELECT * FROM Assignment5

----------------------------------6--------------------------
CREATE OR ALTER VIEW ASSIGNMENTS_6
AS
SELECT d.DepartmentName, COUNT(e.EmployeeID) AS EmployeeCount 
FROM Employees e INNER JOIN Departments d  ON d.DepartmentID = e.DepartmentID GROUP BY d.DepartmentName
GO
SELECT * FROM ASSIGNMENTS_6

----------------------------------7---------------------------
CREATE OR ALTER VIEW ASSIGNMENT_7
AS
SELECT EmployeeID,JobID,DATEDIFF(DD,StartDate,EndDate) AS DayInterval 
FROM JobHistory WHERE DepartmentID= 90;
GO

SELECT * FROM ASSIGNMENT_7

----------------------8----------------------------------
CREATE VIEW ASSIGNMENT_8
AS
SELECT e.FirstName,d.DepartmentName,L.City 
FROM EmPLOYEES e JOIN Departments d ON d.ManagerID=e.EmployeeID INNER JOIN
Locations l ON l.LocationID =d.LocationID
GO 
SELECT * FROM ASSIGNMENT_8

------------------9----------------------------------------
CREATE OR ALTER VIEW ASSIGNMENT_9
AS
SELECT CONCAT_WS(' ',E.FirstName,E.LastName) AS Name, D.DepartmentName, E.HireDate, E.Salary, DATEDIFF(YY, E.HireDate, GETDATE()) AS Experience
FROM Employees e INNER JOIN Departments d ON d.ManagerID = e.EmployeeID WHERE DATEDIFF(YY,HireDate,GETDATE())>15;
GO
SELECT * FROM ASSIGNMENT_9