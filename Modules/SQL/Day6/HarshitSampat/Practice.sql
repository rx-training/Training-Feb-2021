	USE AdventureWorks2016
GO
SELECT NAME
FROM Production.Product
WHERE ListPrice = (SELECT ListPrice FROM Production.Product WHERE Name = 'CHAINRING BOLTS');
GO

SELECT Prd1.NAME
FROM Production.Product AS prd1
 JOIN Production.Product AS prd2
	ON(prd1.ListPrice = Prd2.ListPrice)
	WHERE	 prd2. NAME = 'CHAINRING BOLTS'

	SELECT * FROM Production.Product

	------------------------ VIEW PRACTICE FROM THE DOCUMENTATION----------------------------
	CREATE VIEW HIREDATE_VIEW
	AS
	SELECT p.FIRSTNAME,p.LASTNAME,e.BUSINESSENTITYID,e.HIREDATE
	FROM HumanResources.Employee e
	JOIN Person.Person AS p ON  e.BusinessEntityID = p.BusinessEntityID

	SELECT FIRSTNAME,LASTNAME,HIREDATE,BusinessEntityID FROM HIREDATE_VIEW

	----------------------2 FROM DOCS-----------------------------------------------]
	CREATE VIEW PURCHASING.PurchaseOrderReject WITH ENCRYPTION
	AS 
	SELECT PURCHASEORDERID,ReceivedQty,REJECTEDQTY,
	REJECTEDQTY/RECEIVEDQTY AS REJECT_RATIO,DueDate
	FROM Purchasing.PurchaseOrderDetail
	WHERE RejectedQty/ReceivedQty>0
	AND DueDate > CONVERT (datetime,'20010630',101)
	
	SELECT * FROM Purchasing.PurchaseOrderReject

--------------------------------- 3 ---------------------------------------
