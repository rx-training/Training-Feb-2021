using System;
using System.Collections.Generic;

#nullable disable

namespace BigBasketPro.Models
{
    public partial class BbSaleDetail
    {
        public int SaleId { get; set; }
        public decimal ProductPrice { get; set; }
        public decimal InvoiceAmount { get; set; }
        public int? ProductQty { get; set; }
        public DateTime InvoiceDate { get; set; }
        public string CustName { get; set; }
        public string Address { get; set; }
        public string CityName { get; set; }
        public string ProductName { get; set; }
        public string CountryName { get; set; }
    }
}
