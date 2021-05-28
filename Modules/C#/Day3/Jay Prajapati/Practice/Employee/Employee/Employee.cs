using System;
using System.Collections.Generic;
using System.Text;

namespace EmployeeDetails
{
    public abstract class Employee
    {
        public string Name { get; set; }
        public double Salary { get; set; }
        private DateTime HireDate;
        public virtual void Hire()
        {
            HireDate = DateTime.Now;
        }
        public abstract void GiveRaise();
    }
}
