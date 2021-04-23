
SELECT * FROM Users

INSERT INTO Users VALUES 
('jinal_shah_','jinal','jk@gmail.com',1234567890,'ahmedabad','1999-5-7','F')

-----------------------------------------------

SELECT * FROM Followers

INSERT INTO Followers VALUES ('jinal_shah_','riddhi_')
INSERT INTO Followers VALUES ('jinal_shah_','_dhruti_')
INSERT INTO Followers VALUES ('jinal_shah_','_divya_')

------------------------------------------------

SELECT * FROM Following

INSERT INTO Following VALUES ('jinal_shah_','_dhruti_')
INSERT INTO Following VALUES ('jinal_shah_','_divya_')

--------------------------------------------------

SELECT * FROM Posts

delete from Posts

INSERT INTO Posts  VALUES ('jinal_shah_','post_01',GETDATE())

---------------------------------------------------

SELECT * FROM PostLikes

INSERT INTO PostLikes  VALUES ('post_01','jinal_shah_',GETDATE())
INSERT INTO PostLikes  VALUES ('post_01','_dhruti_',GETDATE())
INSERT INTO PostLikes  VALUES ('post_01','_divya_',GETDATE())

----------------------------------------------------

SELECT * FROM PostComments

INSERT INTO PostComments VALUES ('post_01','_divya_','cmnt_01','nice',GETDATE())

-----------------------------------------------------

SELECT * FROM CommentLike

INSERT INTO CommentLike VALUES ('cmnt_01','jinal_shah_',GETDATE())
INSERT INTO CommentLike VALUES ('cmnt_01','_divya_',GETDATE())

