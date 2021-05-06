using day17assignment.Model;
using System;
using System.Collections.Generic;

#nullable disable

namespace day17assignment.Model
{
    public partial class Drug
    {
        public Drug()
        {
            Patients = new HashSet<Patient>();
        }

        public int DrugId { get; set; }
        public string DrugName { get; set; }
        public string DrugTime { get; set; }
        public decimal DrugPrice { get; set; }

        public virtual ICollection<Patient> Patients { get; set; }
    }
}
