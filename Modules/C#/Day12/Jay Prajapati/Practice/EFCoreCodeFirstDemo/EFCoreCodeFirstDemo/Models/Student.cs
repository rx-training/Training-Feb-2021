using System;
using System.Collections.Generic;
using System.Text;

namespace EFCoreCodeFirstDemo.Models
{
    public class Student
    {
        public int StudentId { get; set; }
        public string Name { get; set; }
        public object Grade { get; internal set; }
        public object StudentCourses { get; internal set; }
    }
}
