using System;
using System.Collections.Generic;
using System.Text;

namespace ContosoPets.Models
{
    public class Customer
    {
#nullable enable
        public int Id { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string? Phone { get; set; }
        public string? Email { get; set; }
#nullable disable
        public ICollection<Order> Orders { get; set; }
    }
}
