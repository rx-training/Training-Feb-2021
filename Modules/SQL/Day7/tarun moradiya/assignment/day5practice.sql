--INNER JOIN / JOIN

WITH EmpIncentives (firstName, lastName, incentiveAmount, incentiveDate)
AS
(
SELECT E.firstName, lastName, incentiveAmount, Incentives.incentiveDate
FROM Employees E INNER JOIN Incentives 
ON E.employeeId = Incentives.employeeRefId
)
SELECT * FROM EmpIncentives
GO



WITH EmpIncentives (firstName, lastName, incentiveAmount, incentiveDate)
AS
(
SELECT E.firstName, lastName, incentiveAmount, I.incentiveDate
FROM Employees E JOIN Incentives I 
ON E.employeeId = I.employeeRefId
)
SELECT * FROM EmpIncentives
GO

--LEFT OUTER JOIN / LEFT JOIN



WITH EmpIncentives (firstName, lastName, incentiveAmount, incentiveDate)
AS
(
SELECT firstName, lastName, incentiveAmount, incentiveDate
FROM Employees E LEFT OUTER JOIN Incentives I
ON E.employeeId = I.employeeRefId
)
SELECT * FROM EmpIncentives
GO



WITH EmpIncentives (firstName, lastName, incentiveAmount, incentiveDate)
AS
(
SELECT firstName, lastName, incentiveAmount, incentiveDate
FROM Employees E LEFT JOIN Incentives I
ON E.employeeId = I.employeeRefId
)
SELECT * FROM EmpIncentives
GO

--RIGHT OUTER JOIN / RIGHT JOIN



WITH EmpIncentives (firstName, lastName, incentiveAmount, incentiveDate)
AS
(
SELECT firstName, lastName, incentiveAmount, incentiveDate
FROM Employees E RIGHT OUTER JOIN Incentives I
ON E.employeeId = I.employeeRefId
)
SELECT * FROM EmpIncentives
GO

WITH EmpIncentives (firstName, lastName, incentiveAmount, incentiveDate)
AS
(

SELECT firstName, lastName, incentiveAmount, incentiveDate
FROM Employees E RIGHT JOIN Incentives I
ON E.employeeId = I.employeeRefId
)
SELECT * FROM EmpIncentives
GO


--FULL OUTER JOIN / FULL JOIN



WITH EmpIncentives (firstName, lastName, incentiveAmount, incentiveDate)
AS
(
SELECT firstName, lastName, incentiveAmount, incentiveDate
FROM Employees E FULL OUTER JOIN Incentives I
ON E.employeeId = I.employeeRefId
)
SELECT * FROM EmpIncentives
GO

WITH EmpIncentives (firstName, lastName, incentiveAmount, incentiveDate)
AS
(
SELECT firstName, lastName, incentiveAmount, incentiveDate
FROM Employees E FULL JOIN Incentives I
ON E.employeeId = I.employeeRefId
)
SELECT * FROM EmpIncentives
GO



--CROSS JOIN / CARTESIAN PRODUCT



WITH EmpIncentives (firstName, lastName, incentiveAmount, incentiveDate)
AS
(
SELECT firstName, lastName, incentiveAmount, incentiveDate
FROM Employees E CROSS JOIN Incentives I
)
SELECT * FROM EmpIncentives
GO

--SELF JOIN 


WITH EmpIncentives (EmployeeName, ManagerName)
AS
(

SELECT E.firstName [EmployeeName]
	, F.firstName [ManagerName] 
FROM Employees E JOIN Employees F
ON E.managerId = F.employeeId
)
SELECT * FROM EmpIncentives
GO



