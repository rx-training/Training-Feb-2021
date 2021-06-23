using System;
using System.Collections.Generic;

#nullable disable

namespace BigBasketPro.Models
{
    public partial class Product
    {
        public Product()
        {
            Carts = new HashSet<Cart>();
            Sales = new HashSet<Sale>();
        }

        public int ProductId { get; set; }
        public string ProductName { get; set; }
        public int BrandId { get; set; }
        public decimal ProductPrice { get; set; }
        public string ProductDescription { get; set; }
        public string Ingredients { get; set; }

        public virtual Brand Brand { get; set; }
        public virtual ICollection<Cart> Carts { get; set; }
        public virtual ICollection<Sale> Sales { get; set; }
    }
}
