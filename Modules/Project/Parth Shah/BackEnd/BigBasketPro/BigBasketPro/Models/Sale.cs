using System;
using System.Collections.Generic;

#nullable disable

namespace BigBasketPro.Models
{
    public partial class Sale
    {
        public int SaleId { get; set; }
        public int ProductId { get; set; }
        public int? ProductQty { get; set; }
        public DateTime InvoiceDate { get; set; }
        public decimal ProductPrice { get; set; }
        public int CustId { get; set; }
        public int CountryId { get; set; }
        public int CityId { get; set; }
        public string ShippedAddress { get; set; }
        public decimal? Taxes { get; set; }
        public decimal InvoiceAmount { get; set; }

        public virtual City City { get; set; }
        public virtual Country Country { get; set; }
        public virtual Customer Cust { get; set; }
        [System.Text.Json.Serialization.JsonIgnore]
        public virtual Product Product { get; set; }
    }
}
