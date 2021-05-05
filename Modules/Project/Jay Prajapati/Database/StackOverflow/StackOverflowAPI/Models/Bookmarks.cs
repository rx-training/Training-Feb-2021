using System;
using System.Collections.Generic;

namespace StackOverflowAPI.Models
{
    public partial class Bookmarks
    {
        public int? UserId { get; set; }
        public int? QuestionId { get; set; }

        public virtual Questions Question { get; set; }
        public virtual Users User { get; set; }
    }
}
