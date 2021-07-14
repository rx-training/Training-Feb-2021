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
    [Table("Brand",Schema="dbo")]
    public partial class Brand
    {
		#region BrandId Annotations

        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        [System.ComponentModel.DataAnnotations.Key]
		#endregion BrandId Annotations

        public int BrandId { get; set; }

		#region BrandName Annotations

        [Required]
        [MaxLength(50)]
		#endregion BrandName Annotations

        public string BrandName { get; set; }

		#region CategoryID Annotations

        [Range(1,int.MaxValue)]
        [Required]
        [RelationshipTableAttribue("Category","dbo","","CategoryID")]
		#endregion CategoryID Annotations

        public int CategoryID { get; set; }

        #region CategoryIDNavigation Annotations

        /*[HasOne(foreignKeys: new string[] { nameof(CategoryID),}, nameof(rxWebBigBdemo.Models.Main.Category.Brand))]*/
        [ForeignKey(nameof(CategoryID))]
        [InverseProperty(nameof(rxWebBigBdemo.Models.Main.Category.Brand))]

        #endregion CategoryIDNavigation Annotations

        public virtual Category CategoryIDNavigation { get; set; }


        public virtual ICollection<Product> Product { get; set; }


        public Brand()
        {
			Product = new HashSet<Product>();
        }
	}
}