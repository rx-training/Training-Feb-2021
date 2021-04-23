using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.ComponentModel.DataAnnotations;

namespace day12Assignment.Models
{
    class toys
    {
        [Key]
        public int toyId { get; set; }
        public string toyName { get; set; }

         public int toyPrice { get; set; }

        public int PlantId { get; set; }

        public plant Plant { get; set; }

        public customer Customer { get; set; }



    }
}
