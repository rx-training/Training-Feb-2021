using BigBasketPro.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using BigBasketPro.Models;
using System.Linq.Expressions;

namespace BigBasketPro.Repository
{
    public abstract class GenericRepository<T> : IGeneric<T>  where T : class
    {
        protected readonly BigBasketProjectContext context;

        public GenericRepository(BigBasketProjectContext _context)
        {
            context = _context;

        }
        public IEnumerable<T> Find(Expression<Func<T, bool>> expression)
        {
            return context.Set<T>().Where(expression);
        }

        public void Create(T entity)
        {
            context.Add(entity);
            context.SaveChanges();
        }

        public void Delete(T entity)

        {

            context.Remove(entity);
            context.SaveChanges();
        }

        public IEnumerable<T> GetAll()
        {
            return context.Set<T>();
        }

        public T GetById(int id)
        {
            return context.Set<T>().Find(id);
        }


        public void Update(T entity)
        {
            context.Entry(entity).State = EntityState.Modified;
            context.SaveChanges();
        }

    }
}
