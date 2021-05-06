using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace day12Assignment.Models
{
    class order
    {

        public int OrderId { get; set; }

        public int totalPrice { get; set; }

        public int CustomerID { get; set; }

        public customer Customer { get; set; }


        
    }
}
