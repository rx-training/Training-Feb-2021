using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using BigBasketPro.Interfaces;
using BigBasketPro.Models;

namespace BigBasketPro.Repository
{
    public class BrandRepository : GenericRepository<Brand>, IBrand
    {
        private readonly BigBasketProjectContext _context;

        public BrandRepository(BigBasketProjectContext context) : base(context)
        {
            _context = context;
        }
        public IEnumerable<Brand> getBrandByCatId(int catId)
        {
            var brand = _context.Brands.Where(a => a.CategoryId == catId).AsEnumerable();
            return brand;
        }



    }
}
