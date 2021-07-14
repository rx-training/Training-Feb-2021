using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using RxWeb.Core.Annotations;
using RxWeb.Core.Data.Annotations;
using RxWeb.Core.Sanitizers;
using Day3RxwebBigB.Models.Enums.Main;
using Day3RxwebBigB.BoundedContext.SqlContext;
namespace Day3RxwebBigB.Models.Main
{
    [Table("Category",Schema="dbo")]
    public partial class Category
    {
		#region CategoryId Annotations

        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        [System.ComponentModel.DataAnnotations.Key]
		#endregion CategoryId Annotations

        public int CategoryId { get; set; }

		#region CategoryName Annotations

        [Required]
        [MaxLength(50)]
		#endregion CategoryName Annotations

        public string CategoryName { get; set; }


        public virtual ICollection<Brand> Brand { get; set; }


        public Category()
        {
			Brand = new HashSet<Brand>();
        }
	}
}