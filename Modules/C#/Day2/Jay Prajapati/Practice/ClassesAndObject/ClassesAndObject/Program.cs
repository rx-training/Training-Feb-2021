using System;

namespace ClassesAndObject
{
    class Employee
    {
        public int Age { get; set; }
        public string Name { get; set; }
        public double Salary { get; set; }
        public DateTime DateOfJoining { get; set; }
        public string PhoneNumber { get; set; }

    }
    class Program
    {
        static void Main(string[] args)
        {
            Employee Emp1 = new Employee()
            {
                Age = 35,
                Name = "Jay",
                Salary = 120000.67,
                DateOfJoining = new DateTime(2020,05,21),
                PhoneNumber = "1234567890"

            }
        }
    }
}
