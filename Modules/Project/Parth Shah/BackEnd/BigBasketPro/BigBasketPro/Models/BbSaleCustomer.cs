using System;
using System.Collections.Generic;

#nullable disable

namespace BigBasketPro.Models
{
    public partial class BbSaleCustomer
    {
        public int CartId { get; set; }
        public string ProductName { get; set; }
        public string CustName { get; set; }
    }
}
