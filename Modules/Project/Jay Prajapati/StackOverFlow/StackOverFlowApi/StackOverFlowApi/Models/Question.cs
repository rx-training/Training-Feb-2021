using System;
using System.Collections.Generic;

#nullable disable

namespace StackOverFlowApi.Models
{
    public partial class Question
    {
        public Question()
        {
            Answers = new HashSet<Answer>();
            Bookmarks = new HashSet<Bookmark>();
            Tags = new HashSet<Tag>();
        }

        public int QuestionId { get; set; }
        public int? UserId { get; set; }
        public string Question1 { get; set; }
        public int? TotalViews { get; set; }
        public int? Vote { get; set; }
        public DateTime? TimeOfAsk { get; set; }

        public virtual User User { get; set; }
        public virtual ICollection<Answer> Answers { get; set; }
        public virtual ICollection<Bookmark> Bookmarks { get; set; }
        public virtual ICollection<Tag> Tags { get; set; }
    }
}
