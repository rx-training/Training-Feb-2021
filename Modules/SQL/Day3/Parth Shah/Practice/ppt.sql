SELECT * FROM HumanResources.Employee
---Practice Exercise Day 3 
--Date Example

SELECT BusinessEntityID, DATENAME(mm, HireDate)+ ',' +CONVERT(varchar, datepart(yyyy,HireDate))as 'Joining'
FROM HumanResources.Employee;


--Sample Date : 2014-09-04
--Output :September 4, 2014

SELECT DATENAME(mm, GETDATE()) + SPACE(1) + CAST( DATEPART(dd, GETDATE()) AS
varchar) + ',' + CAST(DATEPART(yyyy, GETDATE()) AS VARCHAR)


---QUERY TO GET FIRSTNAME , HIREDATE AND EXPERIENCE OF THE EMPLOYEES .

SELECT BusinessEntityID, HireDate , DATEDIFF(YEAR, HireDate, GETDATE()) [Experience]
FROM HumanResources.Employee

--math function 

SELECT BusinessEntityID ,'Hourly Pay Rate' = round(Rate,2) FROM HumanResources.EmployeePayHistory;

SELECT * FROM HumanResources.EmployeePayHistory;

---System Function
--display the host_id of the terminal on which you are logged onto

SELECT HOST_ID() AS 'HostID';
