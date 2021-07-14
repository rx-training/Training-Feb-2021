using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using RxWeb.Core.Annotations;
using RxWeb.Core.Data.Annotations;
using RxWeb.Core.Sanitizers;
using Day3RxwebBigB.BoundedContext.SqlContext;
namespace Day3RxwebBigB.Models.Main
{
    [Table("bbProductSold",Schema="dbo")]
    [KeyLessEntity]
    public partial class bbProductSold
    {

        public Nullable<int> Pid { get; set; }


        public System.DateTime InvoiceDate { get; set; }


        public bbProductSold()
        {
        }
	}
}