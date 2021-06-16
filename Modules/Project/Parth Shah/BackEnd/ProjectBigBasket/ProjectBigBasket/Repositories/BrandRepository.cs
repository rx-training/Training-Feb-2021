using ProjectBigBasket.Interface;
using ProjectBigBasket.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ProjectBigBasket.Repositories
{
    public class BrandRepository : GenericRepository<Brand>, IBrand
    {
        private readonly BigBasketContext _context;

        public BrandRepository(BigBasketContext context) : base(context)
        {
            _context = context;
        }
        public IEnumerable<Brand> getBrandByCatId(string catId)
        {
            var brand = _context.Brands.Where(a => a.CategoryId == catId).AsEnumerable();
            return brand;
        }


    }
}
