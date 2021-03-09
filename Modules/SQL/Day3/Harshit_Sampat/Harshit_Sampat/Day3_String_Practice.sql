--String Functions
--1
--Select ASCII('7')
Select ASCII('7')

--2
--Select Char('255')
Select Char('255')

--3
--Select CHARINDEX('a','Harshit',0)
Select CHARINDEX('a','Harshit',0)

--4
--Select Char('255')
Select CHARINDEX('a','Harshit',0)

--5
--select CONCAT('Hharshit','Sampat') As Employee 
select CONCAT('Hharshit','Sampat') As Employee 

--6
--select CONCAT('Hharshit','Sampat') As Employee 
select CONCAT('Harshit','Sampat') As Employee 

--7
--select CONCAT('Hharshit','Sampat') As Employee 
select CONCAT('Harshit','Sampat') As Employee 

--8
--declare @d DateTime ='01/01/2020'
--select format(@d,'d','en-us') As Date 
declare @d DateTime ='01/01/2020'
select format(@d,'d','en-us') As Date

--9
--select CONCAT('Hharshit','Sampat') As Employee 
select CONCAT('Harshit','Sampat') As Employee 

--10
--select left() ('Harshit Sampat', 7)as employee
select left( 'Harshit Sampat', 3)as employee

--11
--select left() ('Harshit Sampat', 7)as employee
select left( 'Harshit Sampat', 3)as employee


--12
--select len() ('Harshit Sampat', 7)as employee
select len( 'HarshitSampat')as employee

--13
--select Lower( 'HARSHITSAMPAT')as Employee
select Lower( 'HARSHITSAMPAT')as Employee

--14
--select Ltrim( 'HARSHITSAMPAT')as Employee
select Ltrim( 'HARSHITSAMPAT')as Employee

--15
--SELECT position = PATINDEX('%ter%', 'interesting data');
SELECT position = PATINDEX('%ter%', 'interesting data');


--16
--SELECT replace('Dont respect Girls', 'Dont','Always') as Quote
SELECT replace('Dont respect Girls', 'Dont','Always') as Quote


--17
--Select RTRIM('Harshhit Sampat      ')
Select RTRIM('Harshhit Sampat      ')

--18
Select SOUNDEX('Harshit'),SOUNDEX('Sampat')

--19
--select ('Harshit') +space(1)+ ('Sampat')
select ('Harshit') +space(1)+ ('Sampat')

--20	
--select str(25.00,4)
select str(25.7888,4)

--21
--select stuff ('Harshit Sampat' , 4, 5, 'Add this New')
select stuff('Harshit Sampat' , 4, 8, ' Add this New ')

--22
--Select Substring('Harshit Sampat',5,7)
Select Substring('Harshit Sampat',5,15)

--23
--Select Unicode('harshit Sampat')
Select Unicode('harshit Sampat') As Employee

--24
--Select Replicate('harshit',3)
Select Replicate('harshit',3)


--25
--Select Reverse('Harshit Sampat')
Select Reverse('Harshit Sampat') as 'Reverse String'

--26
--Select RIGHT('Harshit Sampat',5)
Select RIGHT('Harshit Sampat',5)

--27
SELECT Name =Title +' '+left(FIRSTNAME,1)+'.'+LastName	
from Person.Person