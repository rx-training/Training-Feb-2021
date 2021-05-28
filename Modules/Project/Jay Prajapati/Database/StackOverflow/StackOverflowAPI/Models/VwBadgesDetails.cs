using System;
using System.Collections.Generic;

namespace StackOverflowAPI.Models
{
    public partial class VwBadgesDetails
    {
        public int UserId { get; set; }
        public string FullName { get; set; }
        public int? NumberOfBronzeBadges { get; set; }
        public int? NumberOfSilverBadges { get; set; }
        public int? NumberOfGoldBadges { get; set; }
    }
}
