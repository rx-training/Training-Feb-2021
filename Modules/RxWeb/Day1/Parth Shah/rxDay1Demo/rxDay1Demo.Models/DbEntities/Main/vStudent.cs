using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using RxWeb.Core.Annotations;
using RxWeb.Core.Data.Annotations;
using RxWeb.Core.Sanitizers;
using rxDay1Demo.BoundedContext.SqlContext;
namespace rxDay1Demo.Models.Main
{
    [Table("vStudents",Schema="dbo")]
/*    [KeyLessEntity]*/
    public partial class vStudent
    {
		#region StudentId Annotations

        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        [System.ComponentModel.DataAnnotations.Key]
		#endregion StudentId Annotations

        public int StudentId { get; set; }


        public int RollNumber { get; set; }


        public string StudentName { get; set; }


        public string EmailId { get; set; }


        public string CourseName { get; set; }


        public vStudent()
        {
        }
	}
}