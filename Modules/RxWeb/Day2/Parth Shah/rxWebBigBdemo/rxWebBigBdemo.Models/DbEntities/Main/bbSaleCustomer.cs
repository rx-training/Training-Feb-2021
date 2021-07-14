using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using RxWeb.Core.Annotations;
using RxWeb.Core.Data.Annotations;
using RxWeb.Core.Sanitizers;
using rxWebBigBdemo.BoundedContext.SqlContext;
namespace rxWebBigBdemo.Models.Main
{
    [Table("bbSaleCustomer",Schema="dbo")]
/*    [KeyLessEntity]*/
    public partial class bbSaleCustomer
    {
		#region CartID Annotations

        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        [System.ComponentModel.DataAnnotations.Key]
		#endregion CartID Annotations

        public int CartID { get; set; }


        public string ProductName { get; set; }


        public string Cust_Name { get; set; }


        public bbSaleCustomer()
        {
        }
	}
}