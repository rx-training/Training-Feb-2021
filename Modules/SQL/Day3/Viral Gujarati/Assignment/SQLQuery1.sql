USE AdventureWorks2012

/*Write a query that displays the FirstName and the length of the FirstName for all employees whose name starts with the letters �A�, �J� or �M�. Give each column an appropriate label. Sort the results by the employees� FirstName   */

SELECT FirstName,
LEN(FirstName) AS 'NameLength'
FROM Employees
WHERE FirstName LIKE ('A%') 
	OR FirstName LIKE ('J%')
	OR FirstName LIKE ('M%');



/* Write a query to display the FirstName and Salary for all employees. Format the salary to be 10 characters long, left-padded with the $ symbol. Label the column SALARY.  */

SELECT FirstName,
RIGHT(REPLICATE('$', 10) + LEFT(Salary, 10), 10) 
FROM employees;

/* Write a query to display the employees with their code, first name, last name and hire date who hired either on seventh day of any month or seventh month in any year.  */

SELECT EmployeeID,FirstName,LastName,HireDate
FROM Employees
WHERE DATEPART(DAY,HireDate)=7 OR DATEPART(MONTH,HireDate)=7;

/* Write a query to display the length of first name for employees where last name contains character ‘c’ after 2nd position.  */

SELECT LastName,
DATALENGTH(FirstName) As 'Length'
FROM Employees
WHERE CHARINDEX('c',LastName)>2;

/*Write a query to extract the last 4 character of PhoneNumber.*/

SELECT SUBSTRING(PhoneNumber,LEN(PhoneNumber)-3,4)
FROM Employees;


/* Write a query to update the portion of the PhoneNumber in the employees table, within the phone number the substring ‘124’ will be replaced by ‘999’.  */

SELECT FirstName,PhoneNumber,SUBSTRING(PhoneNumber,LEN(PhoneNumber)-3,4) AS 'Last4Digits'
FROM Employees;

UPDATE Employees
SET PhoneNumber = REPLACE(PhoneNumber,'123','999');


/*  Write a query to calculate the age in year. */



/*  Write a query to get the distinct Mondays from HireDate in employees tables. */

SELECT DISTINCT HireDate,DATEPART(WEEKDAY,HireDate)
FROM Employees
WHERE DATEPART(WEEKDAY,HireDate) = 2;

/* Write a query to get the FirstName and HireDate from Employees table where HireDate between ‘1987-06-01’ and ‘1987-07-30’  */

SELECT FirstName,HireDate
FROM Employees
WHERE HireDate BETWEEN '1987-06-01' AND '1987-07-30';

/*  Write a query to display the current date in the following format. */

SELECT CONCAT_WS(' ',RIGHT(CONVERT(varchar, GETDATE()), 7), CONVERT(varchar, GETDATE(),107));
 
/*Write a query to get the FirstName, LastName who joined in the month of June.   */

SELECT FirstName,LastName,HireDate FROM Employees
WHERE DATEPART(MONTH,HireDate)=6;

/*  Write a query to get first name, hire date and experience of the employees. */

SELECT (FirstName) AS 'Name', HireDate,
(DATEPART(YEAR,GETDATE()) -DATEPART(YEAR,HireDate)) AS Experience
FROM Employees;

/* Write a query to get first name of employees who joined in 1987.  */

SELECT FirstName,HireDate FROM Employees
WHERE DATEPART(YEAR,HireDate) = 1987;