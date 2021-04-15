using System;
using System.Collections.Generic;
using System.Text;

namespace EmployeePayrolSystem
{
    class FullTime : Employee
    {
        private int Basic { get; set; }
        private int HRA { get; set; }
        private int TA { get; set; }
        private int DA { get; set; }

        public int GetBasic{
            get
            {
                return Basic;
            }
            set
            {
                Basic = value;
            }
        }
        public int GetHRA
        {
            get
            {
                return HRA;
            }
            set
            {
                HRA = value;
            }
        }
        public int GetTA
        {
            get
            {
                return TA;
            }
            set
            {
                TA = value;
            }
        }
        public int GetDA
        {
            get
            {
                return DA;
            }
            set
            {
                DA = value;
            }
        }
        public FullTime(int Id, string Name, string Address, string PAN)
        {
            Get(Id, Name, Address, PAN);
        }

        private decimal EmpSalary { get; set; }
        public override decimal Salary()
        {
            EmpSalary = Convert.ToDecimal(Basic + HRA + TA + DA);
            return EmpSalary;
        }
    }
}
