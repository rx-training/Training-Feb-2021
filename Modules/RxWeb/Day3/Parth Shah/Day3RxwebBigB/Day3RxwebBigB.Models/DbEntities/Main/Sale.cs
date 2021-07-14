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
    [Table("Sales",Schema="dbo")]
    public partial class Sale
    {
		#region SaleId Annotations

        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        [System.ComponentModel.DataAnnotations.Key]
		#endregion SaleId Annotations

        public int SaleId { get; set; }

		#region ProductID Annotations

        [Range(1,int.MaxValue)]
        [Required]
        [RelationshipTableAttribue("Product","dbo","","ProductID")]
		#endregion ProductID Annotations

        public int ProductID { get; set; }


        public Nullable<int> ProductQty { get; set; }

		#region InvoiceDate Annotations

        [Required]
		#endregion InvoiceDate Annotations

        public System.DateTime InvoiceDate { get; set; }

		#region ProductPrice Annotations

        [Required]
		#endregion ProductPrice Annotations

        public decimal ProductPrice { get; set; }

		#region CustId Annotations

        [Range(1,int.MaxValue)]
        [Required]
        [RelationshipTableAttribue("Customer","dbo","","CustId")]
		#endregion CustId Annotations

        public int CustId { get; set; }

		#region CountryId Annotations

        [Range(1,int.MaxValue)]
        [Required]
        [RelationshipTableAttribue("Country","dbo","","CountryId")]
		#endregion CountryId Annotations

        public int CountryId { get; set; }

		#region CityId Annotations

        [Range(1,int.MaxValue)]
        [Required]
        [RelationshipTableAttribue("City","dbo","","CityId")]
		#endregion CityId Annotations

        public int CityId { get; set; }

		#region ShippedAddress Annotations

        [Required]
        [MaxLength(100)]
		#endregion ShippedAddress Annotations

        public string ShippedAddress { get; set; }


        public Nullable<decimal> Taxes { get; set; }

		#region InvoiceAmount Annotations

        [Required]
		#endregion InvoiceAmount Annotations

        public decimal InvoiceAmount { get; set; }

		#region City Annotations

        [HasOne(foreignKeys: new string[] { nameof(CityId),}, nameof(Day3RxwebBigB.Models.Main.City.Sales))]
		#endregion City Annotations

        public virtual City City { get; set; }

		#region Country Annotations

        [HasOne(foreignKeys: new string[] { nameof(CountryId),}, nameof(Day3RxwebBigB.Models.Main.Country.Sales))]
		#endregion Country Annotations

        public virtual Country Country { get; set; }

		#region Cust Annotations

        [HasOne(foreignKeys: new string[] { nameof(CustId),}, nameof(Day3RxwebBigB.Models.Main.Customer.Sales))]
		#endregion Cust Annotations

        public virtual Customer Cust { get; set; }

		#region ProductIDNavigation Annotations

        [HasOne(foreignKeys: new string[] { nameof(ProductID),}, nameof(Day3RxwebBigB.Models.Main.Product.Sales))]
		#endregion ProductIDNavigation Annotations

        public virtual Product ProductIDNavigation { get; set; }


        public Sale()
        {
        }
	}
}