CREATE TABLE Jobs(
JobId varchar(10),
JobTitle varchar(20) DEFAULT '',
Minsal varchar(10) DEFAULT '8000',
Maxsal varchar(12) DEFAULT 'NULL'

);

select * from Jobs;

INSERT INTO Jobs VALUES ('1',DEFAULT,DEFAULT,DEFAULT);
INSERT INTO Jobs VALUES ('100',DEFAULT,DEFAULT,DEFAULT);


