
		 -------------sqldb2----------------


/* Write a query that displays the FirstName and the length of the FirstName for all employees whose name starts with the 
letters �A�, �J� or �M�. Give each column an appropriate label. Sort the results by the employees� FirstName */

	SELECT FirstName "Name",
	LEN(FirstName) "Length" FROM Employees WHERE FirstName LIKE 'J%' OR FirstName LIKE 'M%'
	OR FirstName LIKE 'A%' ORDER BY FirstName ;

/* Write a query to display the FirstName and Salary for all employees. Format the salary to be 10 characters long, 
left-padded with the $ symbol. Label the column SALARY. */
	
	Select Salary FROM Employees;
	SELECT FirstName, Left(Salary, 10) SALARY FROM Employees;

	select right('000000'+convert(varchar(7),1234),7)
	select FirstName, right('0000000000'+convert(varchar(10),Salary),10) SALARY FROM Employees;

/* Write a query to display the employees with their code, first name, last name and hire date who hired either on 
seventh day of any month or seventh month in any year. */

	SELECT EmployeeID, FirstName, LastName, HireDate FROM Employees WHERE 
	CHARINDEX("07" IN FORMAT(HireDate, 'dd-MM-yy'))

/* Write a query to display the length of first name for employees where last name contains character �c� 
after 2nd position. */

	SELECT FirstName, LastName FROM Employees WHERE LastName LIKE '__c%' or LastName LIKE '__C%' 

/* Write a query to extract the last 4 character of PhoneNumber. */
	
	SELECT RIGHT(PhoneNumber, 4) as 'Ph.No.' FROM Employees;

	Select * FROM Employees;

/* Write a query to update the portion of the PhoneNumber in the employees table, within the phone number 
the substring �124� will be replaced by �999�. */

	UPDATE Employees SET PhoneNumber = REPLACE(PhoneNumber, '124', '999') WHERE PhoneNumber LIKE '%124%';

	Select PhoneNumber FROM Employees WHERE PhoneNumber LIKE '%999%';

/* Write a query to calculate the age in year. */

	SELECT DATEDIFF(YY,'1999-05-07',GETDATE()) AS age;

	Select FirstName,  datediff( YY, HireDate, getdate()) as age from Employees;

/* Write a query to get the distinct Mondays from HireDate in employees tables. */

	SELECT distinct HireDate from Employees WHERE DATENAME(WEEKDAY, HireDate) = 'monday';

/* Write a query to get the FirstName and HireDate from Employees table where HireDate between �1987-06-01� and �1987-07-30� */
	
	SELECT FirstName, HireDate FROM Employees WHERE HireDate BETWEEN '1987-06-01' AND '1987-07-30';

/* Write a query to display the current date in the following format.
	Sample output : 12:00 AM Sep 5, 2014 */

	SELECT CONCAT_WS(' ',RIGHT(convert(varchar,getdate()),7),convert(varchar,getdate(),107));

/* Write a query to get the FirstName, LastName who joined in the month of June. */

	SELECT FirstName, LastName FROM Employees WHERE MONTH(HireDate) =  6;

/* Write a query to get first name, hire date and experience of the employees. */

	SELECT FirstName, GETDATE(),HireDate, DATEDIFF(year, HireDate, GETDATE()) FROM Employees;

/* Write a query to get first name of employees who joined in 1987. */

	SELECT FirstName, HireDate FROM Employees WHERE YEAR(HireDate)=1987;
 

	

	