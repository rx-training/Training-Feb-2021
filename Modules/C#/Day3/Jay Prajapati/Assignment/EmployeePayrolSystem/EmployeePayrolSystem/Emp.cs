using System;
using System.Collections.Generic;
using System.Text;

namespace EmployeePayrolSystem
{
    interface Emp
    {
        void Get(int Id, string Name, string Address,string PAN);
        void Display();
        //decimal Salary();
        
    }
}
