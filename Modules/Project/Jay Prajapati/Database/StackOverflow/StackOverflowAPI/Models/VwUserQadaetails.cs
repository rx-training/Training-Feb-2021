using System;
using System.Collections.Generic;

namespace StackOverflowAPI.Models
{
    public partial class VwUserQadaetails
    {
        public int UserId { get; set; }
        public string FullName { get; set; }
        public int? NumberOfQuestionsAsked { get; set; }
        public int? NumberOfAnwersGive { get; set; }
        public int? NumberOfBadgesEarned { get; set; }
    }
}
