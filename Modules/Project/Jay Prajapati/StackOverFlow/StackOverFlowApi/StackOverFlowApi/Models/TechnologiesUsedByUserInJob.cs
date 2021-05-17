using System;
using System.Collections.Generic;

#nullable disable

namespace StackOverFlowApi.Models
{
    public partial class TechnologiesUsedByUserInJob
    {
        public int? UserId { get; set; }
        public string Technologies { get; set; }

        public virtual User User { get; set; }
    }
}
