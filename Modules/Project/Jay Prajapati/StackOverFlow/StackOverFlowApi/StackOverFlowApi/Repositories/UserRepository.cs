using StackOverFlowApi.Models;
using StackOverFlowApi.Models.Authentication;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Threading.Tasks;

namespace StackOverFlowApi.Repositories
{
    public class UserRepository : GenericRepository<User>, IUserRepository
    {
        public UserRepository(TempStackOverFlowContext context): base(context)
        {

        }

     
    }
}
