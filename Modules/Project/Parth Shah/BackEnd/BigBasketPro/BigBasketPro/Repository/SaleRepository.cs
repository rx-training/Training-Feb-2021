using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using BigBasketPro.Interfaces;
using BigBasketPro.Models;

namespace BigBasketPro.Repository
{
    public class SaleRepository : GenericRepository<Sale>, ISale
    {
        public SaleRepository(BigBasketProjectContext context) : base(context)
        {

        }
    }
}
