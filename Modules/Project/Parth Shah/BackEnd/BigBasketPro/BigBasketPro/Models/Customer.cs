using System;
using System.Collections.Generic;

#nullable disable

namespace BigBasketPro.Models
{
    public partial class Customer
    {
        public Customer()
        {
            Carts = new HashSet<Cart>();
            Sales = new HashSet<Sale>();
        }

        public int CustId { get; set; }
        public string CustName { get; set; }
        public string Address { get; set; }
        public string PhoneNo { get; set; }
        public string BigBasketUserId { get; set; }

        public BigBasketUser BigBUser { get; set; }

        public virtual ICollection<Cart> Carts { get; set; }
        public virtual ICollection<Sale> Sales { get; set; }
    }
}
