	
	SELECT * FROM Users
	SELECT * FROM Followers
	SELECT * FROM Following

	SELECT U.UserId,U.UserName,F1.FollowerId FROM Users U JOIN Followers F1 ON U.UserId = F1.FUserId 

	SELECT U.UserId,U.UserName,F2.FollowingId FROM Users U JOIN Following F2 ON U.UserId = F2.FUserId

	SELECT COUNT(FollowerId) FROM Users U JOIN Followers F1 ON U.UserId = F1.FUserId GROUP BY F1.FollowerId

	SELECT COUNT(FollowerId),RANK() OVER (ORDER BY FollowerId) FROM Followers GROUP BY FollowerId

	SELECT COUNT(FollowerId) 'FOLLOWERS' FROM Followers GROUP BY FUserId

	SELECT COUNT(FollowingId) 'FOLLOWINGS' FROM Following GROUP BY FUserId

	SELECT U.UserId,
	sum(case when F1.FUserId = 'jinal_shah_' then 1 else 0 end) as follower FROM Followers F1 
	JOIN Users U ON U.UserId = F1.FUserId GROUP BY U.UserId

	SELECT U.UserId,
	sum(case when F2.FUserId = 'jinal_shah_' then 1 else 0 end) as following FROM Following F2 
	JOIN Users U ON U.UserId = F2.FUserId GROUP BY U.UserId
