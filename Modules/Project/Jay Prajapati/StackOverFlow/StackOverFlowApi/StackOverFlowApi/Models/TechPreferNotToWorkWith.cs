using System;
using System.Collections.Generic;

#nullable disable

namespace StackOverFlowApi.Models
{
    public partial class TechPreferNotToWorkWith
    {
        public int Id { get; set; }
        public int? UserId { get; set; }
        public string TechPeferNotToWorkWith { get; set; }

        public virtual User User { get; set; }
    }
}
