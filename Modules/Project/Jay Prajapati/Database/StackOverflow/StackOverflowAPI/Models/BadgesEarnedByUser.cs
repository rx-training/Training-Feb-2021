using System;
using System.Collections.Generic;

namespace StackOverflowAPI.Models
{
    public partial class BadgesEarnedByUser
    {
        public int? UserId { get; set; }
        public int? BadgeId { get; set; }
        public DateTime? DateOfEarned { get; set; }

        public virtual Badges Badge { get; set; }
        public virtual Users User { get; set; }
    }
}
