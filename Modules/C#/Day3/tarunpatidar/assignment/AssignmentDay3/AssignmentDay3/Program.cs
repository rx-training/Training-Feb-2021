using System;

namespace AssignmentDay3
{
    interface Emp
    {
        public void get() { }
        public void Display() { }
        public int Salary
        {
            get
            {
                return default;
            }
        }
    }
}

namespace AssignmentDay3
{
    public abstract class Employee : Emp
    {
        public virtual void get()
        {
            ID = ID;
            Name = Name;
            Address = Address;
            PanNumber = PanNumber;
        }
        public virtual void Display()
        {
            Console.WriteLine("ID : " + ID);
            Console.WriteLine("Name : " + Name);
            Console.WriteLine("Address : " + Address);
            Console.WriteLine("Pan Number : " + PanNumber);
        }

        public int ID { get; set; }
        public string Name { get; set; }
        public string Address { get; set; }
        public string PanNumber { get; set; }
    }
}

namespace AssignmentDay3
{
    public class PartTime : Employee
    {
        public int NoOfHour { get; set; }
        public int SalePerHour { get; set; }

        public PartTime(int noOfHour, int salePerHour)
        {
            NoOfHour = noOfHour;
            SalePerHour = salePerHour;
        }

        public int Salary()
        {
            return NoOfHour * SalePerHour;
        }
        public void Display()
        {
            Console.WriteLine("Salary : " + Salary());
        }
    }
}

namespace AssignmentDay3
{
    public class FullTime : Employee
    {
        public int Basic { get; set; }
        public int HRA { get; set; }
        public int TA { get; set; }
        public int DA { get; set; }

        public FullTime()
        {
            Basic = Basic;
            HRA = HRA;
            TA = TA;
            DA = DA;
        }

        public int Salary()
        {
            return Basic + HRA + TA + DA;
        }

        public void Display()
        {
            Console.WriteLine("Salary : " + Salary());
        }
    }
}

namespace AssignmentDay3
{
    class EmpPayroll_System
    {
        static void Main(string[] args)
        {
            string time;
            Employee emp = new FullTime();

            Console.WriteLine("Enter Employee Id : ");
            emp.ID = Convert.ToInt32(Console.ReadLine());

            Console.WriteLine("Enter Employee Name : ");
            emp.Name = Console.ReadLine();

            Console.WriteLine("Enter Address : ");
            emp.Address = Console.ReadLine();

            Console.WriteLine("Enter Pan card Details : ");
            emp.PanNumber = Console.ReadLine();


            Console.WriteLine(" For Part Time Employee Press (1) And For Full Time Employee Press(2)  : ");
            time = Console.ReadLine();

            if (time == "1")
            {
                int NoOfHour, SalePerHour;

                Console.WriteLine("Number of hours worked : ");
                NoOfHour = Convert.ToInt32(Console.ReadLine());

                Console.WriteLine("Sales made per hour : ");
                SalePerHour = Convert.ToInt32(Console.ReadLine());

                PartTime parttime = new PartTime(NoOfHour, SalePerHour);

                parttime.Display();
            }

            else if (time == "2")
            {
                FullTime fulltime = new FullTime();

                Console.WriteLine("Enter basic Salary : ");
                fulltime.Basic = Convert.ToInt32(Console.ReadLine());

                Console.WriteLine("Enter HRA : ");
                fulltime.HRA = Convert.ToInt32(Console.ReadLine());

                Console.WriteLine("Enter TA : ");
                fulltime.TA = Convert.ToInt32(Console.ReadLine());

                Console.WriteLine("Enter DA : ");
                fulltime.DA = Convert.ToInt32(Console.ReadLine());

                fulltime.Display();
            }


        }
    }
}
