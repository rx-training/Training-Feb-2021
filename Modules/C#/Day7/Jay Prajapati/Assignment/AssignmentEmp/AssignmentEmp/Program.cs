using System;
using System.Collections;
using System.Collections.Generic;
using System.Linq;

namespace AssignmentEmp
{
    class Program
    {
        static void Main(string[] args)
        {
            List<Employees> employees1 = new List<Employees>()
            {
                new Employees()
                {
                    ID = 1,
                    FirstName = "John",
                    LastName = "Abraham",
                    Salary = 1000000,
                    JoiningDate = new DateTime(2013,1,1),
                    Department = "Banking"
                },
                new Employees()
                {
                    ID = 2,
                    FirstName = "Micheal",
                    LastName = "Clarke",
                    Salary = 800000,
                    JoiningDate = new DateTime(2013,1,1),
                    Department = "Insurance"
                },
                new Employees()
                {
                    ID = 3,
                    FirstName = "oy",
                    LastName = "Thomas",
                    Salary = 700000,
                    JoiningDate = new DateTime(2013,1,1),
                    Department = "Insurance"
                },
                new Employees()
                {
                    ID = 4,
                    FirstName = "Tom",
                    LastName = "Jose",
                    Salary = 600000,
                    JoiningDate = new DateTime(2013,1,1),
                    Department = "Banking"
                },
                new Employees()
                {
                    ID = 4,
                    FirstName = "TestName2",
                    LastName = "Lname%",
                    Salary = 600000,
                    JoiningDate = new DateTime(2013,1,1),
                    Department = "services"
                }
            };
            List<Incentives> incentives = new List<Incentives>()
            {
                new Incentives()
                {
                    ID = 1,
                    IncentiveAmount = 5000,
                    IncentiveDate = new DateTime(2013,02,02)
                },
                new Incentives()
                {
                    ID = 2,
                    IncentiveAmount = 10000,
                    IncentiveDate = new DateTime(2013,02,4)
                },
                new Incentives()
                {
                    ID = 1,
                    IncentiveAmount = 6000,
                    IncentiveDate = new DateTime(2012,01,05)
                },
                new Incentives()
                {
                    ID = 2,
                    IncentiveAmount = 3000,
                    IncentiveDate = new DateTime(2012,01,05)
                }
            };

             //1. Get employee details from employees object whose
             //employee name is "John" (note resctice operator)
            var emp = from e in employees1
                      where e.FirstName == "John"
                      select e;
            
            foreach (var item in emp)
            {
                Console.WriteLine($"{item.ID}\t{item.FirstName}\t{item.LastName}\t{item.Salary}\t{item.JoiningDate}\t{item.Department}");
            }

            //2. Get FIRSTNAME,LASTNAMe from employees object(note project operator)

            var emp3 = from e in employees1
                       select new
                       {
                           e.FirstName,
                           e.LastName
                       };
            foreach (var item in emp3)
            {
                Console.WriteLine($"{item.FirstName}\t{item.LastName}");
            }

            //3.  Select FirstName, IncentiveAmount from employees
            //and incentives object for those employees who have incentives.(join operator)
            var emp1 = from e in employees1
                       join i in incentives
                       on e.ID equals i.ID
                       select new
                       {
                           FirstName = e.FirstName,
                           IncentiveAmount = i.IncentiveAmount,
                       };
            foreach (var item in emp1)
            {
                Console.WriteLine($"{item.FirstName}\t{item.IncentiveAmount}");
            }

            //Get department wise maximum salary from employee table
            //order by salary ascending (note group by)

            //var emp4 = from e in employees1
            //           group e by e.Department into g
            //           select ;
                       //select new { salary = g.Max(s => s.Salary) };

            //foreach (var item in emp4)
            //{
            //    Console.WriteLine($"{item}");
            //}


            Console.WriteLine("Get department wise maximum salary from employee table order by salary ascending (note group by)");
            var emp7 = employees1.GroupBy(e=>e.Department).Select(e=> (Department: e.Key, Salary: e.Max(s => s.Salary))).OrderBy(e=>e.Salary);



            foreach (var item in emp7)
            {
                Console.WriteLine($"{item.Department}\t\t{item.Salary}");
            }




            //Select department, total salary with respect to a department
            //from employees object where total salary greater than 800000
            //order by TotalSalary descending(group by having)


            //var emp5 = from e in employees1
            //           group e by e.Department into g
            //           
            Console.WriteLine("Select department, total salary with respect to a department from employees object where total salary greater than 800000 order by TotalSalary descending(group by having)");

            var emp8 = employees1.GroupBy(e => e.Department).Select(e => (Department : e.Key, TotalSalary : e.Sum(s => s.Salary))).Where(e=>e.TotalSalary>800000).OrderByDescending(e => e.TotalSalary);

            foreach (var item in emp8)
            {
                Console.WriteLine($"{item.Department}\t\t{item.TotalSalary}");
            }

        }
    }
}
