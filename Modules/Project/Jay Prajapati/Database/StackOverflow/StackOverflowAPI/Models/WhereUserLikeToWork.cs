using System;
using System.Collections.Generic;

namespace StackOverflowAPI.Models
{
    public partial class WhereUserLikeToWork
    {
        public int? UserId { get; set; }
        public string Location { get; set; }

        public virtual Users User { get; set; }
    }
}
