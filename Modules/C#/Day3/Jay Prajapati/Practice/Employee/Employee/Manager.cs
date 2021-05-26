using System;
using System.Collections.Generic;
using System.Text;

namespace EmployeeDetails
{
    public class Manager : Employee
    {
        public override void GiveRaise()
        {
            Salary += Salary * 0.05;
        }
    }
}
