USE AdventureWorks2012

SELECT *FROM HumanResources.Employee

SELECT JobTitle,SickLeaveHours,RANK() OVER (ORDER BY SickLeaveHours) as 'Rank',DENSE_RANK() OVER (ORDER BY SickLeaveHours) as 'Dense Rank'
,ROW_NUMBER() OVER (ORDER BY SickLeaveHours) as 'Row Rank',NTILE(10) OVER (ORDER BY SickLeaveHours) as 'Ntile Rank' FROM HumanResources.Employee 

SELECT JobTitle , SickLeaveHours,RANK() OVER (PARTITION BY JobTitle ORDER BY SickLeaveHours) as 'Partition'  FROM HumanResources.Employee

SELECT * FROM HumanResources.EmployeePayHistory

SELECT SUM(Rate) as 'Sum',AVG(Rate) as 'Avg',COUNT(Rate) as 'Count',MIN(Rate) as 'Min',MAX(Rate) as 'Max' FROM HumanResources.EmployeePayHistory

SELECT JobTitle,Gender,SUM(SickLeaveHours) as 'Sum',COUNT(SickLeaveHours) as 'Count' FROM HumanResources.Employee GROUP BY JobTitle,Gender

SELECT JobTitle,Gender,SUM(SickLeaveHours) as 'Sum',COUNT(SickLeaveHours) as 'Count' FROM HumanResources.Employee GROUP BY Gender,JobTitle

SELECT JobTitle,Gender,SUM(SickLeaveHours) as 'Sum',COUNT(SickLeaveHours) as 'Count' FROM HumanResources.Employee GROUP BY ROLLUP( Gender,JobTitle)

SELECT JobTitle,Gender,SUM(SickLeaveHours) as 'Sum',COUNT(SickLeaveHours) as 'Count' FROM HumanResources.Employee GROUP BY ROLLUP(JobTitle, Gender)

SELECT JobTitle,Gender,SUM(SickLeaveHours) as 'Sum',COUNT(SickLeaveHours) as 'Count' FROM HumanResources.Employee GROUP BY CUBE( Gender,JobTitle)

SELECT JobTitle,Gender,SUM(SickLeaveHours) as 'Sum',COUNT(SickLeaveHours) as 'Count' FROM HumanResources.Employee GROUP BY GROUPING SETS( ROLLUP( Gender,JobTitle),CUBE(Gender,JobTitle))

SELECT * FROM HumanResources.Employee

SELECT JobTitle,Gender,SUM(SickLeaveHours) as 'Sum',COUNT(SickLeaveHours) as 'Count' FROM HumanResources.Employee GROUP BY JobTitle,Gender HAVING SUM(SickLeaveHours) > 500

SELECT * INTO Employee2 From HumanResources.Employee

SELECT * FROM Employee2



