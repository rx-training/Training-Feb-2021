using System;
using System.Collections.Generic;

#nullable disable

namespace day11assignment.Model
{
    public partial class Patient
    {
        public Patient()
        {
            HealthCareAssistants = new HashSet<HealthCareAssistant>();
        }

        public int PId { get; set; }
        public string PName { get; set; }
        public int DeptId { get; set; }
        public int DrugId { get; set; }
        public int DrId { get; set; }

        public virtual Department Dept { get; set; }
        public virtual Doctor Dr { get; set; }
        public virtual Drug Drug { get; set; }
        public virtual ICollection<HealthCareAssistant> HealthCareAssistants { get; set; }
    }
}
