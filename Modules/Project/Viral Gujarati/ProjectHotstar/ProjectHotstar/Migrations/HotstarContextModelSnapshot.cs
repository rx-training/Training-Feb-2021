﻿// <auto-generated />
using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;
using ProjectHotstar.Models;

namespace ProjectHotstar.Migrations
{
    [DbContext(typeof(HotstarContext))]
    partial class HotstarContextModelSnapshot : ModelSnapshot
    {
        protected override void BuildModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("Relational:Collation", "Latin1_General_CI_AI")
                .HasAnnotation("Relational:MaxIdentifierLength", 128)
                .HasAnnotation("ProductVersion", "5.0.6")
                .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

            modelBuilder.Entity("Microsoft.AspNetCore.Identity.IdentityRole", b =>
                {
                    b.Property<string>("Id")
                        .HasColumnType("nvarchar(450)");

                    b.Property<string>("ConcurrencyStamp")
                        .IsConcurrencyToken()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Name")
                        .HasMaxLength(256)
                        .HasColumnType("nvarchar(256)");

                    b.Property<string>("NormalizedName")
                        .HasMaxLength(256)
                        .HasColumnType("nvarchar(256)");

                    b.HasKey("Id");

                    b.HasIndex("NormalizedName")
                        .IsUnique()
                        .HasDatabaseName("RoleNameIndex")
                        .HasFilter("[NormalizedName] IS NOT NULL");

                    b.ToTable("AspNetRoles");
                });

            modelBuilder.Entity("Microsoft.AspNetCore.Identity.IdentityRoleClaim<string>", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<string>("ClaimType")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("ClaimValue")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("RoleId")
                        .IsRequired()
                        .HasColumnType("nvarchar(450)");

                    b.HasKey("Id");

                    b.HasIndex("RoleId");

                    b.ToTable("AspNetRoleClaims");
                });

            modelBuilder.Entity("Microsoft.AspNetCore.Identity.IdentityUserClaim<string>", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<string>("ClaimType")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("ClaimValue")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("UserId")
                        .IsRequired()
                        .HasColumnType("nvarchar(450)");

                    b.HasKey("Id");

                    b.HasIndex("UserId");

                    b.ToTable("AspNetUserClaims");
                });

            modelBuilder.Entity("Microsoft.AspNetCore.Identity.IdentityUserLogin<string>", b =>
                {
                    b.Property<string>("LoginProvider")
                        .HasColumnType("nvarchar(450)");

                    b.Property<string>("ProviderKey")
                        .HasColumnType("nvarchar(450)");

                    b.Property<string>("ProviderDisplayName")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("UserId")
                        .IsRequired()
                        .HasColumnType("nvarchar(450)");

                    b.HasKey("LoginProvider", "ProviderKey");

                    b.HasIndex("UserId");

                    b.ToTable("AspNetUserLogins");
                });

            modelBuilder.Entity("Microsoft.AspNetCore.Identity.IdentityUserRole<string>", b =>
                {
                    b.Property<string>("UserId")
                        .HasColumnType("nvarchar(450)");

                    b.Property<string>("RoleId")
                        .HasColumnType("nvarchar(450)");

                    b.HasKey("UserId", "RoleId");

                    b.HasIndex("RoleId");

                    b.ToTable("AspNetUserRoles");
                });

            modelBuilder.Entity("Microsoft.AspNetCore.Identity.IdentityUserToken<string>", b =>
                {
                    b.Property<string>("UserId")
                        .HasColumnType("nvarchar(450)");

                    b.Property<string>("LoginProvider")
                        .HasColumnType("nvarchar(450)");

                    b.Property<string>("Name")
                        .HasColumnType("nvarchar(450)");

                    b.Property<string>("Value")
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("UserId", "LoginProvider", "Name");

                    b.ToTable("AspNetUserTokens");
                });

            modelBuilder.Entity("ProjectHotstar.Models.Content", b =>
                {
                    b.Property<int>("ContentId")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .HasColumnName("ContentID")
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<string>("Description")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Episode")
                        .HasMaxLength(50)
                        .HasColumnType("nvarchar(50)");

                    b.Property<string>("Genre")
                        .HasMaxLength(50)
                        .HasColumnType("nvarchar(50)");

                    b.Property<DateTime?>("ReleaseDate")
                        .HasColumnType("datetime");

                    b.Property<int?>("SuitableAge")
                        .HasColumnType("int");

                    b.Property<string>("Title")
                        .HasMaxLength(50)
                        .HasColumnType("nvarchar(50)");

                    b.Property<string>("Url")
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("ContentId");

                    b.ToTable("Content");
                });

            modelBuilder.Entity("ProjectHotstar.Models.Movie", b =>
                {
                    b.Property<int>("MovieId")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .HasColumnName("MovieID")
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<int?>("ContentId")
                        .HasColumnType("int")
                        .HasColumnName("ContentID");

                    b.Property<string>("MovieImage")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("MovieLanguage")
                        .IsRequired()
                        .HasMaxLength(30)
                        .HasColumnType("nvarchar(30)");

                    b.Property<string>("MovieTitle")
                        .IsRequired()
                        .HasMaxLength(30)
                        .HasColumnType("nvarchar(30)");

                    b.HasKey("MovieId");

                    b.HasIndex("ContentId");

                    b.ToTable("Movies");
                });

            modelBuilder.Entity("ProjectHotstar.Models.News", b =>
                {
                    b.Property<int>("NewsId")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .HasColumnName("NewsID")
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<int?>("ContentId")
                        .HasColumnType("int")
                        .HasColumnName("ContentID");

                    b.Property<string>("MovieLanguage")
                        .IsRequired()
                        .HasMaxLength(30)
                        .HasColumnType("nvarchar(30)");

                    b.Property<string>("NewsImage")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("NewsTitle")
                        .IsRequired()
                        .HasMaxLength(30)
                        .HasColumnType("nvarchar(30)");

                    b.HasKey("NewsId");

                    b.HasIndex("ContentId");

                    b.ToTable("News");
                });

            modelBuilder.Entity("ProjectHotstar.Models.Plan", b =>
                {
                    b.Property<int>("PlanId")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .HasColumnName("PlanID")
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<string>("PlanName")
                        .IsRequired()
                        .HasMaxLength(50)
                        .HasColumnType("nvarchar(50)");

                    b.Property<decimal>("Price")
                        .HasColumnType("money");

                    b.Property<string>("SubscriptionPlan")
                        .IsRequired()
                        .HasMaxLength(30)
                        .HasColumnType("nvarchar(30)");

                    b.HasKey("PlanId");

                    b.ToTable("Plan");
                });

            modelBuilder.Entity("ProjectHotstar.Models.PlanFeature", b =>
                {
                    b.Property<int>("Id")
                        .HasColumnType("int")
                        .HasColumnName("ID");

                    b.Property<string>("Features")
                        .HasColumnType("nvarchar(max)");

                    b.Property<byte[]>("Free")
                        .HasMaxLength(1)
                        .HasColumnType("binary(1)")
                        .HasColumnName("FREE")
                        .IsFixedLength(true);

                    b.Property<int?>("PlanId")
                        .HasColumnType("int")
                        .HasColumnName("PlanID");

                    b.Property<byte[]>("Premium")
                        .HasMaxLength(1)
                        .HasColumnType("binary(1)")
                        .HasColumnName("PREMIUM")
                        .IsFixedLength(true);

                    b.Property<byte[]>("Vip")
                        .HasMaxLength(1)
                        .HasColumnType("binary(1)")
                        .HasColumnName("VIP")
                        .IsFixedLength(true);

                    b.HasKey("Id");

                    b.HasIndex("PlanId");

                    b.ToTable("PlanFeatures");
                });

            modelBuilder.Entity("ProjectHotstar.Models.Sport", b =>
                {
                    b.Property<int>("SportsId")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .HasColumnName("SportsID")
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<int?>("ContentId")
                        .HasColumnType("int")
                        .HasColumnName("ContentID");

                    b.Property<string>("SportsImage")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("SportsTitle")
                        .IsRequired()
                        .HasMaxLength(30)
                        .HasColumnType("nvarchar(30)");

                    b.Property<string>("SportsType")
                        .IsRequired()
                        .HasMaxLength(30)
                        .HasColumnType("nvarchar(30)");

                    b.HasKey("SportsId")
                        .HasName("PK__Sports__E1741EE10B303054");

                    b.HasIndex("ContentId");

                    b.ToTable("Sports");
                });

            modelBuilder.Entity("ProjectHotstar.Models.Subscription", b =>
                {
                    b.Property<int>("SubscriptionId")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .HasColumnName("SubscriptionID")
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<int?>("CustomerId")
                        .HasColumnType("int")
                        .HasColumnName("CustomerID");

                    b.Property<DateTime?>("DateOfSubscription")
                        .HasColumnType("datetime");

                    b.Property<int?>("PlanId")
                        .HasColumnType("int")
                        .HasColumnName("PlanID");

                    b.Property<DateTime?>("ValidThrough")
                        .HasColumnType("datetime");

                    b.HasKey("SubscriptionId");

                    b.HasIndex("CustomerId");

                    b.HasIndex("PlanId");

                    b.ToTable("SUBSCRIPTION");
                });

            modelBuilder.Entity("ProjectHotstar.Models.Tv", b =>
                {
                    b.Property<int>("Tvid")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .HasColumnName("TVID")
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<string>("ChannelLanguage")
                        .IsRequired()
                        .HasMaxLength(30)
                        .HasColumnType("nvarchar(30)");

                    b.Property<string>("ChannelName")
                        .IsRequired()
                        .HasMaxLength(30)
                        .HasColumnType("nvarchar(30)");

                    b.Property<int?>("ContentId")
                        .HasColumnType("int")
                        .HasColumnName("ContentID");

                    b.Property<string>("Title")
                        .HasMaxLength(50)
                        .HasColumnType("nvarchar(50)");

                    b.Property<string>("TvImage")
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("Tvid");

                    b.HasIndex("ContentId");

                    b.ToTable("TV");
                });

            modelBuilder.Entity("ProjectHotstar.Models.UserAccount", b =>
                {
                    b.Property<int>("CustomerId")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .HasColumnName("CustomerID")
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<string>("Address")
                        .IsRequired()
                        .HasMaxLength(30)
                        .HasColumnType("nvarchar(30)");

                    b.Property<string>("ApplicationUserId")
                        .HasColumnType("nvarchar(450)");

                    b.Property<DateTime?>("Dob")
                        .HasColumnType("date")
                        .HasColumnName("DOB");

                    b.Property<string>("Email")
                        .IsRequired()
                        .HasMaxLength(30)
                        .HasColumnType("nvarchar(30)");

                    b.Property<string>("Name")
                        .IsRequired()
                        .HasMaxLength(30)
                        .HasColumnType("nvarchar(30)");

                    b.Property<string>("PhoneNumber")
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("CustomerId")
                        .HasName("PK__UserAcco__A4AE64B8ADB0F632");

                    b.HasIndex("ApplicationUserId")
                        .IsUnique()
                        .HasFilter("[ApplicationUserId] IS NOT NULL");

                    b.HasIndex(new[] { "ApplicationUserId" }, "IX_UserAccount_ApplicationUserId")
                        .HasDatabaseName("IX_UserAccount_ApplicationUserId1");

                    b.HasIndex(new[] { "Email" }, "UQ__UserAcco__A9D105342E192F09")
                        .IsUnique();

                    b.ToTable("UserAccount");
                });

            modelBuilder.Entity("Project_Hotstar.Models.Authentication.ApplicationUser", b =>
                {
                    b.Property<string>("Id")
                        .HasColumnType("nvarchar(450)");

                    b.Property<int>("AccessFailedCount")
                        .HasColumnType("int");

                    b.Property<string>("ConcurrencyStamp")
                        .IsConcurrencyToken()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Email")
                        .HasMaxLength(256)
                        .HasColumnType("nvarchar(256)");

                    b.Property<bool>("EmailConfirmed")
                        .HasColumnType("bit");

                    b.Property<bool>("LockoutEnabled")
                        .HasColumnType("bit");

                    b.Property<DateTimeOffset?>("LockoutEnd")
                        .HasColumnType("datetimeoffset");

                    b.Property<string>("NormalizedEmail")
                        .HasMaxLength(256)
                        .HasColumnType("nvarchar(256)");

                    b.Property<string>("NormalizedUserName")
                        .HasMaxLength(256)
                        .HasColumnType("nvarchar(256)");

                    b.Property<string>("PasswordHash")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("PhoneNumber")
                        .HasColumnType("nvarchar(max)");

                    b.Property<bool>("PhoneNumberConfirmed")
                        .HasColumnType("bit");

                    b.Property<string>("SecurityStamp")
                        .HasColumnType("nvarchar(max)");

                    b.Property<bool>("TwoFactorEnabled")
                        .HasColumnType("bit");

                    b.Property<string>("UserName")
                        .HasMaxLength(256)
                        .HasColumnType("nvarchar(256)");

                    b.HasKey("Id");

                    b.HasIndex("NormalizedEmail")
                        .HasDatabaseName("EmailIndex");

                    b.HasIndex("NormalizedUserName")
                        .IsUnique()
                        .HasDatabaseName("UserNameIndex")
                        .HasFilter("[NormalizedUserName] IS NOT NULL");

                    b.ToTable("AspNetUsers");
                });

            modelBuilder.Entity("Microsoft.AspNetCore.Identity.IdentityRoleClaim<string>", b =>
                {
                    b.HasOne("Microsoft.AspNetCore.Identity.IdentityRole", null)
                        .WithMany()
                        .HasForeignKey("RoleId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();
                });

            modelBuilder.Entity("Microsoft.AspNetCore.Identity.IdentityUserClaim<string>", b =>
                {
                    b.HasOne("Project_Hotstar.Models.Authentication.ApplicationUser", null)
                        .WithMany()
                        .HasForeignKey("UserId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();
                });

            modelBuilder.Entity("Microsoft.AspNetCore.Identity.IdentityUserLogin<string>", b =>
                {
                    b.HasOne("Project_Hotstar.Models.Authentication.ApplicationUser", null)
                        .WithMany()
                        .HasForeignKey("UserId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();
                });

            modelBuilder.Entity("Microsoft.AspNetCore.Identity.IdentityUserRole<string>", b =>
                {
                    b.HasOne("Microsoft.AspNetCore.Identity.IdentityRole", null)
                        .WithMany()
                        .HasForeignKey("RoleId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.HasOne("Project_Hotstar.Models.Authentication.ApplicationUser", null)
                        .WithMany()
                        .HasForeignKey("UserId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();
                });

            modelBuilder.Entity("Microsoft.AspNetCore.Identity.IdentityUserToken<string>", b =>
                {
                    b.HasOne("Project_Hotstar.Models.Authentication.ApplicationUser", null)
                        .WithMany()
                        .HasForeignKey("UserId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();
                });

            modelBuilder.Entity("ProjectHotstar.Models.Movie", b =>
                {
                    b.HasOne("ProjectHotstar.Models.Content", "Content")
                        .WithMany("Movies")
                        .HasForeignKey("ContentId")
                        .HasConstraintName("FK__Movies__ContentI__34C8D9D1");

                    b.Navigation("Content");
                });

            modelBuilder.Entity("ProjectHotstar.Models.News", b =>
                {
                    b.HasOne("ProjectHotstar.Models.Content", "Content")
                        .WithMany("News")
                        .HasForeignKey("ContentId")
                        .HasConstraintName("FK__News__ContentID__3A81B327");

                    b.Navigation("Content");
                });

            modelBuilder.Entity("ProjectHotstar.Models.PlanFeature", b =>
                {
                    b.HasOne("ProjectHotstar.Models.Plan", "Plan")
                        .WithMany("PlanFeatures")
                        .HasForeignKey("PlanId")
                        .HasConstraintName("FK__PlanFeatu__PlanI__2C3393D0");

                    b.Navigation("Plan");
                });

            modelBuilder.Entity("ProjectHotstar.Models.Sport", b =>
                {
                    b.HasOne("ProjectHotstar.Models.Content", "Content")
                        .WithMany("Sports")
                        .HasForeignKey("ContentId")
                        .HasConstraintName("FK__Sports__ContentI__37A5467C");

                    b.Navigation("Content");
                });

            modelBuilder.Entity("ProjectHotstar.Models.Subscription", b =>
                {
                    b.HasOne("ProjectHotstar.Models.UserAccount", "Customer")
                        .WithMany("Subscriptions")
                        .HasForeignKey("CustomerId")
                        .HasConstraintName("FK__SUBSCRIPT__Custo__2F10007B");

                    b.HasOne("ProjectHotstar.Models.Plan", "Plan")
                        .WithMany("Subscriptions")
                        .HasForeignKey("PlanId")
                        .HasConstraintName("FK__SUBSCRIPT__PlanI__300424B4");

                    b.Navigation("Customer");

                    b.Navigation("Plan");
                });

            modelBuilder.Entity("ProjectHotstar.Models.Tv", b =>
                {
                    b.HasOne("ProjectHotstar.Models.Content", "Content")
                        .WithMany("Tvs")
                        .HasForeignKey("ContentId")
                        .HasConstraintName("FK__TV__ContentID__3D5E1FD2");

                    b.Navigation("Content");
                });

            modelBuilder.Entity("ProjectHotstar.Models.UserAccount", b =>
                {
                    b.HasOne("Project_Hotstar.Models.Authentication.ApplicationUser", "ApplicationUser")
                        .WithOne("UserAccount")
                        .HasForeignKey("ProjectHotstar.Models.UserAccount", "ApplicationUserId");

                    b.Navigation("ApplicationUser");
                });

            modelBuilder.Entity("ProjectHotstar.Models.Content", b =>
                {
                    b.Navigation("Movies");

                    b.Navigation("News");

                    b.Navigation("Sports");

                    b.Navigation("Tvs");
                });

            modelBuilder.Entity("ProjectHotstar.Models.Plan", b =>
                {
                    b.Navigation("PlanFeatures");

                    b.Navigation("Subscriptions");
                });

            modelBuilder.Entity("ProjectHotstar.Models.UserAccount", b =>
                {
                    b.Navigation("Subscriptions");
                });

            modelBuilder.Entity("Project_Hotstar.Models.Authentication.ApplicationUser", b =>
                {
                    b.Navigation("UserAccount");
                });
#pragma warning restore 612, 618
        }
    }
}
