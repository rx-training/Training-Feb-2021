using BigBasketPro.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BigBasketPro.Interfaces
{
   public interface ICity : IGeneric<City>
    {
        public IEnumerable<City> getCityCountry(int countId);

    }
}
