using System;
using System.Collections.Generic;

#nullable disable

namespace day17assignment.Model
{
    public partial class HealthCareAssistant
    {
        public int HId { get; set; }
        public string HName { get; set; }
        public int DeptId { get; set; }
        public int PId { get; set; }

        public virtual Department Dept { get; set; }
        public virtual Patient PIdNavigation { get; set; }
    }
}
