using System;
using System.Collections.Generic;

namespace StackOverflowAPI.Models
{
    public partial class Questions
    {
        public Questions()
        {
            Answers = new HashSet<Answers>();
        }

        public int QuestionId { get; set; }
        public int? UserId { get; set; }
        public string Question { get; set; }
        public int? Views { get; set; }
        public int? Vote { get; set; }
        public DateTime? TimeOfAsk { get; set; }

        public virtual Users User { get; set; }
        public virtual ICollection<Answers> Answers { get; set; }
    }
}
