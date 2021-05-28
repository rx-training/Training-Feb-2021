using System;
using System.Collections.Generic;

namespace StackOverflowAPI.Models
{
    public partial class CompaniesToExclude
    {
        public int? UserId { get; set; }
        public string CompanyToExclude { get; set; }

        public virtual Users User { get; set; }
    }
}
