using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using RxWeb.Core.Annotations;
using RxWeb.Core.Data.Annotations;
using RxWeb.Core.Sanitizers;
using rxWebBigBdemo.Models.Enums.Main;
using rxWebBigBdemo.BoundedContext.SqlContext;
namespace rxWebBigBdemo.Models.Main
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