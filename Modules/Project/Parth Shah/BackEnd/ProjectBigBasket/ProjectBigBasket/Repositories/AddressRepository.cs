using ProjectBigBasket.Interface;
using ProjectBigBasket.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ProjectBigBasket.Repositories
{
    public class AddressRepository : GenericRepository<Address>, IAddress
    {
        public AddressRepository(BigBasketContext context) : base(context)
        {

        }
    }
}
