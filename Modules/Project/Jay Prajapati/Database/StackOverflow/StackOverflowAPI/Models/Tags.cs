using System;
using System.Collections.Generic;

namespace StackOverflowAPI.Models
{
    public partial class Tags
    {
        public int? QuestionId { get; set; }
        public string TagName { get; set; }

        public virtual Questions Question { get; set; }
    }
}
