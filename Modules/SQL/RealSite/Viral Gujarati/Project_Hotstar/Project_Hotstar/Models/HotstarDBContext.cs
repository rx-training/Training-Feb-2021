using System;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;
using Project_Hotstar.Models.Authentication;
using Project_Hotstar.Models;

#nullable disable

namespace Project_Hotstar.Models
{
    public partial class HotstarDBContext : DbContext /*IdentityDbContext<ApplicationUser>*/
    {
        public HotstarDBContext()
        {
        }

        public HotstarDBContext(DbContextOptions<HotstarDBContext> options)
            : base(options)
        {
        }

        public virtual DbSet<Genre> Genres { get; set; }
        public virtual DbSet<Payment> Payments { get; set; }
        public virtual DbSet<ShowsAndMovie> ShowsAndMovies { get; set; }
        public virtual DbSet<Sport> Sports { get; set; }
        public virtual DbSet<Subscription> Subscriptions { get; set; }
        public virtual DbSet<UserAccount> UserAccounts { get; set; }

//        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
//        {
//            if (!optionsBuilder.IsConfigured)
//            {
////#warning To protect potentially sensitive information in your connection string, you should move it out of source code. You can avoid scaffolding the connection string by using the Name= syntax to read it from configuration - see https://go.microsoft.com/fwlink/?linkid=2131148. For more guidance on storing connection strings, see http://go.microsoft.com/fwlink/?LinkId=723263.
//                optionsBuilder.UseSqlServer("Server=.\\SQLExpress01;Database=HotstarDB;Trusted_Connection=True;");
//            }
//        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.HasAnnotation("Relational:Collation", "Latin1_General_CI_AI");

            modelBuilder.Entity<Genre>(entity =>
            {
                entity.ToTable("Genre");

                entity.Property(e => e.GenreId)
                    .ValueGeneratedNever()
                    .HasColumnName("GenreID");

                entity.Property(e => e.GenreDescription)
                    .IsRequired()
                    .HasMaxLength(30);
            });

            modelBuilder.Entity<Payment>(entity =>
            {
                entity.ToTable("Payment");

                entity.Property(e => e.PaymentId)
                    .ValueGeneratedNever()
                    .HasColumnName("PaymentID");

                entity.Property(e => e.PaymentDate).HasColumnType("date");

                entity.Property(e => e.PaymentMethod)
                    .IsRequired()
                    .HasMaxLength(30);
            });

            modelBuilder.Entity<ShowsAndMovie>(entity =>
            {
                entity.HasKey(e => e.MovieId)
                    .HasName("PK__ShowsAnd__4BD2943AAE7F33B5");

                entity.Property(e => e.MovieId)
                    .ValueGeneratedNever()
                    .HasColumnName("MovieID");

                entity.Property(e => e.MovieLanguage)
                    .IsRequired()
                    .HasMaxLength(30);

                entity.Property(e => e.MovieTitle)
                    .IsRequired()
                    .HasMaxLength(30);

                entity.Property(e => e.Rating)
                    .IsRequired()
                    .HasMaxLength(30);

                entity.Property(e => e.ReleaseDate).HasColumnType("date");
            });

            modelBuilder.Entity<Sport>(entity =>
            {
                entity.HasNoKey();

                entity.Property(e => e.SportsDescription)
                    .IsRequired()
                    .HasMaxLength(30);
            });
           
            modelBuilder.Entity<Subscription>(entity =>
            {
                entity.HasNoKey();

                entity.ToTable("Subscription");

                entity.Property(e => e.Price).HasColumnType("money");

                entity.Property(e => e.SubscriptionPlan)
                    .IsRequired()
                    .HasMaxLength(30);
            });

            modelBuilder.Entity<UserAccount>(entity =>
            {
                entity.HasKey(e => e.CustomerId)
                    .HasName("PK__UserAcco__A4AE64B847EFA0D8");

                entity.ToTable("UserAccount");

                entity.HasIndex(e => e.Email, "UQ__UserAcco__A9D10534A5329741")
                    .IsUnique();

                entity.Property(e => e.CustomerId)
                    .ValueGeneratedNever()
                    .HasColumnName("CustomerID");

                entity.Property(e => e.Address)
                    .IsRequired()
                    .HasMaxLength(30);

                entity.Property(e => e.Email)
                    .IsRequired()
                    .HasMaxLength(30);

                entity.Property(e => e.Name)
                    .IsRequired()
                    .HasMaxLength(30);
            });

            OnModelCreatingPartial(modelBuilder);
        }

        partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
    }
}
