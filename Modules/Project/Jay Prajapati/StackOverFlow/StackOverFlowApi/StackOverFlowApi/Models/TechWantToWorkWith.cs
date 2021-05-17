using System;
using System.Collections.Generic;

#nullable disable

namespace StackOverFlowApi.Models
{
    public partial class TechWantToWorkWith
    {
        public int Id { get; set; }
        public int? UserId { get; set; }
        public string TechYouWantToWorkWith { get; set; }

        public virtual User User { get; set; }
    }
}
