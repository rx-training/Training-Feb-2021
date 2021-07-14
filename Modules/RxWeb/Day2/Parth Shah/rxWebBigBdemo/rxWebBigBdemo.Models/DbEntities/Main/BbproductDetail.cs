using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using RxWeb.Core.Annotations;
using RxWeb.Core.Data.Annotations;
using RxWeb.Core.Sanitizers;
using rxWebBigBdemo.BoundedContext.SqlContext;
namespace rxWebBigBdemo.Models.Main
{
    [Table("BbproductDetail",Schema="dbo")]
/*    [KeyLessEntity]*/
    public partial class BbproductDetail
    {
		#region ProductID Annotations

        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        [System.ComponentModel.DataAnnotations.Key]
		#endregion ProductID Annotations

        public int ProductID { get; set; }


        public string ProductName { get; set; }


        public string BrandName { get; set; }


        public string CategoryName { get; set; }


        public BbproductDetail()
        {
        }
	}
}