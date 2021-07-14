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
    [Table("Country",Schema="dbo")]
    public partial class Country
    {
		#region CountryId Annotations

        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        [System.ComponentModel.DataAnnotations.Key]
		#endregion CountryId Annotations

        public int CountryId { get; set; }

		#region CountryName Annotations

        [Required]
        [MaxLength(50)]
		#endregion CountryName Annotations

        public string CountryName { get; set; }


        public virtual ICollection<City> City { get; set; }


        public virtual ICollection<Sale> Sales { get; set; }


        public Country()
        {
			City = new HashSet<City>();
			Sales = new HashSet<Sale>();
        }
	}
}