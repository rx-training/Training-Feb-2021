
---------------------------CHECK FOR VALID USER DATA

DECLARE @out nvarchar(50)
	, @response nvarchar(50)

EXEC Employees.udpCheckPassword
	@pUserName = 'TarunMoradiya',
	@pPassword = 'tarun123',
	@pOut = @out OUTPUT,
	@responseMessage = @response OUTPUT

PRINT 'Username or Password is ' + @out
PRINT 'ResponseMessage: ' + @response
GO

-----------------------------CHECK FOR INVALID USER DATA

DECLARE @out nvarchar(50)
	, @response nvarchar(50)

EXEC Employees.udpCheckPassword
	@pUserName = 'TarunMoradiya1',
	@pPassword = 'tarun123',
	@pOut = @out OUTPUT,
	@responseMessage = @response OUTPUT

PRINT 'Username or Password is ' + @out
PRINT 'ResponseMessage: ' + @response
GO

DECLARE @out nvarchar(50)
	, @response nvarchar(50)

EXEC Employees.udpCheckPassword
	@pUserName = 'TarunMoradiya',
	@pPassword = 'tarun124',
	@pOut = @out OUTPUT,
	@responseMessage = @response OUTPUT

PRINT 'Username or Password is ' + @out
PRINT 'ResponseMessage: ' + @response
GO

