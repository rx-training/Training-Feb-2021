using System;
using System.Collections.Generic;

namespace StackOverflowAPI.Models
{
    public partial class TechnologiesUsedByUserInJob
    {
        public int? UserId { get; set; }
        public string Technologies { get; set; }

        public virtual Users User { get; set; }
    }
}
