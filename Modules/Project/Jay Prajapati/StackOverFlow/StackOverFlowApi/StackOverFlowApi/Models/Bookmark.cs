using System;
using System.Collections.Generic;

#nullable disable

namespace StackOverFlowApi.Models
{
    public partial class Bookmark
    {
        public int? UserId { get; set; }
        public int? QuestionId { get; set; }
        public int Id { get; set; }

        public virtual Question Question { get; set; }
        public virtual User User { get; set; }
    }
}
