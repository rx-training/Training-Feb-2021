                        /*********  Assignment  **********/
/***** 1.Create a batch Select Banking as ‘Bank Dept’, Insurance as ‘Insurance Dept’ and Services as ‘Services Dept’ 
          from employee table. *****/
USE DayTwo
SELECT FirstName , LastName, CASE DepartmentID
              WHEN 30 THEN 'Deposit Dept'
              WHEN 50 THEN 'Bank Dept'
			  WHEN 60 THEN 'Insurance Dept'
			  WHEN 80 THEN 'Services Dept'
			  WHEN 90 THEN 'Loan Dept'
			  WHEN 100 THEN 'Withdraw Dept'
			  END AS 'Department Name'
FROM Employees

/***** 2. 5 Students Name, Address, City, DOB, Standard need to be inserted in the student table, 
          need to fetch these result from json variable. and select output in the json format.*****/

DECLARE @json nvarchar(MAX)

SET @json = N'{
                       "Students":[
					                  {
						               "Name"    :"Bhargav",
									   "Address" :"Ratan Pol",
									   "City"    :"Patan",
									   "DOB"     :"1998-12-20",
									   "Standard":12
						              },
									  {
						               "Name"    :"Meet",
									   "Address" :"Ambika Nager",
									   "City"    :"Patan",
									   "DOB"     :"1998-05-21",
									   "Standard":12
						              },
									  {
						               "Name"    :"Tirth",
									   "Address" :"Gopi Park",
									   "City"    :"Mehsana",
									   "DOB"     :"1999-05-10",
									   "Standard":12
						              },
									  {
						               "Name"    :"Jalpa",
									   "Address" :"Nigam Nager",
									   "City"    :"Unjha",
									   "DOB"     :"1999-02-15",
									   "Standard":12
						              },
									  {
						               "Name"    :"Parth",
									   "Address" :"Shah Nager",
									   "City"    :"Unjha",
									   "DOB"     :"1999-02-15",
									   "Standard":12
						              }
							     ]
                      }';

SELECT * INTO Student FROM
               OPENJSON (@json, N'$.Students')
             WITH(
                      Name nvarchar(200) N'$.Name',
	                  Address nvarchar(200) N'$.Address',
	                  City nvarchar(200) N'$.City',
	                  DateOfBirth date  N'$.DOB',
	                  Standard int N'$.Standard'
                 )

SELECT * FROM Student

SELECT * FROM Students FOR JSON AUTO
