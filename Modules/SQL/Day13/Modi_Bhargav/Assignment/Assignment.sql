/***** 1.Create a scaler Function to compute PF which will accept parameter basicsalary
         and compute PF. PF is 12% of the basic salary.*****/
CREATE DATABASE Day12
USE Day12

CREATE FUNCTION dbo.HumanSalary (@Emp_Salary int)
RETURNS int
AS
BEGIN
    RETURN (@Emp_Salary * 0.12)
END

DECLARE @Emp_Salary int
SET @Emp_Salary =  dbo.HumanSalary(18000)
PRINT @Emp_Salary

/***** 2.Create a scaler Function which will compute PT which will accept MontlyEarning.
         Criteria as below.*****/

CREATE FUNCTION dbo.ComputePT (@Salary int)
RETURNS varchar(Max)
AS
BEGIN
     DECLARE @Val varchar(Max)
     IF ( @Salary <= 5999)

	    SET @Val = 'Your Text Nil' 

     ELSE IF ( @Salary >= 6000 AND @Salary <= 8999)
	 
	    SET @Val = 'Your Tax Is RS. 80/Month'
     
     ELSE IF ( @Salary >= 9000 AND @Salary <= 11999)

	    SET @Val = 'Your Tax Is RS. 150/Month'
     
     ELSE IF(@Salary >= 11999)
	 
	    SET @Val = 'Your Tax Is RS. 200/Month'
     
     RETURN @Val
END

DECLARE @Salary varchar(Max)
SET @Salary =  dbo.ComputePT(13000)
PRINT @Salary

/***** 3. Create a table valued function which will accept JobTitle which will 
          return new table set based on jobtitle. *****/
		  USE DayTwo
		   CREATE FUNCTION Fx_JobTitle_Name(
              @TitleName nvarchar(50)
           )
           RETURNS table
           AS
           RETURN (SELECT * FROM Employees WHERE JobId = @TitleName)
           GO
           SELECT * FROM Fx_JobTitle_Name('IT_PROG')

