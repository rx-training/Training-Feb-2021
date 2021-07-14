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
    [Table("Product",Schema="dbo")]
    public partial class Product
    {
		#region ProductId Annotations

        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        [System.ComponentModel.DataAnnotations.Key]
		#endregion ProductId Annotations

        public int ProductId { get; set; }

		#region ProductName Annotations

        [Required]
        [MaxLength(50)]
		#endregion ProductName Annotations

        public string ProductName { get; set; }

		#region BrandId Annotations

        [Range(1,int.MaxValue)]
        [Required]
        [RelationshipTableAttribue("Brand","dbo","","BrandId")]
		#endregion BrandId Annotations

        public int BrandId { get; set; }

		#region ProductPrice Annotations

        [Required]
		#endregion ProductPrice Annotations

        public decimal ProductPrice { get; set; }

		#region ProductDescription Annotations

        [MaxLength(50)]
		#endregion ProductDescription Annotations

        public string ProductDescription { get; set; }

		#region Ingredients Annotations

        [MaxLength(50)]
		#endregion Ingredients Annotations

        public string Ingredients { get; set; }

		#region Brand Annotations

      /*  [HasOne(foreignKeys: new string[] { nameof(BrandId),}, nameof(rxWebBigBdemo.Models.Main.Brand.Product))]*/
        [ForeignKey(nameof(BrandId))]
        [InverseProperty(nameof(rxWebBigBdemo.Models.Main.Brand.Product))]
        #endregion Brand Annotations

        public virtual Brand Brand { get; set; }


        public virtual ICollection<Cart> Cart { get; set; }


        public virtual ICollection<Sale> Sales { get; set; }


        public Product()
        {
			Cart = new HashSet<Cart>();
			Sales = new HashSet<Sale>();
        }
	}
}