Use Employees;

--first
Update Employees set Email= 'Not available', CommissionPct=0.10;

--Second
Update Employees set Email= 'Navailable', CommissionPct=0.50 where DepartmentID=110;

--Third
Update Employees set Email= 'available' where DepartmentID=80 AND CommissionPct<0.20;

--Forth

Update Employees set Email= 'available for email' where DepartName=Accounting;\

--Fifth
Update Employees set Salary= 8000 where EmployeeID=105 And Salary<5000;

--Sixth
Update Employees set JobId= 'SH_CLERk' where EmployeeID=118 And DepartmentID=30 And Not JobId Like 'SH%' ;


--Seaven
Update Employees set Salary =Case DepartmentID
										when 40 then Salary+(Salary*.25)
										when 90 then Salary+(Salary*.15)
										When 110 then Salary+(Salary*.10)
										Else Salary
										End
										Where DepartmentID In(40,50,60,70,80,90,110)



