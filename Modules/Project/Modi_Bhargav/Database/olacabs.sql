CREATE DATABASE OlaCabs
USE OlaCabs

CREATE TABLE CustomerData 
      (
	   CId int NOT NULL PRIMARY KEY,
	   CName nvarchar(50) NOT NULL,
	   Password nvarchar(30) NOT NULL,
	   ContactNo varchar(10) NOT NULL,
	   Address nvarchar(100) NOT NULL
	  )
SELECT * FROM CustomerData

CREATE TABLE DriverData 
      (
	  DId int NOT NULL PRIMARY KEY,
	  Name varchar(50) NOT NULL,
	  Password varchar(20) NOT NULL,
	  LicenseNo nvarchar(20) NOT NULL,
	  ContactNo nvarchar(10) NOT NULL
	  )
SELECT * FROM DriverData


CREATE TABLE CarData 
       (
	   DId int CONSTRAINT didfk FOREIGN KEY REFERENCES DriverData(DId),
	   CarId int NOT NULL PRIMARY KEY,
	   RNumber nvarchar(30) NOT NULL,
	   TypeId nvarchar(30) NOT NULL
	   )
SELECT * FROM CarData


CREATE TABLE TripInfo
       (
       CId int CONSTRAINT cidfk FOREIGN KEY REFERENCES CustomerData(CId),
	   CarId int CONSTRAINT caidfk FOREIGN KEY REFERENCES CarData(CarId),
	   TripId int NOT NULL PRIMARY KEY,
	   Time datetime NOT NULL,
	   FareDetails nvarchar(50) NOT NULL,
	   Source nvarchar(50) NOT NULL,
	   Destination nvarchar(50) NOT NULL,
	   PaymentType nvarchar(30) NOT NULL
	   ) 
SELECT * FROM TripInfo

CREATE OR ALTER PROCEDURE CustomersData
             @cid int,@name nvarchar(20),@password nvarchar(30),@no nvarchar(10),@address nvarchar(30)   
      AS
	  BEGIN
	       INSERT INTO CustomerData VALUES (@cid,@name,@password,@no,@address)
      END

EXECUTE CustomersData 1,'Bhargav','Modi@321','9924342506','Patan'
EXECUTE CustomersData 2,'Meet','Meet@123','8829234567','Mehsana'
EXECUTE CustomersData 3,'Parth','Parth@234','8755544335','Surat'

CREATE OR ALTER PROCEDURE DriversData
             @did int,@name nvarchar(20),@password nvarchar(30),@no nvarchar(10),@address nvarchar(30)   
      AS
	  BEGIN
	       INSERT INTO DriverData VALUES (@did,@name,@password,@no,@address)
      END

EXECUTE DriversData 101,'Paresh','paresh@1','5955585557','Ahemdabad'
EXECUTE DriversData 102,'Vinod','vi@123','8829234567','Ahemdabad'

CREATE OR ALTER PROCEDURE CarsData
             @did int,@cid nvarchar(20),@rno nvarchar(30),@type nvarchar(10)
      AS
	  BEGIN
	       INSERT INTO CarData VALUES (@did,@cid,@rno,@type)
      END
	   
EXECUTE CarsData 101,001,'Gj01ad2425','mini'
EXECUTE CarsData 102,002,'Gj01bc4567','prime'

CREATE OR ALTER PROCEDURE TripsData 
            @cid int, @carid int , @tripid int , @time datetime, @faredetails nvarchar(20), @source nvarchar(30)
			,@destination nvarchar(30) , @paymentType nvarchar(20)

          AS
		  BEGIN
		       INSERT INTO TripInfo VALUES (@cid,@carid,@tripid,@time,@faredetails,@source,@destination,@paymentType)
		  END

EXECUTE TripsData 2,001,1001,'2021/01/17 11:15:25','Rs.240','Gota Char Line','NavrangPura','upi'
EXECUTE TripsData 1,002,1002,'2021/02/20 4:15:30','Rs.150','Bopal Road','Vejalpur','cash'

.


            