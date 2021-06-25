using PracticeGeneric.Interface;
using PracticeGeneric.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace PracticeGeneric.Repositories
{
    public class EmployeeRepository : GenericRepository<Employee>, IEmployee
    {
        public EmployeeRepository(genericDbContext context) : base(context)
        {

        }

    }
}
