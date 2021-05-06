-- Retriving The whole table
  SELECT * FROM  Employees  
   
-- Retriving the first name and the last name from the table

SELECT FirstName, LastName FROM Employees

-- First name with the aliase
SELECT FirstName AS Employee_Name FROM Employees 

-- Finding employee details of the steven

SELECT * FROM Employees WHERE FirstName = 'steven'

-- Finding employee details whose name is neena and lex

SELECT * FROM Employees WHERE FirstName = 'Neena' AND FirstName = 'Lex'

-- Finding employee details whose name are not neena and lex

SELECT * FROM Employees WHERE FirstName <> 'Neena' AND FirstName <> 'Lex'

-- Finding employeee whose salary between 5000 and 8000

SELECT * FROM Employees WHERE Salary BETWEEN 5000 AND 8000

-- Finding employeee names (FirstName, LastName), Salary, PF of all the Employees (PF is calculated as 12% of salary).

SELECT FirstName,LastName,Salary,Salary*0.12 AS PF FROM Employees 

--Get employee details from Employees table whose FirstName starts with ‘N’

SELECT *  FROM Employees WHERE FirstName LIKE 'N%'

--Write a query to get unique department ID from Employees table

SELECT DISTINCT(DepartmentID) FROM Employees 

--Write a query to get all employee details from the employee table order by FirstName, descending.

SELECT * FROM Employees
ORDER BY FirstName DESC;

--Write a query to get the EmployeeID, names (FirstName, LastName), salary in ascending order of salary.

SELECT * FROM Employees
ORDER BY FirstName ,LastName DESC;

--Select TOP 2 salary from employee table

SELECT TOP 2  Salary FROM Employees;





