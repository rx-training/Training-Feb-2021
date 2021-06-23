using BigBasketPro.Interfaces;
using BigBasketPro.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BigBasketPro.Repository
{
    public class CustomerRepository : GenericRepository<Customer>, ICustomer
    {
        public CustomerRepository(BigBasketProjectContext context) : base(context)
        {

        }
    }
}
