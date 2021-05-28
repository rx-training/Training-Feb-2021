---------------- Date Funcation ------------
SELECT EmployeeID, datename(mm, hiredate)+ ',' +convert(varchar, datepart(yyyy,hiredate)) as 'Joining' FROM HumanResources.Employee
  
SELECT * FROM HumanResources.Employee

------ Sample Date : 2014-09-04 -----------
--------- Output :September 4, 2014 -------------

SELECT DATENAME(mm, GETDATE()) + SPACE(1) + CAST( DATEPART(dd, GETDATE()) AS
varchar) + ',' + CAST(DATEPART(yyyy, GETDATE()) AS VARCHAR)

-------- Math Function ----------- 

SELECT EmployeeID ,'Hourly Pay Rate' = round(Rate,2) FROM HumanResources.EmployeePayHistory

SELECT * FROM HumanResources.EmployeePayHistory

-------- System Function -----------

------------ Display the host_id of the terminal on which you are logged onto --------------------

SELECT HOST_ID() AS 'HostID'
