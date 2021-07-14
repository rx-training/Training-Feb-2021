using Day3RxwebBigB.BoundedContext.SqlContext;
using Microsoft.Extensions.DependencyInjection;

namespace Day3RxwebBigB.Api.Bootstrap
{
    public static class AddDbContextExtension
    {
        public static void AddDbContextService(this IServiceCollection serviceCollection)
        {
            #region SqlDbContext
            serviceCollection.AddDbContext<MainSqlDbContext>();
            serviceCollection.AddScoped<IMainDatabaseFacade, MainSqlDbContext>();
            serviceCollection.AddDbContext<LogSqlDbContext>();
            serviceCollection.AddScoped<ILogDatabaseFacade, LogSqlDbContext>();
            #endregion SqlDbContext



        }
    }
}


