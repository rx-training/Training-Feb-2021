USE SQLDay2

/* 1. query that displays the FirstName and the 
length of the FirstName for all employees whose 
name starts with the letters ‘A’, ‘J’ or ‘M’. 
Give each column an appropriate label. 
Sort the results by the employees’ FirstName*/

SELECT FirstName,
		LEN(FirstName) AS 'NameLength'
FROM Employees
WHERE FirstName LIKE ('A%') 
	OR FirstName LIKE ('J%')
	OR FirstName LIKE ('M%');

/* 2. query to display the FirstName and 
Salary for all employees.Format the salary to 
be 10 characters long,left-padded with the $ 
symbol. Label the column SALARY.*/

SELECT FirstName,
	Salary
FROM Employees;
SELECT FirstName,
	   FORMAT(Salary,'####.####$') AS Salary
FROM Employees;

-- OR

SELECT FirstName,
	LEFT( RIGHT(Salary,10) + REPLICATE('$',10),10)
	FROM Employees;

		-- SELECT LastName, LPAD(Salary,15,'$') Salary
		-- from employees;

/* 3. query to display the employees with their code, first name,
last name and hire date who hired either on seventh day of 
any month or seventh month in any year.*/
USE SQLDay2;

SELECT EmployeeID,FirstName,LastName,HireDate
FROM Employees
WHERE DATEPART(DAY,HireDate)=7 OR DATEPART(MONTH,HireDate)=7;

/* 4. query to display the length of first name
for employees where last name contains character
‘c’ after 2nd position.*/

SELECT LastName,
	DATALENGTH(FirstName) As 'Length'
	FROM Employees
	WHERE CHARINDEX('c',LastName)>2;

/* 5. Write a query to extract 
the last 4 character of PhoneNumber.*/
SELECT SUBSTRING(PhoneNumber,LEN(PhoneNumber)-3,4)
FROM Employees;

SELECT FirstName,
	PhoneNumber,
	SUBSTRING(PhoneNumber,LEN(PhoneNumber)-3,4) AS 'Last4Digits'
	FROM Employees;
/* 6. query to update the portion of the 
PhoneNumber in the employees table, within the 
phone number the substring ‘124’ will be replaced by ‘999’.*/

UPDATE Employees
SET PhoneNumber = REPLACE(PhoneNumber,'123','999');

SELECT PhoneNumber
FROM Employees;
/* 7. query to calculate the age in year.*/

--- HERE Birthdate Column  is not all Alocate to Table
USE SQLDay2;
SELECT FirstName,
	(DATEPART(YEAR,GETDATE()) -DATEPART(YEAR,'09-04-1998')) AS Age
FROM Employees;

--example
SELECT 'Jay',
	(DATEPART(YEAR,GETDATE()) -DATEPART(YEAR,'09-04-1998')) AS Age;


/* 8. query to get the distinct Mondays from HireDate 
in employees tables.*/

SELECT DISTINCT HireDate,DATEPART(WEEKDAY,HireDate)
FROM Employees
WHERE DATEPART(WEEKDAY,HireDate) = 2;


/* 9. query to get the FirstName and HireDate from 
Employees table where HireDate between ‘1987-06-01’
and ‘1987-07-30’*/

SELECT FirstName,
	HireDate
FROM Employees
WHERE HireDate BETWEEN '1987-06-01' AND '1987-07-30';

/* 10. query to display the current date in the following format.
Sample output : 12:00 AM Sep 5, 2014*/

SELECT CAST(GETDATE() AS NVARCHAR(30)) AS 'DateTime';

/*query to get the FirstName, LastName who joined in the month of June.*/

SELECT FirstName,
	LastName,
	HireDate
FROM Employees
WHERE DATEPART(MONTH,HireDate)=6;

/*query to get first name, hire date and experience of the employees.*/

SELECT (FirstName+' '+LastName) AS 'Name',
	HireDate,
	(DATEPART(YEAR,GETDATE()) -DATEPART(YEAR,HireDate)) AS Experience
FROM Employees;


/*query to get first name of employees who joined in 1987.*/

SELECT FirstName,
	HireDate
FROM Employees
WHERE DATEPART(YEAR,HireDate) = 1987;


