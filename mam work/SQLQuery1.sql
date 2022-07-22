select * from Products

select ProductName 'Pname', QuantityPerUnit from Products


select * from products where UnitsInStock>0


select * from Products where UnitPrice <=20

select * from products where Discontinued=1

select * from Products where UnitPrice >=20 and UnitPrice <= 40

select * from Products where UnitPrice between 20 and  40


select * from Orders

select * from Orders where Freight >=50

select * from Orders where ShippedDate>='1996-07-11'

select * from Orders where EmployeeID = 3

select * from Orders where ShipName ='Hanari Carnes'

select * from Products where ProductName like 'e%' and UnitPrice>15

select count(UnitsInStock)'sum' from Products where Discontinued>0

select SupplierID, count(productId) 'Number od products supplied' from products
 group by SupplierID

select CategoryID,round(avg(UnitPrice),2)'avgrage unit price ' from products group by CategoryID

select CustomerID ,sum(orderid) orders

select ShipName, sum(Freight)'Total Freight Paid' from Orders
where ShipName like '%a%'
group by ShipName 
having sum(Freight)>100

select *from Orders order by ShipName  desc

select ShipName, sum(Freight)'Total Freight Paid' from Orders
where ShipName like '%a%'
group by ShipName 
having sum(Freight)>100
order by 2 desc

select * from orders where shipcity='México D.F.'
