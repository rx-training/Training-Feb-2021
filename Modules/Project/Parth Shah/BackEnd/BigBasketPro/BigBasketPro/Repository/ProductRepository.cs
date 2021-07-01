using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using BigBasketPro.Interfaces;
using BigBasketPro.Models;


namespace BigBasketPro.Repository
{
    public class ProductRepository : GenericRepository<Product>, IProduct
    {
        private readonly BigBasketProjectContext _context;

        public ProductRepository(BigBasketProjectContext context) : base(context)
        {
            _context = context;
        }

        public IEnumerable<Product> getProductByBrandId(int brandId)
        {
            var product = _context.Products.Where(a => a.BrandId == brandId).AsEnumerable();
            return product;
        }
    }
}
