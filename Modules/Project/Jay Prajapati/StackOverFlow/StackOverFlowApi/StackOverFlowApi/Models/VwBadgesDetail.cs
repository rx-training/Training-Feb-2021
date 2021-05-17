using System;
using System.Collections.Generic;

#nullable disable

namespace StackOverFlowApi.Models
{
    public partial class VwBadgesDetail
    {
        public int UserId { get; set; }
        public string FullName { get; set; }
        public int? NumberOfBronzeBadges { get; set; }
        public int? NumberOfSilverBadges { get; set; }
        public int? NumberOfGoldBadges { get; set; }
    }
}
