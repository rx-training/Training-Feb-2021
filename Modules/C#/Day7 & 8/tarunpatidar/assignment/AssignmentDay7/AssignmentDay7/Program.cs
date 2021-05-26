using System;
using System.Collections.Generic;
using System.Linq;

namespace AssignmentDay7
{
    class Employee

    {

        public int ID { get; set; }

        public string FirstName { get; set; }

        public string LastName { get; set; }

        public double Salary { get; set; }

        public DateTime JoiningDate { get; set; }

        public string Department { get; set; }

    }
    

    class Incentive

    {

        public int ID { get; set; }

        public double IncentiveAmount { get; set; }

        public DateTime IncentiveDate { get; set; }

    }

    class Program

    {

        static void Main(string[] args)

        {

            List<Employee> employees = new List<Employee>()

            {

                new Employee(){ ID=1,FirstName="John",LastName="Abraham",Salary=1000000,JoiningDate=new DateTime(2013,1,1),Department="Banking"},

                new Employee(){ID=2,FirstName="Michael",LastName="Clarke",Salary=800000,JoiningDate=new DateTime(),Department="Insurance" },

                new Employee(){ID=3,FirstName="oy",LastName="Thomas",Salary=700000,JoiningDate=new DateTime() ,Department="Insurance"},

                new Employee(){ID=4,FirstName="Tom",LastName="Jose",Salary=600000,JoiningDate=new DateTime() ,Department="Banking"},

                new Employee(){ID=4,FirstName="TestName2",LastName="Lname%",Salary=600000,JoiningDate=new DateTime(2013,1,1) ,Department="Services"}

            };

            List<Incentive> incentives = new List<Incentive>()

            {

                new Incentive(){ ID=1,IncentiveAmount=5000,IncentiveDate=new DateTime(2013,02,02)},

                new Incentive(){ID=2,IncentiveAmount=10000,IncentiveDate=new DateTime(2013,02,4)},

                new Incentive(){ID=1,IncentiveAmount=6000,IncentiveDate=new DateTime(2012,01,5)},

                new Incentive(){ID=2,IncentiveAmount=3000,IncentiveDate=new DateTime(2012,01,5)}

            };


            // Q.1 Get employee details from employees object whose employee name is “John” (note restrict operator)

            var Ass1 = from e in employees where e.FirstName == "John" select e;

            foreach(var item in Ass1)
            {
                Console.WriteLine($"{item.ID}\t {item.FirstName} {item.LastName}\t { item.Salary}\t {item.JoiningDate}\t {item.Department}");
            }
            Console.WriteLine(" ");


            // Q.2  Get FIRSTNAME,LASTNAMe from employees object(note project operator)

            var Ass2 = from e in employees select new { Name = e.FirstName + " " + e.LastName };

            foreach(var item in Ass2)
            {
                Console.WriteLine(item.Name);
            }
            Console.WriteLine(" ");


            // Q.3 Select FirstName, IncentiveAmount from employees and incentives object for those employees who have incentives.(join operator)

            var Ass3 = employees.GroupJoin(incentives, i => i.ID, e => e.ID, (e, i) => new
            {
                Name = e.FirstName,Detail = i
            });
            foreach(var item in Ass3)
            {
                Console.Write($"{item.Name}\t");

                foreach(var d in item.Detail)
                {
                    Console.WriteLine($"{d.IncentiveAmount}\t {d.IncentiveDate}");
                }
            }
            Console.WriteLine(" ");
            Console.WriteLine(" ");


            // Q.4 Get department wise maximum salary from employee table order by salary ascending (note group by)

            var Ass4 = employees.GroupBy(e => e.Department).Select(Group => new
            {
                Group.Key, MaxSalary = Group.Max(e => e.Salary)
            }).OrderBy(e => e.MaxSalary);
            Console.WriteLine("Department\tMaximumSalary");
            foreach(var group in Ass4)
            {
                Console.WriteLine($"{group.Key}\t {group.MaxSalary}");
            }
            Console.WriteLine(" ");


            // Q.5 Select department, total salary with respect to a department from employees object where total salary greater than 800000 order by TotalSalary descending(group by having)

            var Ass5 = employees.GroupBy(e => e.Department).Select(Group => new
            {
                Group.Key, TotalSalary = Group.Sum(e => e.Salary)
            }).Where(e => e.TotalSalary > 800000).OrderByDescending(e => e.TotalSalary);

            Console.WriteLine("Department\tTotalSalary");
            foreach(var group in Ass5)
            {
                Console.WriteLine($"{group.Key}\t {group.TotalSalary}");
            }
        }

    }
}
