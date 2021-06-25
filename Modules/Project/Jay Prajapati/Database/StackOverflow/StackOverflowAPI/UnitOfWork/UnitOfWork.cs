using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;


namespace StackOverflowAPI.UnitOfWork
{
    public class UnitOfWork<TContext> 
        : IUnitOfWork<TContext>,IDisposable where TContext : DbContext, new()
    {
        // Here TContext is DBContext class
        private readonly TContext _context;
        private bool _disposed;
        private string _errorMessage = string.Empty;
        private DbContextTransaction _objTran;
        private Dictionary<string, object> _repositories;
          
        public UnitOfWork()
        {
            _context = new TContext();
        }

        public void Dispose()
        {
            Dispose(true);
            GC.SuppressFinalize(this);
        }
        public TContext Context
        {
            get { return _context; }
        }
        public void CreateTransaction()
        {
            _objTran = _context.Database.BeginTransaction();
        }
    }
}
