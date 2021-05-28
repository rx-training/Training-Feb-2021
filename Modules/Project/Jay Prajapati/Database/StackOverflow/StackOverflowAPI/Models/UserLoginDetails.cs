using System;
using System.Collections.Generic;

namespace StackOverflowAPI.Models
{
    public partial class UserLoginDetails
    {
        public int Id { get; set; }
        public string Email { get; set; }
        public string CurrentPassword { get; set; }
        public string PreviousPassword { get; set; }

        public virtual Users Users { get; set; }
    }
}
