using StackOverFlow.Models;
using StackOverFlow.Models.Authentication;
using StackOverFlow.Repositories.Interface;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace StackOverFlow.Repositories
{
    public class UserRepository : GenericRepository<AppUser>, IUserRepository
    {
        private readonly StackOverFlowContext context;
        public UserRepository(StackOverFlowContext context) : base(context)
        {
            this.context = context;
        }


        public void UpdateUser(int id, AppUser user)
        {
            context.AppUsers.Update(user);
        }


        public bool ValidateUser(string cred, int id)
        {
            var user = this.context.AppUsers.SingleOrDefault(x => x.UserId == id);
            if (user == null || user.ApplicationUserId != cred)
            {
                return false;
            }
            return true;
        }

        
    }
}
