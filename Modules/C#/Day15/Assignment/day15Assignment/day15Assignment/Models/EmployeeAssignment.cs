using System;
using System.Collections.Generic;

#nullable disable

namespace day15Assignment.Models
{
    public partial class EmployeeAssignment
    {
        public int Eaid { get; set; }
        public int EmployeeId { get; set; }
        public int AssignmentId { get; set; }

        public virtual Assignment Assignment { get; set; }
        public virtual Employee Employee { get; set; }
    }
}
