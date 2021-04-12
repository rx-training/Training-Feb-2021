using System;

namespace day3Assign
{    
        interface I1
        {
            void Get();

            void Display();

            int Salary();

        }

        public abstract class Employee : I1
        {
            int ID;
            string name, Address, pannumber;

            public void Get()
            {
                Console.WriteLine("Enter ID:");
                ID = Convert.ToInt32(Console.ReadLine());
                Console.WriteLine("Enter Name: ");
                name = Console.ReadLine();
                Console.WriteLine("Enter address: ");
                Address = Console.ReadLine();
                Console.WriteLine("Enter Pan number: ");
                pannumber = Console.ReadLine();
            }
            public virtual void Display()
            {
                Console.WriteLine($"\nEmployee ID is: {ID} ,\nEmployee Name is : {name} ,\n Employee Address is : {Address} ,\nEmployee Pannumber is : {pannumber} ");
            }
            public abstract int Salary();
        }
        public class PartTime : Employee
        {
            int SalaryPerHour, NoOfHour, salary;

            public  void Get()
            {
                base.Get();
                Console.WriteLine("Enter Salary PerHour :");
                SalaryPerHour = Convert.ToInt32(Console.ReadLine());
                Console.WriteLine("Enter No of Hour :");
                NoOfHour = Convert.ToInt32(Console.ReadLine());
                
            }
            public override void Display()
            {
                base.Display();
                Console.WriteLine($"\nSalary Per Hour is : {SalaryPerHour},\nTotal No of Hours {NoOfHour},\nTotal Salary is : {salary}");

            }
            public override int Salary()
            {
                salary = NoOfHour * SalaryPerHour;
                return salary;
            }        
        }

        public class FullTime : Employee
        {
            int Basic, HRA, DA, TA, salary;
            public void Get()
            {
                base.Get();
                Console.WriteLine("Enter Basic Salary of Employee:");
                Basic = Convert.ToInt32(Console.ReadLine());
                Console.WriteLine("Enter Basic HRA of Employee:");
                HRA = Convert.ToInt32(Console.ReadLine());
                Console.WriteLine("Enter DA of Employee:");
                DA = Convert.ToInt32(Console.ReadLine());
                Console.WriteLine("Enter TA of Employee:");
                TA = Convert.ToInt32(Console.ReadLine());
               
            }

            public override int Salary()
            {
                salary = Basic + DA + HRA + TA;
                return salary;
            }

            public override void Display()
            {
                base.Display();
                Console.WriteLine($"\nBasic is :{Basic},\nDA is : {DA} ,\n HRA is : {HRA},\nTA is : {TA} ,\nsalary is :{salary}" );
            }
        
        class Program { 
        static void Main(string[] args)
        {
            PartTime p = new PartTime();
            p.Get();
            p.Salary();
            p.Display();

            FullTime f = new FullTime();
            f.Get();
            f.Salary();
            f.Display();
        }
    }
    }
}
