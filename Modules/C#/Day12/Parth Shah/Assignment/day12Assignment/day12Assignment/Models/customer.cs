using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace day12Assignment.Models
{
    class customer
    {
        public int CustomerID { get; set; }
        public string CustomerName { get; set; }
        public int toyId { get; set; }
        public toys Toys { get; set; }

        public ICollection<order> Orders { get; set; }
    }
}
