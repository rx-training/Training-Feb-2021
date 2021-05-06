
using PracticeGeneric.Interface;
using PracticeGeneric.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace PracticeGeneric.Repositories
{
    public class IncentiveRepository : GenericRepository<Incentive>, IIncentive
    {
        public IncentiveRepository(genericDbContext context) : base(context)
        {

        }
    }
}
