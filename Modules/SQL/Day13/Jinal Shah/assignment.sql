		---------------AdventureWorks2012---------------

/* Create a scaler Function to compute PF which will accept parameter basicsalary and compute PF. 
   PF is 12% of the basic salary. */

    CREATE FUNCTION HumanResources.countpf (@BasSal float)
	RETURNS FLOAT
	AS
	BEGIN
	RETURN (@BasSal * 0.12)
	END

	DECLARE @BasSal float 
	SET @BasSal = 
	HumanResources.countpf (12000)
	PRINT @BasSal


/* Create a scaler Function which will compute PT which will accept MontlyEarning. Criteria as below. */

	CREATE FUNCTION HumanResources.countpt (@earning int)
	RETURNS int
	AS
	BEGIN
		IF(@earning < 5999)
		BEGIN
		RETURN (@earning)
		END

		ELSE IF(@earning BETWEEN 6000 AND 8999)
		BEGIN
		RETURN (@earning - 80)
		END

		ELSE IF(@earning BETWEEN 9000 AND 11999)
		BEGIN
		RETURN (@earning - 150)
		END

		ELSE IF(@earning >11999)
		BEGIN
		RETURN (@earning - 200)
		END
	RETURN ''
	END

	---------calling---------

	DECLARE @earning int 
	SET @earning = 
	HumanResources.countpt (5500)
	PRINT @earning

	DECLARE @earning1 int 
	SET @earning1 = 
	HumanResources.countpt (7000)
	PRINT @earning1

	DECLARE @earning int 
	SET @earning = 
	HumanResources.countpt (11000)
	PRINT @earning

	DECLARE @earning int 
	SET @earning = 
	HumanResources.countpt (15900)
	PRINT @earning


/* Create a table valued function which will accept JobTitle which will return new table set based on jobtitle */

	--SELECT BusinessEntityID,JobTitle FROM HumanResources.Employee WHERE JobTitle = 'SENIOR TOOL DESIGNER'
	
	CREATE FUNCTION fx_jobtitle (@JtName nvarchar(20))
	RETURNS TABLE
	AS
	RETURN(
			SELECT * FROM HumanResources.Employee WHERE  JobTitle = @JtName
	)
	go

	SELECT * FROM fx_jobtitle('SENIOR TOOL DESIGNER')	