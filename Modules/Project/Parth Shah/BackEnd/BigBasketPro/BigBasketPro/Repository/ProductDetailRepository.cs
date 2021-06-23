using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using BigBasketPro.Interfaces;
using BigBasketPro.Models;

namespace BigBasketPro.Repository
{
    public class ProductDetailRepository : GenericRepository<BbproductDetail>, IProductDetail
    {
        public ProductDetailRepository(BigBasketProjectContext context) : base(context)
        {

        }
    }
}
