using System;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using day12Practice.Models;

namespace day12Practice
{
    class Program
    {
        static void Main(string[] args)
        {
            var student = new Student() { Name = "Parth" };
            var universityDb = new UniversityDbContext();
            universityDb.Students.Add(student);
            universityDb.SaveChanges();



        }
    }
}
