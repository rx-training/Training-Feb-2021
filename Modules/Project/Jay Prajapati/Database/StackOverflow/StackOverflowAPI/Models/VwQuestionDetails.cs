using System;
using System.Collections.Generic;

namespace StackOverflowAPI.Models
{
    public partial class VwQuestionDetails
    {
        public int QuestionId { get; set; }
        public string Question { get; set; }
        public int? NumberOfAnswers { get; set; }
        public int? Views { get; set; }
        public int? VotesForQuestion { get; set; }
    }
}
