using System;
using System.Collections.Generic;

namespace StackOverflowAPI.Models
{
    public partial class Users
    {
        public Users()
        {
            Answers = new HashSet<Answers>();
            Questions = new HashSet<Questions>();
        }

        public int UserId { get; set; }
        public string UserName { get; set; }
        public string FullName { get; set; }
        public string Title { get; set; }
        public int? VisitedDays { get; set; }
        public string GitHub { get; set; }
        public string Twitter { get; set; }
        public string Location { get; set; }
        public DateTime? LastSeen { get; set; }
        public int? ProfileViews { get; set; }
        public string AboutUser { get; set; }
        public string PhoneNumber { get; set; }
        public string EmailId { get; set; }

        public virtual UserLoginDetails Email { get; set; }
        public virtual ICollection<Answers> Answers { get; set; }
        public virtual ICollection<Questions> Questions { get; set; }
    }
}
