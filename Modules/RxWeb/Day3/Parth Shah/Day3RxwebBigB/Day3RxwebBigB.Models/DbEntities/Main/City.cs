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
    [Table("City",Schema="dbo")]
    public partial class City
    {
		#region CityId Annotations

        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        [System.ComponentModel.DataAnnotations.Key]
		#endregion CityId Annotations

        public int CityId { get; set; }

		#region Country_ID Annotations

        [Range(1,int.MaxValue)]
        [Required]
        [RelationshipTableAttribue("Country","dbo","","Country_ID")]
		#endregion Country_ID Annotations

        public int Country_ID { get; set; }

		#region CityName Annotations

        [Required]
        [MaxLength(30)]
		#endregion CityName Annotations

        public string CityName { get; set; }

		#region Country_IDNavigation Annotations

        [HasOne(foreignKeys: new string[] { nameof(Country_ID),}, nameof(Day3RxwebBigB.Models.Main.Country.City))]
		#endregion Country_IDNavigation Annotations

        public virtual Country Country_IDNavigation { get; set; }


        public virtual ICollection<Sale> Sales { get; set; }


        public City()
        {
			Sales = new HashSet<Sale>();
        }
	}
}