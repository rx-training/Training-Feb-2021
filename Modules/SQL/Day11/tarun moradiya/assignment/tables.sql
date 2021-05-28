

CREATE TABLE Branches(
bName varchar(18) CONSTRAINT pkBname PRIMARY KEY,
city varchar(18)
)

CREATE TABLE Customers(
cName varchar(18) CONSTRAINT pkCname PRIMARY KEY,
city varchar(18)
)

CREATE TABLE Deposits(
actNo varchar(5) CONSTRAINT pkActNo PRIMARY KEY,
cName varchar(18) CONSTRAINT fkCName FOREIGN KEY REFERENCES Customers(cName),
bName varchar(18) CONSTRAINT fkBName FOREIGN KEY REFERENCES Branches(bName),
amount int,
aDate date
)

CREATE TABLE Borrows(
loanNo varchar(5) CONSTRAINT pkLoanNo PRIMARY KEY,
cName varchar(18) CONSTRAINT fkCNameBorrow FOREIGN KEY REFERENCES Customers(cName),
bName varchar(18) CONSTRAINT fkBNameBorrow FOREIGN KEY REFERENCES Branches(bName),
amount int,
)


INSERT INTO Branches
VALUES  ('VRCE', 'NAGPUR'),	
		('AJNI', 'NAGPUR'),	
		('KAROLBAGH', 'DELHI'),	
		('CHANDNI',	'DELHI'),	
		('DHARAMPETH', 'NAGPUR'),	
		('M.G.ROAD', 'BANGLORE'),	
		('ANDHERI',	'MUMBAI'),	
		('VIRAR', 'MUMBAI'),	
		('NEHRU PLACE',	'DELHI'),	
		('POWAI', 'MUMBAI')


INSERT INTO Customers
VALUES 
('ANIL', 'KOLKATA'),	
('SUNIL', 'DELHI'),	
('MEHUL', 'ARODA'),	
('MANDAR', 'PATNA'),	
('MADHURI', 'NAGPUR'),	
('PRAMOD', 'NAGPUR'),	
('SANDIP', 'SURAT'),	
('SHIVANI', 'MUMBAI'),	
('KRANTI', 'MUMBAI'),	
('NAREN', 'MUMBAI')


INSERT INTO Deposits
VALUES  (100, 'ANIL', 'VRCE', 1000, '1-Mar-1995'),	
		(101, 'SUNIL', 'AJNI', 5000, '4-Jan-1996'),	
		(102, 'MEHUL', 'KAROLBAGH',	3500, '17-Nov-1995'),	
		(104, 'MADHURI', 'CHANDNI',	1200, '17-Dec-1995'),	
		(105, 'PRAMOD', 'M.G.ROAD', 3000, '27-Mar-1996'),	
		(106, 'SANDIP',	'ANDHERI', 2000, '31-Mar-1996'),	
		(107, 'SHIVANI', 'VIRAR', 1000, '5-Sep-1995'),	
		(108, 'KRANTI',	'NEHRU PLACE', 5000, '2-Jul-1995'),	
		(109, 'NAREN', 'POWAI',	7000, '10-Aug-1995')

INSERT INTO Borrows
VALUES 
(201, 'ANIL', 'VRCE', 1000),	
(206, 'MEHUL', 'AJNI', 5000),	
(311, 'SUNIL', 'DHARAMPETH', 3000),	
(321, 'MADHURI', 'ANDHERI', 2000),	
(375, 'PRAMOD', 'VIRAR', 8000),	
(481, 'KRANTI', 'NEHRU PLACE', 3000)
 
