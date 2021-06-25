CREATE DATABASE TASK1
GO
USE TASK1
GO

CREATE TABLE Stuents
(
	StudentId INT PRIMARY KEY,
	SName VARCHAR(20)
)

INSERT INTO Stuents VALUES(1,'A'),
							(2,'B'),
							(3,'C'),
							(4,'D')

CREATE TABLE Faculties
(
	FID INT PRIMARY KEY,
	FName VARCHAR(20)
)

INSERT INTO Faculties VALUES(101,'X'),
							(102,'Y'),
							(103,'Z'),
							(104,'W')
CREATE TABLE Learning
(
	StudentId INT FOREIGN KEY REFERENCES Stuents(StudentId),
	FID INT FOREIGN KEY REFERENCES Faculties(FID)
)

INSERT INTO Learning VALUES(1,101),
							(1,102),
							(2,101),
							(3,102),
							(4,101)


SELECT s.SName,f.FName FROM Learning l JOIN Stuents s ON l.StudentId = s.StudentId
						               JOIN Faculties f ON l.FID = f.FID
GO

SELECT COUNT(l.StudentId)  AS 'Count',f.FName FROM Learning l RIGHT OUTER JOIN Faculties f ON l.FID = f.FID GROUP BY f.FName
GO

SELECT COUNT(l.StudentId)  AS 'Count',f.FName FROM Learning l RIGHT OUTER JOIN Faculties f ON l.FID = f.FID GROUP BY f.FName HAVING count(l.StudentId) = 0
GO

SELECT COUNT(l.StudentId)  AS 'Count',f.FName FROM Learning l RIGHT OUTER JOIN Faculties f ON l.FID = f.FID GROUP BY f.FName HAVING count(l.StudentId) > 2
GO

/*------------------------------------------------------------------------------------------------------------------------*/

WITH CTE(Count,FName) 
AS  
(  
	SELECT COUNT(l.StudentId)  AS 'Count',f.FName FROM Learning l RIGHT OUTER JOIN Faculties f ON l.FID = f.FID GROUP BY f.FName 
) 
SELECT * FROM CTE WHERE Count > 2
GO

/*------------------------------------------------------------------------------------------------------------------------*/

SELECT SName FROM Stuents  WHERE   StudentId  IN(SELECT StudentId FROM Learning WHERE FID  IN(SELECT FID FROM Faculties WHERE FName = 'Y'))
GO

/*-------------------------------------------------------------------------------------------------------------------------*/

WITH CTE1(SName,StudentId,FName) 
AS  
(
SELECT SName,s.StudentId,f.FName FROM Stuents s JOIN Learning l ON s.StudentId = l.StudentId 
									  JOIN Faculties f ON l.FID = f.FID 
)
SELECT SName FROM CTE1  WHERE FName = 'Y'
GO

/*------------------------------------------------------------------------------------------------------------------------*/

ALTER PROCEDURE Procedure1 @json NVARCHAR(MAX)
AS BEGIN 
SET NOCOUNT ON

DECLARE @Sn VARCHAR(20),@Fn VARCHAR(20),@Sn1 INT,@Fn1 INT
DECLARE cursor_7 CURSOR FOR 
SELECT SName1,FName2  FROM OPENJSON(@json)
WITH
(
	SName1 VARCHAR(20) '$.SName',
	FName2 VARCHAR(20) '$.FName'
)   
OPEN cursor_7
if @@CURSOR_ROWS > 0
BEGIN 
FETCH NEXT FROM cursor_7 INTO @Sn,@Fn
WHILE @@FETCH_STATUS = 0
BEGIN 
	SELECT @Sn1 = StudentId FROM Stuents WHERE SName = @Sn
	SELECT @Fn1 = FID FROM Faculties WHERE FName = @Fn
	INSERT INTO Learning VALUES(@Sn1,@Fn1)
	FETCH NEXT FROM cursor_7 INTO @Sn,@Fn

END
END
CLOSE cursor_7
DEALLOCATE cursor_7
SET NOCOUNT OFF
END
GO

DECLARE @json NVARCHAR(MAX) 
SET @json = N'[{"SName":"D","FName":"Y"},
			  {"SName":"C","FName":"Z"}]'
EXEC Procedure1 @json

SELECT * FROM Learning