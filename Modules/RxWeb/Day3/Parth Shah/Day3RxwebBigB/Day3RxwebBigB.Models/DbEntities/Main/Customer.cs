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
    [Table("Customer",Schema="dbo")]
    public partial class Customer
    {
		#region CustId Annotations

        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        [System.ComponentModel.DataAnnotations.Key]
		#endregion CustId Annotations

        public int CustId { get; set; }

		#region Cust_Name Annotations

        [Required]
        [MaxLength(50)]
		#endregion Cust_Name Annotations

        public string Cust_Name { get; set; }

		#region Address Annotations

        [MaxLength(50)]
		#endregion Address Annotations

        public string Address { get; set; }

		#region PhoneNo Annotations

        [MaxLength(50)]
		#endregion PhoneNo Annotations

        public string PhoneNo { get; set; }


        public virtual ICollection<Cart> Cart { get; set; }


        public virtual ICollection<Sale> Sales { get; set; }


        public Customer()
        {
			Cart = new HashSet<Cart>();
			Sales = new HashSet<Sale>();
        }
	}
}