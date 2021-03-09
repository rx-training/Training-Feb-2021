                                                                 /********** Assignment **********/
SELECT * FROM Employees

/***** 1. Write a query that displays the FirstName and the length of the FirstName for all employees whose name starts with the letters �A�, �J� or �M�.
          Give each column an appropriate label. Sort the results by the employees� FirstName. *****/

SELECT FirstName, LEN(FirstName) AS 'FirstName Length' FROM Employees WHERE FirstName LIKE '[A,J,M]%' ORDER BY FirstName;

/***** 2. Write a query to display the FirstName and Salary for all employees. Format the salary to be 10 characters long, left-padded with the $ symbol.
          Label the column SALARY.*****/

SELECT FirstName,LastName, LEFT(CONCAT('$',Salary),10) AS SALARY FROM Employees;

/***** 3. Write a query to display the employees with their code, first name, last name and hire date who hired either on seventh day of any month or seventh
          month in any year.*****/

SELECT  FirstName, LastName, HireDate FROM Employees WHERE DATEPART(DAY,HireDate) = 7 OR DATEPART(MONTH,HireDate) = 7 

/***** 4. Write a query to display the length of first name for employees where last name contains character �c� after 2nd position.*****/

SELECT FirstName, LEN(FirstName) AS 'FirstName Length', LastName FROM Employees WHERE LastName LIKE ('__c%')

/***** 5. Write a query to extract the last 4 character of PhoneNumber.*****/

SELECT PhoneNumber, RIGHT(PhoneNumber, 4) 'Last 4 PhoneNum Digit' FROM Employees;

/***** 6. Write a query to update the portion of the PhoneNumber in the employees table, within the phone number the substring �124� will
          be replaced by �999�.*****/

UPDATE Employees SET PhoneNumber = REPLACE(PhoneNumber, '124', '999');
SELECT EmployeeID, PhoneNumber AS PhoneNumUpdate FROM Employees;

/***** 7. Write a query to calculate the age in year. *****/

SELECT FirstName, DATEPART(YYYY,GETDATE()) - DATEPART(YYYY,HireDate) AS Age FROM Employees

/***** 8. Write a query to get the distinct Mondays from HireDate in employees tables.*****/

SELECT DISTINCT HireDate, DATENAME(Weekday,HireDate) AS 'Day Name' FROM Employees WHERE DATENAME(weekday, HireDate) = 'Monday';

/***** 9. Write a query to get the FirstName and HireDate from Employees table where HireDate between �1987-06-01� and �1987-07-30�. *****/

SELECT FirstName, HireDate FROM Employees WHERE HireDate BETWEEN '1987-06-01' AND '1987-07-30';

/***** 10.Write a query to display the current date in the following format. *****/

SELECT FORMAT(GETDATE(),'hh:mm tt MMMM dd, yyyy') AS 'Current Date';

/***** 11. Write a query to get the FirstName, LastName who joined in the month of June. *****/

SELECT FirstName, LastName,HireDate,DATENAME(MONTH,HireDate) AS 'Month Name' FROM Employees WHERE DATENAME(MONTH, HireDate) = 'June';
 
/***** 12 Write a query to get first name, hire date and experience of the employees. *****/

SELECT FirstName,HireDate, DATEDIFF(yyyy,HireDate,GETDATE()) AS 'Total Experiance' FROM Employees

/***** 13.Write a query to get first name of employees who joined in 1987.*****/

SELECT FirstName,HireDate FROM Employees WHERE DATEPART(YYYY, HireDate) = 1987;