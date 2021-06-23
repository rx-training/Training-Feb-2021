using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Threading.Tasks;

namespace BigBasketPro.Interfaces
{
    public interface IGeneric<T> where T : class
    {
        IEnumerable<T> GetAll();

        public IEnumerable<T> Find(Expression<Func<T, bool>> expression);

        T GetById(int id);
        void Create(T entity);

        void Update(T entity);

        void Delete(T entity);
    }
}
