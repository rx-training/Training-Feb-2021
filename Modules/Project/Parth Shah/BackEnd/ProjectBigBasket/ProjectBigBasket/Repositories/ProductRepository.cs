using ProjectBigBasket.Interface;
using ProjectBigBasket.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ProjectBigBasket.Repositories
{
    public class ProductRepository : GenericRepository<Product>, IProduct
    {
        private readonly BigBasketContext _context;
        public ProductRepository(BigBasketContext context) : base(context)
        {
            _context = context;
        }

        public IEnumerable<Product> getProductByBrandId(string brandId)
        {
            var product = _context.Products.Where(a => a.BrandId == brandId).AsEnumerable();
            return product;
        }
    }
}
