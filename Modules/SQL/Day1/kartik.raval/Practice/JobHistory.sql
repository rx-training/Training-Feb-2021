USe RadixTraining
CREATE TABLE JobHistorys
(
EmployeeID INT NOT NULL,
StartDate Date NOT NULL,
EndDate Varchar(20) CONSTRAINT chkEndDate CHECK(EndDate like '^(0[1-9]|[12][0-9]|3[01])[- /.](0[1-9]|1[012])[- /.](19|20)\d\d$'),
JobID INT NOT NULL,
DepartmentID INT NOT NULL,
UNIQUE (EmployeeID, JobID, DepartmentID)
)

select convert(varchar, getdate(), 103) 

SELECT * FROM JobHistorys

DROP TABLE JobHistorys

delete * from JobHistorys where EmployeeID = 3;