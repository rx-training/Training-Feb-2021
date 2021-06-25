/*Write a SQL statement to create a table named countries including columns CountryId, CountryName and RegionId and make sure that no countries 
except Italy, India and China will be entered in the table. and combination of columns CountryId and RegionId will be unique.*/

CREATE TABLE Countries(
CountryId int NOT NULL,
CountryName varchar(20) NOT NULL CONSTRAINT chkCountry CHECK (CountryName IN('Italy', 'India', 'China')),
RegionId int NOT NULL,
CONSTRAINT unCountries  UNIQUE(CountryId, RegionId)
)

/*Write a SQL statement to create a table named JobHistory including columns EmployeeId, StartDate, End_Eate, Job_Id and Department_Id 
and make sure that the value against column EndDate will be entered at the time of insertion to the format like ‘–/–/—-‘.*/

CREATE TABLE JobHistories (
EmployeeId int NOT NULL CONSTRAINT pkEmployee PRIMARY KEY, 
StartDate date NOT NULL, 
End_Date date NOT NULL, 
Job_Id int NOT NULL,
Department_Id int NOT NULL,
)

/*Write a SQL statement to create a table named jobs including columns JobId, JobTitle, MinSalary and MaxSalary, and make sure that, 
the default value for JobTitle is blank and MinSalary is 8000 and MaxSalary is NULL will be entered automatically at the time of insertion 
if no value assigned for the specified columns.*/

CREATE TABLE Jobs(
JobId int NOT NULL CONSTRAINT pkJobId PRIMARY KEY, 
JobTitle varchar(50) CONSTRAINT defJobTitle DEFAULT '', 
MinSalary int CONSTRAINT defMinSal DEFAULT 8000,
MaxSalary int CONSTRAINT defMaxSal DEFAULT NULL,
)

/*Write a SQL statement to create a table employees including columns Employee_Id, FirstName, LastName, Email, PhoneNumber, Hire_Date, Job_Id, Salary,
Commission, Manager_Id and Department_Id and make sure that, the Employee_Id column does not contain any duplicate value at the time of insertion, 
and the foreign key column DepartmentId, reference by the column DepartmentId of Departments table, can contain only those values which are exists in the 
Department table and another foreign key column JobId, referenced by the column JobId of jobs table, can contain only those values which are exists in 
the jobs table.*/

CREATE TABLE Departments(
Department_id int CONSTRAINT pkDepId PRIMARY KEY,
Department_name varchar(20) NOT NULL
)

CREATE TABLE Employees(
Employee_Id int NOT NULL CONSTRAINT pkEmployeeId PRIMARY KEY, 
FirstName varchar(20) NOT NULL, 
LastName varchar(20), 
Email varchar(20), 
PhoneNumber varchar(20), 
Hire_Date date , 
Job_Id int NOT NULL CONSTRAINT fkJobId FOREIGN KEY REFERENCES Jobs(JobId), 
Salary money NOT NULL,
Commission money NOT NULL, 
Manager_Id int NOT NULL,
Department_Id int NOT NULL CONSTRAINT fkDepId FOREIGN KEY REFERENCES Departments(Department_id),
)