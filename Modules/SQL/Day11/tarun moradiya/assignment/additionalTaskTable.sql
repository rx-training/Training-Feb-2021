CREATE TABLE Campuses (
CampusID nvarchar(5) CONSTRAINT Campuses_CampusId_PK PRIMARY KEY,
CampusName varchar(50),
Street varchar(50),
City varchar(50),
State varchar(50),
Zip varchar(50),
Phone varchar(50),
CampusDiscount decimal(2,2))

CREATE TABLE Positions (
PositionID nvarchar(5) CONSTRAINT Positions_PositionID_PK PRIMARY KEY,
Position varchar(50),
YearlyMembershipFee Decimal(7,2))

CREATE TABLE Members (
MemberID nvarchar(5) CONSTRAINT Members_MemberID_PK PRIMARY KEY,
LastName varchar(50),
FirstName varchar(50),
CampusAddress varchar(50),
CampusPhone varchar(50), 
CampusID nvarchar(5) CONSTRAINT Members_CampusID_FK FOREIGN KEY REFERENCES Campuses(CampusID),
PositionID nvarchar(5) CONSTRAINT Members_PositionID_FK FOREIGN KEY REFERENCES Positions(PositionID), 
ContractDuration int CONSTRAINT Members_ContractDuration_CHK CHECK (ContractDuration >= 0 AND ContractDuration <= 999))
     
CREATE TABLE Prices (
FoodItemTypeID int CONSTRAINT Prices_FoodItemTypeID_PK PRIMARY KEY IDENTITY(1,1),
MealType varchar(50),
MealPrice Decimal(7,2))

CREATE TABLE FoodItems (
FoodItemID nvarchar(5) CONSTRAINT FoodItems_FoodItemID_PK PRIMARY KEY,
FoodItemName varchar(50),
FoodItemTypeID int CONSTRAINT FoodItems_FoodItemTypeID_FK FOREIGN KEY REFERENCES Prices(FoodItemTypeID))

CREATE TABLE Orders (
OrderID nvarchar(5) CONSTRAINT Orders_OrderID_PK PRIMARY KEY,
MemberID nvarchar(5) CONSTRAINT Orders_MemberID_FK FOREIGN KEY REFERENCES Members(MemberID),
OrderDate date)

CREATE TABLE OrderLines (
OrderID nvarchar(5) CONSTRAINT OrderLines_OrderID_FK FOREIGN KEY REFERENCES Orders(OrderID),
FoodItemsID nvarchar(5) CONSTRAINT OrderLines_FoodItemsID_FK FOREIGN KEY REFERENCES FoodItems(FoodItemID),
Quantity int NOT NULL CONSTRAINT OrderLInes_Quantity_CHK CHECK (Quantity >= 0 AND Quantity <= 999),
)

INSERT INTO Campuses
VALUES
('1','IUPUI','425 University Blvd.','Indianapolis', 'IN','46202', '317-274-4591',.08),
('2','Indiana University','107 S. Indiana Ave.','Bloomington', 'IN','47405', '812-855-4848',.07),
('3','Purdue University','475 Stadium Mall Drive','West Lafayette', 'IN','47907', '765-494-1776',.06)
 
INSERT INTO Positions
VALUES
('1','Lecturer', 1050.50),
('2','Associate Professor', 900.50),
('3','Assistant Professor', 875.50),
('4','Professor', 700.75),
('5','Full Professor', 500.50)
 
INSERT INTO Members
VALUES
('1','Ellen','Monk','009 Purnell', '812-123-1234', '2', '5', 12),
('2','Joe','Brady','008 Statford Hall', '765-234-2345', '3', '2', 10),
('3','Dave','Davidson','007 Purnell', '812-345-3456', '2', '3', 10),
('4','Sebastian','Cole','210 Rutherford Hall', '765-234-2345', '3', '5', 10),
('5','Michael','Doo','66C Peobody', '812-548-8956', '2', '1', 10),
('6','Jerome','Clark','SL 220', '317-274-9766', '1', '1', 12),
('7','Bob','House','ET 329', '317-278-9098', '1', '4', 10),
('8','Bridget','Stanley','SI 234', '317-274-5678', '1', '1', 12),
('9','Bradley','Wilson','334 Statford Hall', '765-258-2567', '3', '2', 10)

INSERT INTO Prices(MealType, MealPrice)
VALUES
('Beer/Wine', 5.50),
('Dessert', 2.75),
('Dinner', 15.50), 
('Soft Drink', 2.50), 
('Lunch', 7.25)

INSERT INTO FoodItems
VALUES
('10001','Lager', '1'),
('10002','Red Wine', '1'),
('10003','White Wine', '1'),
('10004','Coke', '4'),
('10005','Coffee', '4'),
('10006','Chicken a la King', '3'),
('10007','Rib Steak', '3'),
('10008','Fish and Chips', '3'),
('10009','Veggie Delight', '3'),
('10010','Chocolate Mousse', '2'),
('10011','Carrot Cake', '2'),
('10012','Fruit Cup', '2'),
('10013','Fish and Chips', '5'),
('10014','Angus Beef Burger', '5'),
('10015','Cobb Salad', '5')

INSERT INTO Orders
VALUES
('1', '9', 'March 5, 2015'),
('2', '8', 'March 5, 2015'),
('3', '7', 'March 5, 2015'),
('4', '6', 'March 7, 2015'),
('5', '5', 'March 7, 2015'),
('6', '4', 'March 10, 2015'),
('7', '3', 'March 11, 2015'),
('8', '2', 'March 12, 2015'),
('9', '1', 'March 13, 2015')

INSERT INTO OrderLines
VALUES
('1','10001',1),
('1','10006',1),
('1','10012',1),
('2','10004',2),
('2','10013',1),
('2','10014',1),
('3','10005',1),
('3','10011',1),
('4','10005',2),
('4','10004',2),
('4','10006',1),
('4','10007',1),
('4','10010',2),
('5','10003',1),
('6','10002',2),
('7','10005',2),
('8','10005',1),
('8','10011',1),
('9','10001',1)