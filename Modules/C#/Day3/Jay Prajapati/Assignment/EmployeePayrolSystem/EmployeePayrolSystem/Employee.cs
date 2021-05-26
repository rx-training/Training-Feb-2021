using System;
using System.Collections.Generic;
using System.Text;

namespace EmployeePayrolSystem
{
    public abstract class Employee : Emp
    {
        private int ID { get; set; }
        private string Name { get; set; }
        private string Address { get; set; }
        private string PAN { get; set; }
        //private decimal salary { get; set; }


        public void Get(int Id, string Name, string Address, string PAN)
        {
            this.ID = Id;
            this.Name = Name;
            this.Address = Address;
            this.PAN = PAN;
        }
        public void Display()
        {
            Console.WriteLine($"{this.ID}\t\t{this.Name}\t\t{this.Address}\t\t{this.PAN}\t\t{this.ID}");
        }



        public abstract decimal Salary();
        

    }
}
