using System;
using System.Collections.Generic;

#nullable disable

namespace StackOverFlowApi.Models
{
    public partial class Tag
    {
        public int Id { get; set; }
        public int? QuestionId { get; set; }
        public string TagName { get; set; }

        public virtual Question Question { get; set; }
    }
}
