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
    [Table("Cart",Schema="dbo")]
    public partial class Cart
    {
		#region CartID Annotations

        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        [System.ComponentModel.DataAnnotations.Key]
		#endregion CartID Annotations

        public int CartID { get; set; }

		#region ProductId Annotations

        [Range(1,int.MaxValue)]
        [Required]
        [RelationshipTableAttribue("Product","dbo","","ProductId")]
		#endregion ProductId Annotations

        public int ProductId { get; set; }

		#region CustId Annotations

        [RelationshipTableAttribue("Customer","dbo","","CustId")]
		#endregion CustId Annotations

        public Nullable<int> CustId { get; set; }

		#region Cust Annotations

        [HasOne(foreignKeys: new string[] { nameof(CustId),}, nameof(Day3RxwebBigB.Models.Main.Customer.Cart))]
		#endregion Cust Annotations

        public virtual Customer Cust { get; set; }

		#region Product Annotations

        [HasOne(foreignKeys: new string[] { nameof(ProductId),}, nameof(Day3RxwebBigB.Models.Main.Product.Cart))]
		#endregion Product Annotations

        public virtual Product Product { get; set; }


        public Cart()
        {
        }
	}
}