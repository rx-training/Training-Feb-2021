SELECT ProductID, Purchasing.Vendor.BusinessEntityID, Name
FROM Purchasing.ProductVendor INNER JOIN Purchasing.Vendor
    ON (Purchasing.ProductVendor.BusinessEntityID = Purchasing.Vendor.BusinessEntityID)
WHERE StandardPrice > $10
  AND Name LIKE 'F%'
GO

select * from Purchasing.ProductVendor
select * from Purchasing.Vendor

select ProductID,StandardPrice,Name,LastReceiptCost FROM Purchasing.ProductVendor INNER JOIN Purchasing.Vendor
ON(Purchasing.ProductVendor.BusinessEntityID = Purchasing.Vendor.BusinessEntityID) WHERE StandardPrice > $10 AND LastReceiptCost > 50

select ProductID,StandardPrice,Name,LastReceiptCost FROM Purchasing.ProductVendor AS pv INNER JOIN Purchasing.Vendor AS v
ON(pv.BusinessEntityID = v.BusinessEntityID) WHERE StandardPrice > $10 AND LastReceiptCost > 50