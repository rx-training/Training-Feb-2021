using System;
using System.Collections.Generic;
using System.Text;

namespace AssignmentDay12.Models
{
    public class Customer
    {
        public int Id { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }


        public CustomerAddress Address { get; set; }


        public ICollection<Order> Order { get; set; }
       
    }

}