using System;
using System.Linq;
using System.Collections.Generic;


namespace day7Assign
{
    public class Employee

    {

        public int ID { get; set; }

        public string FirstName { get; set; }

        public string LastName { get; set; }

        public double Salary { get; set; }

        public DateTime JoiningDate { get; set; }

        public string Deparment { get; set; }

    }

    public class Incentive

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

                new Employee(){ ID=1,FirstName="John",LastName="Abraham",Salary=1000000,JoiningDate=new DateTime(2013,1,1),Deparment="Banking"},

                new Employee(){ID=2,FirstName="Michael",LastName="Clarke",Salary=800000,JoiningDate=new DateTime(),Deparment="Insurance" },

                new Employee(){ID=3,FirstName="oy",LastName="Thomas",Salary=700000,JoiningDate=new DateTime() ,Deparment="Insurance"},

                   new Employee(){ID=4,FirstName="Tom",LastName="Jose",Salary=600000,JoiningDate=new DateTime() ,Deparment="Banking"},

                      new Employee(){ID=4,FirstName="TestName2",LastName="Lname%",Salary=600000,JoiningDate=new DateTime(2013,1,1) ,Deparment="Services"}

            };

            List<Incentive> incentives = new List<Incentive>()

            {

                new Incentive(){ ID=1,IncentiveAmount=5000,IncentiveDate=new DateTime(2013,02,02)},

                new Incentive(){ID=2,IncentiveAmount=10000,IncentiveDate=new DateTime(2013,02,4)},

                new Incentive(){ID=1,IncentiveAmount=6000,IncentiveDate=new DateTime(2012,01,5)},

                new Incentive(){ID=2,IncentiveAmount=3000,IncentiveDate=new DateTime(2012,01,5)}

            };


            //1. Get employee details from employees object whose employee name is “John” (note restrict operator)


            Console.WriteLine(" 1. Get employee details from employees object whose employee name is “John” (note restrict operator)");
            IEnumerable<Employee> employee = employees.Where(emp => emp.FirstName == "John");


            foreach(Employee emp in employee)
            {
                Console.WriteLine("ID--{0} \n FistANme--{1} \n LastNAme--{2} \n Salary--{3} \n JoiningDate--{4} \n Department-- {5}",  emp.ID,emp.FirstName,emp.LastName,emp.Salary,emp.JoiningDate,emp.Deparment);
            }


            //2. Get FIRSTNAME,LASTNAMe from employees object(note project operator)
            //projection operation are select statement :

            Console.WriteLine("\n2.Get FIRSTNAME,LASTNAMe from employees object(note project operator)\n");
            var selectName = employees.Select(e => new
            {
                ID = e.ID,
                FirstName = e.FirstName,
                LastName = e.LastName
            });

            foreach (var item in selectName)
                Console.WriteLine("Employee Name {0} : {1} {2}", item.ID, item.FirstName, item.LastName);

            //3. Select FirstName, IncentiveAmount from employees and incentives object for those employees who have incentives.(join operator)

            Console.WriteLine("\nSelect FirstName, IncentiveAmount from employees\n ");


            var innerJoinResult = from e in employees // outer sequence
                                  join i in incentives //inner sequence 
                                  on e.ID equals i.ID // key selector 
                                  select new
                                  { // result selector 
                                      EmployeeName = e.FirstName,
                                      IncentiveAmount = i.IncentiveAmount
                                  };

            foreach (var obj in innerJoinResult)
            {

                Console.WriteLine("{0} - {1}", obj.EmployeeName, obj.IncentiveAmount);
            }


            //4. Get department wise maximum salary from employee table order by salary ascending (note group by):



            Console.WriteLine("\nGet department wise maximum salary from employee table order by salary ascending\n");
            var empGroup = from emp in employees
                           group emp by emp.Deparment;
                        


            foreach (var group in empGroup)
            {
                Console.WriteLine("{0} - {1} ", group.Key, group.Max(x => x.Salary));
            }


            


            // 5. Select department, total salary with respect to a department from employees object where total salary greater than 800000 order by TotalSalary descending(group by having)

            

            Console.WriteLine("\nSelect department, total salary with respect to a department from employees object where total salary greater than 800000 order by TotalSalary descending(group by having)\n");
            var list = employees.GroupBy(p => p.Deparment, q => q.Salary).Select(x => new { Department = x.Key, Sal = x.Sum(s => s) });

            foreach (var item in list)
            {
                Console.WriteLine(item);
            }

        }




    }
}   



