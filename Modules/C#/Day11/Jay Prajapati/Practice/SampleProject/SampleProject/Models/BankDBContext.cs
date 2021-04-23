using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;

#nullable disable

namespace SampleProject.Models
{
    public partial class BankDBContext : DbContext
    {
        public BankDBContext()
        {
        }

        public BankDBContext(DbContextOptions<BankDBContext> options)
            : base(options)
        {
        }

        public virtual DbSet<Borrow> Borrows { get; set; }
        public virtual DbSet<Branch> Branches { get; set; }
        public virtual DbSet<Customer> Customers { get; set; }
        public virtual DbSet<Deposit> Deposits { get; set; }
        public virtual DbSet<Person> People { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if (!optionsBuilder.IsConfigured)
            {
#warning To protect potentially sensitive information in your connection string, you should move it out of source code. You can avoid scaffolding the connection string by using the Name= syntax to read it from configuration - see https://go.microsoft.com/fwlink/?linkid=2131148. For more guidance on storing connection strings, see http://go.microsoft.com/fwlink/?LinkId=723263.
                optionsBuilder.UseSqlServer("Server=.\\SQLExpress;Database=BankDB;Trusted_Connection=True;");
            }
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.HasAnnotation("Relational:Collation", "SQL_Latin1_General_CP1_CI_AS");

            modelBuilder.Entity<Borrow>(entity =>
            {
                entity.HasKey(e => e.LoanNo);

                entity.ToTable("Borrow");

                entity.Property(e => e.LoanNo).HasMaxLength(18);

                entity.Property(e => e.Bname).HasMaxLength(18);

                entity.Property(e => e.Cname).HasMaxLength(18);
            });

            modelBuilder.Entity<Branch>(entity =>
            {
                entity.HasKey(e => e.Bname);

                entity.ToTable("Branch");

                entity.Property(e => e.Bname).HasMaxLength(18);

                entity.Property(e => e.City).HasMaxLength(18);
            });

            modelBuilder.Entity<Customer>(entity =>
            {
                entity.HasKey(e => e.Cname);

                entity.ToTable("Customer");

                entity.Property(e => e.Cname).HasMaxLength(19);

                entity.Property(e => e.City).HasMaxLength(18);
            });

            modelBuilder.Entity<Deposit>(entity =>
            {
                entity.HasKey(e => e.Actno);

                entity.ToTable("Deposit");

                entity.Property(e => e.Actno)
                    .HasMaxLength(5)
                    .HasColumnName("ACTNO");

                entity.Property(e => e.Adate).HasColumnType("date");

                entity.Property(e => e.Bname).HasMaxLength(18);

                entity.Property(e => e.Cname).HasMaxLength(18);
            });

            modelBuilder.Entity<Person>(entity =>
            {
                entity.HasNoKey();

                entity.ToTable("Person");

                entity.Property(e => e.Age).HasColumnName("age");

                entity.Property(e => e.DateOfBirth).HasColumnName("dateOfBirth");

                entity.Property(e => e.Id).HasColumnName("id");

                entity.Property(e => e.Name)
                    .HasMaxLength(50)
                    .HasColumnName("name");

                entity.Property(e => e.Surname)
                    .HasMaxLength(50)
                    .HasColumnName("surname");
            });

            OnModelCreatingPartial(modelBuilder);
        }

        partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
    }
}
