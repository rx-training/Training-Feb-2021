using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;

#nullable disable

namespace day15Assignment.Models
{
    public partial class day15AssignmentContext : DbContext
    {
        public day15AssignmentContext()
        {
        }

        public day15AssignmentContext(DbContextOptions<day15AssignmentContext> options)
            : base(options)
        {
        }

        public virtual DbSet<Assignment> Assignments { get; set; }
        public virtual DbSet<Employee> Employees { get; set; }
        public virtual DbSet<EmployeeAssignment> EmployeeAssignments { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {

            optionsBuilder.UseSqlServer("Server=DESKTOP-VBU96E5\\SQLEXPRESS01;Database=day15Assignment;Trusted_Connection=True;");

            //            if (!optionsBuilder.IsConfigured)
            //            {
            ////#warning To protect potentially sensitive information in your connection string, you should move it out of source code. You can avoid scaffolding the connection string by using the Name= syntax to read it from configuration - see https://go.microsoft.com/fwlink/?linkid=2131148. For more guidance on storing connection strings, see http://go.microsoft.com/fwlink/?LinkId=723263.
            //            }
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.HasAnnotation("Relational:Collation", "SQL_Latin1_General_CP1_CI_AS");

            modelBuilder.Entity<Assignment>(entity =>
            {
                entity.HasKey(e => e.AssignnmentId);

                entity.Property(e => e.AssignnmentId)
                    .ValueGeneratedNever()
                    .HasColumnName("AssignnmentID");

                entity.Property(e => e.ActionCode)
                    .HasMaxLength(10)
                    .IsFixedLength(true);

                entity.Property(e => e.ActionReasonCode)
                    .HasMaxLength(10)
                    .IsFixedLength(true);

                entity.Property(e => e.ActualTerminationCode).HasColumnType("date");

                entity.Property(e => e.AssignmentCategory)
                    .HasMaxLength(10)
                    .IsFixedLength(true);

                entity.Property(e => e.AssignmentExtraInf)
                    .HasMaxLength(10)
                    .IsFixedLength(true);

                entity.Property(e => e.AssignmentStatus)
                    .HasMaxLength(10)
                    .IsFixedLength(true);

                entity.Property(e => e.AssignnmentName)
                    .HasMaxLength(10)
                    .IsFixedLength(true);

                entity.Property(e => e.AssignnmentNumber)
                    .HasMaxLength(10)
                    .IsFixedLength(true);

                entity.Property(e => e.AssignnmentProjectEndDate).HasColumnType("date");

                entity.Property(e => e.CreationDate).HasColumnType("datetime");

                entity.Property(e => e.DepartmentId).HasColumnName("DepartmentID");

                entity.Property(e => e.FullPartTime)
                    .HasMaxLength(10)
                    .IsFixedLength(true);

                entity.Property(e => e.JobId).HasColumnName("jobId");

                entity.Property(e => e.LocationId).HasColumnName("LocationID");

                entity.Property(e => e.ManagerId).HasColumnName("ManagerID");
            });

            modelBuilder.Entity<Employee>(entity =>
            {
                entity.Property(e => e.EmployeeId).ValueGeneratedNever();

                entity.Property(e => e.AddressLine2)
                    .HasMaxLength(10)
                    .IsFixedLength(true);

                entity.Property(e => e.AddressLine3)
                    .HasMaxLength(10)
                    .IsFixedLength(true);

                entity.Property(e => e.AdreessLine1)
                    .HasMaxLength(10)
                    .IsFixedLength(true);

                entity.Property(e => e.Assignments).HasMaxLength(50);

                entity.Property(e => e.CitizenshipStatus)
                    .HasMaxLength(10)
                    .IsFixedLength(true);

                entity.Property(e => e.CitizenshipshipCode)
                    .HasMaxLength(10)
                    .IsFixedLength(true);

                entity.Property(e => e.City)
                    .HasMaxLength(10)
                    .IsFixedLength(true);

                entity.Property(e => e.Country)
                    .HasMaxLength(10)
                    .IsFixedLength(true);

                entity.Property(e => e.CreationDate).HasColumnType("datetime");

                entity.Property(e => e.DateOfBirth)
                    .HasColumnType("date")
                    .HasColumnName("dateOfBirth");

                entity.Property(e => e.DrivingLicenseExpDate).HasColumnType("date");

                entity.Property(e => e.EmployeeName)
                    .IsRequired()
                    .HasMaxLength(10)
                    .IsFixedLength(true);

                entity.Property(e => e.Gender)
                    .HasMaxLength(10)
                    .IsFixedLength(true);

                entity.Property(e => e.HireDate).HasColumnType("date");

                entity.Property(e => e.HomePhoneNumber)
                    .HasMaxLength(10)
                    .IsFixedLength(true);

                entity.Property(e => e.MaritalStatus)
                    .HasMaxLength(10)
                    .IsFixedLength(true);

                entity.HasOne(d => d.Assignment)
                    .WithMany(p => p.Employees)
                    .HasForeignKey(d => d.AssignmentId)
                    .HasConstraintName("FKAssighnmentId");
            });

            modelBuilder.Entity<EmployeeAssignment>(entity =>
            {
                entity.HasKey(e => e.Eaid)
                    .HasName("PK__Employee__DFB6FB18B71115B1");

                entity.ToTable("EmployeeAssignment");

                entity.Property(e => e.Eaid)
                    .ValueGeneratedNever()
                    .HasColumnName("EAId");

                entity.Property(e => e.AssignmentId).HasColumnName("AssignmentID");

                entity.HasOne(d => d.Assignment)
                    .WithMany(p => p.EmployeeAssignments)
                    .HasForeignKey(d => d.AssignmentId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FKAssID");

                entity.HasOne(d => d.Employee)
                    .WithMany(p => p.EmployeeAssignments)
                    .HasForeignKey(d => d.EmployeeId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FKEmpID");
            });

            OnModelCreatingPartial(modelBuilder);
        }

        partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
    }
}
