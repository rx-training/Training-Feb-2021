using System;
using System.Collections.Generic;

#nullable disable

namespace day16Practice.Models
{
    public partial class Incentive
    {
        public int IncentiveId { get; set; }
        public int? EmployeeId { get; set; }
        public DateTime? IncentiveDate { get; set; }
        public int? IncentiveAmount { get; set; }

        public virtual Employee Employee { get; set; }
    }
}
