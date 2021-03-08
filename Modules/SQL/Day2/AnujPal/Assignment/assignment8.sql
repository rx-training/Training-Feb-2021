UPDATE Employees SET Salary= CASE DepartmentID
                          WHEN 40 THEN Salary+(salary*.25) 
                          WHEN 90 THEN Salary+(salary*.15)
                          WHEN 110 THEN Salary+(salary*.10)
                          ELSE Salary
                        END
             WHERE DepartmentID IN (40,50,50,60,70,80,90,110);

select* from Employees