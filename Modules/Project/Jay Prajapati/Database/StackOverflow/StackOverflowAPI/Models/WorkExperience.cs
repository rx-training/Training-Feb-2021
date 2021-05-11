using System;
using System.Collections.Generic;

namespace StackOverflowAPI.Models
{
    public partial class WorkExperience
    {
        public int? UserId { get; set; }
        public string JobTitle { get; set; }
        public string CompanyName { get; set; }
        public int? YearOfJoinning { get; set; }
        public string Responsibilities { get; set; }

        public virtual Users User { get; set; }
    }
}
