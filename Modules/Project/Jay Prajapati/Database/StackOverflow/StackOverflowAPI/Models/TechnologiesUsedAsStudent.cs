using System;
using System.Collections.Generic;

namespace StackOverflowAPI.Models
{
    public partial class TechnologiesUsedAsStudent
    {
        public int? UserId { get; set; }
        public string Technology { get; set; }

        public virtual Users User { get; set; }
    }
}
