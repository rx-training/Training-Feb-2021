using System;
using System.Collections.Generic;

namespace StackOverflowAPI.Models
{
    public partial class TechPreferNotToWorkWith
    {
        public int? UserId { get; set; }
        public string TechPeferNotToWorkWith { get; set; }

        public virtual Users User { get; set; }
    }
}
