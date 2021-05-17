using System;
using System.Collections.Generic;

#nullable disable

namespace StackOverFlowApi.Models
{
    public partial class WhereUserLikeToWork
    {
        public int Id { get; set; }
        public int? UserId { get; set; }
        public string Location { get; set; }

        public virtual User User { get; set; }
    }
}
