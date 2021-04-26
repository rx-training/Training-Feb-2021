using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace day12Assignment.Models
{
    class plant
    {
        public int PlantId { get; set; }
        public string PlantName { get; set; }

        public ICollection<toys> Toys { get; set; }

    }
}
