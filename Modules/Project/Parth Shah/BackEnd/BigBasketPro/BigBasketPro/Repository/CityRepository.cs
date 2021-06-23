using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using BigBasketPro.Interfaces;
using BigBasketPro.Models;

namespace BigBasketPro.Repository
{
    public class CityRepository : GenericRepository<City>, ICity
    {
        private readonly BigBasketProjectContext _context;
        public CityRepository(BigBasketProjectContext context) : base(context)
        {
            _context = context;
        }

        public IEnumerable<City> getCityCountry(int countId)
        {
            var country = _context.Cities.Where(a => a.CountryId == countId).AsEnumerable();
            return country;
        }
    }
}
