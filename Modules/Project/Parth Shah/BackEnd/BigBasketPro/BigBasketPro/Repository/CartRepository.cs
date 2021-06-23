using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using BigBasketPro.Interfaces;
using BigBasketPro.Models;

namespace BigBasketPro.Repository
{
    public class CartRepository : GenericRepository<Cart>, ICart
    {
        public CartRepository(BigBasketProjectContext context) : base(context)
        {

        }
    }
}
