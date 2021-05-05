using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;

namespace StackOverflowAPI.Models
{
    public partial class StackOverFlowContext : DbContext
    {
        public StackOverFlowContext()
        {
        }

        public StackOverFlowContext(DbContextOptions<StackOverFlowContext> options)
            : base(options)
        {
        }

        public virtual DbSet<Answers> Answers { get; set; }
        public virtual DbSet<Badges> Badges { get; set; }
        public virtual DbSet<BadgesEarnedByUser> BadgesEarnedByUser { get; set; }
        public virtual DbSet<Bookmarks> Bookmarks { get; set; }
        public virtual DbSet<CompaniesToExclude> CompaniesToExclude { get; set; }
        public virtual DbSet<Education> Education { get; set; }
        public virtual DbSet<IndustriesToExclude> IndustriesToExclude { get; set; }
        public virtual DbSet<JobProfile> JobProfile { get; set; }
        public virtual DbSet<Questions> Questions { get; set; }
        public virtual DbSet<Tags> Tags { get; set; }
        public virtual DbSet<TechPreferNotToWorkWith> TechPreferNotToWorkWith { get; set; }
        public virtual DbSet<TechWantToWorkWith> TechWantToWorkWith { get; set; }
        public virtual DbSet<TechnologiesUsedAsStudent> TechnologiesUsedAsStudent { get; set; }
        public virtual DbSet<TechnologiesUsedByUserInJob> TechnologiesUsedByUserInJob { get; set; }
        public virtual DbSet<UserLoginDetails> UserLoginDetails { get; set; }
        public virtual DbSet<Users> Users { get; set; }
        public virtual DbSet<VwBadgesDetails> VwBadgesDetails { get; set; }
        public virtual DbSet<VwQuestionDetails> VwQuestionDetails { get; set; }
        public virtual DbSet<VwUserQadaetails> VwUserQadaetails { get; set; }
        public virtual DbSet<WhereUserLikeToWork> WhereUserLikeToWork { get; set; }
        public virtual DbSet<WorkExperience> WorkExperience { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if (!optionsBuilder.IsConfigured)
            {
#warning To protect potentially sensitive information in your connection string, you should move it out of source code. See http://go.microsoft.com/fwlink/?LinkId=723263 for guidance on storing connection strings.
                optionsBuilder.UseSqlServer("Server=LAPTOP-AKRFK039\\SQLEXPRESS;Database=StackOverFlow;Integrated Security=True");
            }
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Answers>(entity =>
            {
                entity.HasKey(e => e.AnswerId)
                    .HasName("PK__Answers__D4825024B77890F3");

                entity.Property(e => e.AnswerId)
                    .HasColumnName("AnswerID")
                    .ValueGeneratedNever();

                entity.Property(e => e.QuestionId).HasColumnName("QuestionID");

                entity.Property(e => e.Userid).HasColumnName("USERID");

                entity.HasOne(d => d.Question)
                    .WithMany(p => p.Answers)
                    .HasForeignKey(d => d.QuestionId)
                    .HasConstraintName("FK__Answers__Questio__5165187F");

                entity.HasOne(d => d.User)
                    .WithMany(p => p.Answers)
                    .HasForeignKey(d => d.Userid)
                    .HasConstraintName("FK__Answers__USERID__6E01572D");
            });

            modelBuilder.Entity<Badges>(entity =>
            {
                entity.HasKey(e => e.BadgeId)
                    .HasName("PK__Badges__1918237CBCCC859B");

                entity.Property(e => e.BadgeId)
                    .HasColumnName("BadgeID")
                    .ValueGeneratedNever();

                entity.Property(e => e.BadgeCategory).HasMaxLength(30);

                entity.Property(e => e.BadgeDescription).HasMaxLength(200);

                entity.Property(e => e.BadgeName).HasMaxLength(30);

                entity.Property(e => e.BadgeType).HasMaxLength(20);
            });

            modelBuilder.Entity<BadgesEarnedByUser>(entity =>
            {
                entity.HasNoKey();

                entity.Property(e => e.BadgeId).HasColumnName("BadgeID");

                entity.Property(e => e.DateOfEarned).HasColumnType("date");

                entity.Property(e => e.UserId).HasColumnName("UserID");

                entity.HasOne(d => d.Badge)
                    .WithMany()
                    .HasForeignKey(d => d.BadgeId)
                    .HasConstraintName("Fk_BadgeIDBadge");

                entity.HasOne(d => d.User)
                    .WithMany()
                    .HasForeignKey(d => d.UserId)
                    .HasConstraintName("Fk_UserIDBadge");
            });

            modelBuilder.Entity<Bookmarks>(entity =>
            {
                entity.HasNoKey();

                entity.Property(e => e.QuestionId).HasColumnName("QuestionID");

                entity.Property(e => e.UserId).HasColumnName("UserID");

                entity.HasOne(d => d.Question)
                    .WithMany()
                    .HasForeignKey(d => d.QuestionId)
                    .HasConstraintName("FK__Bookmarks__Quest__4CA06362");

                entity.HasOne(d => d.User)
                    .WithMany()
                    .HasForeignKey(d => d.UserId)
                    .HasConstraintName("FK__Bookmarks__UserI__4BAC3F29");
            });

            modelBuilder.Entity<CompaniesToExclude>(entity =>
            {
                entity.HasNoKey();

                entity.Property(e => e.CompanyToExclude).HasMaxLength(30);

                entity.Property(e => e.UserId).HasColumnName("UserID");

                entity.HasOne(d => d.User)
                    .WithMany()
                    .HasForeignKey(d => d.UserId)
                    .HasConstraintName("FK__Companies__UserI__5CD6CB2B");
            });

            modelBuilder.Entity<Education>(entity =>
            {
                entity.HasNoKey();

                entity.Property(e => e.Degree).HasMaxLength(30);

                entity.Property(e => e.Summary).HasMaxLength(200);

                entity.Property(e => e.University).HasMaxLength(50);

                entity.Property(e => e.UserId).HasColumnName("UserID");

                entity.HasOne(d => d.User)
                    .WithMany()
                    .HasForeignKey(d => d.UserId)
                    .HasConstraintName("Fk_UserIDEducation");
            });

            modelBuilder.Entity<IndustriesToExclude>(entity =>
            {
                entity.HasNoKey();

                entity.Property(e => e.IndustryToExclude).HasMaxLength(30);

                entity.Property(e => e.UserId).HasColumnName("UserID");

                entity.HasOne(d => d.User)
                    .WithMany()
                    .HasForeignKey(d => d.UserId)
                    .HasConstraintName("FK__Industrie__UserI__5535A963");
            });

            modelBuilder.Entity<JobProfile>(entity =>
            {
                entity.HasNoKey();

                entity.Property(e => e.Industry).HasMaxLength(30);

                entity.Property(e => e.JobSearchStatus).HasMaxLength(50);

                entity.Property(e => e.JobType).HasMaxLength(30);

                entity.Property(e => e.MinAnnualSalary).HasColumnType("money");

                entity.Property(e => e.Role).HasMaxLength(30);

                entity.Property(e => e.UserId).HasColumnName("UserID");

                entity.HasOne(d => d.User)
                    .WithMany()
                    .HasForeignKey(d => d.UserId)
                    .HasConstraintName("FK__JobProfil__UserI__534D60F1");
            });

            modelBuilder.Entity<Questions>(entity =>
            {
                entity.HasKey(e => e.QuestionId)
                    .HasName("PK__Question__0DC06F8C382669D7");

                entity.Property(e => e.QuestionId)
                    .HasColumnName("QuestionID")
                    .ValueGeneratedNever();

                entity.Property(e => e.Question).HasMaxLength(500);

                entity.Property(e => e.TimeOfAsk).HasColumnType("datetime");

                entity.Property(e => e.UserId).HasColumnName("UserID");

                entity.HasOne(d => d.User)
                    .WithMany(p => p.Questions)
                    .HasForeignKey(d => d.UserId)
                    .HasConstraintName("Fk_UserIDQuestion");
            });

            modelBuilder.Entity<Tags>(entity =>
            {
                entity.HasNoKey();

                entity.Property(e => e.QuestionId).HasColumnName("QuestionID");

                entity.Property(e => e.TagName).HasMaxLength(30);

                entity.HasOne(d => d.Question)
                    .WithMany()
                    .HasForeignKey(d => d.QuestionId)
                    .HasConstraintName("FK__Tags__QuestionID__4E88ABD4");
            });

            modelBuilder.Entity<TechPreferNotToWorkWith>(entity =>
            {
                entity.HasNoKey();

                entity.Property(e => e.TechPeferNotToWorkWith).HasMaxLength(30);

                entity.Property(e => e.UserId).HasColumnName("UserID");

                entity.HasOne(d => d.User)
                    .WithMany()
                    .HasForeignKey(d => d.UserId)
                    .HasConstraintName("FK__TechPrefe__UserI__571DF1D5");
            });

            modelBuilder.Entity<TechWantToWorkWith>(entity =>
            {
                entity.HasNoKey();

                entity.Property(e => e.TechYouWantToWorkWith).HasMaxLength(30);

                entity.Property(e => e.UserId).HasColumnName("UserID");

                entity.HasOne(d => d.User)
                    .WithMany()
                    .HasForeignKey(d => d.UserId)
                    .HasConstraintName("FK__TechWantT__UserI__59063A47");
            });

            modelBuilder.Entity<TechnologiesUsedAsStudent>(entity =>
            {
                entity.HasNoKey();

                entity.Property(e => e.Technology).HasMaxLength(20);

                entity.Property(e => e.UserId).HasColumnName("UserID");

                entity.HasOne(d => d.User)
                    .WithMany()
                    .HasForeignKey(d => d.UserId)
                    .HasConstraintName("Fk_UserIDTech");
            });

            modelBuilder.Entity<TechnologiesUsedByUserInJob>(entity =>
            {
                entity.HasNoKey();

                entity.Property(e => e.Technologies).HasMaxLength(20);

                entity.Property(e => e.UserId).HasColumnName("UserID");

                entity.HasOne(d => d.User)
                    .WithMany()
                    .HasForeignKey(d => d.UserId)
                    .HasConstraintName("Fk_UserIDTechInJob");
            });

            modelBuilder.Entity<UserLoginDetails>(entity =>
            {
                entity.HasIndex(e => e.Email)
                    .HasName("UQ__UserLogi__A9D1053471FDEEA2")
                    .IsUnique();

                entity.Property(e => e.Id)
                    .HasColumnName("ID")
                    .ValueGeneratedNever();

                entity.Property(e => e.CurrentPassword).HasMaxLength(20);

                entity.Property(e => e.Email)
                    .IsRequired()
                    .HasMaxLength(50);

                entity.Property(e => e.PreviousPassword).HasMaxLength(20);
            });

            modelBuilder.Entity<Users>(entity =>
            {
                entity.HasKey(e => e.UserId)
                    .HasName("PK__Users__1788CCACF38D62D6");

                entity.HasIndex(e => e.EmailId)
                    .HasName("UQ__Users__7ED91AEE7C39FBAE")
                    .IsUnique();

                entity.Property(e => e.UserId)
                    .HasColumnName("UserID")
                    .ValueGeneratedNever();

                entity.Property(e => e.AboutUser).HasMaxLength(200);

                entity.Property(e => e.EmailId)
                    .IsRequired()
                    .HasColumnName("EmailID")
                    .HasMaxLength(50);

                entity.Property(e => e.FullName)
                    .IsRequired()
                    .HasMaxLength(30);

                entity.Property(e => e.GitHub).HasMaxLength(100);

                entity.Property(e => e.LastSeen).HasColumnType("datetime");

                entity.Property(e => e.Location).HasMaxLength(50);

                entity.Property(e => e.PhoneNumber).HasMaxLength(10);

                entity.Property(e => e.Title).HasMaxLength(20);

                entity.Property(e => e.Twitter).HasMaxLength(100);

                entity.Property(e => e.UserName)
                    .IsRequired()
                    .HasMaxLength(20);

                entity.HasOne(d => d.Email)
                    .WithOne(p => p.Users)
                    .HasPrincipalKey<UserLoginDetails>(p => p.Email)
                    .HasForeignKey<Users>(d => d.EmailId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("Fk_email");
            });

            modelBuilder.Entity<VwBadgesDetails>(entity =>
            {
                entity.HasNoKey();

                entity.ToView("VwBadgesDetails");

                entity.Property(e => e.FullName)
                    .IsRequired()
                    .HasMaxLength(30);

                entity.Property(e => e.UserId).HasColumnName("UserID");
            });

            modelBuilder.Entity<VwQuestionDetails>(entity =>
            {
                entity.HasNoKey();

                entity.ToView("VwQuestionDetails");

                entity.Property(e => e.Question).HasMaxLength(500);

                entity.Property(e => e.QuestionId).HasColumnName("QuestionID");
            });

            modelBuilder.Entity<VwUserQadaetails>(entity =>
            {
                entity.HasNoKey();

                entity.ToView("VwUserQADaetails");

                entity.Property(e => e.FullName)
                    .IsRequired()
                    .HasMaxLength(30);

                entity.Property(e => e.UserId).HasColumnName("UserID");
            });

            modelBuilder.Entity<WhereUserLikeToWork>(entity =>
            {
                entity.HasNoKey();

                entity.Property(e => e.Location).HasMaxLength(30);

                entity.Property(e => e.UserId).HasColumnName("UserID");

                entity.HasOne(d => d.User)
                    .WithMany()
                    .HasForeignKey(d => d.UserId)
                    .HasConstraintName("FK__WhereUser__UserI__5AEE82B9");
            });

            modelBuilder.Entity<WorkExperience>(entity =>
            {
                entity.HasNoKey();

                entity.Property(e => e.CompanyName).HasMaxLength(30);

                entity.Property(e => e.JobTitle).HasMaxLength(30);

                entity.Property(e => e.Responsibilities).HasMaxLength(200);

                entity.Property(e => e.UserId).HasColumnName("UserID");

                entity.HasOne(d => d.User)
                    .WithMany()
                    .HasForeignKey(d => d.UserId)
                    .HasConstraintName("Fk_UserIDWork");
            });

            OnModelCreatingPartial(modelBuilder);
        }

        partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
    }
}
