Select * from Employees

--------------

Select FirstName,lastName from Employees 

-------------

Select FirstName as "Employee Name" from Employees

------------

select * from Employees where FirstName = 'Steven'

-------------

Select * from Employees where FirstName='Lex' or FirstName='Neena';	

-------------

Select * from Employees where  Not FirstName='Lex' or FirstName='Neena';	

----------------

Select * from Employees where Salary>5000 And Salary<8000 

---------------

Select FirstName,LastName ,Salary ,PF=Salary*0.12 from Employees

-------------

Select FirstName from Employees where FirstName like 'N%'

--------------

Select Distinct(DepartmentID) from Employees

---------------

Select * from Employees Order By FirstName desc;


Select FirstName,LastName,Salary from Employees Order By Salary ;

Select TOP 2 Salary from Employees

SELECT  * from String_Split('Lorem ipsum dolor sit amet.', ' ');