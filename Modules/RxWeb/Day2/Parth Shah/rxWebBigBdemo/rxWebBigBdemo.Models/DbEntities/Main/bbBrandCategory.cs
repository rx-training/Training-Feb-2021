using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using RxWeb.Core.Annotations;
using RxWeb.Core.Data.Annotations;
using RxWeb.Core.Sanitizers;
using rxWebBigBdemo.BoundedContext.SqlContext;
namespace rxWebBigBdemo.Models.Main
{
    [Table("bbBrandCategory",Schema="dbo")]
 /*   [KeyLessEntity]*/
    public partial class bbBrandCategory
    {

        public string ProductName { get; set; }


        public string BrandName { get; set; }


        public string CategoryName { get; set; }


        public bbBrandCategory()
        {
        }
	}
}