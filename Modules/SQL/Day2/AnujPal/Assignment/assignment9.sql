/*   Write a SQL statement to increase the minimum and maximum salary of PU_CLERK by 2000 as well as the salary for those employees by 20% and commission by 10% .*/


UPDATE jobs,employees
SET Jobs.MinSalary=Jobs.MinSalary+2000,
Jobs.MaxSalary=Jobs.MaxSalary+2000,
Employees.Salary=Employees.Salary+(Employees.Salary*.20),
Employees.Commision_pct=Employees.Commision_pct
WHERE Jobs.Jobid='PU_CLERK'
AND Employees.Jobs.Jobid='PU_CLERK';