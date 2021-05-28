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
        private readonly StackOverFlowContext context;
        public QuestionRepository(StackOverFlowContext context) : base(context)
        {
            this.context = context;
        }

        public void UpdateQuestion(int QueId, Question Que)
        {
            Que.QuestionId = QueId;
            _context.Update(Que);
        }

        public bool ValidateUserQuestion(int userId, int queId)
        {
            var Que = _context.Questions.Where(q=>q.QuestionId == queId).ToList()[0];
            if (Que == null || Que.UserId != userId)
            {
                return false;
            }
                return true;
        }
        

    }
}
