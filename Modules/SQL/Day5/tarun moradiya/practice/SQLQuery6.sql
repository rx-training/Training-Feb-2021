--INNER JOIN / JOIN

SELECT E.firstName, lastName, incentiveAmount, Incentives.incentiveDate
FROM Employees E INNER JOIN Incentives 
ON E.employeeId = Incentives.employeeRefId

SELECT E.firstName, lastName, incentiveAmount, I.incentiveDate
FROM Employees E JOIN Incentives I 
ON E.employeeId = I.employeeRefId

--LEFT OUTER JOIN / LEFT JOIN

SELECT firstName, lastName, incentiveAmount, incentiveDate
FROM Employees E LEFT OUTER JOIN Incentives I
ON E.employeeId = I.employeeRefId

SELECT firstName, lastName, incentiveAmount, incentiveDate
FROM Employees E LEFT JOIN Incentives I
ON E.employeeId = I.employeeRefId

--RIGHT OUTER JOIN / RIGHT JOIN

SELECT firstName, lastName, incentiveAmount, incentiveDate
FROM Employees E RIGHT OUTER JOIN Incentives I
ON E.employeeId = I.employeeRefId

SELECT firstName, lastName, incentiveAmount, incentiveDate
FROM Employees E RIGHT JOIN Incentives I
ON E.employeeId = I.employeeRefId

--FULL OUTER JOIN / FULL JOIN

SELECT firstName, lastName, incentiveAmount, incentiveDate
FROM Employees E FULL OUTER JOIN Incentives I
ON E.employeeId = I.employeeRefId

SELECT firstName, lastName, incentiveAmount, incentiveDate
FROM Employees E FULL JOIN Incentives I
ON E.employeeId = I.employeeRefId

--CROSS JOIN / CARTESIAN PRODUCT

SELECT firstName, lastName, incentiveAmount, incentiveDate
FROM Employees E CROSS JOIN Incentives I

--SELF JOIN 

SELECT E.firstName [EmployeeName]
	, F.firstName [ManagerName] 
FROM Employees E JOIN Employees F
ON E.managerId = F.employeeId

--



