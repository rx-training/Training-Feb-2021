using System;
using System.Collections.Generic;

#nullable disable

namespace day11assignment.Model
{
    public partial class Department
    {
        public Department()
        {
            Doctors = new HashSet<Doctor>();
            HealthCareAssistants = new HashSet<HealthCareAssistant>();
            Patients = new HashSet<Patient>();
        }

        public int DeptId { get; set; }
        public string DeptName { get; set; }

        public virtual ICollection<Doctor> Doctors { get; set; }
        public virtual ICollection<HealthCareAssistant> HealthCareAssistants { get; set; }
        public virtual ICollection<Patient> Patients { get; set; }
    }
}
