using System;
using System.Collections.Generic;

#nullable disable

namespace Project_Hotstar.Models
{
    public partial class Payment
    {
        public int PaymentId { get; set; }
        public string PaymentMethod { get; set; }
        public DateTime PaymentDate { get; set; }
        public int PaymentAmount { get; set; }
        public int? AmountDue { get; set; }
    }
}
