using System;
using System.Collections.Generic;

#nullable disable

namespace StackOverFlowApi.Models
{
    public partial class Answer
    {
        public int AnswerId { get; set; }
        public int? QuestionId { get; set; }
        public int? UserId { get; set; }
        public string Answer1 { get; set; }
        public int? Vote { get; set; }

        public virtual Question Question { get; set; }
        public virtual User User { get; set; }
    }
}
