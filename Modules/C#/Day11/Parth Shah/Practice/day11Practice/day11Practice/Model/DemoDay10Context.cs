using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;

#nullable disable

namespace day11Practice.Model
{
    public partial class DemoDay10Context : DbContext
    {
        public DemoDay10Context()
        {
        }

        public DemoDay10Context(DbContextOptions<DemoDay10Context> options)
            : base(options)
        {
        }

        public virtual DbSet<Country> Countries { get; set; }
        public virtual DbSet<Department> Departments { get; set; }
        public virtual DbSet<Employee> Employees { get; set; }
        public virtual DbSet<JobHistory> JobHistories { get; set; }
        public virtual DbSet<Location> Locations { get; set; }
        public virtual DbSet<Student> Students { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if (!optionsBuilder.IsConfigured)
            {
#warning To protect potentially sensitive information in your connection string, you should move it out of source code. You can avoid scaffolding the connection string by using the Name= syntax to read it from configuration - see https://go.microsoft.com/fwlink/?linkid=2131148. For more guidance on storing connection strings, see http://go.microsoft.com/fwlink/?LinkId=723263.
                optionsBuilder.UseSqlServer("Server=DESKTOP-VBU96E5\\SQLEXPRESS01;Initial Catalog=DemoDay10;Integrated Security=True;");
            }
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.HasAnnotation("Relational:Collation", "SQL_Latin1_General_CP1_CI_AS");

            modelBuilder.Entity<Country>(entity =>
            {
                entity.Property(e => e.CountryId)
                    .HasMaxLength(2)
                    .IsUnicode(false)
                    .HasColumnName("CountryID");

                entity.Property(e => e.CountryName)
                    .HasMaxLength(40)
                    .IsUnicode(false);

                entity.Property(e => e.RegionId)
                    .HasColumnType("decimal(10, 0)")
                    .HasColumnName("RegionID");
            });

            modelBuilder.Entity<Department>(entity =>
            {
                entity.Property(e => e.DepartmentId)
                    .HasColumnType("decimal(4, 0)")
                    .HasColumnName("DepartmentID")
                    .HasDefaultValueSql("('0')");

                entity.Property(e => e.DepartmentName)
                    .IsRequired()
                    .HasMaxLength(30)
                    .IsUnicode(false);

                entity.Property(e => e.LocationId)
                    .HasColumnType("decimal(4, 0)")
                    .HasColumnName("LocationID");

                entity.Property(e => e.ManagerId)
                    .HasColumnType("decimal(6, 0)")
                    .HasColumnName("ManagerID");
            });

            modelBuilder.Entity<Employee>(entity =>
            {
                entity.HasIndex(e => e.Email, "ukEmail")
                    .IsUnique();

                entity.Property(e => e.EmployeeId)
                    .HasColumnType("decimal(6, 0)")
                    .HasColumnName("EmployeeID")
                    .HasDefaultValueSql("('0')");

                entity.Property(e => e.CommissionPct).HasColumnType("decimal(2, 2)");

                entity.Property(e => e.DepartmentId)
                    .HasColumnType("decimal(4, 0)")
                    .HasColumnName("DepartmentID");

                entity.Property(e => e.Email)
                    .IsRequired()
                    .HasMaxLength(25)
                    .IsUnicode(false);

                entity.Property(e => e.FirstName)
                    .HasMaxLength(20)
                    .IsUnicode(false);

                entity.Property(e => e.HireDate).HasColumnType("date");

                entity.Property(e => e.JobId)
                    .IsRequired()
                    .HasMaxLength(10)
                    .IsUnicode(false);

                entity.Property(e => e.LastName)
                    .IsRequired()
                    .HasMaxLength(25)
                    .IsUnicode(false);

                entity.Property(e => e.ManagerId)
                    .HasColumnType("decimal(6, 0)")
                    .HasColumnName("ManagerID");

                entity.Property(e => e.PhoneNumber)
                    .HasMaxLength(20)
                    .IsUnicode(false);

                entity.Property(e => e.Salary).HasColumnType("decimal(8, 2)");
            });

            modelBuilder.Entity<JobHistory>(entity =>
            {
                entity.HasKey(e => new { e.EmployeeId, e.StartDate })
                    .HasName("PK__JobHisto__1E31D03E9D6F327D");

                entity.ToTable("JobHistory");

                entity.Property(e => e.EmployeeId)
                    .HasColumnType("decimal(6, 0)")
                    .HasColumnName("EmployeeID");

                entity.Property(e => e.StartDate).HasColumnType("date");

                entity.Property(e => e.DepartmentId)
                    .HasColumnType("decimal(4, 0)")
                    .HasColumnName("DepartmentID");

                entity.Property(e => e.EndDate).HasColumnType("date");

                entity.Property(e => e.JobId)
                    .IsRequired()
                    .HasMaxLength(10)
                    .IsUnicode(false)
                    .HasColumnName("JobID");
            });

            modelBuilder.Entity<Location>(entity =>
            {
                entity.Property(e => e.LocationId)
                    .HasColumnType("decimal(4, 0)")
                    .HasColumnName("LocationID")
                    .HasDefaultValueSql("('0')");

                entity.Property(e => e.City)
                    .IsRequired()
                    .HasMaxLength(30)
                    .IsUnicode(false);

                entity.Property(e => e.CountryId)
                    .HasMaxLength(2)
                    .IsUnicode(false)
                    .HasColumnName("CountryID");

                entity.Property(e => e.PostalCode)
                    .HasMaxLength(12)
                    .IsUnicode(false);

                entity.Property(e => e.StateProvince)
                    .HasMaxLength(25)
                    .IsUnicode(false);

                entity.Property(e => e.StreetAddress)
                    .HasMaxLength(40)
                    .IsUnicode(false);
            });

            modelBuilder.Entity<Student>(entity =>
            {
                entity.HasNoKey();

                entity.Property(e => e.Address)
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.City)
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.Dob)
                    .HasColumnType("date")
                    .HasColumnName("DOB");

                entity.Property(e => e.Name)
                    .HasMaxLength(50)
                    .IsUnicode(false);
            });

            OnModelCreatingPartial(modelBuilder);
        }

        partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
    }
}
