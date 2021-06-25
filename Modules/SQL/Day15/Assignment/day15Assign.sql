
----day 15 Assignment 

/*---Detroit Bank need to implement the transaction whenever the amount
is transferred from one account to the another account.*/


CREATE DATABASE Banks;
USE Banks

CREATE TABLE  CustAccount 
(
AccountId int PRIMARY KEY ,
CustName varchar(75),
Balance Money
)

INSERT INTO CustAccount 
VALUES 
(101,'PARTH',1500000),
(102,'KUSH',200000),
(105,'PARAM',35000),
(108,'KAMLI',55500),
(109,'YAMI',40000)

SELECT * FROM CustAccount

CREATE TABLE TransferDetails
(
AccountId int FOREIGN KEY REFERENCES CustAccount(AccountId),
Amount int ,
TransType varchar(20)
)

INSERT INTO TransferDetails 
VALUES
(105,2500,'CREDIT'),
(101,3200,'DEBIT')


BEGIN TRANSACTION MoneyTransfer 
BEGIN 
UPDATE CustAccount SET Balance = Balance + 20000
WHERE AccountId = 105

UPDATE CustAccount SET Balance = Balance - 10000
WHERE AccountId = 109

COMMIT TRANSACTION MoneyTransfer
SELECT 'TRANSACTION EXECUTED'
END 

INSERT INTO TransferDetails VALUES(105,20000,'DEBIT')
SELECT * FROM TransferDetails

---ppt questions ;
/* At AdventureWorks, Inc., an employee named Sidney Higa, who is currently w
orking as Production Technician – WC10
has been promoted as Marketing Manager. The employee ID of Sidney is 13. As a database 
developer, you need to update his records.
This involves updating the title in the Employee table a
nd updating the department history details.
You need to ensure that all the changes take effect. In addition, you need to ensure that
no other transaction should be able to view the data being modified by the current transaction.*/

USE AdventureWorks2012;

SELECT * FROM HumanResources.Employee WHERE JobTitle = 'Production Technician – WC10' AND NAME LIKE 'Sidney Higa'
SELECT * FROM HumanResources.Department
SELECT* FROM  HumanResources.EmployeeDepartmentHistory
SELECT * FROM Person.Person WHERE FirstName LIKE 'Sidney'


BEGIN TRANSACTION UpdateDepartment 

BEGIN TRY

SELECT E.BusinessEntityId  FROM Person.Person AS P JOIN HumanResources.Employee AS E 
ON E.BusinessEntityID = P.BusinessEntityID WHERE P.FirstName = 'Sidney'
AND P.LastName = 'Higa'
AND E.JobTitle = 'Production Technician – WC10'

UPDATE HumanResources.Employee SET JobTitle = 'Marketing' WHERE BusinessEntityID = '50'

INSERT INTO  HumanResources.EmployeeDepartmentHistory values (50,4,1,GETDATE(),NULL,GETDATE())

COMMIT TRANSACTION UpdateDepartment
SELECT 'SUCESSFULL'
END TRY 
BEGIN CATCH 
ROLLBACK TRANSACTION UpdateDepartment 
SELECT 'Execution  ROLLBACKED'
END CATCH 
