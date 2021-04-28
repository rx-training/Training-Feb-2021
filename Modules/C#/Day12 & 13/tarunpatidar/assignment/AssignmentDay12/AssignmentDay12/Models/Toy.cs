using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text;

namespace AssignmentDay12.Models
{
    public class Toy
    {
        public int Id { get; set; }
        [Required]
        public string Name { get; set; }
        public string PlantName{ get; set; }

        [Column(TypeName = "decimal(18,2)")]
        public decimal Price { get; set; }
        public int QuantityAvailable { get; set; }

    }
}