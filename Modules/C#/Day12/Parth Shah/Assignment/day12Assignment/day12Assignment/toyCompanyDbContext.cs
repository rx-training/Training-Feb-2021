using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using day12Assignment.Models;
using Microsoft.EntityFrameworkCore;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;


namespace day12Assignment
{
    class toyCompanyDbContext:DbContext
    {
        public DbSet<customer> Customers { get; set; }
        public DbSet<order> Orders { get; set; }

        public DbSet<plant> Plants { get; set; }
        public DbSet<toys> Toys { get; set; }

        public DbSet<vToys> vToys { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            optionsBuilder.UseSqlServer(@"Data Source=DESKTOP-VBU96E5\SQLEXPRESS01;Initial Catalog=day12Assignment;Integrated Security=True");
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<toys>()
                .HasOne<plant>(s => s.Plant)
                .WithMany(g => g.Toys)
                .HasForeignKey(s => s.PlantId);

            modelBuilder.Entity<order>()
               .HasOne<customer>(s => s.Customer)
               .WithMany(g => g.Orders)
               .HasForeignKey(s => s.CustomerID);


            modelBuilder.Entity<toys>()
            .HasOne<customer>(s => s.Customer)
            .WithOne(ad => ad.Toys)
            .HasForeignKey<customer>(ad => ad.toyId);


            modelBuilder.Entity<toys>()
            .HasOne<customer>(s => s.Customer)
            .WithOne(ad => ad.Toys)
            .HasForeignKey<customer>(ad => ad.toyId);
            modelBuilder.Entity<vToys>().HasNoKey();

        }




    }
}
