using Microsoft.EntityFrameworkCore;
using StackOverflowAPI.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace StackOverflowAPI.GenericRepository
{
    public class GenericRepository<T> : IGenericRepository<T> where T : class
    {
        private StackOverFlowContext _context;
        private DbSet<T> table;

        public GenericRepository()
        {
            this._context = new StackOverFlowContext();
            table = _context.Set<T>();
        }
        public GenericRepository(StackOverFlowContext context)
        {
            this._context = context;
            table = _context.Set<T>();
                 
        }
        public IEnumerable<T> GetAll()
        {
            return table.ToList();
        }
        public T GetById(object id)
        {
            return table.Find(id);
        }
        public T Insert(T obj)
        {
            table.Add(obj);
            return obj;
        }
        public T Update(T obj)
        {
            table.Attach(obj);
            _context.Entry(obj).State = EntityState.Modified;
            return obj;
        }
        public T Delete(object id)
        {
            T existing = table.Find(id);
            table.Remove(existing);
            return existing;
        }
        public void Save()
        {
            _context.SaveChanges();
        }
    }
}
