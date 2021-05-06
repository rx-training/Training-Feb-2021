using System;
using Microsoft.EntityFrameworkCore;

namespace EFPracticeDay12
{

    public class SchoolContext : DbContext
    {
        public DbSet<Student> Students { get; set; }
        public DbSet<Course> Courses { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            optionsBuilder.UseSqlServer(@"Server=DESKTOP-4KO4R8R\SQLEXPRESS03;Database=SchoolDB;Trusted_Connection=True;");
        }
    }

}

