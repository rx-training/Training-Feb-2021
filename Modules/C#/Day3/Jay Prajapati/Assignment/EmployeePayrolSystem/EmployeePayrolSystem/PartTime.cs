using System;
using System.Collections.Generic;
using System.Text;

namespace EmployeePayrolSystem
{
    class PartTime : Employee
    {
        private int noofHr { get;  set; }
        private int noofSalperHr { get; set; }
        public int NoofHr
        {
            get
            {
                return noofHr;
            }
            set
            {
                noofHr = value;

            }
            
        }
        public int NoofSalperHr
        {
            get
            {
                return noofSalperHr;
            }
            set
            {
                noofSalperHr = value;

            }

        }
        public PartTime(int Id, string Name, string Address, string PAN)
        {
            Get(Id, Name, Address, PAN);
        }
        
        private decimal EmpSalary { get; set; }
        public override decimal Salary()
        {
            EmpSalary = Convert.ToDecimal(noofHr * noofSalperHr);
            return EmpSalary;
        }
    }
}
