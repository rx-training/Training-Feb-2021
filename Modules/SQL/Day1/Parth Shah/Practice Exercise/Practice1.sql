CREATE TABLE TB1 (
CountryId varchar(2),
CountryName varchar(40),

);

ALTER TABLE TB1
ADD CountryName varchar(40) CHECK(CountryName IN('Italy','India','China')) ;

ALTER TABLE TB1
ADD CountryRegion varchar(10);

select * from TB1;

INSERT INTO TB1 VALUES ('1', 'India', '25')
INSERT INTO TB1 VALUES ('2', 'China', '26')

alter table TB1 add constraint Uk unique (CountryId, CountryRegion)
INSERT INTO TB1 VALUES ('2', 'China', '27'),
						(' 3','India','27');
					
