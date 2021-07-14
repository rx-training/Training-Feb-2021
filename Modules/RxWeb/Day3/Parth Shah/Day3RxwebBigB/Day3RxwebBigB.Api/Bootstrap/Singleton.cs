using Day3RxwebBigB.BoundedContext.Singleton;
using Day3RxwebBigB.Infrastructure.Singleton;
using Microsoft.Extensions.DependencyInjection;
using RxWeb.Core.Data;

namespace Day3RxwebBigB.Api.Bootstrap
{
    public static class Singleton
    {
        public static void AddSingletonService(this IServiceCollection serviceCollection)
        {
            #region Singleton
            serviceCollection.AddSingleton<ITenantDbConnectionInfo, TenantDbConnectionInfo>();
            serviceCollection.AddSingleton(typeof(UserAccessConfigInfo));
            #endregion Singleton
        }

    }
}




