using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using RxWeb.Core.Annotations;
using RxWeb.Core.Data.Annotations;
using RxWeb.Core.Sanitizers;
using rxDay1Demo.Models.Enums.Main;
using rxDay1Demo.BoundedContext.SqlContext;
namespace rxDay1Demo.Models.Main
{
    [Table("Courses",Schema="dbo")]
    public partial class Cours
    {
		#region CourseId Annotations

        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        [System.ComponentModel.DataAnnotations.Key]
		#endregion CourseId Annotations

        public int CourseId { get; set; }

		#region CourseName Annotations
        [Unique(connection:typeof(IMainDatabaseFacade))]
        [Required]
        [MaxLength(50)]
		#endregion CourseName Annotations

        public string CourseName { get; set; }

      /*  #region Students Annotations
        [InverseProperty("Courses")]
        #endregion Students Annotations*/
        public virtual ICollection<Student> Students { get; set; }


        public Cours()
        {
			Students = new HashSet<Student>();
        }
	}
}