------------------------------------ SUBQUERY TASK------------------------------

SELECT FirstName,LastName,Salary FROM Employees WHERE SALARY > (SELECT Salary FROM Employees WHERE LastName ='BULL'  );
 
 ------2--------

 SELECT FirstName, LastName FROM Employees WHERE DepartmentID = (SELECT DepartmentID FROM Departments WHERE DepartmentName = 'IT');

 ------3----

 SELECT FirstName,LastName FROM Employees WHERE DepartmentID IN
 (SELECT DepartmentID FROM Departments WHERE LocationID IN
 (SELECT LocationID FROM Locations WHERE CountryID = 'US'));

 -------4---------

 SELECT FirstName,LastName FROM Employees WHERE EmployeeID IN(SELECT DISTINCT ManagerID FROM Employees)

 -------5-----------
 SELECT FirstName,LastName,Salary FROM Employees WHERE Salary > (SELECT AVG(Salary) FROM Employees)

 ---------------6--------------
 SELECT FirstName,LastName,Salary FROM Employees WHERE Salary IN(SELECT MIN(Salary) FROM Employees GROUP BY JobId) 

 ------------7--------------------
 
 SELECT FirstName,LastName,Salary FROM Employees WHERE Salary >(SELECT AVG(Salary) FROM Employees )
 AND DepartmentID=(SELECT DepartmentID FROM Departments WHERE DepartmentName='IT') 

 ------------8--------------------------
  SELECT FirstName,LastName,Salary FROM Employees WHERE Salary>(SELECT SALARY FROM Employees WHERE LastName='BELL')

  -----------------9----------
   SELECT FirstName,LastName,Salary FROM Employees WHERE SALARY IN (SELECT MIN(Salary) FROM Employees GROUP BY DepartmentID)

   ---------------------10------------------
    SELECT FirstName,LastName,Salary FROM Employees WHERE Salary >(SELECT MAX(Salary) FROM Employees GROUP BY DepartmentID)

	------------------------11---------------------
	 SELECT FirstName,LastName,Salary FROM Employees WHERE Salary>(SELECT MAX(Salary) FROM Employees WHERE JobId = 'SH_CLERK') ORDER BY Salary;

-------------------------------------12----------------------------------
 SELECT FirstName,LastName,Salary FROM Employees WHERE EmployeeID NOT IN(SELECT DISTINCT ManagerID FROM Employees)

 ------------------------------------------13-----------------------------------------
 SELECT EmployeeID,FirstName,LastName,(SELECT DepartmentName FROM Departments WHERE DepartmentID = Employees.DepartmentID) AS DEPAETMENT FROM EMPLOYEES
------------ 14------------------

 SELECT FirstName,LastName,Salary FROM Employees e WHERE Salary >(SELECT AVG(Salary) FROM Employees ee WHERE ee.DepartmentID = e.DepartmentID)

 ---------------------------------------15------------------------------------
 SELECT * FROM(SELECT ROW_NUMBER() OVER (ORDER BY EMPLOYEEID) AS RANK,*FROM Employees)AS X WHERE X.RANK %2=0
 ---------------------------------------16-----------------------------------

 SELECT DISTINCT TOP 1 SALARY FROM Employees WHERE Salary NOT IN
 (SELECT DISTINCT TOP 4 SALARY FROM EMPLOYEES ORDER BY SALARY DESC) ORDER BY SALARY DESC

-----------------------------------------17----------------------------------------
SELECT DISTINCT TOP 1 SALARY FROM Employees WHERE SALARY NOT IN
(SELECT	DISTINCT TOP 3 SALARY FROM	EMPLOYEES ORDER BY Salary) ORDER BY Salary

---------------------------------------18-----------------------------------------------
SELECT TOP 10 * FROM (SELECT ROW_NUMBER() OVER(ORDER BY EMPLOYEEID) AS RANKS, *FROM Employees)AS X ORDER BY	RANKS DESC

----------------------------------------19---------------------------------------------
SELECT d.DepartmentID,d.DepartmentName FROM Departments d WHERE DepartmentID NOT IN(SELECT DISTINCT DepartmentID FROM Employees)

-----------------------------------------20--------------------------------------------
SELECT DISTINCT TOP 3 SALARY FROM Employees ORDER BY SALARY DESC

-------------------------------------------21----------------------------------------------
SELECT DISTINCT TOP 3 SALARY FROM Employees ORDER BY SALARY

---------------------------------------------22----------------------------------------------

DECLARE @n INT;
SET @n = 4;
SELECT DISTINCT TOP 1 SALARY FROM Employees WHERE SALARY NOT IN
(SELECT DISTINCT  TOP (@n) Salary FROM Employees ORDER BY SALARY DESC)ORDER BY SALARY DESC
