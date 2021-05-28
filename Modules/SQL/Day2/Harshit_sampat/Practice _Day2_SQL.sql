--Practice1
Select * FROM Employees

--Practice2
SELECT FirstName,lastName FROM Employees 

--Practice3
 SELECT FirstName AS "Employee Name" FROM Employees

--Practice4
 SELECT * FROM Employees WHERE FirstName = 'Steven'

--Practice5	
 SELECT * FROM Employees WHERE FirstName='Lex' OR FirstName='Neena';	

--Practice 6
SELECT  * FROM Employees WHERE  NOT FirstName='Lex' OR FirstName='Neena';	

--Practice 7
SELECT  * FROM Employees WHERE Salary>5000 AND Salary<8000 

--Practice 8
SELECT  FirstName,LastName ,Salary ,PF=Salary*0.12 FROM Employees

--Practice 9
SELECT  FirstName FROM Employees WHERE FirstName lIKE 'N%'

--Practice 10
 SELECT Distinct(DepartmentID) FROM Employees

--Practice 11
 SELECT * FROM Employees ORDER BY FirstName desc;


SELECT  FirstName,LastName,Salary FROM Employees ORDER BY Salary ;

SELECT  TOP 2 Salary FROM Employees

SELECT  * FROM String_Split('Lorem ipsum dolor sit amet.', ' ');