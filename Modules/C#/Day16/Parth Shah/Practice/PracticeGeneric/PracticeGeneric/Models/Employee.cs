using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace PracticeGeneric.Models
{
    public class Employee
    {
        public Employee()
        {
            Incentives = new HashSet<Incentive>();
        }

        public int EmployeeId { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public int? Salary { get; set; }
        public DateTime? JoiningDate { get; set; }
        public string Department { get; set; }
        public int? ManagerId { get; set; }

        public virtual ICollection<Incentive> Incentives { get; set; }
    }
}
