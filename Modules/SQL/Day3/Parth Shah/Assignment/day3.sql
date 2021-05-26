select * from employees

--Write a query that displays the FirstName and the length of the FirstName for all employees whose name starts with the letters ‘A’, ‘J’ or ‘M’. Give each column an appropriate label. Sort the results by the employees’ FirstName
SELECT FirstName "Name", LEN(FirstName) "Length" FROM Employees WHERE FirstName LIKE 'J%' OR FirstName LIKE 'M%' OR FirstName LIKE 'A%' ORDER BY FirstName; 


--Write a query to display the FirstName and Salary for all employees. Format the salary to be 10 characters long, left-padded with the $ symbol. Label the column SALARY.

SELECT FirstName, REPLACE(STR(Salary, 10),' ','$')Salary from Employees;

--Write a query to display the employees with their code, first name, last name and hire date who hired either on seventh day of any month or seventh month in any year.

SELECT * FROM Employees;

SELECT EmployeeID,FirstName,LastName,HireDate From Employees WHERE DATEPART(DD,HireDate) = 7 OR DATEPART(MM,HireDate)=7; 


--4.Write a query to display the length of first name for employees where last name contains character ‘c’ after 2nd position.
SELECT FirstName, LEN(FirstName) AS 'Name Length' , LastName FROM Employees WHERE CHARINDEX('c',LastName,3) <> 0;


SELECT * FROM Employees;

--5. Write a query to extract the last 4 character of PhoneNumber.

SELECT RIGHT(PhoneNumber,4) as 'PhoneNo' FROM Employees;

--6.Write a query to update the portion of the PhoneNumber in the employees table, within the phone number the substring ‘124’ will be replaced by ‘999’.

UPDATE Employees SET PhoneNumber = REPLACE(PhoneNumber,'124','999')
WHERE PhoneNumber LIKE '%124%';

--7. Write a query to calculate the age in year.
SELECT
GETDATE() AS [TODAY]
, DATEDIFF(DD,'1999-09-11',GETDATE()) AS [AgeInDays]
, DATEDIFF(DD,'1999-09-11',GETDATE()) /365.25 AS [AgeInYears]
, CAST(DATEDIFF(DD,'1999-11-09',GETDATE()) /365.25 AS INT) AS[Age]

--8.Write a query to get the distinct Mondays from HireDate in employees tables.

SELECT DISTINCT HireDate FROM Employees WHERE DATENAME(weekday, HireDate) = 'Monday';

--9.Write a query to get the FirstName and HireDate from Employees table where HireDate between ‘1987-06-01’ and ‘1987-07-30’.

SELECT FirstName, HireDate FROM EMPLOYEES WHERE HireDate BETWEEN '1987-06-01' AND '1987-07-30';

--10.Write a query to display the current date in the following format.

SELECT CONCAT_WS('  ',RIGHT(CONVERT(varchar, GETDATE()), 7 ),CONVERT(varchar, GETDATE(),107)) AS 'todays date and time';

--11.Write a query to get the FirstName, LastName who joined in the month of June.
SELECT FirstName, LastName FROM Employees WHERE DATENAME(MONTH, HireDate) = 'June';

--12. Write a query to get first name, hire date and experience of the employees.
SELECT FirstName, HireDate , DATEDIFF(YYYY,HireDate,GETDATE()) AS 'Experience ' FROM Employees; 

SELECT * FROM Employees;


--13.Write a query to get first name of employees who joined in 1987.
SELECT FirstName FROM Employees WHERE DATEPART(YYYY, HireDate) = '1987';