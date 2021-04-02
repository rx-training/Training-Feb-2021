
/***** Practices msdn and ppt *****/
SELECT * FROM HumanResources.JobCandidate 
BEGIN TRANSACTION;  
DELETE FROM HumanResources.JobCandidate  
    WHERE JobCandidateID = 13;  
COMMIT;

/***** Ex-2 *****/
/*Note : the effect of rolling back a transaction. In this example, 
  the ROLLBACK statement will roll back the INSERT statement, but 
   the created table will still exist.*****/
CREATE TABLE ValueTable1 (id INT);  
BEGIN TRANSACTION;  
       INSERT INTO ValueTable1 VALUES(1);  
       INSERT INTO ValueTable1 VALUES(2);  
ROLLBACK;
SELECT * FROM dbo.ValueTable1

/***** Nameing Trasaction *****/
DECLARE @TranName VARCHAR(20);  
SELECT @TranName = 'MyTransaction';  
  
BEGIN TRANSACTION @TranName;  
DELETE FROM HumanResources.JobCandidate  
    WHERE JobCandidateID = 5;  
  
COMMIT TRANSACTION @TranName;  
GO

/***** IMPLICIT TRANSACTION *****/
CREATE TABLE EmpData1 ( Name varchar(30), Role varchar(30),Id int)
SET IMPLICIT_TRANSACTIONS ON;​

INSERT INTO EmpData1 VALUES ('Jack', 'Marketing',1);​

INSERT INTO EmpData1 VALUES ('Robert', 'Finance',2);​

COMMIT TRANSACTION;​
SET IMPLICIT_TRANSACTIONS OFF;​
SELECT * FROM EmpData1

/***** EXPLICIT TRASACTION *****/
SELECT * FROM Sales.SalesPerson

BEGIN TRANSACTION BonusUpdate
      BEGIN TRY
               UPDATE Sales.SalesPerson 
			   SET Bonus = Bonus - 1000​ 
			   WHERE BusinessEntityID = 275

               UPDATE Sales.SalesPerson
			   SET Bonus = Bonus + 1000​
			   WHERE BusinessEntityID = 280

               COMMIT TRANSACTION BonusUpdate
 
               PRINT 'Bonus Changed'

      END TRY

	  BEGIN CATCH 
	           ROLLBACK TRANSACTION BonusUpdate

			   PRINT 'Bonus Not Changed'
      END CATCH

/*****  ISOLATION LEVEL TRANSACTION *****/
ALTER DATABASE AdventureWorks2012 SET ALLOW_SNAPSHOT_ISOLATION ON ALTER DATABASE 
AdventureWorks2012 SET READ_COMMITTED_SNAPSHOT ON

SET TRANSACTION ISOLATION LEVEL​
SNAPSHOT
--SERIALIZABLE 
--READ COMMITTED​
--READ UNCOMMITTED
BEGIN TRANSACTION TR


		  UPDATE Person.Person ​
		  SET MiddleName = 'Modi' 
		  WHERE BusinessEntityID = 1

		  UPDATE HumanResources.Employee
		  SET JobTitle = 'Engineer'
		  WHERE BusinessEntityID = 5

          COMMIT TRANSACTION TR

          PRINT 'Transaction Executed'​

SELECT * FROM Person.Person
SELECT * FROM HumanResources.Employee

/***** REPEATABLE READ ---> Insert to new row updated *****/
 
SET TRANSACTION ISOLATION LEVEL​
REPEATABLE READ
BEGIN TRANSACTION TRS
      
	  UPDATE EmpData1 SET Role = 'IT_Prof' WHERE Id = 1

	  UPDATE EmpData1 SET Role = 'IT_Analist' WHERE Id = 2

	  COMMIT TRANSACTION TR
SELECT * FROM EmpData1
