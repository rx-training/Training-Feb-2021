using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Project_Hotstar.Models.Authentication;
using Project_Hotstar;
using Project_Hotstar.Repo.Interface;
using Project_Hotstar.Models;


namespace Project_Hotstar.Repo.Repository
{
    //generic repository - interface repository
    public abstract class GenericRepository<T> : IGenericInterface<T> where T : class
    {
        protected readonly HotstarDBContext context;
        public GenericRepository(HotstarDBContext _context)
        {
            context = _context;
        }

        // add entity 
        public T Add(T entity)
        {
            try
            {
                context.Set<T>().Add(entity);
                context.SaveChanges();
                return entity;
            }
            catch(Exception)
            {
                throw;
            }
        }

        public bool Any(Func<T, bool> predicate)
        {
            return context.Set<T>().Any(predicate);
        }

        public bool Any()
        {
            return context.Set<T>().Any();
        }

        public int Count(Func<T, bool> predicate)
        {
            throw new NotImplementedException();
        }

        public void Create(T entity)
        {
            context.Add(entity);
            context.SaveChanges();  
        }

        public T Delete(T entity)
        {
            context.Remove(entity);
            context.SaveChanges();
            return entity;
        }

        public IEnumerable<T> Find(Func<T, bool> predicate)
        {
            return context.Set<T>().Where(predicate);
        }

        public virtual IEnumerable<T> GetAll()
        {
            return context.Set<T>();
        }

        public virtual T GetById(int id)
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
