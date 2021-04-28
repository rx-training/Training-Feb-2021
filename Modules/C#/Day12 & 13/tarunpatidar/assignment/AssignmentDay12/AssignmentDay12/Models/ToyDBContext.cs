using System;
using System.Collections.Generic;
using System.Text;
using Microsoft.EntityFrameworkCore;

namespace AssignmentDay12.Models
{
    class ToyDBContext : DbContext
    {
        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            optionsBuilder.UseSqlServer(@"Data Source=DESKTOP-4KO4R8R\SQLEXPRESS03;Initial Catalog=Toys;Integrated Security=True;Pooling=False");
        }

        public DbSet<ProductOrder> ProductOrders { get; set; }
        public DbSet<Toy> Toys { get; set; }
        public DbSet<Customer> Customers { get; set; }
        public DbSet<CustomerAddress> CustomerAddresses { get; set; }
        public DbSet<Order> Orders { get; set; }
    }

}
