using System;
using System.Collections.Generic;

namespace StackOverflowAPI.Models
{
    public partial class TechWantToWorkWith
    {
        public int? UserId { get; set; }
        public string TechYouWantToWorkWith { get; set; }

        public virtual Users User { get; set; }
    }
}
