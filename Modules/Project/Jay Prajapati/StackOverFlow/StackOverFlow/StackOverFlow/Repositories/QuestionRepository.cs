using StackOverFlow.Models;
using StackOverFlow.Repositories.Interface;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Threading.Tasks;

namespace StackOverFlow.Repositories
{
    public class QuestionRepository : GenericRepository<Question>, IQuestionRepository
    {
        //private readonly NewStackOverFlowContext _context;
        public QuestionRepository(StackOverFlowContext context) : base(context)
        {
            //this._context = context;
        }
        
    }
}
