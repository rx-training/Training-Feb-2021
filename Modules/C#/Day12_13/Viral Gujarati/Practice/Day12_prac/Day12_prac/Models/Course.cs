using System;
using System.Collections.Generic;
using System.Text;

namespace Day12_prac.Models
{
    public class Course
    {
        public int CourseId { get; set; }
        public string CourseName { get; set; }

        public ICollection<Student> Students { get; set; }
    }
}