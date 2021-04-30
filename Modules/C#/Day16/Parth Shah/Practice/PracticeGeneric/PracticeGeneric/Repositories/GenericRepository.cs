using Microsoft.EntityFrameworkCore;
using PracticeGeneric.Interface;
using PracticeGeneric.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace PracticeGeneric.Repositories
{
    public abstract class GenericRepository<T> : IGeneric<T> where T : class
    {
        protected readonly genericDbContext context;

        public GenericRepository(genericDbContext _context)
        {
            context = _context;

        }
        public void Create(T entity)
        {
            context.Add(entity);
            context.SaveChanges();
        }

        public void  Delete (T entity)
        
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
