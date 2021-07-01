using System;
using System.Collections.Generic;

#nullable disable

namespace BigBasketPro.Models
{
    public partial class City
    {
        public City()
        {
            Sales = new HashSet<Sale>();
        }

        public int CityId { get; set; }
        public int CountryId { get; set; }
        public string CityName { get; set; }

        public virtual Country Country { get; set; }
        public virtual ICollection<Sale> Sales { get; set; }
    }
}
