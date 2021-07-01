using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using BigBasketPro.Interfaces;
using BigBasketPro.Models;

namespace BigBasketPro.Repository
{
    public class CountryRepository : GenericRepository<Country>, ICountry
    {
        public CountryRepository(BigBasketProjectContext context) : base(context)
        {

        }
    }
}
