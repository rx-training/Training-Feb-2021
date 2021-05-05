using System;
using System.Collections.Generic;

namespace StackOverflowAPI.Models
{
    public partial class Badges
    {
        public int BadgeId { get; set; }
        public string BadgeName { get; set; }
        public string BadgeCategory { get; set; }
        public string BadgeDescription { get; set; }
        public string BadgeType { get; set; }
    }
}
