using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using BigBasketPro.Interfaces;
using BigBasketPro.Models;

namespace BigBasketPro.Repository
{
    public  class CategoryRepository : GenericRepository<Category>, ICategory
    {
        public CategoryRepository(BigBasketProjectContext context) : base(context)
        {

        }
    }
}
