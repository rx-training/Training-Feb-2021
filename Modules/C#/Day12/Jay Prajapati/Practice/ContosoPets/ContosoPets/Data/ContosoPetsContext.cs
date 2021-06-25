using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;
using System.Text;
using ContosoPets.Models;

namespace ContosoPets.Data
{
    public class ContosoPetsContext : DbContext
    {
        public DbSet<Customer> Customers { get; set; }
        public DbSet<Order> Orders { get; set; }
        public DbSet<Product> Products { get; set; }
        public DbSet<ProductOrder> ProductOrdersP { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            optionsBuilder.UseSqlServer(@"Server=.\SQLEXPRESS;Database=ContosoPetsDB;Trusted_Connection=True;");
        }
       
    }
}
