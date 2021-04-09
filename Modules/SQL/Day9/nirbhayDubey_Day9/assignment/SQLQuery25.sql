USE AssignmentDay33;
GO

--Create a batch Select Banking as ‘Bank Dept’, Insurance as ‘Insurance Dept’ and Services as ‘Services Dept’ from employee table
SELECT 
	e.EmployeeName,
	CASE
		WHEN e.DepartmentName='Banking' THEN 'Bank Dept'
		WHEN e.DepartmentName='Insurance' THEN 'Insurance Dept'
		WHEN e.DepartmentName='Services' THEN 'Services Dept'
		ELSE e.DepartmentName
	END AS 'DepartmentName'
FROM
	Employee e JOIN Department d
ON e.DepartmentId=d.DepartmentId;
GO