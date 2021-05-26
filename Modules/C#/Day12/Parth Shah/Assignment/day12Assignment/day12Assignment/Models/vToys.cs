using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace day12Assignment.Models
{
    [NotMapped]
    public class vToys
    {
        public int CustomerID { get; set; }
        public string CustomerName { get; set; }

        public string toyName { get; set; }

        public int toyPrice { get; set; }
    }
}
