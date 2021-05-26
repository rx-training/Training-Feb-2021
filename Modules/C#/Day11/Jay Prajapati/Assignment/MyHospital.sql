CREATE Database MyHospital;
USE MyHospital;

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


