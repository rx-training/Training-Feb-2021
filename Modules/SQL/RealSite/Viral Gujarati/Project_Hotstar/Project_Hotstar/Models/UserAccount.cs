using System;
using System.Collections.Generic;

#nullable disable

namespace Project_Hotstar.Models
{
    public partial class UserAccount
    {
        public int CustomerId { get; set; }
        public string Name { get; set; }
        public int PhoneNumber { get; set; }
        public string Email { get; set; }
        public string Address { get; set; }
    }
}
