using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Project_Hotstar.Models;


namespace Project_Hotstar.Repo.Interface
{
    public interface IGenericInterface<T> where T : class
    {
        IEnumerable<T> GetAll();
        IEnumerable<T> Find(Func<T, bool> predicate);
        T GetById(int id);
        T Add(T entity);
        void Create(T entity);
        void Update(T entity);
        T Delete(T entity);
        int Count(Func<T, bool> predicate);
        bool Any(Func<T, bool> predicate);
        bool Any();
    }

}
