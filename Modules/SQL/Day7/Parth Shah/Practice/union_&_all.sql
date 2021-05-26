-----UNIOUN ,EXCEPT , INTERSECT ,BETWEEN


USE AssignmentsDay6

SELECT * FROM Employees;
SELECT * FROM Departments;
--unioun 
SELECT FirstName ,LastName, DepartmentID,ManagerID FROM Employees WHERE DepartmentID = 90
UNION
SELECT FirstName ,LastName,DepartmentID,ManagerID FROM Employees WHERE ManagerID = 100;


SELECT FirstName ,LastName, DepartmentID,ManagerID FROM Employees WHERE DepartmentID BETWEEN 90 AND 100
UNION
SELECT FirstName ,LastName,DepartmentID,ManagerID FROM Employees WHERE ManagerID = 100;

--unioun all

SELECT FirstName ,LastName, DepartmentID,ManagerID FROM Employees WHERE DepartmentID = 90
UNION ALL
SELECT FirstName ,LastName,DepartmentID,ManagerID FROM Employees WHERE ManagerID = 100;


--INTERSECT
SELECT FirstName ,LastName, DepartmentID,ManagerID FROM Employees WHERE DepartmentID = 90
INTERSECT
SELECT FirstName ,LastName,DepartmentID,ManagerID FROM Employees WHERE ManagerID = 100;


--EXCEPT
SELECT FirstName ,LastName, DepartmentID,ManagerID FROM Employees WHERE DepartmentID = 90
EXCEPT
SELECT FirstName ,LastName,DepartmentID,ManagerID FROM Employees WHERE ManagerID = 100;

--BETWEEN 
SELECT EmployeeID,FirstName, LastName,Email,HireDate FROM Employees WHERE EmployeeID BETWEEN 100  AND 200;