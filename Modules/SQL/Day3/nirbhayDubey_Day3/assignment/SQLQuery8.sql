USE AssignmentDay27;
GO

SELECT * FROM Employees
GO

--Write a query that displays the FirstName and the length of the FirstName for all employees whose name starts with the letters ‘A’, ‘J’ or ‘M’. 
--Give each column an appropriate label. Sort the results by the employees’ FirstName
SELECT FirstName,LEN(FirstName) AS 'FirstNameLength' FROM Employees WHERE FirstName LIKE '[AJM]%' ORDER BY FirstName
GO

--Write a query to display the FirstName and Salary for all employees. Format the salary to be 10 characters long, left-padded with the $ symbol. Label the column SALARY.
SELECT FirstName, LEFT('$'+CONVERT(VARCHAR,Salary)+'0000',10) AS 'SALARY' FROM Employees
GO

--Write a query to display the employees with their code, first name, last name and hire date who hired either on seventh day of any month or seventh month in any year.
SELECT EmployeeID,FirstName,LastName,HireDate FROM Employees WHERE DATEPART(MM,HireDate)=7 OR DATEPART(DD,HireDate)=7
GO

--Write a query to display the length of first name for employees where last name contains character ‘c’ after 2nd position.
SELECT FirstName,LastName,LEN(FirstName) AS 'FirstNameLength' FROM Employees WHERE CHARINDEX('c',LastName,3)!=0
GO

--Write a query to extract the last 4 character of PhoneNumber.
SELECT RIGHT(PhoneNumber,4) AS 'Last4DigitPhoneNo' FROM Employees
GO

--Write a query to update the portion of the PhoneNumber in the employees table, within the phone number the substring ‘124’ will be replaced by ‘999’.
UPDATE Employees SET PhoneNumber=REPLACE(PhoneNumber,'124','999')
GO

--Write a query to calculate the YearsOfWorking in year.
SELECT DATEDIFF(YY,HireDate,GETDATE()) AS 'YearsOfWorking' FROM Employees
GO

--Write a query to get the distinct Mondays from HireDate in employees tables.
SELECT DISTINCT HireDate FROM Employees WHERE Datepart(dw,HireDate)=2 
GO	

--Write a query to get the FirstName and HireDate from Employees table where HireDate between ‘1987-06-01’ and ‘1987-07-30’
SELECT FirstName,HireDate FROM Employees WHERE HireDate>='1987-06-01' AND HireDate<='1987-07-30'
GO

--Write a query to display the current date in the following format.
--Sample output : 12:00 AM Sep 5, 2014
SELECT FORMAT(GETDATE(),'hh:mm tt MMMM d,yyyy') AS 'CurrentDate'
GO

--Write a query to get the FirstName, LastName who joined in the month of June.
SELECT FirstName,LastName FROM Employees WHERE DATEPART(MM,HireDate)=6
GO

--Write a query to get first name, hire date and experience of the employees.
SELECT FirstName,HireDate,DATEDIFF(YY,HireDate,GETDATE()) AS 'Experience' FROM Employees
GO

--Write a query to get first name of employees who joined in 1987.
SELECT FirstName FROM Employees WHERE DATENAME(YYYY,HireDate)='1987'
GO

SELECT FirstName,DENSE_RANK() OVER (ORDER BY Salary DESC) AS 'Rank' FROM Employees
GO

SELECT * FROM (SELECT FirstName,DENSE_RANK() OVER (ORDER BY Salary DESC) AS 'Rank1' FROM Employees) AS subtable WHERE Rank1=4
GO