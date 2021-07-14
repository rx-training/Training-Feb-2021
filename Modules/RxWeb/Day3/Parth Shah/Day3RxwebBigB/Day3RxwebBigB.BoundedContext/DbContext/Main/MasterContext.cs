using Microsoft.AspNetCore.Http;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Options;
using Day3RxwebBigB.BoundedContext.SqlContext;
using Day3RxwebBigB.Models.Main;
using Day3RxwebBigB.Models;
using Day3RxwebBigB.BoundedContext.Singleton;
using RxWeb.Core.Data;
using RxWeb.Core.Data.Models;
using RxWeb.Core.Data.BoundedContext;

namespace Day3RxwebBigB.BoundedContext.Main
{
    public class MasterContext : BaseBoundedContext, IMasterContext
    {
        public MasterContext(MainSqlDbContext sqlDbContext,  IOptions<DatabaseConfig> databaseConfig, IHttpContextAccessor contextAccessor,ITenantDbConnectionInfo tenantDbConnection): base(sqlDbContext, databaseConfig.Value, contextAccessor,tenantDbConnection){ }

            #region DbSets
            		public DbSet<Customer> Customer { get; set; }
		public DbSet<Country> Country { get; set; }
		public DbSet<City> City { get; set; }
		public DbSet<Category> Category { get; set; }
		public DbSet<Brand> Brand { get; set; }
		public DbSet<Product> Product { get; set; }
		public DbSet<Cart> Cart { get; set; }
		public DbSet<Sale> Sales { get; set; }
            #endregion DbSets


    }


    public interface IMasterContext : IDbContext
    {
    }
}

