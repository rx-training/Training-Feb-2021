using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace PracticeGeneric.Models
{
    public class Incentive
    {
        public int IncentiveId { get; set; }
        public int? EmployeeId { get; set; }
        public DateTime? IncentiveDate { get; set; }
        public int? IncentiveAmount { get; set; }

        public virtual Employee Employee { get; set; }
    }
}
