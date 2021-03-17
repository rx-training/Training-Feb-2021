 -------------JSON_MODIFY -----------

 ---------Example - Basic operations------------

	DECLARE @info NVARCHAR(100)='{"name":"John","skills":["C#","SQL"]}'

	PRINT @info

	-- Update name  

	SET @info=JSON_MODIFY(@info,'$.name','Mike')

	PRINT @info

	-- Insert surname  

	SET @info=JSON_MODIFY(@info,'$.surname','Smith')

	PRINT @info

	-- Delete name  

	SET @info=JSON_MODIFY(@info,'$.name',NULL)

	PRINT @info

	-- Add skill  

	SET @info=JSON_MODIFY(@info,'append $.skills','Azure')

	PRINT @info



------------Example - Multiple updates--------------


	DECLARE @info NVARCHAR(100)='{"name":"John","skills":["C#","SQL"]}'

	PRINT @info

	-- Multiple updates  

	SET @info=JSON_MODIFY(JSON_MODIFY(JSON_MODIFY(@info,'$.name','Mike'),'$.surname','Smith'),'append $.skills','Azure')

	PRINT @info



-------------Example - Rename a key----------------

	DECLARE @product NVARCHAR(100)='{"price":49.99}'

	PRINT @product

	-- Rename property  

	SET @product=
	 JSON_MODIFY(
	  JSON_MODIFY(@product,'$.Price',CAST(JSON_VALUE(@product,'$.price') AS NUMERIC(4,2))),
	  '$.price',
	  NULL
	 )

	PRINT @product


------------------Example - Increment a value-----------
	DECLARE @stats NVARCHAR(100)='{"click_count": 173}'

	PRINT @stats

	-- Increment value  

	SET @stats=JSON_MODIFY(@stats,'$.click_count',
	 CAST(JSON_VALUE(@stats,'$.click_count') AS INT)+1)

	PRINT @stats


-------------Example - Modify a JSON object------------------

	DECLARE @info NVARCHAR(100)='{"name":"John","skills":["C#","SQL"]}'

	PRINT @info

	-- Update skills array

	SET @info=JSON_MODIFY(@info,'$.skills','["C#","T-SQL","Azure"]')

	PRINT @info


----------------------------- JSON_QUERY function---------------------------------------

	DECLARE @info NVARCHAR(100)='{"name":"John","skills":["C#","SQL"]}'

	PRINT @info

	-- Update skills array  

	SET @info=JSON_MODIFY(@info,'$.skills',JSON_QUERY('["C#","T-SQL","Azure"]'))

	PRINT @info