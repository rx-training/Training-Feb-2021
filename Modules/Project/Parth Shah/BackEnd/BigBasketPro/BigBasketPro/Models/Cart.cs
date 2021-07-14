using System;
using System.Collections.Generic;

#nullable disable

namespace BigBasketPro.Models
{
    public partial class Cart
    {
       

        public int CartId { get; set; }
        public int ProductId { get; set; }

        public int? CustId { get; set; }

       
        public virtual Customer Cust { get; set; }
        [System.Text.Json.Serialization.JsonIgnore]
        public virtual Product Product { get; set; }
    }
}
