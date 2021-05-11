using System;
using System.Collections.Generic;

namespace StackOverflowAPI.Models
{
    public partial class Education
    {
        public int? UserId { get; set; }
        public string Degree { get; set; }
        public string University { get; set; }
        public int? FromYear { get; set; }
        public int? ToYear { get; set; }
        public string Summary { get; set; }

        public virtual Users User { get; set; }
    }
}
