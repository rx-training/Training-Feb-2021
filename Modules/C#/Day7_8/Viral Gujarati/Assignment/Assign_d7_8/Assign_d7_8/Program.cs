using System;
using System.Linq;
using System.Collections.Generic;


namespace Assign_d7_8
{

    class Program

    {

        static void Main(string[] args)

        {

            List<Employee> employees = new List<Employee>()

            {

                new Employee(){ ID=1,FirstName="John",LastName="Abraham",Salary=1000000,JoiningDate=new DateTime(2013,1,1),Deparment="Banking"},

                new Employee(){ID=2,FirstName="Michael",LastName="Clarke",Salary=800000,JoiningDate=new DateTime(),Deparment="Insurance" },

                new Employee(){ID=3,FirstName="oy",LastName="Thomas",Salary=700000,JoiningDate=new DateTime() ,Deparment="Insurance"},

                new Employee(){ID=4,FirstName="Tom",LastName="Jose",Salary=600000,JoiningDate=new DateTime() ,Deparment="Banking"},

                new Employee(){ID=4,FirstName="TestName",LastName="Lname%",Salary=600000,JoiningDate=new DateTime(2013,1,1) ,Deparment= "Services"}

            };

            List<Incentive> incentives = new List<Incentive>()

            {

                new Incentive(){ ID=1,IncentiveAmount=5000,IncentiveDate=new DateTime(2013,02,02)},

                new Incentive(){ID=2,IncentiveAmount=10000,IncentiveDate=new DateTime(2013,02,4)},

                new Incentive(){ID=1,IncentiveAmount=6000,IncentiveDate=new DateTime(2012,01,5)},

                new Incentive(){ID=2,IncentiveAmount=3000,IncentiveDate=new DateTime(2012,01,5)}

            };
            Console.WriteLine("-----------------------------");

            //1. Get employee details from employees object whose employee name is “John” (note restrict operator)

            var empdetail = employees.Where(s=>s.FirstName == "John"); 

            Console.WriteLine("Details of John:");

            foreach (Employee std in empdetail)
            {
                Console.WriteLine(std.ID + " " + std.FirstName + " " + std.LastName + " " + std.Salary + " " + std.JoiningDate + " "+ std.Deparment);
            }

            Console.WriteLine("-----------------------------");

            // 2. Get FIRSTNAME,LASTNAME from employees object(note project operator)
            var emp = employees.Select(s => (s.FirstName, s.LastName));

            Console.WriteLine("2. First Name and Last Name : ");
            foreach (var (FirstName, LastName) in emp)
            {
                Console.WriteLine(FirstName + " " + LastName);
            }
            Console.WriteLine("-----------------------------");


            // 3. Select FirstName, IncentiveAmount from employees and incentives object for those employees who have incentives.(join operator)
            var empincent = employees.Join(incentives, employees => employees.ID, incentives => incentives.ID,
                (employees, incentives) => (EmployeeName: employees.FirstName, incentives.IncentiveAmount
                ));

            Console.WriteLine("3. First Name and Incentive Amount : ");
            foreach (var (EmployeeName, IncentiveAmount) in empincent)

            {
                Console.WriteLine(EmployeeName + " " + IncentiveAmount);
            }
            Console.WriteLine("------------------------------");


            // 4. Get department wise maximum salary from employee table order by salary ascending (note group by)
            var sal = employees.GroupBy(s => s.Deparment).Select(s => new {
                Department = s.Key,
                Salary = s.Max(s => s.Salary)
            }).OrderBy(s => s.Salary);

            Console.WriteLine("4. Department wise maximum salary from employee : ");
            foreach (var item in sal)
            {
                Console.WriteLine(item.Department + " " + item.Salary);
            }
            Console.WriteLine();


            // 5. Select department, total salary with respect to a department from employees object where total salary greater than 800000 order by TotalSalary descending(group by having)
            var dep = employees.GroupBy(s => s.Deparment).Select(s => new
            {
                Department = s.Key,
                Salary = s.Sum(s => s.Salary)
            }).Where(s => s.Salary > 800000).OrderByDescending(s => s.Salary);

            Console.WriteLine("5. Total salary greater than 800000 : ");
            foreach (var item in dep)
            {
                Console.WriteLine(item.Department + " " + item.Salary);
            }
        }
    }
}