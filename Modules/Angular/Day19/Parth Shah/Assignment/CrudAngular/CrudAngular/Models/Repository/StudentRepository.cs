using CrudAngular.Models.IRepository;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CrudAngular.Models.Repository
{
    public class StudentRepository : GenericRepository<Student>, IStudent
    {
        public StudentRepository(StudContext context) : base(context)
        {

        }
    }
}
