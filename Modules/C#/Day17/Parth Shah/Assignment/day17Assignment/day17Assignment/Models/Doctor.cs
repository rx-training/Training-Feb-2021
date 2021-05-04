using System;
using System.Collections.Generic;

#nullable disable

namespace day17assignment.Model
{
    public partial class Doctor
    {
        public Doctor()
        {
            Patients = new HashSet<Patient>();
        }

        public int DrId { get; set; }
        public string DrName { get; set; }
        public int DeptId { get; set; }
        public string Gender { get; set; }
        public string Designation { get; set; }

        public virtual Department Dept { get; set; }
        public virtual ICollection<Patient> Patients { get; set; }
    }
}
