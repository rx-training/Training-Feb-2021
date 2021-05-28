CREATE DATABASE AssignmentDay29
GO

USE AssignmentDay29;
GO

CREATE SCHEMA Practice;
CREATE SCHEMA Assignment;

CREATE TABLE Employees(
    Id int CONSTRAINT PkEid PRIMARY KEY IDENTITY,
    Name varchar(30) NOT NULL,
    Address varchar(40) NOT NULL
)

CREATE TABLE Salary(
    Id int CONSTRAINT FkSid FOREIGN KEY REFERENCES Employees(Id),
    Month varchar(30) NOT NULL,
    Salary int NOT NULL
)

ALTER SCHEMA Practice TRANSFER dbo.Employees;
GO
ALTER SCHEMA Practice TRANSFER dbo.Salary;
GO

SELECT * FROM Practice.Employees;
GO

SELECT * FROM Practice.Salary;
GO

SELECT e.Name,e.Address,s.Month,s.Salary FROM Practice.Employees e JOIN Practice.Salary s ON e.Id=s.Id;
Go

SELECT e.Name,e.Address,s.Month,s.Salary FROM Practice.Employees e LEFT OUTER JOIN Practice.Salary s ON e.Id=s.Id;
Go

SELECT e.Name,e.Address,s.Month,s.Salary FROM Practice.Employees e FULL JOIN Practice.Salary s ON e.Id=s.Id;
Go