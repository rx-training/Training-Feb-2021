USE AdventureWorks2012
--Alias
SELECT Production.Product.Name
FROM Production.Product;

SELECT P.Name
From Production.Product P;

--INNER JOIN
SELECT PC.Name As 'CategoryName',
	   PS.Name As 'SubCategoryName',
	   PC.ProductCategoryID AS 'PC-ProductCategoryID',
	   PS.ProductSubcategoryID AS 'PC-ProductCategoryID'
FROM Production.ProductCategory As PC
INNER JOIN Production.ProductSubcategory AS PS 
	ON PC.ProductCategoryID = PS.ProductSubcategoryID;

--OUTER JOIN
SELECT PC.Name AS CategoryName,
	   PS.Name AS SubCategoryName
FROM Production.ProductCategory AS PC
LEFT OUTER JOIN Production.ProductSubcategory AS PS
	ON PC.ProductCategoryID = PS.ProductSubcategoryID;

SELECT PS.Name AS SubCategoryName,
	   PC.Name AS CategoryName
FROM Production.ProductSubcategory AS PS
LEFT OUTER JOIN Production.ProductCategory AS PC
	ON PC.ProductCategoryID = PS.ProductSubcategoryID;


SELECT PC.Name AS CategoryName,
	   PS.Name AS SubCategoryName
FROM Production.ProductCategory AS PC
RIGHT OUTER JOIN Production.ProductSubcategory AS PS
	ON PC.ProductCategoryID = PS.ProductSubcategoryID;

SELECT PP.FirstName,
	PB.ModifiedDate,
	PB.rowguid
FROM Person.Person AS PP
LEFT OUTER JOIN Person.BusinessEntity AS PB
	ON PP.BusinessEntityID = PB.BusinessEntityID
WHERE PB.ModifiedDate = NULL;

--INNER JOIN
USE AdventureWorks2012;
SELECT LHS.BusinessEntityID
	, LHS.HireDate
	, RHS.BusinessEntityID
FROM HumanResources.Employee AS LHS
 INNER JOIN HumanResources.Employee AS RHS 
 ON LHS.HireDate = RHS.HireDate 
 AND LHS.BusinessEntityID< RHS.BusinessEntityID;

 --Cross JOIN
 USE AdventureWorks2012;
 SELECT PP.Name,
	HE.BirthDate
 FROM Production.Product AS PP
	, HumanResources.Employee AS HE;


-- SELF JOIN
USE SQLDay2
SELECT (MNG.FirstName + ' ' + MNG.LastName) AS ManagerName,
		COUNT(EMP.EmployeeID)
FROM Employees AS EMP
     JOIN Employees As MNG 
	 ON EMP.ManagerID = MNG.EmployeeID
	 GROUP BY EMP.ManagerID,
			MNG.FirstName + ' ' + MNG.LastName;

SELECT E.FirstName AS Manager,M.FirstName AS Employees
FROM Employees As E
    JOIN Employees AS M
	ON E.EmployeeID = M.ManagerID;


