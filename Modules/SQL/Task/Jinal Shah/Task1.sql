CREATE TABLE Students
(
	Id int PRIMARY KEY,
	Name varchar(20)
)


CREATE TABLE Faculty
(
	Fid int PRIMARY KEY,
	fname varchar(20)
)
INSERT INTO Faculty VALUES (101,'X')
INSERT INTO Faculty VALUES (102,'Y')
INSERT INTO Faculty VALUES (103,'Z')
INSERT INTO Faculty VALUES (104,'W')


CREATE TABLE Learning
(
	Lid int CONSTRAINT FKsid FOREIGN KEY REFERENCES Students(Id),
	lfid int CONSTRAINT FKfid FOREIGN KEY REFERENCES Faculty(Fid)
)

SELECT * FROM Students
SELECT * FROM Faculty
SELECT * FROM Learning

SELECT st.Name FROM Students st join Learning lc ON st.Id = lc.Lid 
SELECT ft.fname FROM Faculty ft join Learning lc ON ft.Fid = lc.lfid

								------------ QUE 1--------------
-----------(1)--------------
SELECT T1.Name 'STUDENT', T2.fname 'FACULTY' FROM (SELECT * FROM Students st join Learning lc ON st.Id = lc.Lid) AS T1 
JOIN (SELECT * FROM Faculty ft join Learning lc ON ft.Fid = lc.lfid) AS T2 ON T1.Lid = T2.Lid

----------(2)---------------
SELECT Name 'Student',fname 'Faculty' FROM students st join Learning lc ON st.Id = lc.Lid JOIN Faculty ft 
on lc.lfid = ft.Fid

						  ---------------- QUE 2 ----------------

--SELECT ft.Fid,lc.Lid,count(Fid) FROM Faculty ft join Learning lc ON ft.Fid = lc.lfid group by lfid
--SELECT count(Fid)  FROM Faculty ft join Learning lc ON ft.Fid = lc.lfid group by lfid

select lfid 'faculty',fc.fname 'faculty name',count(lfid) 'no of student' from learning lc join faculty fc on lc.lfid=fc.fid  group by lfid,fname

---------------
SELECT * FROM (select lfid 'facultyid',fc.fname 'faculty name',count(lfid) 'noofstudent' from learning lc 
join faculty fc on lc.lfid=fc.fid  group by lfid,fname) as t1 where noofstudent > 2

----------------
select lfid 'facultyid',fc.fname 'faculty name',count(lfid) 'noofstudent' from learning lc 
join faculty fc on lc.lfid=fc.fid  group by lfid,fname having count(lfid) > 2  

------------


WITH CTE1 (Facultyid,Faculty,Noofstudent)
AS
(
	select LC.lfid 'Facultyid',fc.fname AS 'Faculty name',count(lfid)'Noofstudent' from learning lc 
	join faculty fc on lc.lfid=fc.fid  group by lfid,fname
)
SELECT Facultyid,Faculty,Noofstudent
FROM CTE1
WHERE noofstudent > 2  



			
						-------------- que 3 ---------------

		CREATE PROCEDURE P1 
		AS
		SET NOCOUNT ON;

			DECLARE @jsonvar NVARCHAR(MAX)
			SET @jsonvar = N'
			[
				{"Name":"D", "fname":"Y"},
				{"Name":"C", "fname":"Z"}
			]'

			DECLARE @sname VARCHAR(20)
			DECLARE @fname VARCHAR(20)
			DECLARE @id int
			DECLARE @fid int

			DECLARE C1 CURSOR FOR
			SELECT SNAME,FNAME FROM OPENJSON(@jsonvar)
			WITH
			(
				SNAME nvarchar(20) '$.Name',
				FNAME nvarchar(20) '$.fname'
			)
			OPEN C1
		    FETCH NEXT FROM C1 INTO @sname, @fname
		    WHILE @@FETCH_STATUS = 0
		    BEGIN
				SET @id =(SELECT Id FROM Students WHERE Name = @sname)
				SET @fid =(SELECT Fid FROM Faculty WHERE fname = @fname)
				INSERT INTO Learning VALUES (@id, @fid)
				FETCH NEXT FROM C1 INTO @sname, @fname
		    end
		    CLOSE C1
		    DEALLOCATE C1

		EXECUTE P1

		SELECT * FROM Learning
		  
			
		

		