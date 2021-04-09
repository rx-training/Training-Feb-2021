
			----------------- instagram ----------------

	CREATE VIEW V1 AS SELECT TB1.UserId,Followers,Following FROM

		(SELECT U.UserId,
		sum(case when F1.FUserId = 'jinal_shah_' then 1 else 0 end) as Followers FROM Followers F1 
		JOIN Users U ON U.UserId = F1.FUserId GROUP BY U.UserId ) AS TB1

		JOIN

		(SELECT U.UserId,
		sum(case when F2.FUserId = 'jinal_shah_' then 1 else 0 end) as Following FROM Following F2 
		JOIN Users U ON U.UserId = F2.FUserId GROUP BY U.UserId) AS TB2 
		
		ON TB1.UserId = TB2.UserId
	GO

	SELECT * FROM v1
	GO

	--------------------------------------------------------------------------------------------

	CREATE VIEW V2 AS SELECT TB1.UserId,posts,Followers,Following FROM

		(SELECT U.UserId,
		sum(case when F1.FUserId = 'jinal_shah_' then 1 else 0 end) as Followers FROM Followers F1 
		JOIN Users U ON U.UserId = F1.FUserId GROUP BY U.UserId ) AS TB1

		JOIN

		(SELECT U.UserId,
		sum(case when F2.FUserId = 'jinal_shah_' then 1 else 0 end) as Following FROM Following F2 
		JOIN Users U ON U.UserId = F2.FUserId GROUP BY U.UserId) AS TB2 
		
		ON TB1.UserId = TB2.UserId

		JOIN 

		(SELECT U.UserId ,SUM(case when P1.PUserId = 'jinal_shah_' then 1 else 0 end) as posts FROM Posts P1
		JOIN Users U ON U.UserId = P1.PUserId GROUP BY U.UserId) AS TB3

		ON TB1.UserId = TB3.UserId

	GO

	SELECT * FROM v2
	GO