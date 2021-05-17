using StackOverFlowApi.Models;
using StackOverFlowApi.Repositories;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace StackOverFlowApi.UnitOfWorks
{
    public class UnitOfWork : IUnitOfWork
    {
        private readonly TempStackOverFlowContext _context;
        

        public UnitOfWork(TempStackOverFlowContext context)
        {
            _context = context;
            Users = new UserRepository(context);
        }


        public IUserRepository Users { get; private set; }
        public int Complete()
        {
            return _context.SaveChanges();
        }

        public void Dispose()
        {
            _context.Dispose();
        }
    }
}
