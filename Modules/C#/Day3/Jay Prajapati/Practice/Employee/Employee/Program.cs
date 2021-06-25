using System;
using System.Collections.Generic;

namespace EmployeeDetails
{
    class Program
    {
        static void Main(string[] args)
        {
            var Emp1 = new Workers();
            Emp1.Name = "Jay Prajapati";
            Emp1.Salary = 20000;
            var Emp2 = new Manager();
            Emp2.Name = "Vivek Shukla";
            Emp2.Salary = 40000;
            var Emp3 = new Workers();
            Emp3.Name = "John Doe";
            Emp3.Salary = 17000;
            var Employees = new List<Employee>();
            Employees.Add(Emp1);
            Employees.Add(Emp2);
            Employees.Add(Emp3);

            foreach (var Employee in Employees)
            {
                Console.WriteLine($"\t{Employee.Name}'s Salary is : {Employee.Salary}");
                Employee.GiveRaise();
                Console.WriteLine($"\t{Employee.Name}'s Salary After Raise : {Employee.Salary}\n\n");
                
            }

        }
    }
}
