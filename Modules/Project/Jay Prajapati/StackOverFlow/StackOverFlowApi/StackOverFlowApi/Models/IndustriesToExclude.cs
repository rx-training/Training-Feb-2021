using System;
using System.Collections.Generic;

#nullable disable

namespace StackOverFlowApi.Models
{
    public partial class IndustriesToExclude
    {
        public int Id { get; set; }
        public int? UserId { get; set; }
        public string IndustryToExclude { get; set; }

        public virtual User User { get; set; }
    }
}
