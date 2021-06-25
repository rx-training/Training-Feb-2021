using System;
using System.Collections.Generic;

namespace StackOverflowAPI.Models
{
    public partial class Answers
    {
        public int AnswerId { get; set; }
        public int? QuestionId { get; set; }
        public string Answer { get; set; }
        public int? Vote { get; set; }
        public int? Userid { get; set; }

        public virtual Questions Question { get; set; }
        public virtual Users User { get; set; }
    }
}
