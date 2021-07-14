using Microsoft.AspNetCore.Http;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Options;
using rxWebBigBdemo.BoundedContext.SqlContext;
using rxWebBigBdemo.Models.Main;
using rxWebBigBdemo.Models;
using rxWebBigBdemo.BoundedContext.Singleton;
using RxWeb.Core.Data;
using RxWeb.Core.Data.Models;
using RxWeb.Core.Data.BoundedContext;

namespace rxWebBigBdemo.BoundedContext.Main
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

