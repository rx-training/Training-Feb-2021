using System;
using System.Collections.Generic;
using System.Text;

namespace EmployeeDetails
{
    public class Workers : Employee
    {
        public override void GiveRaise()
        {
            Salary = Salary + Salary * 0.03;
        }
    }
}
