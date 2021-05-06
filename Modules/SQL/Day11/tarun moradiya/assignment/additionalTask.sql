
/*Create a listing of all Faculty Members (First and Last), their Faculty Position and the University that they are affiliated with (Name),
along with their Monthly_Dues (Calculated Field with a column alias). Sort the records in descending order by University and then by Faculty's 
last name in ascending order. */

SELECT M.FirstName
	, M.LastName
	, P.Position
	, C.CampusName
	, CAST(ROUND((P.YearlyMembershipFee / 12), 2) AS decimal(7, 2)) AS 'Monthly_Dues'
FROM Members M JOIN Positions P
ON M.PositionID = P.PositionID
JOIN Campuses C
ON C.CampusID = M.CampusID
ORDER BY C.CampusName, M.LastName


/*Create a listing that shows the various food items that the faculty club serves (Name of the food item, type of food item and the price of
the food item). Note: List no alcoholic beverages. Sort the records in ascending order by price. */

SELECT F.FoodItemName
	, P.MealType
	, P.MealPrice
FROM FoodItems F JOIN Prices P
ON P.FoodItemTypeID = F.FoodItemTypeID
WHERE P.MealType != 'Beer/Wine'
ORDER BY P.MealPrice



/*List the OrderID, Order Date, Faculty Member's Name, Campus Name, each FoodItem that makes up a given order, the type of meal, 
cost of the meal, quantity ordered and the total line total (calculated field and column alias). Sort by Order IDs in descending order. */

SELECT O.OrderID
	, O.OrderDate 
	, CONCAT(M.FirstName, ' ', M.LastName) AS 'Member_Name'
	, C.CampusName
	, F.FoodItemName
	, P.MealType
	, P.MealPrice
	, OL.Quantity
	, (P.MealPrice * OL.Quantity) AS 'Total'
FROM Orders O JOIN Members M
ON O.MemberID = M.MemberID
JOIN Campuses C 
ON C.CampusID = M.CampusID
JOIN OrderLines OL
ON OL.OrderID = O.OrderID
JOIN FoodItems F
ON OL.FoodItemsID = F.FoodItemID
JOIN Prices P
ON P.FoodItemTypeID = F.FoodItemTypeID
ORDER BY O.OrderID DESC

