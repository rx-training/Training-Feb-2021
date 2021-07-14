using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using RxWeb.Core.Annotations;
using RxWeb.Core.Data.Annotations;
using RxWeb.Core.Sanitizers;
using rxWebBigBdemo.BoundedContext.SqlContext;
namespace rxWebBigBdemo.Models.Main
{
    [Table("bbSaleDetail",Schema="dbo")]
   /* [KeyLessEntity]*/
    public partial class bbSaleDetail
    {
		#region SaleId Annotations

        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        [System.ComponentModel.DataAnnotations.Key]
		#endregion SaleId Annotations

        public int SaleId { get; set; }


        public decimal ProductPrice { get; set; }


        public decimal InvoiceAmount { get; set; }


        public Nullable<int> ProductQty { get; set; }


        public System.DateTime InvoiceDate { get; set; }


        public string Cust_Name { get; set; }


        public string Address { get; set; }


        public string CityName { get; set; }


        public string ProductName { get; set; }


        public string countryName { get; set; }


        public bbSaleDetail()
        {
        }
	}
}