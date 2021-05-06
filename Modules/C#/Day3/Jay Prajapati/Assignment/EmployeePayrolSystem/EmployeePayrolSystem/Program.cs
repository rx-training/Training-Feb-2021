using System;

namespace EmployeePayrolSystem
{
    class Program
    {
        static void Main(string[] args)
        {
            //PartTime Emp1 = new PartTime(1, "Viral", "Rajkot", "12345678");
            //Emp1.Display();
            Console.WriteLine("Enter ID, Name , Address, Pan Number Respectively");
            int ID = Convert.ToInt32(Console.ReadLine());
            string Name = Console.ReadLine();
            string Address = Console.ReadLine();
            string PAN = Console.ReadLine();
        Console.WriteLine("PartTime Or FullTime");
            string typeofJob = Console.ReadLine();

            if (typeofJob.ToUpper() == "PARTTIME")
            {
                PartTime Emp1 = new PartTime(ID, Name, Address, PAN);
                Console.Write("No of Hours Works :");
                Emp1.NoofHr = Convert.ToInt32(Console.ReadLine());
                Console.Write("No of Sale per Hour :");
                Emp1.NoofSalperHr = Convert.ToInt32(Console.ReadLine());
                Console.Write($"Salary OF Employee is : {Emp1.Salary()}");
            }
            else if(typeofJob.ToUpper() == "FULLTIME")
            {
                FullTime Emp2 = new FullTime(ID, Name, Address, PAN);
                Console.Write("Basic :");
                Emp2.GetBasic = Convert.ToInt32(Console.ReadLine());
                Console.Write("HRA :");
                Emp2.GetHRA = Convert.ToInt32(Console.ReadLine());
                Console.Write("TA :");
                Emp2.GetTA = Convert.ToInt32(Console.ReadLine());
                Console.Write("DA :");
                Emp2.GetDA = Convert.ToInt32(Console.ReadLine());
                Console.Write($"Salary OF Employee is : {Emp2.Salary()}");
            }


            
           
        }
    }
}
