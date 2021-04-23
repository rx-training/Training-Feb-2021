using System;
using System.Collections.Generic;
using System.Text;
using Microsoft.EntityFrameworkCore;
using ToyManufacturingCompany.Models;

namespace ToyManufacturingCompany.Data
{
    public class ToyManufacturingCompanyContext : DbContext
    {
        public DbSet<Toy> Toys { get; set; }
        public DbSet<Customer> Customers { get; set; }
        public DbSet<CustomerAddress> CustomerAddresses { get; set; }
        public DbSet<Order> Orders { get; set; }
        public DbSet<ProductOrder> ProductOrders { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            optionsBuilder.UseSqlServer(@"Server=.\SQLEXPRESS;Database=ToyShopDB;Trusted_Connection=True;");
        }
    }
}
