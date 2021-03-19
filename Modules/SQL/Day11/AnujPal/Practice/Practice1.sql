USE SQLDay6
/*  STORED PROCEDURE WITHOUT PARAMETERS  */

SELECt * from Employees
select *from Departments
select * from Employees

CREATE PROCEDURE p1
AS
BEGIN
SELECT * FROM Departments d INNER JOIN Employees e
ON (d.DepartmentID = e.DepartmentID)
END

EXEC p1

/*   STORED PROCEDURE WITH PARAMETERS  */

CREATE PROCEDURE p2
(
	@ID INT,
	@FirstName VARCHAR(50),
	@LastName VARCHAR(50)
)
AS
BEGIN
INSERT INTO Employees VALUES(@ID,@FirstName,@LastName);
END


CREATE PROCEDURE p2 @ID INT,@FirstName VARCHAR(30)
AS
BEGIN
INSERT INTO TableName VALUES(@ID,@FirstName)
END


CREATE TABLE TableName
(
	ID INT,
	FirstName VARCHAR(30)
)

EXEC p2 1,'Anuj'