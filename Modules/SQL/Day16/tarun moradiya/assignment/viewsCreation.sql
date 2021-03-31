----------------------------------- VIEWS ---------------------------------------

CREATE VIEW Employees.vEmployees
AS
	SELECT E.EmployeeID
		, E.FirstName
		, E.LastName
		, E.Email
		, P.PositionName
		, U.UserName
		, U.PasswordHash
		, U.Salt
		, D.DepartmentName
	FROM Employees.Employees E JOIN Employees.Users U
	ON E.EmployeeID = U.EmployeeID
	JOIN Employees.Positions P
	ON P.PositionID = E.PositionID
	JOIN Departments.Departments D
	ON D.DepartmentID = E.DepartmentID
GO



 