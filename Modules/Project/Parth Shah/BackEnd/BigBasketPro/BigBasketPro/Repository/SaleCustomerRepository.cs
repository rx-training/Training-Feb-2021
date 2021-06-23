using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using BigBasketPro.Interfaces;
using BigBasketPro.Models;

namespace BigBasketPro.Repository
{
    public class SaleCustomerRepository :  GenericRepository<BbSaleCustomer>, ISaleCustomer
    {
        public SaleCustomerRepository(BigBasketProjectContext context) : base(context)
        {

        }
    }
}
