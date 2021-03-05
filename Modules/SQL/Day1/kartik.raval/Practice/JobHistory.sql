Select * from sys.tables

USe RadixTraining

CREATE TABLE JobHistorys
(
EmployeeID INT NOT NULL,
StartDate Date NOT NULL,
EndDate Varchar(20) CONSTRAINT chkEndDate CHECK(EndDate like '[0-3][0-9]/[0-1][0-9]/[1-2][0-9][0-9][0-9]'),
JobID INT NOT NULL,
DepartmentID INT NOT NULL,
UNIQUE (EmployeeID, JobID, DepartmentID)
)

SELECT * FROM JobHistorys

DROP TABLE JobHistorys
