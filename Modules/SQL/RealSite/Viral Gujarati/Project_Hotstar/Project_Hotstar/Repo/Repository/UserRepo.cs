using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Project_Hotstar.Repo.IRepository;
using Project_Hotstar.Repo.Repository;
using Project_Hotstar.Models;

namespace Project_Hotstar.Repo.Repository
{
    public class UserRepo : GenericRepository<UserAccount>, IUserRepo
    {
        public UserRepo(HotstarDBContext context) : base(context)
        {

        }
    }
}
