using ProjectBigBasket.Interface;
using ProjectBigBasket.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ProjectBigBasket.Repositories
{
    public class CartRepository : GenericRepository<Cart>, ICart
    {
        public CartRepository(BigBasketContext context) : base(context)
        {

        }
    }
}
