using System;
using System.Collections.Generic;

#nullable disable

namespace BigBasketPro.Models
{
    public partial class Country
    {
        public Country()
        {
            Cities = new HashSet<City>();
            Sales = new HashSet<Sale>();
        }

        public int CountryId { get; set; }
        public string CountryName { get; set; }

        public virtual ICollection<City> Cities { get; set; }
        public virtual ICollection<Sale> Sales { get; set; }
    }
}
