using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;

#nullable disable

namespace day11assignment.Model
{
    public partial class HospitalsContext : DbContext
    {
        public HospitalsContext()
        {
        }

        public HospitalsContext(DbContextOptions<HospitalsContext> options)
            : base(options)
        {
        }

        public virtual DbSet<Department> Departments { get; set; }
        public virtual DbSet<Doctor> Doctors { get; set; }
        public virtual DbSet<Drug> Drugs { get; set; }
        public virtual DbSet<HealthCareAssistant> HealthCareAssistants { get; set; }
        public virtual DbSet<Patient> Patients { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if (!optionsBuilder.IsConfigured)
            {
#warning To protect potentially sensitive information in your connection string, you should move it out of source code. You can avoid scaffolding the connection string by using the Name= syntax to read it from configuration - see https://go.microsoft.com/fwlink/?linkid=2131148. For more guidance on storing connection strings, see http://go.microsoft.com/fwlink/?LinkId=723263.
                optionsBuilder.UseSqlServer("Server=DESKTOP-VBU96E5\\SQLEXPRESS01;Initial Catalog=Hospitals;Integrated Security=True;");
            }
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.HasAnnotation("Relational:Collation", "SQL_Latin1_General_CP1_CI_AS");

            modelBuilder.Entity<Department>(entity =>
            {
                entity.HasKey(e => e.DeptId)
                    .HasName("PKDeptID");

                entity.Property(e => e.DeptId)
                    .HasMaxLength(50)
                    .IsUnicode(false)
                    .HasColumnName("Dept_ID");

                entity.Property(e => e.DeptName)
                    .IsRequired()
                    .HasMaxLength(50)
                    .IsUnicode(false)
                    .HasColumnName("Dept_Name");
            });

            modelBuilder.Entity<Doctor>(entity =>
            {
                entity.HasKey(e => e.DrId)
                    .HasName("PKDoctorID");

                entity.Property(e => e.DrId)
                    .HasMaxLength(50)
                    .IsUnicode(false)
                    .HasColumnName("Dr_ID");

                entity.Property(e => e.DeptId)
                    .IsRequired()
                    .HasMaxLength(50)
                    .IsUnicode(false)
                    .HasColumnName("Dept_ID");

                entity.Property(e => e.Designation)
                    .IsRequired()
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.DrName)
                    .IsRequired()
                    .HasMaxLength(60)
                    .IsUnicode(false)
                    .HasColumnName("Dr_Name");

                entity.Property(e => e.Gender)
                    .IsRequired()
                    .HasMaxLength(20)
                    .IsUnicode(false);

                entity.HasOne(d => d.Dept)
                    .WithMany(p => p.Doctors)
                    .HasForeignKey(d => d.DeptId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FKDeptID");
            });

            modelBuilder.Entity<Drug>(entity =>
            {
                entity.Property(e => e.DrugId)
                    .HasMaxLength(50)
                    .IsUnicode(false)
                    .HasColumnName("Drug_ID");

                entity.Property(e => e.DrugName)
                    .IsRequired()
                    .HasMaxLength(50)
                    .IsUnicode(false)
                    .HasColumnName("Drug_Name");

                entity.Property(e => e.DrugPrice).HasColumnType("money");

                entity.Property(e => e.DrugTime)
                    .IsRequired()
                    .HasMaxLength(80)
                    .IsUnicode(false);
            });

            modelBuilder.Entity<HealthCareAssistant>(entity =>
            {
                entity.HasKey(e => e.HId)
                    .HasName("PKHID");

                entity.Property(e => e.HId)
                    .HasMaxLength(50)
                    .IsUnicode(false)
                    .HasColumnName("H_ID");

                entity.Property(e => e.DeptId)
                    .IsRequired()
                    .HasMaxLength(50)
                    .IsUnicode(false)
                    .HasColumnName("Dept_ID");

                entity.Property(e => e.HName)
                    .IsRequired()
                    .HasMaxLength(50)
                    .IsUnicode(false)
                    .HasColumnName("H_Name");

                entity.Property(e => e.PId)
                    .HasMaxLength(50)
                    .IsUnicode(false)
                    .HasColumnName("P_ID");

                entity.HasOne(d => d.Dept)
                    .WithMany(p => p.HealthCareAssistants)
                    .HasForeignKey(d => d.DeptId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FKDepartmentsID");

                entity.HasOne(d => d.PIdNavigation)
                    .WithMany(p => p.HealthCareAssistants)
                    .HasForeignKey(d => d.PId)
                    .HasConstraintName("FKPatientID");
            });

            modelBuilder.Entity<Patient>(entity =>
            {
                entity.HasKey(e => e.PId)
                    .HasName("PKPID");

                entity.Property(e => e.PId)
                    .HasMaxLength(50)
                    .IsUnicode(false)
                    .HasColumnName("P_ID");

                entity.Property(e => e.DeptId)
                    .IsRequired()
                    .HasMaxLength(50)
                    .IsUnicode(false)
                    .HasColumnName("Dept_ID");

                entity.Property(e => e.DrId)
                    .IsRequired()
                    .HasMaxLength(50)
                    .IsUnicode(false)
                    .HasColumnName("Dr_ID");

                entity.Property(e => e.DrugId)
                    .IsRequired()
                    .HasMaxLength(50)
                    .IsUnicode(false)
                    .HasColumnName("Drug_ID");

                entity.Property(e => e.PName)
                    .IsRequired()
                    .HasMaxLength(50)
                    .IsUnicode(false)
                    .HasColumnName("P_Name");

                entity.HasOne(d => d.Dept)
                    .WithMany(p => p.Patients)
                    .HasForeignKey(d => d.DeptId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FKDepartmentID");

                entity.HasOne(d => d.Dr)
                    .WithMany(p => p.Patients)
                    .HasForeignKey(d => d.DrId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FKDrID");

                entity.HasOne(d => d.Drug)
                    .WithMany(p => p.Patients)
                    .HasForeignKey(d => d.DrugId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FKDrugID");
            });

            OnModelCreatingPartial(modelBuilder);
        }

        partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
    }
}
