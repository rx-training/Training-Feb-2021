SELECT * FROM Employees
GO

SELECT FirstName,LEN(FirstName) AS 'FirstNameLength' FROM Employees WHERE FirstName LIKE '[AJM]%' ORDER BY FirstName
GO

SELECT FirstName, LEFT('$'+CONVERT(VARCHAR,Salary)+'0000',10) AS 'SALARY' FROM Employees
GO

SELECT EmployeeID,FirstName,LastName,HireDate FROM Employees WHERE DATEPART(MM,HireDate)=7 OR DATEPART(DD,HireDate)=7
GO

SELECT FirstName,LastName,LEN(FirstName) AS 'FirstNameLength' FROM Employees WHERE CHARINDEX('c',LastName,3)!=0
GO

SELECT RIGHT(PhoneNumber,4) AS 'Last4DigitPhoneNo' FROM Employees
GO

UPDATE Employees SET PhoneNumber=REPLACE(PhoneNumber,'124','999')
GO

SELECT DATEDIFF(YY,HireDate,GETDATE()) AS 'YearsOfWorking' FROM Employees
GO

SELECT DISTINCT HireDate FROM Employees WHERE Datepart(dw,HireDate)=2 
GO	

SELECT FirstName,HireDate FROM Employees WHERE HireDate>='1987-06-01' AND HireDate<='1987-07-30'
GO

SELECT FORMAT(GETDATE(),'hh:mm tt MMMM d,yyyy') AS 'CurrentDate'
GO

SELECT FirstName,LastName FROM Employees WHERE DATEPART(MM,HireDate)=6
GO

SELECT FirstName,HireDate,DATEDIFF(YY,HireDate,GETDATE()) AS 'Experience' FROM Employees
GO

SELECT FirstName FROM Employees WHERE DATENAME(YYYY,HireDate)='1987'
GO

SELECT FirstName,DENSE_RANK() OVER (ORDER BY Salary DESC) AS 'Rank' FROM Employees
GO

SELECT * FROM (SELECT FirstName,DENSE_RANK() OVER (ORDER BY Salary DESC) AS 'Rank1' FROM Employees) AS subtable WHERE Rank1=4
GO