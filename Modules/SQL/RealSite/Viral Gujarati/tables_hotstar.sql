USE HotstarDB

-- Login Details

CREATE TABLE UserAccount(
	 CustomerID INT PRIMARY KEY,
	 Name NVARCHAR(30)  NOT NULL,
	 PhoneNumber int  NOT NULL,
	Email NVARCHAR(30) UNIQUE NOT NULL,
	Address NVARCHAR(30) NOT NULL
)

SELECT * FROM UserAccount


-- Subscription Information

CREATE TABLE Subscription(
	SubscriptionPlan NVARCHAR(30) NOT NULL,
	Price money NOT NULL
	)
	

SELECT * FROM Subscription



-- Payment Information
CREATE TABLE Payment(
	 PaymentID INT PRIMARY KEY,
	 PaymentMethod NVARCHAR(30)  NOT NULL,
	 PaymentDate DATE  NOT NULL,
	 PaymentAmount INT NOT NULL,
	 AmountDue INT

)

SELECT * FROM Payment

-- Shows and movies

CREATE TABLE ShowsAndMovies
 (
	 MovieID INT PRIMARY KEY,
	 MovieTitle NVARCHAR(30)  NOT NULL,
	 MovieLanguage NVARCHAR(30) NOT NULL,
	 ReleaseDate DATE  NOT NULL,
	 Rating NVARCHAR(30)  NOT NULL
	 )

SELECT * FROM ShowsAndMovies


--Genre information


CREATE TABLE Genre
 (
	 GenreID INT PRIMARY KEY,
	 GenreDescription NVARCHAR(30)  NOT NULL
	 )

	 
CREATE TABLE Sports
 (
	 SportsDescription NVARCHAR(30)  NOT NULL
	 )



SELECT * FROM ShowsAndMovies
SELECT * FROM Payment
SELECT * FROM Subscription
SELECT * FROM UserAccount
SELECT * FROM Genre
SELECT * FROM Sports