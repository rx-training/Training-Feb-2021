using System;
using System.Collections.Generic;

namespace StackOverflowAPI.Models
{
    public partial class IndustriesToExclude
    {
        public int? UserId { get; set; }
        public string IndustryToExclude { get; set; }

        public virtual Users User { get; set; }
    }
}
