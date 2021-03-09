--String Functions
--1
--Select ASCII('7')
SELECT ASCII('7')

--2
--Select Char('255')
SELECT Char('255')

--3
--Select CHARINDEX('a','Harshit',0)
SELECT CHARINDEX('a','Harshit',0)

--4
--Select Char('255')
SELECT CHARINDEX('a','Harshit',0)

--5
--select CONCAT('Hharshit','Sampat') As Employee 
SELECT CONCAT('Hharshit','Sampat') AS Employee 

--6
--select CONCAT('Hharshit','Sampat') As Employee 
SELECT CONCAT('Harshit','Sampat') AS Employee 

--7
--select CONCAT('Hharshit','Sampat') As Employee 
SELECT CONCAT('Harshit','Sampat') AS Employee 

--8
--declare @d DateTime ='01/01/2020'
--select format(@d,'d','en-us') As Date 
declare @d DateTime ='01/01/2020'
SELECT format(@d,'d','en-us') AS DATE

--9
--select CONCAT('Hharshit','Sampat') As Employee 
SELECT CONCAT('Harshit','Sampat') AS Employee 

--10
--select left() ('Harshit Sampat', 7)as employee
SELECT left( 'Harshit Sampat', 3)AS employee

--11
--select left() ('Harshit Sampat', 7)as employee
SELECT left( 'Harshit Sampat', 3)AS employee


--12
--select len() ('Harshit Sampat', 7)as employee
SELECT len( 'HarshitSampat')AS employee

--13
--select Lower( 'HARSHITSAMPAT')as Employee
SELECT Lower( 'HARSHITSAMPAT')AS Employee

--14
--select Ltrim( 'HARSHITSAMPAT')as Employee
SELECT Ltrim( 'HARSHITSAMPAT')AS Employee

--15
--SELECT position = PATINDEX('%ter%', 'interesting data');
SELECT position = PATINDEX('%ter%', 'interesting data');


--16
--SELECT replace('Dont respect Girls', 'Dont','Always') as Quote
SELECT replace('Dont respect Girls', 'Dont','Always') AS Quote


--17
--Select RTRIM('Harshhit Sampat      ')
SELECT RTRIM('Harshhit Sampat      ')

--18
SELECT SOUNDEX('Harshit'),SOUNDEX('Sampat')

--19
--select ('Harshit') +space(1)+ ('Sampat')
SELECT ('Harshit') +space(1)+ ('Sampat')

--20	
--select str(25.00,4)
SELECT str(25.7888,4)

--21
--select stuff ('Harshit Sampat' , 4, 5, 'Add this New')
SELECT stuff('Harshit Sampat' , 4, 8, ' Add this New ')

--22
--Select Substring('Harshit Sampat',5,7)
SELECT Substring('Harshit Sampat',5,15)

--23
--Select Unicode('harshit Sampat')
SELECT Unicode('harshit Sampat') AS Employee

--24
--Select Replicate('harshit',3)
SELECT Replicate('harshit',3)


--25
--Select Reverse('Harshit Sampat')
SELECT Reverse('Harshit Sampat') AS 'Reverse String'

--26
--Select RIGHT('Harshit Sampat',5)
SELECT RIGHT('Harshit Sampat',5)

--27
SELECT Name =Title +' '+left(FIRSTNAME,1)+'.'+LastName	
FROM Person.Person