using BigBasketPro.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BigBasketPro.Interfaces
{
    public interface IBrand : IGeneric<Brand>
    {
        public IEnumerable<Brand> getBrandByCatId(int catId);
    }
}
