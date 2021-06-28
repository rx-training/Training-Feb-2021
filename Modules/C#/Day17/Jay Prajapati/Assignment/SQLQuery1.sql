USE HospitalAuthenticationJWTDB;


CREATE TABLE Department(
	DepartmentID INT PRIMARY KEY Identity(1,1),
	DepartmentName NVARCHAR(40));


CREATE TABLE Staff(
	ID INT PRIMARY KEY Identity(1,1),
	Name NVARCHAR(40),
	Position NVARCHAR(20),
	Department INT FOREIGN KEY REFERENCES Department(DepartmentID));




CREATE TABLE Patients(
	ID INT PRIMARY KEY Identity(1,1),
	Name NVARCHAR(40),
	Age int,
	City NVARCHAR(20),
	Department INT FOREIGN KEY REFERENCES Department(DepartmentID),
	);


CREATE TABLE Treatment(
	PatientID INT FOREIGN KEY REFERENCES Patients(ID),
	StaffID INT FOREIGN KEY REFERENCES Staff(ID),
	TreatmentName NVARCHAR(50));



CREATE TABLE DrugAllotment(
	PatientID INT FOREIGN KEY REFERENCES Patients(ID),
	DrugName NVARCHAR(20),
	Morning NVARCHAR(5),
	Afternoon NVARCHAR(5),
	Evenning NVARCHAR(5),
	Night NVARCHAR(5));


CREATE VIEW VPatientsTreatment
AS 
SELECT P.ID AS PatientID,
		P.Name AS PatientName,
		P.Age AS PatientAge,
		P.City AS PatientCity,
		S.ID AS StaffID,
		S.Name AS StaffName,
		D.DepartmentName AS Department,
		T.TreatmentName AS Treatment
FROM Patients AS P
INNER JOIN Treatment AS T
ON P.ID = T.PatientID
INNER JOIN Staff AS S
ON T.StaffID = S.ID
INNER JOIN Department AS D
ON S.Department = D.DepartmentID;


CREATE VIEW VStaffDepartment
AS 
SELECT S.ID AS StaffID, 
	   S.Name AS Name, 
	   S.Position AS Position,
	   D.DepartmentName AS Department
FROM Staff AS S
INNER JOIN Department AS D
ON S.Department = D.DepartmentID
