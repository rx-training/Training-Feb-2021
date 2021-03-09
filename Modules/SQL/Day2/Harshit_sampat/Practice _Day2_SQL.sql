--Practice1
Select * from Employees

--Practice2
Select FirstName,lastName from Employees 

--Practice3
Select FirstName as "Employee Name" from Employees

--Practice4
select * from Employees where FirstName = 'Steven'

--Practice5	
Select * from Employees where FirstName='Lex' or FirstName='Neena';	

--Practice 6
Select * from Employees where  Not FirstName='Lex' or FirstName='Neena';	

--Practice 7
Select * from Employees where Salary>5000 And Salary<8000 

--Practice 8
Select FirstName,LastName ,Salary ,PF=Salary*0.12 from Employees

--Practice 9
Select FirstName from Employees where FirstName like 'N%'

--Practice 10
Select Distinct(DepartmentID) from Employees

--Practice 11
Select * from Employees Order By FirstName desc;


Select FirstName,LastName,Salary from Employees Order By Salary ;

Select TOP 2 Salary from Employees

SELECT  * from String_Split('Lorem ipsum dolor sit amet.', ' ');