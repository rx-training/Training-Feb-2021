CREATE TABLE JobHistory(
EmployeeId varchar(30),
StartDate DATE
);

ALTER TABLE JobHistory ADD EndDate DATE;
ALTER TABLE JobHistory ADD JobId varchar(5), DepartmentId varchar(5);

select * from JobHistory;

INSERT INTO JobHistory VALUES ('1','12/4/2025','12/13/5678','5','6');
INSERT INTO JobHistory VALUES ('1','12-4-2025','12/13/5678','5','6');

INSERT INTO JobHistory VALUES ('1','12-04-2035','12/13/5678','5','6');

INSERT INTO JobHistory VALUES ('1','12/4/2016','12/13/5678','5','6');