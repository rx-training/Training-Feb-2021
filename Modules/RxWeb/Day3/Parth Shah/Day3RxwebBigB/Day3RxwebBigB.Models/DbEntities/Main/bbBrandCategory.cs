using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using RxWeb.Core.Annotations;
using RxWeb.Core.Data.Annotations;
using RxWeb.Core.Sanitizers;
using Day3RxwebBigB.BoundedContext.SqlContext;
namespace Day3RxwebBigB.Models.Main
{
    [Table("bbBrandCategory",Schema="dbo")]
    [KeyLessEntity]
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