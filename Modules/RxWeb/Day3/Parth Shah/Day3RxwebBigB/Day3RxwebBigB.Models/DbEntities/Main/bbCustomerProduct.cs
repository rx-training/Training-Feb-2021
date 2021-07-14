using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using RxWeb.Core.Annotations;
using RxWeb.Core.Data.Annotations;
using RxWeb.Core.Sanitizers;
using Day3RxwebBigB.BoundedContext.SqlContext;
namespace Day3RxwebBigB.Models.Main
{
    [Table("bbCustomerProduct",Schema="dbo")]
    [KeyLessEntity]
    public partial class bbCustomerProduct
    {
		#region CustId Annotations

        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        [System.ComponentModel.DataAnnotations.Key]
		#endregion CustId Annotations

        public int CustId { get; set; }


        public int ProductID { get; set; }


        public bbCustomerProduct()
        {
        }
	}
}