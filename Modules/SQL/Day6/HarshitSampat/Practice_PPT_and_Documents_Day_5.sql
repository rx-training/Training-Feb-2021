SELECT FIRST_NAME FROM Employees
where SALARY>(SELECT SALARY FROM Employees WHERE FIRST_NAME='ROY')
	
--------------------IN-----------------------------
USE AdventureWorks2012
SELECT BusinessEntityID,
FROM HumanResources.Employee
WHERE BusinessEntityID IN(SELECT ADDRESSID FROM PERSON.Address WHERE City='BOTHHELL')

--------EXIST----------
SELECT BusinessEntityID,JobTitle
FROM HumanResources.Employee
WHERE EXISTS
(SELECT* FROM HumanResources.EmployeeDepartmentHistory WHERE BusinessEntityID = HumanResources.Employee.BusinessEntityID AND DepartmentID =4)

----NESTEED SUBQUERY-------
SELECT DepartmentID 
FROM HumanResources.EmployeeDepartmentHistory
WHERE BusinessEntityID = (SELECT BusinessEntityID FROM HumanResources.Employee) 
WHERE CONTACTID=(SELECT CONTACTID FROM PERSON.ContactType)

---------------------EXTRA-----------------------
SELECT * FROM Employee
SELECT * FROM Person.BusinessEntityContact


--------------------CORRELATED QUERIES---------------------------
SELECT * FROM HumanResources.Employee AS e
WHERE Salary = (SELECT MAX(Salary))FROM EMPLOYEEDETAILS WHERE DEPTNO =e.DEPTNO


--------------------------VIEW-------------
CREATE VIEW HumanResources.EmployeeHireDate
AS 
SELECT p.FIRSTNAME, p.LastNAME, e.HireDate
FROM HumanResources.Employee AS e JOIN Person.Person AS P
 ON e.BusinessEntityID =p.BusinessEntityID;
------------------ QUERY THE VIEW----------------

	SELECT FirstName,LASTName,HireDate
	FROM HumanResources.EMPLOYEEHIREDATE
---------------------------DOCS QUERIES--------------
