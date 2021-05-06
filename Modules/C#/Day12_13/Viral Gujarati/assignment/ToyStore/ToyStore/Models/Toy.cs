using System;
using System.Collections.Generic;
using System.Text;

using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;

namespace ToyStore.Models
{
    public class Toy
    {
        public int Id { get; set; }

        [Required]
        public string Name { get; set; }
        public string PlantName { get; set; }

        [Column(TypeName = "decimal(18,2)")]
        public decimal Price { get; set; }
        public int QuntityAvailable { get; set; }



    }
}
